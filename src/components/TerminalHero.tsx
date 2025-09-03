import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const commands = [
  '> initializing neural network...',
  '> loading AI systems architect profile...',
  '> shrey_chopra.exe started',
  '> specialization: [agentic_ai, generative_ai, 3d_ar]',
  '> experience: [velocity, creator, incarnate, agentic_platform]',
  '> status: READY FOR DEPLOYMENT',
]

export default function TerminalHero() {
  const [currentLine, setCurrentLine] = useState(0)
  const [displayedText, setDisplayedText] = useState('')
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    if (currentLine >= commands.length) return

    const command = commands[currentLine]
    let charIndex = 0

    const typeWriter = setInterval(() => {
      if (charIndex < command.length) {
        setDisplayedText(command.slice(0, charIndex + 1))
        charIndex++
      } else {
        clearInterval(typeWriter)
        setTimeout(() => {
          setCurrentLine(prev => prev + 1)
          setDisplayedText('')
        }, 800)
      }
    }, 50)

    return () => clearInterval(typeWriter)
  }, [currentLine])

  useEffect(() => {
    const cursorBlink = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 500)
    return () => clearInterval(cursorBlink)
  }, [])

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 bg-cyber-grid bg-grid opacity-20"></div>
      
      {/* Scanning line effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-neon-cyan to-transparent animate-scan-line opacity-60"></div>
      </div>

      {/* Neural network background */}
      <div className="absolute inset-0 bg-neural-net opacity-30"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-cyber-darker/80 border border-neon-cyan/30 rounded-lg p-8 font-mono backdrop-blur-sm shadow-neon-cyan"
        >
          {/* Terminal header */}
          <div className="flex items-center justify-between mb-6 pb-3 border-b border-neon-cyan/20">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-neon-pink rounded-full animate-glow-pulse"></div>
              <div className="w-3 h-3 bg-neon-orange rounded-full animate-glow-pulse" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-3 h-3 bg-neon-green rounded-full animate-glow-pulse" style={{ animationDelay: '0.4s' }}></div>
            </div>
            <span className="text-neon-cyan/70 text-sm">neural_interface_v2.0</span>
          </div>

          {/* Terminal content */}
          <div className="space-y-3 text-terminal-green">
            {commands.slice(0, currentLine).map((command, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.3 }}
                className="flex items-center"
              >
                <span className="text-neon-pink mr-2">❯</span>
                <span>{command}</span>
              </motion.div>
            ))}
            
            {currentLine < commands.length && (
              <div className="flex items-center">
                <span className="text-neon-pink mr-2">❯</span>
                <span>{displayedText}</span>
                <span className={`ml-1 w-2 h-5 bg-terminal-green ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}></span>
              </div>
            )}

            {currentLine >= commands.length && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-8 pt-6 border-t border-neon-cyan/20"
              >
                <h1 className="text-4xl md:text-6xl font-cyber font-bold text-neon-cyan mb-4 animate-glow-pulse">
                  SHREY CHOPRA
                </h1>
                <p className="text-xl md:text-2xl text-neon-green mb-6">
                  AI SYSTEMS ARCHITECT
                </p>
                <div className="flex flex-wrap gap-4 text-sm">
                  <span className="px-3 py-1 border border-neon-pink/50 text-neon-pink rounded-full animate-glow-pulse">
                    AGENTIC AI
                  </span>
                  <span className="px-3 py-1 border border-neon-purple/50 text-neon-purple rounded-full animate-glow-pulse" style={{ animationDelay: '0.2s' }}>
                    GENERATIVE AI
                  </span>
                  <span className="px-3 py-1 border border-neon-orange/50 text-neon-orange rounded-full animate-glow-pulse" style={{ animationDelay: '0.4s' }}>
                    3D/AR SYSTEMS
                  </span>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Floating action hint */}
        {currentLine >= commands.length && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
            className="text-center mt-8"
          >
            <div className="text-neon-cyan/60 text-sm mb-4">
              Press <kbd className="px-2 py-1 bg-cyber-darker border border-neon-cyan/30 rounded text-xs">⌘K</kbd> to access neural interface
            </div>
            <div className="animate-bounce">
              <svg className="w-6 h-6 mx-auto text-neon-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
}
