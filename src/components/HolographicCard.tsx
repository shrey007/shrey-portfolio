import { motion } from 'framer-motion'
import { useState } from 'react'
import type { Project } from '@/types'

interface HolographicCardProps {
  project: Project
  index: number
  onSelect: (project: Project) => void
}

export default function HolographicCard({ project, index, onSelect }: HolographicCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  const colors = [
    { border: 'border-neon-cyan', text: 'text-neon-cyan', shadow: 'shadow-neon-cyan' },
    { border: 'border-neon-pink', text: 'text-neon-pink', shadow: 'shadow-neon-pink' },
    { border: 'border-neon-green', text: 'text-neon-green', shadow: 'shadow-neon-green' },
    { border: 'border-neon-purple', text: 'text-neon-purple', shadow: 'shadow-neon-purple' },
  ]

  const color = colors[index % colors.length]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, rotateX: -15 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ delay: index * 0.2, duration: 0.6 }}
      whileHover={{ 
        y: -10, 
        rotateX: 5, 
        rotateY: 5,
        scale: 1.02,
        transition: { duration: 0.3 }
      }}
      className="perspective-1000"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className={`
          relative p-6 bg-cyber-darker/60 backdrop-blur-lg rounded-xl 
          ${color.border} border-2 cursor-pointer
          ${isHovered ? color.shadow : ''} 
          transition-all duration-300 group
          transform-gpu preserve-3d
        `}
        onClick={() => onSelect(project)}
        data-project={project.slug}
      >
        {/* Holographic overlay effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl transform skew-x-12 translate-x-full group-hover:translate-x-[-100%] transition-transform duration-1000"></div>
        
        {/* Glitch effect on hover */}
        <div className={`absolute inset-0 ${isHovered ? 'animate-glitch' : ''}`}>
          <div className={`w-full h-full bg-${color.text.split('-')[1]}/10 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-200`}></div>
        </div>

        {/* Card content */}
        <div className="relative z-10">
          {/* Project status indicator */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <div className={`w-2 h-2 ${color.text.replace('text-', 'bg-')} rounded-full animate-pulse`}></div>
              <span className="text-xs text-neon-cyan/60 font-mono">ACTIVE PROJECT</span>
            </div>
            <span className="text-xs text-neon-cyan/40 font-mono">#{String(index + 1).padStart(2, '0')}</span>
          </div>

          {/* Project title */}
          <h3 className={`text-xl font-cyber font-bold ${color.text} mb-2 group-hover:animate-glow-pulse`}>
            {project.title.split(' — ')[0]}
          </h3>
          
          {/* Project subtitle */}
          <p className="text-neon-cyan/80 text-sm mb-4 font-mono">
            {project.title.split(' — ')[1] || project.problem.slice(0, 60) + '...'}
          </p>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags?.slice(0, 3).map((tag, tagIndex) => (
              <span 
                key={tagIndex}
                className="px-2 py-1 text-xs bg-cyber-gray/50 text-neon-cyan/80 rounded-md border border-neon-cyan/20 font-mono"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Impact metrics */}
          <div className="space-y-2">
            {project.impact.slice(0, 2).map((impact, impactIndex) => (
              <div key={impactIndex} className="flex items-center space-x-2">
                <div className="w-1 h-1 bg-neon-green rounded-full animate-pulse"></div>
                <span className="text-xs text-neon-green/80 font-mono">{impact}</span>
              </div>
            ))}
          </div>

          {/* Hover prompt */}
          <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="flex items-center space-x-2 text-xs text-neon-cyan/60">
              <span>CLICK TO ACCESS</span>
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>

        {/* Corner decorations */}
        <div className="absolute top-2 left-2 w-4 h-4">
          <div className={`w-full h-0.5 ${color.text.replace('text-', 'bg-')}`}></div>
          <div className={`w-0.5 h-full ${color.text.replace('text-', 'bg-')}`}></div>
        </div>
        <div className="absolute top-2 right-2 w-4 h-4">
          <div className={`w-full h-0.5 ${color.text.replace('text-', 'bg-')} ml-auto`}></div>
          <div className={`w-0.5 h-full ${color.text.replace('text-', 'bg-')} ml-auto`}></div>
        </div>
        <div className="absolute bottom-2 left-2 w-4 h-4">
          <div className={`w-0.5 h-full ${color.text.replace('text-', 'bg-')}`}></div>
          <div className={`w-full h-0.5 ${color.text.replace('text-', 'bg-')} mt-auto`}></div>
        </div>
        <div className="absolute bottom-2 right-2 w-4 h-4">
          <div className={`w-0.5 h-full ${color.text.replace('text-', 'bg-')} ml-auto`}></div>
          <div className={`w-full h-0.5 ${color.text.replace('text-', 'bg-')} ml-auto mt-auto`}></div>
        </div>
      </div>
    </motion.div>
  )
}
