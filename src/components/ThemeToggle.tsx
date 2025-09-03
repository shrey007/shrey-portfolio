import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const [dark, setDark] = useState<boolean>(() => {
    const saved = localStorage.getItem('theme')
    if (saved) return saved === 'dark'
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  useEffect(() => {
    const root = document.documentElement
    if (dark) {
      root.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      root.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [dark])

  return (
    <button className="rounded-full border px-2 py-1 text-xs" onClick={() => setDark((v) => !v)} aria-label="Toggle theme">
      {dark ? 'Dark' : 'Light'}
    </button>
  )
}


