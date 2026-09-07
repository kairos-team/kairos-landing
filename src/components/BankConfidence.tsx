import Code from '../assets/gallery/code.jpg'

export default function BankConfidence() {
  return (
    <section id="feature" className="py-20 md:py-28">
      <div className="max-w-container mx-auto px-6">
        <div className="text-center">
          <h2 className="text-3xl font-medium text-white sm:text-4xl">Nossos Produtos</h2>
          <p className="mx-auto mt-4 max-w-lg text-sm text-white/60 sm:text-base">
            Pronto para implementar essa tecnologia no seu negócio?<br/>
            Faça um orçamento rápido e leve essa solução para a sua empresa.
          </p>
        </div>

        <div className="mt-14 rounded-xl2 border border-kairos-border bg-kairos-surface p-6 md:p-10">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <h3 className="text-2xl font-medium text-white sm:text-3xl">
                Desenvolvimento de software.
              </h3>
              <p className="mt-4 text-sm text-white/60 sm:text-base">
                Ao contratar os nossos serviços, você conta com uma equipe especializada no design, codificação, teste e manutenção de sistemas, aplicativos e plataformas.
                 Nosso objetivo é criar ferramentas eficientes, seguras e fáceis de usar, perfeitamente alinhadas aos objetivos do seu negócio para impulsionar os seus resultados.
              </p>
              <button className="mt-6 inline-flex items-center rounded-full bg-white px-5 py-2.5 text-sm font-medium text-kairos-bg hover:bg-white/90 transition-colors">
                saiba mais
              </button>
            </div>

            <div className="relative overflow-hidden rounded-xl2">
              {/* Substitua por <img src="..." /> com a foto real */}
              <img src={Code} alt="Code" className="aspect-[4/3] w-full object-cover" />


              {/*
              <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-white/10 bg-kairos-bg/80 p-4 backdrop-blur">
                
                <div className="mt-3 flex items-end gap-1.5">
                  {[40, 60, 30, 80, 55].map((h, i) => (
                    <div
                      key={i}
                      className="w-3 rounded-sm bg-kairos-accent"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
              </div>*/}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
