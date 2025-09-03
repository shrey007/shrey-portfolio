import { useEffect, useState } from 'react'
import type { Project } from '@/types'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

export default function CaseStudiesRail() {
  const [projects, setProjects] = useState<Project[]>([])
  const navigate = useNavigate()
  useEffect(() => {
    import('../../content/projects.json').then((m) => setProjects(m.default as Project[]))
  }, [])
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {projects.map((p, idx) => (
        <motion.button key={p.slug} onClick={() => navigate(`/work?project=${p.slug}`)}
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.05 }}
          className="text-left">
          <Card className="p-5 hover:translate-y-[-2px] transition will-change-transform">
            <div className="text-xs opacity-70">{p.role}</div>
            <div className="text-lg font-semibold text-silver">{p.title}</div>
            <div className="mt-2 flex flex-wrap gap-2">
              {p.impact.slice(0, 2).map((chip, i) => (
                <Badge key={i}>{chip}</Badge>
              ))}
            </div>
          </Card>
        </motion.button>
      ))}
    </div>
  )
}


