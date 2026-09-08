import AtlasLogo from '../assets/gallery/atlas-logo.jpg'

export default function AtlasProduct() {
  return (
    <div className="grid gap-8 md:grid-cols-2 md:items-center h-[480px] bg-kairos-surface md:p-0 md:h-[480px]">
      <div className="flex flex-col h-full gap-12 justify-center md:gap-12">
        <h3 className="text-2xl font-medium text-white sm:text-3xl">
          Sistema de Gestão - ATLAS.
        </h3>
        <p className="text-sm text-white/60 sm:text-base">
          Um sistema de gestão de estoque desenvolvido para auxiliar empresas no controle e organização de seus produtos e serviços. Por meio dela, é possível cadastrar produtos, acompanhar entradas e saídas, controlar quantidades disponíveis, registrar movimentações, gerenciar fornecedores e identificar produtos com estoque baixo. Dessa forma, facilitando o controle dos recursos da empresa, reduzindo perdas e erros, evitando a falta ou o excesso de produtos e tornando a gestão do estoque mais organizada, eficaz e precisa.
        </p>
        <button className="inline-flex items-center w-fit rounded-full bg-white px-5 py-2.5 text-sm font-medium text-kairos-bg hover:bg-white/90 transition-colors">
          Saiba mais
        </button>
      </div>

      <div className="relative overflow-hidden rounded-xl2">
        <img src={AtlasLogo} alt="Code" className="aspect-[4/3] w-full object-cover" />
      </div>
    </div>
  )
}