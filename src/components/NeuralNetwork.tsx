import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

interface Node {
  id: string
  x: number
  y: number
  label: string
  type: 'input' | 'process' | 'output'
  active: boolean
}

interface Connection {
  from: string
  to: string
  active: boolean
}

export default function NeuralNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [nodes] = useState<Node[]>([
    { id: 'planner', x: 100, y: 200, label: 'PLANNER', type: 'input', active: false },
    { id: 'router', x: 300, y: 150, label: 'ROUTER', type: 'process', active: false },
    { id: 'memory', x: 300, y: 250, label: 'MEMORY', type: 'process', active: false },
    { id: 'executor', x: 500, y: 200, label: 'EXECUTOR', type: 'process', active: false },
    { id: 'evaluator', x: 700, y: 200, label: 'EVALUATOR', type: 'output', active: false },
  ])
  
  const [connections] = useState<Connection[]>([
    { from: 'planner', to: 'router', active: false },
    { from: 'planner', to: 'memory', active: false },
    { from: 'router', to: 'executor', active: false },
    { from: 'memory', to: 'executor', active: false },
    { from: 'executor', to: 'evaluator', active: false },
    { from: 'evaluator', to: 'planner', active: false },
  ])

  const [activeNodes, setActiveNodes] = useState<Set<string>>(new Set())
  const [activeConnections, setActiveConnections] = useState<Set<string>>(new Set())

  // Animation cycle
  useEffect(() => {
    const cycle = ['planner', 'router', 'memory', 'executor', 'evaluator']
    let currentIndex = 0

    const interval = setInterval(() => {
      const currentNode = cycle[currentIndex]
      const nextNode = cycle[(currentIndex + 1) % cycle.length]
      
      // Activate current node
      setActiveNodes(prev => new Set([...prev, currentNode]))
      
      // Activate connection to next node
      setTimeout(() => {
        setActiveConnections(prev => new Set([...prev, `${currentNode}-${nextNode}`]))
      }, 300)
      
      // Deactivate after some time
      setTimeout(() => {
        setActiveNodes(prev => {
          const newSet = new Set(prev)
          newSet.delete(currentNode)
          return newSet
        })
        setActiveConnections(prev => {
          const newSet = new Set(prev)
          newSet.delete(`${currentNode}-${nextNode}`)
          return newSet
        })
      }, 1500)

      currentIndex = (currentIndex + 1) % cycle.length
    }, 800)

    return () => clearInterval(interval)
  }, [])

  // Canvas drawing
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      // Draw connections
      connections.forEach(conn => {
        const fromNode = nodes.find(n => n.id === conn.from)
        const toNode = nodes.find(n => n.id === conn.to)
        if (!fromNode || !toNode) return

        const isActive = activeConnections.has(`${conn.from}-${conn.to}`)
        
        ctx.beginPath()
        ctx.moveTo(fromNode.x, fromNode.y)
        ctx.lineTo(toNode.x, toNode.y)
        ctx.strokeStyle = isActive ? '#00ffff' : '#1a1a2e'
        ctx.lineWidth = isActive ? 3 : 1
        ctx.stroke()

        if (isActive) {
          // Add glow effect
          ctx.shadowColor = '#00ffff'
          ctx.shadowBlur = 10
          ctx.stroke()
          ctx.shadowBlur = 0
        }
      })

      // Draw nodes
      nodes.forEach(node => {
        const isActive = activeNodes.has(node.id)
        
        ctx.beginPath()
        ctx.arc(node.x, node.y, isActive ? 25 : 20, 0, 2 * Math.PI)
        ctx.fillStyle = isActive ? '#00ffff' : '#1a1a2e'
        ctx.fill()
        
        if (isActive) {
          ctx.shadowColor = '#00ffff'
          ctx.shadowBlur = 20
          ctx.fill()
          ctx.shadowBlur = 0
        }
        
        ctx.strokeStyle = '#00ffff'
        ctx.lineWidth = 2
        ctx.stroke()
      })
    }

    const animationFrame = requestAnimationFrame(function animate() {
      draw()
      requestAnimationFrame(animate)
    })

    return () => cancelAnimationFrame(animationFrame)
  }, [nodes, connections, activeNodes, activeConnections])

  return (
    <div className="relative w-full h-96 bg-cyber-darker/30 rounded-xl border border-neon-cyan/20 overflow-hidden">
      <canvas 
        ref={canvasRef}
        width={800}
        height={400}
        className="w-full h-full"
      />
      
      {/* Node labels */}
      {nodes.map(node => (
        <motion.div
          key={node.id}
          className={`absolute pointer-events-none text-xs font-mono transition-all duration-300 ${
            activeNodes.has(node.id) ? 'text-neon-cyan scale-110' : 'text-neon-cyan/60'
          }`}
          style={{
            left: `${(node.x / 800) * 100}%`,
            top: `${(node.y / 400) * 100}%`,
            transform: 'translate(-50%, -50%)',
          }}
          animate={{
            scale: activeNodes.has(node.id) ? 1.1 : 1,
            textShadow: activeNodes.has(node.id) ? '0 0 10px #00ffff' : '0 0 0px #00ffff',
          }}
        >
          {node.label}
        </motion.div>
      ))}

      {/* System status */}
      <div className="absolute top-4 left-4 text-xs font-mono text-neon-green">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse"></div>
          <span>AGENTIC SYSTEM ONLINE</span>
        </div>
      </div>

      {/* Performance metrics */}
      <div className="absolute bottom-4 right-4 text-xs font-mono text-neon-cyan/60">
        <div>LATENCY: 12ms</div>
        <div>THROUGHPUT: 94.7%</div>
        <div>MEMORY: pgvector</div>
      </div>
    </div>
  )
}
