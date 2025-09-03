module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Cyberpunk palette
        'cyber-dark': '#0a0a0f',
        'cyber-darker': '#050508',
        'neon-cyan': '#00ffff',
        'neon-pink': '#ff0080',
        'neon-green': '#00ff41',
        'neon-purple': '#8b00ff',
        'neon-orange': '#ff8c00',
        'cyber-gray': '#1a1a2e',
        'cyber-blue': '#16213e',
        'terminal-green': '#00ff00',
      },
      animation: {
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'scan-line': 'scan-line 2s linear infinite',
        'typing': 'typing 3.5s steps(40, end)',
        'blink-caret': 'blink-caret .75s step-end infinite',
        'matrix-fall': 'matrix-fall 20s linear infinite',
        'glitch': 'glitch 0.3s ease-in-out infinite alternate',
      },
      keyframes: {
        'glow-pulse': {
          '0%': { boxShadow: '0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor' },
          '100%': { boxShadow: '0 0 2px currentColor, 0 0 5px currentColor, 0 0 8px currentColor' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'scan-line': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        'typing': {
          'from': { width: '0' },
          'to': { width: '100%' },
        },
        'blink-caret': {
          'from, to': { borderColor: 'transparent' },
          '50%': { borderColor: '#00ff00' },
        },
        'matrix-fall': {
          '0%': { transform: 'translateY(-100vh)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        'glitch': {
          '0%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
          '100%': { transform: 'translate(0)' },
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
        'cyber': ['Orbitron', 'monospace'],
      },
      borderRadius: {
        '2xl': '1rem',
      },
      boxShadow: {
        soft: '0 10px 30px rgba(0,0,0,0.25)',
        'neon-cyan': '0 0 5px #00ffff, 0 0 10px #00ffff, 0 0 15px #00ffff',
        'neon-pink': '0 0 5px #ff0080, 0 0 10px #ff0080, 0 0 15px #ff0080',
        'neon-green': '0 0 5px #00ff41, 0 0 10px #00ff41, 0 0 15px #00ff41',
        'neon-purple': '0 0 5px #8b00ff, 0 0 10px #8b00ff, 0 0 15px #8b00ff',
      },
      backgroundImage: {
        'cyber-grid': 'linear-gradient(rgba(0,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,255,0.1) 1px, transparent 1px)',
        'neural-net': 'radial-gradient(circle at 20% 50%, rgba(0,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(255,0,128,0.1) 0%, transparent 50%)',
      },
      backgroundSize: {
        'grid': '50px 50px',
      },
    },
  },
  plugins: [],
}


