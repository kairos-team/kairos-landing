import Lp from '../assets/gallery/lp.jpg'

export default function LandingPageProduct() {
  return (
    <div className="grid gap-8 md:grid-cols-2 md:items-center h-[480px] bg-kairos-surface md:p-0 md:h-[480px]">
      <div className="flex flex-col h-full gap-12 justify-center md:gap-12">
        <h3 className="text-2xl font-medium text-white sm:text-3xl">
          Criação de Landing Pages e Websites.
        </h3>
        <p className="text-sm text-white/60 sm:text-base">
          Soluções digitais desenvolvidas para criar a presença de uma empresa, marca, produto ou serviço na internet. Permitindo apresentar informações, serviços, produtos e conteúdos de forma organizada, moderna e acessível, além de facilitar a comunicação e a interação com os usuários. Contribuindo para o fortalecimento digital, alcançaçando novos públicos e proporcionando uma experiência de navegação intuitiva, responsiva e eficaz.
        </p>
        <button className="inline-flex items-center w-fit rounded-full bg-white px-5 py-2.5 text-sm font-medium text-kairos-bg hover:bg-white/90 transition-colors">
          Saiba mais
        </button>
      </div>

      <div className="relative overflow-hidden rounded-xl2">
        <img src={Lp} alt="Code" className="aspect-[4/3] w-full object-cover" />
      </div>
    </div>
  )
}