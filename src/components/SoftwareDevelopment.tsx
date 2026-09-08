import Code from '../assets/gallery/code.jpg'

export default function SoftwareDevelopment() {
  return (
    <div className="grid gap-8 md:grid-cols-2 md:items-center h-[480px] bg-kairos-surface md:p-0 md:h-[480px]">
      <div className="flex flex-col h-full gap-12 justify-center md:gap-12">
        <h3 className="text-2xl font-medium text-white sm:text-3xl">
          Desenvolvimento de software.
        </h3>
        <p className="text-sm text-white/60 sm:text-base">
          Ao contratar os nossos serviços, você conta com uma equipe especializada no design, codificação, teste e manutenção de sistemas, aplicativos e plataformas.
          Nosso objetivo é criar ferramentas eficientes, seguras e fáceis de usar, perfeitamente alinhadas aos objetivos do seu negócio para impulsionar os seus resultados.
        </p>
        <button className="inline-flex items-center w-fit rounded-full bg-white px-5 py-2.5 text-sm font-medium text-kairos-bg hover:bg-white/90 transition-colors">
          Saiba mais
        </button>
      </div>

      <div className="relative overflow-hidden rounded-xl2">
        <img src={Code} alt="Code" className="aspect-[4/3] w-full object-cover" />
      </div>
    </div>
  )
}