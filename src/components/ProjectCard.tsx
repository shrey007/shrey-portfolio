import type { Project } from '@/types'

export default function ProjectCard({ project, onOpen }: { project: Project; onOpen: (p: Project) => void }) {
  return (
    <button onClick={() => onOpen(project)} className="w-full text-left border rounded-lg p-4 hover:shadow-sm transition">
      <div className="text-sm opacity-70">{project.role}</div>
      <div className="font-medium">{project.title}</div>
      <div className="text-xs mt-1 opacity-70">{project.tags?.join(' • ')}</div>
    </button>
  )
}
