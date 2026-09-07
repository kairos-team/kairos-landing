import { useState } from 'react'
import { Plus, Minus, Sparkles } from 'lucide-react'
import team from '../assets/gallery/team.jpg'


const FAQ_ITEMS = [
  {
    question: 'O que é Kairos?',
    answer:
      'Do grego Kairos é o conceito antigo que representa o momento perfeito, oportuno e certo para algo acontecer. Para nós da Kairós não basta apenas ser ágil, mas entregar a solução certa, na hora certa e com o valor exato que o cliente precisa.',
  },
  {
    question: 'Como funciona o processo de desenvolvimento?',
    answer: 'Começamos entendendo o seu negócio, seus objetivos e o que a solução precisa alcançar. A partir disso, definimos a melhor abordagem para transformar a ideia em um produto funcional, claro e alinhado às suas necessidades.',
  },
   {
    question: 'Posso solicitar uma proposta para o meu projeto?',
    answer: 'Sim. Após recebermos as informações sobre o seu projeto, analisamos o escopo, os objetivos e as necessidades do negócio para entender os desafios e definir a melhor solução. A partir dessa análise, apresentamos uma proposta personalizada, considerando as prioridades, a complexidade e as possibilidades do projeto.',
  },
  {
    question: 'Por que escolher a Kairos?',
    answer: 'Porque não enxergamos um projeto apenas como desenvolvimento de software. Antes de pensar em tecnologia, buscamos entender o problema, o objetivo do negócio e a experiência que a solução precisa proporcionar. A Kairos une desenvolvimento, design e visão de produto para criar soluções que não apenas funcionam, mas fazem sentido para quem vai utilizá-las.',
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
            <img src={team} alt="Team" className="h-full w-full object-cover rounded-xl2" />
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
          <span className="text-sm text-white/60">Não consegue encontrar a resposta que procura?</span>
          <button className="rounded-full bg-white px-5 py-2.5 text-sm font-medium text-kairos-bg hover:bg-white/90 transition-colors">
            Pergunte algo
          </button>
        </div>
      </div>
    </section>
  )
}
