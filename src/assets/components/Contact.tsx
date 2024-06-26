import { FormEvent, useRef, useState } from 'react'
import emailjs from '@emailjs/browser';

import { FaSpinner, FaWhatsapp } from "react-icons/fa"
import {
  HiCheckCircle,
  HiOutlineEnvelope,
  HiOutlineMapPin
} from "react-icons/hi2"


export function Contact(){
  const form = useRef<HTMLFormElement>(null)
  const [loading, setLoading] = useState(false)
  const [sucess, setSucess] = useState(false)
  const [error, setError] = useState(false)

  const sendEmail = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if(!form.current) return
    setLoading(true)

    emailjs.sendForm(
      "service_gz99njn",
      "template_g23c3d6",
      form.current,
      "PCwGztBmtrKcXH5Cu")
      .then(
        () =>{
          setSucess(true)
          setLoading(false)
        },
        (error) => {
          setError(true)
          setLoading(false)
          console.log(error);
        }
      )
  }


  const contacts = [
    {
      name: "WhatsApp",
      description: "+55 (12) 99747-4499",
      link: "https://wa.me/5512997474499?text=Olá...",
      icon: <FaWhatsapp className="h-10 w-10"/>,
    },
    {
      name: "Email",
      description: "carlosfortunatodev@gmail.com",
      link: "mailto:carlosfortunatodev@gmail.com",
      icon: <HiOutlineEnvelope className="h-10 w-10"/>,
    },
    {
      name: "São José dos Campos",
      description: "",
      link: "",
      icon: <HiOutlineMapPin className="h-10 w-10"/>,
    },
  ]
  return (
    <>
      <section id="contact" className="bg-blue-700 text-white">
        <div className="container mx-auto max-w-4xl p-4 py-8">
          <div className="mb-6">
            <h2 className="z-50 mb-2">
              <span className="mr-2 font-headline text-3xl font-semibold">
                Fale
              </span>
              <span className="font-handwriting text-4xl">
                Comigo
              </span>
            </h2>
            <p className="text-sm">
              Entre em contato por formulário ou WhatsApp!
            </p>
          </div>

          <div className="flex flex-col gap-6 md:flex-row">
            <div className="basis-2/3">
              <form ref={form} onSubmit={sendEmail}>
                <div className="mb-4">
                  <label
                    htmlFor="message"
                    className="mb-2 block ps-4 font-headline font-semibold">
                      Mensagem:
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    className="h-36 w-full rounded-lg border border-white bg-transparent p-2 outline-none"
                    required
                  />
                </div>

                <div className="mb-6 flex flex-col gap-4 md:flex-row">
                  <div className="flex-grow">
                    <label
                      htmlFor="fullName"
                      className="mb-2 block ps-4 font-headline font-semibold">
                        Seu nome:
                    </label>
                    <input
                      name="fullName"
                      id="fullName"
                      typeof="text"
                      className="w-full rounded-lg border border-white bg-transparent p-2 outline-none"
                      required
                    />
                  </div>

                  <div className="flex-grow">
                    <label
                      htmlFor="email"
                      className="mb-2 block ps-4 font-headline font-semibold">
                        Seu email:
                    </label>
                    <input
                      name="email"
                      id="email"
                      typeof="email"
                      className="w-full rounded-lg border border-white bg-transparent p-2 outline-none"
                      required
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="cursor-pointer rounded-md bg-white px-4 py-2 font-headline text-sm font-semibold transition flex items-center gap-2 text-blue-700 button"
                    disabled={loading}>
                      {loading && <FaSpinner className="h-4 w-4 animate-spin" />}
                      {sucess && <HiCheckCircle className="h-4 w-4" />}
                      Enviar mensagem
                  </button>

                  {error && (
                  <p className="mt-2">
                    Ocorreu um erro ao enviar a mensagem, tente novamente mais
                    tarde.
                  </p>
                )}
                </div>
              </form>
            </div>
            <div className="basis-1/3">
              {contacts.map((contact,index) => (
                <div
                key={`contact-${index}`}
                className="mb-4 flex items-center gap-4 rounded-lg border border-dashed border-gray-400 p-4">
                  {contact.icon}
                  <div>
                    <p className="font-headline font-semibold">{contact.name}</p>
                    <a
                      href={contact.link}
                      target="_blank"
                      className="text-gray-300 underline underline-offset-200">
                        {contact.description}
                      </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </section>
    </>
  )
}
