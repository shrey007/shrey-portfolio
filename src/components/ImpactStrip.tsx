export default function ImpactStrip({ items }: { items: string[] }) {
  return (
    <div className="grid gap-2 sm:grid-cols-3">
      {items.map((txt, i) => (
        <div key={i} className="rounded-lg border p-3 text-sm">
          {txt}
        </div>
      ))}
    </div>
  )
}


