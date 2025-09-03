import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import ProjectCard from '@/components/ProjectCard'
import ProjectDrawer from '@/components/ProjectDrawer'
import type { Project } from '@/types'

export default function WorkPage() {
  const [projects, setProjects] = useState<Project[]>([])
  const [active, setActive] = useState<Project | null>(null)
  const [params, setParams] = useSearchParams()

  useEffect(() => {
    async function load() {
      const data = await import('../../content/projects.json')
      setProjects(data.default as Project[])
    }
    load()
  }, [])

  useEffect(() => {
    if (projects.length === 0) return
    const slug = params.get('project')
    if (!slug) return
    const match = projects.find((p) => p.slug === slug)
    if (match) setActive(match)
  }, [projects, params])

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-semibold">Work</h1>
      <div className="grid gap-3 sm:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard key={p.slug} project={p} onOpen={(proj) => {
            setActive(proj)
            params.set('project', proj.slug)
            setParams(params, { replace: false })
          }} />
        ))}
      </div>
      <ProjectDrawer project={active} onClose={() => {
        setActive(null)
        params.delete('project')
        setParams(params, { replace: true })
      }} />
    </div>
  )
}
