import { useEffect, useState } from 'react'
import './App.css'
import TerminalHero from '@/components/TerminalHero'
import HolographicCard from '@/components/HolographicCard'
import NeuralNetwork from '@/components/NeuralNetwork'
import ProjectDrawer from '@/components/ProjectDrawer'
import type { Project } from '@/types'
import { motion } from 'framer-motion'

function App() {
  const [projects, setProjects] = useState<Project[]>([])
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [currentSection, setCurrentSection] = useState(0)

  useEffect(() => {
    import('../content/projects.json').then((m) => setProjects(m.default as Project[]))
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[data-section]')
      let current = 0
      
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect()
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          current = index
        }
      })
      
      setCurrentSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-cyber-dark text-neon-cyan relative overflow-x-hidden">
      {/* Matrix falling code background */}
      <div className="fixed inset-0 pointer-events-none opacity-5">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-terminal-green text-xs font-mono animate-matrix-fall"
            style={{
              left: `${i * 5}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${20 + i * 2}s`,
            }}
          >
            {Array.from({ length: 50 }, () => String.fromCharCode(33 + Math.random() * 94)).join('')}
          </div>
        ))}
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50">
        {/* Strong background with high contrast */}
        <div className="absolute inset-0 bg-black/95 backdrop-blur-xl"></div>
        
        {/* Neon border effects */}
        <div className="absolute inset-0 border-b-2 border-neon-cyan/60 shadow-[0_0_20px_rgba(0,255,255,0.3)]"></div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-neon-pink via-neon-cyan to-neon-green opacity-60 animate-pulse"></div>
        
        <div className="relative">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              {/* Left: Logo with strong visibility */}
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-10 h-10 border-2 border-neon-cyan rounded-full flex items-center justify-center bg-cyber-dark shadow-neon-cyan animate-glow-pulse">
                    <div className="w-4 h-4 bg-neon-cyan rounded-full animate-pulse"></div>
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 border-2 border-neon-pink bg-neon-pink/20 rounded-full animate-ping"></div>
                </div>
                <div>
                  <div className="text-neon-cyan font-cyber font-bold text-xl tracking-wider drop-shadow-[0_0_8px_rgba(0,255,255,0.8)]">
                    SHREY.EXE
                  </div>
                  <div className="text-neon-green text-xs font-mono drop-shadow-[0_0_4px_rgba(0,255,65,0.6)]">
                    AI_SYSTEMS_ARCHITECT
                  </div>
                </div>
              </div>

              {/* Center: High contrast navigation */}
              <div className="flex items-center space-x-1 sm:space-x-2">
                <button
                  className={`px-2 sm:px-3 md:px-5 py-2 sm:py-3 rounded-lg sm:rounded-xl font-mono text-xs sm:text-sm font-bold transition-all duration-300 border-2 backdrop-blur-sm ${
                    currentSection === 0
                      ? 'text-neon-cyan bg-cyber-dark/80 border-neon-cyan scale-105 shadow-[0_0_15px_rgba(0,255,255,0.4)]'
                      : 'text-neon-cyan/70 hover:text-neon-cyan bg-black/40 hover:bg-cyber-dark/60 border-neon-cyan/30 hover:border-neon-cyan hover:shadow-[0_0_10px_rgba(0,255,255,0.3)]'
                  }`}
                  onClick={() => document.querySelector(`section[data-section="0"]`)?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <span className="mr-1 sm:mr-2 text-sm sm:text-lg">◉</span>
                  <span className="tracking-wider hidden sm:inline">SYSTEMS</span>
                  <span className="tracking-wider sm:hidden">SYS</span>
                </button>
                
                <button
                  className={`px-2 sm:px-3 md:px-5 py-2 sm:py-3 rounded-lg sm:rounded-xl font-mono text-xs sm:text-sm font-bold transition-all duration-300 border-2 backdrop-blur-sm ${
                    currentSection === 1
                      ? 'text-neon-pink bg-cyber-dark/80 border-neon-pink scale-105 shadow-[0_0_15px_rgba(255,0,128,0.4)]'
                      : 'text-neon-pink/70 hover:text-neon-pink bg-black/40 hover:bg-cyber-dark/60 border-neon-pink/30 hover:border-neon-pink hover:shadow-[0_0_10px_rgba(255,0,128,0.3)]'
                  }`}
                  onClick={() => document.querySelector(`section[data-section="1"]`)?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <span className="mr-1 sm:mr-2 text-sm sm:text-lg">◈</span>
                  <span className="tracking-wider hidden sm:inline">PROJECTS</span>
                  <span className="tracking-wider sm:hidden">PROJ</span>
                </button>
                
                <button
                  className={`px-2 sm:px-3 md:px-5 py-2 sm:py-3 rounded-lg sm:rounded-xl font-mono text-xs sm:text-sm font-bold transition-all duration-300 border-2 backdrop-blur-sm ${
                    currentSection === 2
                      ? 'text-neon-green bg-cyber-dark/80 border-neon-green scale-105 shadow-[0_0_15px_rgba(0,255,65,0.4)]'
                      : 'text-neon-green/70 hover:text-neon-green bg-black/40 hover:bg-cyber-dark/60 border-neon-green/30 hover:border-neon-green hover:shadow-[0_0_10px_rgba(0,255,65,0.3)]'
                  }`}
                  onClick={() => document.querySelector(`section[data-section="2"]`)?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <span className="mr-1 sm:mr-2 text-sm sm:text-lg">◊</span>
                  <span className="tracking-wider hidden sm:inline">NEURAL_NET</span>
                  <span className="tracking-wider sm:hidden">NET</span>
                </button>
                
                <button
                  className={`px-2 sm:px-3 md:px-5 py-2 sm:py-3 rounded-lg sm:rounded-xl font-mono text-xs sm:text-sm font-bold transition-all duration-300 border-2 backdrop-blur-sm ${
                    currentSection === 3
                      ? 'text-neon-purple bg-cyber-dark/80 border-neon-purple scale-105 shadow-[0_0_15px_rgba(139,0,255,0.4)]'
                      : 'text-neon-purple/70 hover:text-neon-purple bg-black/40 hover:bg-cyber-dark/60 border-neon-purple/30 hover:border-neon-purple hover:shadow-[0_0_10px_rgba(139,0,255,0.3)]'
                  }`}
                  onClick={() => document.querySelector(`section[data-section="3"]`)?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <span className="mr-1 sm:mr-2 text-sm sm:text-lg">◎</span>
                  <span className="tracking-wider hidden sm:inline">CONTACT</span>
                  <span className="tracking-wider sm:hidden">CONT</span>
                </button>
              </div>

              {/* Right: Enhanced status indicators */}
              <div className="flex items-center space-x-4">
                <div className="hidden sm:flex items-center space-x-3 text-sm font-mono">
                  <div className="flex items-center space-x-2 px-3 py-2 bg-neon-green/10 border border-neon-green/30 rounded-lg">
                    <div className="w-3 h-3 bg-neon-green rounded-full animate-pulse shadow-[0_0_8px_currentColor]"></div>
                    <span className="text-neon-green font-bold drop-shadow-[0_0_4px_currentColor]">ONLINE</span>
                  </div>
                  <div className="w-px h-6 bg-neon-cyan/30"></div>
                  <div className="flex items-center space-x-2 px-3 py-2 bg-neon-cyan/10 border border-neon-cyan/30 rounded-lg hover:shadow-[0_0_10px_rgba(0,255,255,0.3)] transition-all">
                    <kbd className="px-2 py-1 bg-black border-2 border-neon-cyan/50 rounded font-bold text-neon-cyan shadow-[0_0_5px_currentColor]">⌘K</kbd>
                    <span className="text-neon-cyan font-bold drop-shadow-[0_0_4px_currentColor]">INTERFACE</span>
                  </div>
                </div>
                
                {/* Enhanced mobile menu */}
                <button className="md:hidden p-3 border-2 border-neon-cyan/50 rounded-xl bg-neon-cyan/10 hover:shadow-[0_0_15px_rgba(0,255,255,0.4)] transition-all">
                  <div className="w-5 h-5 relative">
                    <div className="absolute inset-0 bg-neon-cyan/20 rounded animate-pulse"></div>
                    <div className="relative w-full h-full flex flex-col justify-center space-y-1">
                      <div className="h-0.5 bg-neon-cyan shadow-[0_0_3px_currentColor]"></div>
                      <div className="h-0.5 bg-neon-cyan shadow-[0_0_3px_currentColor]"></div>
                      <div className="h-0.5 bg-neon-cyan shadow-[0_0_3px_currentColor]"></div>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
          
          {/* Enhanced animated border effects */}
          <div className="absolute bottom-0 left-0 right-0 h-1">
            <div className="h-full bg-gradient-to-r from-transparent via-neon-cyan to-transparent animate-glow-pulse"></div>
            <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-neon-pink to-transparent animate-pulse"></div>
            <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-neon-green to-transparent animate-pulse"></div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section data-section="0" className="relative">
        <TerminalHero />
      </section>

      {/* Projects Section */}
      <section data-section="1" className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-cyber font-bold text-neon-cyan mb-4">
              PROJECT ARCHIVES
            </h2>
            <p className="text-neon-cyan/70 font-mono">
              Deployed systems transforming enterprise operations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <HolographicCard
                key={project.slug}
                project={project}
                index={index}
                onSelect={setSelectedProject}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Neural Network Section */}
      <section data-section="2" className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-cyber font-bold text-neon-cyan mb-4">
              AGENTIC ARCHITECTURE
            </h2>
            <p className="text-neon-cyan/70 font-mono">
              Multi-agent orchestration with pgvector memory
            </p>
          </motion.div>

          <NeuralNetwork />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              { label: 'PLANNER', desc: 'Strategic decomposition of complex tasks' },
              { label: 'MEMORY', desc: 'Two-tier recall with pgvector similarity' },
              { label: 'EVALUATOR', desc: 'Continuous feedback and optimization' },
            ].map((component) => (
              <div
                key={component.label}
                className="bg-cyber-darker/60 border border-neon-cyan/20 rounded-lg p-6 backdrop-blur-sm"
              >
                <h3 className="text-neon-cyan font-cyber font-bold mb-2">{component.label}</h3>
                <p className="text-neon-cyan/70 text-sm font-mono">{component.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section data-section="3" className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-cyber font-bold text-neon-cyan mb-8">
              ESTABLISH CONNECTION
            </h2>
            
            <div className="bg-cyber-darker/60 border border-neon-cyan/20 rounded-xl p-8 backdrop-blur-sm max-w-2xl mx-auto">
              <div className="space-y-6">
                <div className="flex items-center justify-center space-x-4 flex-wrap gap-4">
                  <a
                    href="mailto:shreychopra@example.com"
                    className="px-6 py-3 border border-neon-cyan/50 text-neon-cyan hover:bg-neon-cyan/10 transition-colors rounded-lg font-mono hover:shadow-[0_0_10px_rgba(0,255,255,0.3)]"
                  >
                    📧 TRANSMIT MESSAGE
                  </a>
                  <a
                    href="https://linkedin.com/in/shreychopra"
                    target="_blank"
                    className="px-6 py-3 border border-neon-green/50 text-neon-green hover:bg-neon-green/10 transition-colors rounded-lg font-mono hover:shadow-[0_0_10px_rgba(0,255,65,0.3)]"
                  >
                    🔗 LINKEDIN PROFILE
                  </a>
                  <a
                    href="/resume.pdf"
                    target="_blank"
                    className="px-6 py-3 border border-neon-pink/50 text-neon-pink hover:bg-neon-pink/10 transition-colors rounded-lg font-mono hover:shadow-[0_0_10px_rgba(255,0,128,0.3)]"
                  >
                    📄 DOWNLOAD SPECS
                  </a>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                  <div className="text-center">
                    <div className="text-neon-cyan font-mono text-xs opacity-60">DIRECT LINK</div>
                    <div className="text-neon-cyan font-mono text-sm">shreychopra@example.com</div>
                  </div>
                  <div className="text-center">
                    <div className="text-neon-green font-mono text-xs opacity-60">PROFESSIONAL NET</div>
                    <div className="text-neon-green font-mono text-sm">@shreychopra</div>
                  </div>
                  <div className="text-center">
                    <div className="text-neon-pink font-mono text-xs opacity-60">CODE REPOS</div>
                    <div className="text-neon-pink font-mono text-sm">github.com/shreychopra</div>
                  </div>
                </div>
                
                <div className="text-neon-cyan/60 text-sm font-mono mt-6">
                  READY FOR DEPLOYMENT • AVAILABLE FOR NEW MISSIONS
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Drawer */}
      <ProjectDrawer 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </div>
  )
}

export default App
