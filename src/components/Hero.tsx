import backgroundImg from '../assets/gallery/background.jpg'



export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-cover bg-[center_24%] bg-no-repeat pt-32 pb-24 md:pt-44 md:pb-32"
     style={{ backgroundImage: `url(${backgroundImg})` }}>  

      {/*degrade do fundo da section*/}
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-kairos-bg to-transparent pointer-events-none" />
      
      <div className="relative max-w-container mx-auto px-6 text-center">
        <h1 className="mx-auto max-w-2xl text-4xl font-medium leading-tight text-white sm:text-5xl md:text-6xl">
          {/*Smart Solutions Built for the Future of Finance*/}
          Soluções inteligentes que ajudam a construir o seu futuro.
        </h1>

        <p className="mx-auto mt-5 max-w-md text-sm text-white/60 sm:text-base">
          Tecnologia no tempo do seu crescimento.<br/> Soluções digitais que crescem com você.
        </p>

        <form
          className="mx-auto mt-8 flex w-full max-w-sm items-center gap-2 rounded-full border border-kairos-border bg-kairos-surface p-1.5"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            required
            placeholder="Enter Your Email"
            className="w-full bg-transparent px-4 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none"
          />
          <button
            type="submit"
            className="shrink-0 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-kairos-bg hover:bg-white/90 transition-colors"
          >
            Ver projetos
          </button>
        </form>

      </div>
    </section>
  )
}
