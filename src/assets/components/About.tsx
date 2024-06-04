export function About(){
  return (
    <>
      <section className="container mx-auto my-4 max-w-5xl p-4" >
        <div className="relative p-4 text-center">
          <h2 className="relative z-10 text-blue-900 font-bold">
            <span className="mr-2 font-headline text-3xl">Sobre</span>
            <span className="font-handwriting text-4xl">Mim</span>
          </h2>
          <p className="relative text-sm text-gray-600">
          Sou um entusiasta da tecnologia e apaixonado por novos desafios. Tenho habilidades em programação, versionamento de código, metodologia ágil e estou ansioso para aprender e contribuir com a equipe. Já estou de malas prontas para voar nesse mundo de oportunidades que é a Embraer.
          </p>
          <div className="absolute left-1/2 top-3 z-0 h-10 w-10 rounded-lg bg-blue-100/40"></div>
        </div>

        <div className="relative mx-auto mt-20 max-w-lg">
          <div className="relative w-full rounded-lg bg-blue-100 p-4 ps-20 md:h-64 md:ps-48">
            <div className="relative h-full w-full rounded-lg bg-gray-50 p-4">
              <p className="font-handwriting text-lg font-bold">Olá,</p>
              <p>
                <span className="mr-1">Meu nome é</span>
                <span className="font-headline font-bold uppercase text-blue-900">
                  Carlos Fortunato
                </span>
                <table className="mt-4 w-full text-sm">
                  <tbody>
                    <tr>
                      <td className="font-headline font-bold uppercase text-blue-900">Idade:</td>
                      <td>24</td>
                    </tr>
                    <tr>
                      <td className="font-headline font-bold uppercase text-blue-900">Celular:</td>
                      <td><a href="tel:+5512997474499" className="underline hover:text-blue-900">(12) 99747-4499</a></td>
                    </tr>
                    <tr>
                      <td className="font-headline font-bold uppercase text-blue-900">Email:</td>
                      <td><a href="mailto:carlosfortunatodev@gmail.com" className="underline hover:text-blue-900">carlosfortunatodev@gmail</a></td>
                    </tr>
                    <tr>
                      <td className="font-headline font-bold uppercase text-blue-900">Endereço:</td>
                      <td>
                        <a
                          href="https://maps.app.goo.gl/mAD3d6YUspBYPEWP8"
                          target="_blank"
                          className="underline hover:text-blue-900">
                          São José dos Campos - SP
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="font-headline font-bold uppercase text-blue-900">Disponível:</td>
                      <td>
                        <span className="relative flex h-3 w-3">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                          <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500"></span>
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </p>
            </div>
            <div className="absolute -left-2 -top-4 h-24 w-20 rounded-lg bg-gray-600 bg-[url(https://scontent.fsjk6-1.fna.fbcdn.net/v/t39.30808-6/252515062_1662899723913163_7162787078124451908_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEpPDLMYIQuNHoqwbreF1kllEA2F15wd_mUQDYXXnB3-SOLKO8h8cmjTv1J4Mnvw8hH2BydN77xS_6VawWqvwWl&_nc_ohc=iaetbcgfDpQQ7kNvgEdQXHC&_nc_ht=scontent.fsjk6-1.fna&oh=00_AYBll3H4Kt4cOqT1UzJvRrBiz8gla2O9QgHLLR5UQPslLQ&oe=66644D1E)] bg-cover bg-center md:-left-12 md:-top-12 md:h-72 md:w-56"></div>
          </div>

        </div>
      </section>
    </>
  )
}
