import { useState } from 'react'
import { Plus, Minus, Sparkles } from 'lucide-react'

const FAQ_ITEMS = [
  {
    question: 'What is Paymark?',
    answer:
      'Reach, leverages AI-optimized cold email campaigns to elevate your business. We provide tailored strategies that enhance outreach.',
  },
  {
    question: 'Is there a limit for cashback I can earn?',
    answer: 'Substitua por sua resposta real aqui.',
  },
  {
    question: 'Are there any account fees in Paymark?',
    answer: 'Substitua por sua resposta real aqui.',
  },
  {
    question: 'Why should I use Paymark?',
    answer: 'Substitua por sua resposta real aqui.',
  },
]

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="py-20 md:py-28">
      <div className="max-w-container mx-auto px-6">
        <h2 className="text-center text-3xl font-medium text-white sm:text-4xl">
          Perguntas Frequentes:
        </h2>

        <div className="mt-12 grid gap-8 md:grid-cols-2 md:items-start">
          <div className="hidden md:flex aspect-square items-center justify-center rounded-xl2 border border-kairos-border bg-gradient-to-br from-kairos-surface to-kairos-bg">
            <Sparkles size={48} className="text-white/20" />
          </div>

          <div className="divide-y divide-kairos-border rounded-xl2 border border-kairos-border">
            {FAQ_ITEMS.map((item, index) => {
              const isOpen = openIndex === index
              return (
                <div key={item.question} className="px-6">
                  <button
                    className="flex w-full items-center justify-between py-5 text-left text-sm font-medium text-white sm:text-base"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                  >
                    {item.question}
                    {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                  </button>
                  {isOpen && (
                    <p className="pb-5 text-sm text-white/60">{item.answer}</p>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <span className="text-sm text-white/60">Can't find the answer you're looking for?</span>
          <button className="rounded-full bg-white px-5 py-2.5 text-sm font-medium text-kairos-bg hover:bg-white/90 transition-colors">
            Ask Something
          </button>
        </div>
      </div>
    </section>
  )
}
