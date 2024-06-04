import {
  HiChartPie,
  HiComputerDesktop,
  HiClock,
} from 'react-icons/hi2'

export function Services(){
  const services = [
    {
      title: 'Web',
      description: 'Sou um futuro desenvolvedor React, focado em criar interfaces de usuário dinâmicas e interativas. Sempre priorizando desempenho e usabilidade. Estou sempre pronto para transformar ideias em soluções eficientes e elegantes.',
      icon: <HiComputerDesktop className='h-12 w-12'/>
    },
    {
      title: 'Business Intelligence',
      description: 'Tenho experiência em Business Intelligence com Looker Studio, criando dashboards interativas e relatórios personalizados, ajudando empresas a tomar decisões estratégicas informadas.',
      icon: <HiChartPie className='h-12 w-12'/>
    },
    {
      title: 'Automação',
      description: 'Utilizo Python para automatizar tarefas repetitivas e processos manuais, aumentando a eficiência e reduzindo erros. Tenho projeto onde implementei scripts que simplificam fluxos de trabalho e economizam tempo.',
      icon: <HiClock className='h-12 w-12'/>
    },
  ]

  return (
    <>
      <section className="container mx-auto my-12 max-w-4xl p-4">
        <div className="p-4 text-center">
          <p className="text-sm font-semibold uppercase text-blue-600">
            O que eu faço de melhor
          </p>
          <h2 className="mb-2 font-bold text-blue-900">
            <span className="mr-2 font-headline text-3xl">Meus</span>
            <span className="font-handwriting text-4xl">Serviços</span>
          </h2>
          <p className="text-sm text-gray-600">
            Posso atender uma gama completa de serviços, do front-end ao back-end com banco de dados e sistemas
          </p>
        </div>

        <div className="mt-6 flex flex-col gap-2 md:flex-row">
          {services.map((service, index) => (
              <div className="basis-1/3 rounded-lg bg-blue-700 p-4 text-white"
              key={`service-${index}`}>
                <div className="mb-2">{service.icon}</div>
                <h3 className="text-xl font-bold">{service.title}</h3>
                <p className="text-sm">{service.description}</p>
              </div>
            ))}
        </div>
      </section>
    </>
  )
}
