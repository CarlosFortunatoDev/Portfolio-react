import { FaQuoteLeft } from "react-icons/fa"

export function Pillar(){
  return (
    <>
      <section>
        <div className="container mx-auto max-4xl p-4 py-8">
          <div className="relative mb-4 p-4 text-center">
            <h2 className="relative z-50 mb-2 font-bold">
              <span className="mr-2 font-headline text-3xl text-gray-800">
                Paixão por fazer
              </span>
              <span className="font-handwriting text-4xl text-blue-800">
                a diferença .
              </span>
            </h2>
            <div className="absolute left-1/2 top-3 z-0 h-10 w-10 rounded-lg bg-blue-400/10"></div>
          </div>
          <figure>
            <FaQuoteLeft className="h-8 w-8 text-gray-600"/>
            <blockquote className="mb-6">
              <p className="text-2xl text-gray-900">
                Com minha paixão por fazer a diferença, acredito que sou a pessoa ideal para esta vaga na Embraer. Estou comprometido em superar desafios e buscar constantemente a excelência, alinhando-me perfeitamente com o pilar fundamental da empresa. Minha vontade de deixar um impacto positivo no mundo e minha habilidade em contribuir com soluções inovadoras me tornam um candidato excepcional para integrar uma equipe que está na vanguarda da indústria aeroespacial.
              </p>
            </blockquote>
            <figcaption className="flex items-center justify-center gap-2">
              <img
                className="h-6 w-6 rounded-full"
                src="images/foto-portfolio.jpg"
                alt="Carlos Fortunato"
              />
              <div className="flex items-center divide-x-2 divide-gray-200">
                <div className="pr-3 font-medium text-gray-900">Carlos Fortunato</div>
                <div className="pl-3 text-sm font-light text-gray-500">
                  Futuro estagiário Embraer
                </div>
              </div>
            </figcaption>
          </figure>
        </div>
      </section>
    </>
  )
}
