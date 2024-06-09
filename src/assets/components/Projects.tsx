import { HiArrowTopRightOnSquare } from "react-icons/hi2"

export function Projects(){
  const projects = [
    {
      title: 'Automação de Cadastro',
      description: 'Automação de cadastros de produtos consumindo planilhas, utilizando a biblioteca PyAutoGui e OpenPyXl.',
      image: "https://plus.unsplash.com/premium_photo-1677094310919-d0361465d3be?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "https://github.com/CarlosFortunatoDev/Automacao-cadastro-produto",
      colSpan: "col-span-1"
    },
    {
      title: 'API Github',
      description: 'Projeto desenvolvido com React para fazer buscas de usuários consumindo API do Github.',
      image: "https://images.unsplash.com/photo-1630514969818-94aefc42ec47?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "https://github.com/CarlosFortunatoDev/api-github-dev",
      colSpan: "col-span-1 md:col-span-2"
    },
    {
      title: 'Password Generator',
      description: 'Gerador de senhas automático com níveis de segurança. Desenvolvido com HTML5, CSS3 e JavaScript Vanilla.',
      image: "https://images.unsplash.com/photo-1633265486064-086b219458ec?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "https://carlosfortunatodev.github.io/Password-Generator/",
      colSpan: "col-span-1"
    },
    {
      title: 'Thalita Leal Semi Joias',
      description: 'Controle de Estoque, Vendas, Compras, Funil de Vendas e Previsão Forquest.',
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "https://lookerstudio.google.com/u/1/reporting/a1097304-2de6-4e0f-9722-b4fb51d4c55d/page/9vvjD",
      colSpan: "col-span-1"
    },
    {
      title: 'Minhas Anotações',
      description: 'Todas minhas anotações documentadas que sempre me ajudam no dia a dia.',
      image: "https://images.unsplash.com/photo-1503551723145-6c040742065b-v2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "https://www.notion.so/Anota-es-1698770103394e16a4804b0409d56dc1",
      colSpan: "col-span-1"
    },
  ]

  return (
    <>
      <section className="rounded-tl-[80px] bg-gradient-to-tr from-black to-gray-900 text-white md:rounded-tl[180px]">
        <div className="container mx-auto max-w-4xl p-4 py-12">
          <div className="relative p-4 text-center">
            <h2 className="relative z-50 text-white mb-2">
              <span className="mr-2 font-headline text-3xl font-semibold">Projetos &</span>
              <span className="font-handwriting text-4xl">Portfólio</span>
            </h2>
            <p className="relative text-sm text-gray-400">
            Em meus projetos e portfólio, você encontrará aplicações web dinâmicas feitas com React, scripts de automação em Python que aumentam a eficiência, e dashboards em Looker Studio que transformam dados complexos em insights claros. Esses trabalhos refletem meu compromisso com a qualidade e a inovação, valores essenciais para a Embraer.
            </p>
            <div className="absolute left-1/2 top-3 z-0 h-10 w-10 rounded-lg bg-blue-400/10"></div>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {projects.map((project, index) => (
            <div
              className={`group relative h-52 cursor-default rounded-lg ${project.colSpan} bg-cover bg-center`}
              key={`project-${index}`}
              style={{backgroundImage: `url('${project.image}')`}}>
                <div className="absolute inset-0 flex h-full w-full flex-col items-center justify-center rounded-lg bg-blue-600 text-white opacity-0 transition-opacity group-hover:opacity-100">
                  <h4 className="text-center font-headline text-lg font-semibold">
                    {project.title}
                  </h4>
                  <p className="mb-4 text-sm p-3 text-center">{project.description}</p>
                  <a href={project.link} target="_blank">
                    <HiArrowTopRightOnSquare className="h-6 w-6"/>
                  </a>
                </div>
            </div>
          ))}
        </div>
        </div>
      </section>
    </>
  )
}
