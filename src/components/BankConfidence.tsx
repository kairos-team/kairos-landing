import AtlasProduct from "./AtlasProduct";
import KronolexProduct from "./KronolexProduct";
import LandingPageProduct from "./LandindPageProduct";
import SoftwareDevelopment from "./SoftwareDevelopment";

export default function BankConfidence() {
  return (
    <section id="Produtos" className="flex flex-col">
      <div className="flex flex-col max-w-container mx-auto px-6 gap-10 md:py-28">
        <div className="text-center">
          <h2 className="text-3xl font-medium text-white sm:text-4xl">Nossos Produtos</h2>
          <p className="mx-auto mt-4 max-w-lg text-sm text-white/60 sm:text-base">
            Pronto para implementar essa tecnologia no seu negócio?<br />
            Faça um orçamento rápido e leve essa solução para a sua empresa.
          </p>
        </div>

        <div className="gap-5 rounded-xl2 border border-kairos-border bg-kairos-surface md:p-10 md:sticky md:top-24 sticky top-24 z-10">
          <KronolexProduct />
        </div>

        <div className="gap-5 rounded-xl2 border border-kairos-border bg-kairos-surface md:p-10 md:sticky md:top-24 sticky top-24 z-20">
          <LandingPageProduct />
        </div>

        <div className="gap-5 rounded-xl2 border border-kairos-border bg-kairos-surface md:p-10 md:sticky md:top-24 sticky top-24 z-30">
          <SoftwareDevelopment />
        </div>

        <div className="gap-5 rounded-xl2 border border-kairos-border bg-kairos-surface md:p-10 md:sticky md:top-24 sticky top-24 z-40">
          <AtlasProduct />
        </div>
      </div>
    </section>
  )
}
