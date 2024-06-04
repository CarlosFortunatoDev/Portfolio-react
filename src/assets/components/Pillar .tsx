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
                src="https://scontent.fsjk6-1.fna.fbcdn.net/v/t39.30808-6/252515062_1662899723913163_7162787078124451908_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEpPDLMYIQuNHoqwbreF1kllEA2F15wd_mUQDYXXnB3-SOLKO8h8cmjTv1J4Mnvw8hH2BydN77xS_6VawWqvwWl&_nc_ohc=iaetbcgfDpQQ7kNvgEdQXHC&_nc_ht=scontent.fsjk6-1.fna&oh=00_AYBll3H4Kt4cOqT1UzJvRrBiz8gla2O9QgHLLR5UQPslLQ&oe=66644D1E"
                alt="Edilaine"
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
