import { useEffect, useState } from 'react'

type Persona = 'CXO' | 'PM' | 'HR' | 'Eng'

export function usePersona(): [Persona, (p: Persona) => void] {
  const [persona, setPersona] = useState<Persona>(() => {
    const saved = localStorage.getItem('persona') as Persona | null
    return saved ?? 'CXO'
  })
  useEffect(() => {
    localStorage.setItem('persona', persona)
  }, [persona])
  return [persona, setPersona]
}

export default function PersonaSwitch() {
  const [persona, setPersona] = usePersona()
  const personas: Persona[] = ['CXO', 'PM', 'HR', 'Eng']
  return (
    <div className="inline-flex items-center gap-1 rounded-full border px-1 py-1 bg-background">
      {personas.map((p) => (
        <button
          key={p}
          onClick={() => setPersona(p)}
          className={`px-2 py-1 rounded-full text-xs ${persona === p ? 'bg-neutral-200 dark:bg-neutral-800' : ''}`}
          aria-pressed={persona === p}
        >
          {p}
        </button>
      ))}
    </div>
  )
}
