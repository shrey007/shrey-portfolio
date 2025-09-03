import MermaidBlock from '@/components/MermaidBlock'

export default function SystemsPage() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-semibold">Systems</h1>
      <section className="space-y-2">
        <h2 className="font-medium">Agentic Platform — memory & routing</h2>
        <MermaidBlock file="agentic-platform.mmd" />
      </section>
      <section className="space-y-2">
        <h2 className="font-medium">Velocity — high-level</h2>
        <MermaidBlock file="velocity-arch.mmd" />
      </section>
    </div>
  )
}
