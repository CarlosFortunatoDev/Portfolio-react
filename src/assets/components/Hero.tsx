import {HiDownload} from 'react-icons/hi'

export function Hero(){
  return (
    <section className="bg-gradient-to-tr from-black to-gray-900 text-white">
      <div className="container mx-auto max-w-4xl p-2 py-12 flex">
        <div className='basis-1/2'>
          <h1 className="mb-6">
            <span className="font-handwriting block text-3xl text-center">Olá, me chamo</span>
            <span className="font-headline text-5xl font-semibold">Carlos </span>
            <span className="font-headline text-5xl font-ligt text-blue-400">Fortunato</span>
          </h1>
          <h2 className="font-semibold flex items-center gap-2">
            <div className="h-1 w-12 rounded-full bg-blue-800"/>
            Aspirante a Desenvolvedor React.js e Python
          </h2>
          <p className="text-gray-400 my-6">
            Dedicado ao desenvolvimento de interfaces interativas e dinâmicas com React.js, aliado à criação de automações eficientes usando Python. Transformando a experiência do usuário, otimizando processos e sempre disposto à aprender cada vez mais.
          </p>
          <div className="flex items-center gap-2">
            <a href="#" className="underline font-bold text-white">Fale comigo</a>
            <span className="italic text-gray-500">ou</span>
            <a href="#" className="button text-gray-600 hover:text-gray-900 flex items-center gap-2">
            <HiDownload />
            Baixe meu currículo
            </a>
          </div>
        </div>
        <div className='basis-1/2'></div>
      </div>
    </section>
  )
}
