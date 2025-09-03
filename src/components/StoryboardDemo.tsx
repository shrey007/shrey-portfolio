import { useMemo, useState } from 'react'

const products = ['App', 'SaaS', 'Marketplace']
const audiences = ['CXO', 'PM', 'Engineer']
const tones = ['Confident', 'Playful', 'Technical']

export default function StoryboardDemo({ scenes = 6 }: { scenes?: number }) {
  const [product, setProduct] = useState(products[0])
  const [audience, setAudience] = useState(audiences[0])
  const [tone, setTone] = useState(tones[0])
  const outline = useMemo(() => {
    return Array.from({ length: scenes }).map((_, i) => `Scene ${i + 1}: ${product} for ${audience} — ${tone}`)
  }, [product, audience, tone, scenes])
  return (
    <div className="space-y-2">
      <div className="flex gap-2 text-xs">
        <select value={product} onChange={(e) => setProduct(e.target.value)} className="border rounded px-2 py-1">
          {products.map((p) => <option key={p}>{p}</option>)}
        </select>
        <select value={audience} onChange={(e) => setAudience(e.target.value)} className="border rounded px-2 py-1">
          {audiences.map((a) => <option key={a}>{a}</option>)}
        </select>
        <select value={tone} onChange={(e) => setTone(e.target.value)} className="border rounded px-2 py-1">
          {tones.map((t) => <option key={t}>{t}</option>)}
        </select>
      </div>
      <ol className="list-decimal pl-5 text-sm space-y-1">
        {outline.map((line, idx) => <li key={idx}>{line}</li>)}
      </ol>
    </div>
  )
}


