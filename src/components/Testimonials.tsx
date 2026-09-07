import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const TESTIMONIALS = [
  {
    title: 'Finally Found the Solution',
    quote:
      'I used to dread checking my accounts, but AI budgeting tools gave me a clear picture of my spending within days. Now I actually look forward to managing my money.',
    name: 'James Arthur',
  },
  // Adicione os demais depoimentos aqui (o mockup mostra 4 no total)
]

export default function Testimonials() {
  const [index, setIndex] = useState(0)
  const total = TESTIMONIALS.length
  const current = TESTIMONIALS[index]

  const goPrev = () => setIndex((i) => (i - 1 + total) % total)
  const goNext = () => setIndex((i) => (i + 1) % total)

  return (
    <section id="testimonials" className="py-20 md:py-28">
      <div className="max-w-container mx-auto px-6">
        <h2 className="text-center text-3xl font-medium text-white sm:text-4xl md:text-left">
          Customer testimonials
        </h2>

        <div className="mt-12 grid gap-8 md:grid-cols-[auto_1fr_auto] md:items-center">
          <div className="aspect-square w-full max-w-[220px] justify-self-center overflow-hidden rounded-xl2 bg-kairos-surface md:justify-self-start">
            {/* Substitua por <img src="..." /> com a foto real do cliente */}
          </div>

          <div>
            <h3 className="text-lg font-medium text-white">{current.title}</h3>
            <p className="mt-3 max-w-md text-sm text-white/60">"{current.quote}"</p>
            <p className="mt-4 text-sm text-white/40">{current.name}</p>
          </div>

          <div className="hidden aspect-square w-full max-w-[180px] overflow-hidden rounded-xl2 bg-kairos-surface md:block">
            {/* Foto secundária opcional, como no mockup */}
          </div>
        </div>

        <div className="mt-10 flex items-center justify-between">
          <div className="flex gap-2">
            <button
              onClick={goPrev}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-kairos-border text-white/70 hover:text-white"
              aria-label="Depoimento anterior"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={goNext}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-kairos-border text-white/70 hover:text-white"
              aria-label="Próximo depoimento"
            >
              <ChevronRight size={16} />
            </button>
          </div>
          <span className="text-sm text-white/40">
            {index + 1} / {total}
          </span>
        </div>
      </div>
    </section>
  )
}
