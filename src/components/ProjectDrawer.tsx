import type { Project } from '@/types'
import StoryboardDemo from '@/components/StoryboardDemo'
import MermaidBlock from '@/components/MermaidBlock'
import { motion } from 'framer-motion'

export default function ProjectDrawer({ project, onClose }: { project: Project | null; onClose: () => void }) {
  if (!project) return null
  return (
    <div role="dialog" aria-modal className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <motion.div 
        initial={{ x: '100%', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: '100%', opacity: 0 }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="absolute right-0 top-0 h-full w-full max-w-3xl border-l border-neon-cyan/30 overflow-auto p-4 sm:p-6 md:p-8 space-y-4 sm:space-y-6 bg-cyber-dark/95 backdrop-blur-lg"
      >
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start justify-between gap-4 border-b border-neon-cyan/20 pb-4 sm:pb-6">
          <div className="flex-1 min-w-0">
            <div className="text-xs text-neon-cyan/60 font-mono mb-2">{project.role}</div>
            <h2 className="text-lg sm:text-xl md:text-2xl font-cyber font-bold text-neon-cyan leading-tight">{project.title}</h2>
            <div className="flex flex-wrap gap-2 mt-3">
              {project.tags?.map((tag, idx) => (
                <span key={idx} className="px-2 py-1 text-xs bg-cyber-gray/50 text-neon-cyan/80 rounded border border-neon-cyan/20 font-mono">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <button 
            onClick={onClose} 
            className="border border-neon-pink/50 text-neon-pink hover:bg-neon-pink/10 transition-colors rounded-lg px-3 sm:px-4 py-2 text-xs sm:text-sm font-mono whitespace-nowrap"
          >
            CLOSE_CONN
          </button>
        </div>

        {/* Problem Section */}
        <section className="bg-cyber-darker/60 border border-neon-cyan/20 rounded-lg p-4 sm:p-6">
          <h3 className="text-sm sm:text-base text-neon-cyan font-cyber font-bold mb-3 flex items-center">
            <div className="w-2 h-2 bg-neon-pink rounded-full mr-3 animate-pulse"></div>
            PROBLEM_STATEMENT
          </h3>
          <p className="text-sm sm:text-base text-neon-cyan/80 font-mono leading-relaxed">{project.problem}</p>
        </section>

        {/* Approach Section */}
        <section className="bg-cyber-darker/60 border border-neon-cyan/20 rounded-lg p-4 sm:p-6">
          <h3 className="text-sm sm:text-base text-neon-cyan font-cyber font-bold mb-3 flex items-center">
            <div className="w-2 h-2 bg-neon-green rounded-full mr-3 animate-pulse"></div>
            SOLUTION_APPROACH
          </h3>
          <ul className="space-y-2">
            {project.approach.map((approach, idx) => (
              <li key={idx} className="flex items-start space-x-3">
                <span className="text-neon-green text-xs mt-1 flex-shrink-0">►</span>
                <span className="text-xs sm:text-sm text-neon-cyan/80 font-mono">{approach}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Impact Section */}
        <section className="bg-cyber-darker/60 border border-neon-cyan/20 rounded-lg p-4 sm:p-6">
          <h3 className="text-sm sm:text-base text-neon-cyan font-cyber font-bold mb-3 flex items-center">
            <div className="w-2 h-2 bg-neon-orange rounded-full mr-3 animate-pulse"></div>
            DEPLOYMENT_IMPACT
          </h3>
          <ul className="space-y-2">
            {project.impact.map((impact, idx) => (
              <li key={idx} className="flex items-start space-x-3">
                <span className="text-neon-orange text-xs mt-1 flex-shrink-0">◆</span>
                <span className="text-xs sm:text-sm text-neon-cyan/80 font-mono">{impact}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Links Section */}
        {project.links && project.links.length > 0 && (
          <section className="bg-cyber-darker/60 border border-neon-cyan/20 rounded-lg p-4 sm:p-6">
            <h3 className="text-sm sm:text-base text-neon-cyan font-cyber font-bold mb-3 flex items-center">
              <div className="w-2 h-2 bg-neon-purple rounded-full mr-3 animate-pulse"></div>
              ACCESS_POINTS
            </h3>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {project.links.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 sm:px-4 py-2 border border-neon-purple/50 text-neon-purple hover:bg-neon-purple/10 transition-colors rounded-lg font-mono text-xs sm:text-sm"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </section>
        )}

        {/* Demo Section */}
        {project.demo?.type === 'storyboard' && (
          <section className="bg-cyber-darker/60 border border-neon-cyan/20 rounded-lg p-4 sm:p-6">
            <h3 className="text-sm sm:text-base text-neon-cyan font-cyber font-bold mb-3 flex items-center">
              <div className="w-2 h-2 bg-neon-green rounded-full mr-3 animate-pulse"></div>
              INTERACTIVE_DEMO
            </h3>
            <StoryboardDemo scenes={project.demo.scenes} />
          </section>
        )}

        {/* Architecture Section */}
        {project.diagram && (
          <section className="bg-cyber-darker/60 border border-neon-cyan/20 rounded-lg p-4 sm:p-6">
            <h3 className="text-sm sm:text-base text-neon-cyan font-cyber font-bold mb-3 flex items-center">
              <div className="w-2 h-2 bg-neon-cyan rounded-full mr-3 animate-pulse"></div>
              SYSTEM_ARCHITECTURE
            </h3>
            <div className="bg-cyber-dark/50 rounded-lg p-3 sm:p-4 overflow-x-auto">
              <MermaidBlock file={project.diagram} />
            </div>
          </section>
        )}
      </motion.div>
    </div>
  )
}
