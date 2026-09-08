import KronolexLogo from '../assets/gallery/kronolex-logo.jpg'

export default function KronolexProduct() {
  return (
    <div className="grid gap-8 md:grid-cols-2 md:items-center h-[480px] bg-kairos-surface md:p-0 md:h-[480px]">
      <div className="flex flex-col h-full gap-12 justify-center md:gap-12 md:p-6">
        <h3 className="text-2xl font-medium text-white sm:text-3xl">
          Sistema de gestão de processos jurídicos -  Kronolex.
        </h3>
        <p className="text-sm text-white/60 sm:text-base">
          Um sistema de gestão de processos jurídicos desenvolvido para auxiliar advogados e escritórios de advocacia na organização e acompanhamento de seus processos e clientes. Dessa forma, facilitando a rotina dos profissionais, reduzindo o trabalho manual e ajudando a evitar a perda de informações e prazos, de forma eficaz e segura.
        </p>
        <button className="inline-flex items-center w-fit rounded-full bg-white px-5 py-2.5 text-sm font-medium text-kairos-bg hover:bg-white/90 transition-colors">
          Saiba mais
        </button>
      </div>

      <div className="relative overflow-hidden rounded-xl2">
        <img src={KronolexLogo} alt="Code" className="aspect-[4/3] w-full object-cover" />
      </div>
    </div>
  )
}
