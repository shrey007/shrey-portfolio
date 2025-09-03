import { KBarProvider, KBarPortal, KBarPositioner, KBarSearch, KBarResults, useMatches } from 'kbar'
import { useMemo } from 'react'

function RenderResults() {
  const { results } = useMatches()

  return (
    <KBarResults
      items={results}
      onRender={({ item, active }) =>
        typeof item === 'string' ? (
          <div className="px-4 py-2 text-xs text-neon-cyan/60 font-mono border-b border-neon-cyan/10 uppercase tracking-wider">
            {item}
          </div>
        ) : (
          <div
            className={`px-4 py-3 font-mono text-sm transition-colors cursor-pointer ${
              active
                ? 'bg-neon-cyan/10 text-neon-cyan border-l-2 border-neon-cyan'
                : 'text-neon-cyan/80 hover:bg-neon-cyan/5'
            }`}
          >
            <div className="flex items-center justify-between">
              <span>{item.name || 'Unknown Command'}</span>
              {item.shortcut && Array.isArray(item.shortcut) && item.shortcut.length > 0 && (
                <div className="flex space-x-1">
                  {item.shortcut.map((key, index) => (
                    <kbd
                      key={index}
                      className="px-2 py-1 bg-cyber-darker border border-neon-cyan/20 rounded text-xs"
                    >
                      {key}
                    </kbd>
                  ))}
                </div>
              )}
            </div>
          </div>
        )
      }
    />
  )
}

export default function CommandPalette({ children }: { children: React.ReactNode }) {
  const scrollToSection = (sectionIndex: number) => {
    // Small delay to allow command palette to close smoothly first
    setTimeout(() => {
      const section = document.querySelector(`section[data-section="${sectionIndex}"]`)
      if (section) {
        section.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest'
        })
      }
    }, 200) // Matches command palette exit animation
  }

  const actions = useMemo(
    () => [
      // Project access (unique to command palette)
      { id: 'velocity', name: '⚡ Access Velocity', keywords: 'velocity project video generation', perform: () => {
        scrollToSection(1)
        setTimeout(() => {
          const velocityCard = document.querySelector('[data-project="velocity"]') as HTMLElement
          velocityCard?.click()
        }, 800) // Allow time for smooth scroll to complete
      }},
      { id: 'agentic', name: '🧠 Access Agentic Platform', keywords: 'agentic ai platform orchestration', perform: () => {
        scrollToSection(1)
        setTimeout(() => {
          const agenticCard = document.querySelector('[data-project="agentic-platform"]') as HTMLElement
          agenticCard?.click()
        }, 800)
      }},
      { id: 'creator', name: '🎨 Access Creator', keywords: 'creator 3d asset generation', perform: () => {
        scrollToSection(1)
        setTimeout(() => {
          const creatorCard = document.querySelector('[data-project="creator"]') as HTMLElement
          creatorCard?.click()
        }, 800)
      }},
      { id: 'incarnate', name: '🔮 Access Incarnate', keywords: 'incarnate ar vr capture', perform: () => {
        scrollToSection(1)
        setTimeout(() => {
          const incarnateCard = document.querySelector('[data-project="incarnate"]') as HTMLElement
          incarnateCard?.click()
        }, 800)
      }},

      // External links (not available in UI)
      { id: 'resume', name: '📄 Download Neural Specs', keywords: 'resume download cv specs', perform: () => window.open('/resume.pdf', '_blank') },
      { id: 'github', name: '⚡ Open GitHub Repository', keywords: 'github code repo source', perform: () => window.open('https://github.com/shreychopra', '_blank') },
      { id: 'linkedin', name: '🔗 LinkedIn Profile', keywords: 'linkedin profile professional network', perform: () => window.open('https://linkedin.com/in/shreychopra', '_blank') },

      // Easter eggs & special commands (hidden features)
      { id: 'evolve', name: '🚀 :evolve', keywords: 'evolve easter egg neural evolution', perform: () => {
        scrollToSection(2)
        setTimeout(() => {
          document.body.style.animation = 'glitch 0.5s ease-in-out'
          setTimeout(() => {
            document.body.style.animation = ''
          }, 500)
        }, 1000) // Allow time for smooth scroll to neural network
      }},
      { id: 'matrix', name: '💊 Enter the Matrix', keywords: 'matrix rain code digital', perform: () => {
        const matrixElements = document.querySelectorAll('.animate-matrix-fall')
        matrixElements.forEach(el => {
          const element = el as HTMLElement
          element.style.animationDuration = '5s'
          element.style.opacity = '0.3'
        })
        setTimeout(() => {
          matrixElements.forEach(el => {
            const element = el as HTMLElement
            element.style.animationDuration = '20s'
            element.style.opacity = '0.05'
          })
        }, 3000)
      }},
      { id: 'konami', name: '🎮 Konami Code', keywords: 'konami game easter egg secret', perform: () => {
        document.body.style.filter = 'hue-rotate(180deg)'
        setTimeout(() => {
          document.body.style.filter = ''
        }, 2000)
      }},
    ],
    [scrollToSection],
  )

  return (
    <KBarProvider actions={actions} options={{ animations: { enterMs: 200, exitMs: 100 } }}>
      <KBarPortal>
        <KBarPositioner className="z-[100] backdrop-blur-md bg-black/60">
          <div className="w-full max-w-2xl mx-4 bg-cyber-dark/95 border-2 border-neon-cyan/30 rounded-2xl shadow-neon-cyan/20 shadow-2xl backdrop-blur-xl overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-cyber-blue to-cyber-gray border-b border-neon-cyan/20 px-4 py-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-neon-pink rounded-full animate-pulse"></div>
                  <div className="w-3 h-3 bg-neon-orange rounded-full animate-pulse"></div>
                  <div className="w-3 h-3 bg-neon-green rounded-full animate-pulse"></div>
                </div>
                <span className="text-neon-cyan text-xs font-mono">NEURAL_COMMAND_INTERFACE</span>
                <div className="text-neon-cyan/60 text-xs font-mono">v2.1</div>
              </div>
            </div>
            
            {/* Search */}
            <div className="p-4 border-b border-neon-cyan/10">
              <KBarSearch 
                className="w-full bg-transparent text-neon-cyan placeholder-neon-cyan/50 outline-none font-mono text-lg border-none" 
                placeholder="Enter command or search neural archives..." 
              />
            </div>
            
            {/* Results */}
            <div className="max-h-96 overflow-auto">
              <RenderResults />
            </div>
            
            {/* Footer */}
            <div className="bg-cyber-darker/50 border-t border-neon-cyan/10 px-4 py-2">
              <div className="flex items-center justify-between text-xs font-mono text-neon-cyan/60">
                <span>Use ↑↓ to navigate, ↵ to execute</span>
                <span>ESC to disconnect</span>
              </div>
            </div>
          </div>
        </KBarPositioner>
      </KBarPortal>
      {children}
    </KBarProvider>
  )
}
