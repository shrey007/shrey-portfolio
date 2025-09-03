import { useEffect, useRef, useState } from 'react'

const diagrams = import.meta.glob('../../content/diagrams/*.mmd', { query: '?raw', import: 'default' })

export default function MermaidBlock({ file }: { file: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [error, setError] = useState<string | null>(null)
  useEffect(() => {
    if (!ref.current) return
    const el = ref.current
    let cancelled = false
    const observer = new IntersectionObserver(async (entries) => {
      const entry = entries[0]
      if (!entry?.isIntersecting || cancelled) return
      try {
        const key = `../../content/diagrams/${file}`
        const loader = (diagrams as Record<string, () => Promise<string>>)[key]
        if (!loader) throw new Error('Diagram not found')
        const content = await loader()
        const [{ default: mermaid }] = await Promise.all([
          import('mermaid'),
        ])
        if (cancelled) return
        mermaid.initialize({ startOnLoad: false, theme: 'neutral' })
        const container = document.createElement('div')
        const safeId = `m_${file.replace(/[^a-z0-9_-]/gi, '_')}`
        const { svg } = await mermaid.render(safeId, content as unknown as string, container)
        if (!cancelled) el.innerHTML = svg
      } catch (e: any) {
        setError('Diagram failed to render')
        console.error(e)
      } finally {
        observer.disconnect()
      }
    })
    observer.observe(el)
    return () => { cancelled = true; observer.disconnect() }
  }, [file])
  if (error) return <div className="text-xs opacity-60 font-mono">{error}</div>
  return <div ref={ref} className="overflow-auto font-mono text-sm" />
}
