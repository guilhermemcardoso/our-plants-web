import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import Head from 'next/head'
import Header from '@/components/header'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Nossas Plantas</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <article className="text-font-primary body-font">
        <section className="absolute inset-0 min-h-screen max-w-7xl mx-auto flex px-5 pt-24 md:flex-row flex-col items-center bg-[url('/images/woman-bench-park.svg')] bg-no-repeat bg-right-bottom bg-contain opacity-25"></section>
        <section className="min-h-screen max-w-7xl mx-auto flex px-5 pt-24 md:flex-row flex-col items-center justify-center">
          <div className="lg:flex-grow md:w-1/2 md:mx-16 pt-6 flex flex-col md:items-center md:text-center items-center text-center">
            <h1 className="mb-5 sm:text-6xl text-5xl items-center Avenir xl:w-2/2 text-gray-900">
              Encontre suas frutas preferidas nas ruas da cidade
            </h1>
            <p className="mb-4 xl:w-3/4 text-font-primary text-2xl">
              Nossas Plantas é um aplicativo móvel gratuito desenvolvido no
              Instituto Federal de Tecnologia, Ciência e Educação de São Paulo,
              no campus de São Carlos. Ele ajuda a população a mapear as árvores
              frutíferas da cidade.
            </p>
            <div className="flex justify-center">
              <a
                className="inline-flex items-center px-5 py-3 mt-2 font-medium text-white transition duration-200 ease-in-out transform rounded-lg hover:bg-primary-dark bg-primary-pure shadow-md"
                href="#learn-more"
              >
                <span className="justify-center">ENTENDA COMO FUNCIONA</span>
              </a>
            </div>
          </div>
        </section>
        <section id="learn-more" className="bg-primary-pure/[.1]">
          <div className="min-h-screen max-w-7xl mx-auto flex px-5 pt-24 md:flex-row flex-col items-center justify-center">
            <div className="container px-5 max-w-7xl mx-auto lg:px-24">
              <div className="flex flex-col w-full mb-4 text-left lg:text-center">
                <h1 className="mb-5 sm:text-6xl text-5xl items-center Avenir xl:w-2/2 text-gray-900">
                  Entenda como o Nossas Plantas funciona:
                </h1>
              </div>
              <div className="grid grid-cols-1 gap-16 mb-16 text-center md:grid-cols-2 lg:grid-cols-4">
                <div className="flex flex-col items-center justify-center md:min-h-[50vh]">
                  <div className="flex-1">
                    <img
                      src="/images/smartphone.svg"
                      alt="Smartphone"
                      className="max-h-[70%] mb-10 md:mb-0"
                    />
                  </div>
                  <span className="flex-1 text-lg">
                    Baixe o Nossas Plantas em seu smartphone e cadastre-se
                    utilizando seu email.
                  </span>
                </div>
                <div className="flex flex-col items-center justify-center md:min-h-[50vh]">
                  <div className="flex-1">
                    <img
                      src="/images/man-with-map.svg"
                      alt="Homem com mapa no parque"
                      className="max-h-[100%] mb-10 md:mb-0"
                    />
                  </div>
                  <span className="flex-1 text-lg">
                    Baixe o Nossas Plantas em seu smartphone e cadastre-se
                    utilizando seu email.
                  </span>
                </div>
                <div className="flex flex-col items-center justify-center md:min-h-[50vh]">
                  <div className="flex-1">
                    <img
                      src="/images/pin.svg"
                      alt="Marcador"
                      className="max-h-[100%] mb-10 md:mb-0"
                    />
                  </div>
                  <span className="flex-1 text-lg">
                    Baixe o Nossas Plantas em seu smartphone e cadastre-se
                    utilizando seu email.
                  </span>
                </div>
                <div className="flex flex-col items-center justify-center md:min-h-[50vh]">
                  <div className="flex-1">
                    <img
                      src="/images/connected.svg"
                      alt="Conectados"
                      className="max-h-[100%] mb-10 md:mb-0"
                    />
                  </div>
                  <span className="flex-1 text-lg">
                    Baixe o Nossas Plantas em seu smartphone e cadastre-se
                    utilizando seu email.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          id="about-us"
          className="min-h-screen max-w-7xl mx-auto flex px-5 pt-24 flex-col items-center justify-center relative"
        >
          <div className="absolute inset-0 min-h-screen max-w-7xl mx-auto flex px-5 pt-24 md:flex-row flex-col items-center bg-[url('/images/laptop.svg')] bg-no-repeat bg-bottom bg-contain md:bg-50% opacity-25"></div>
          <div className="min-h-screen max-w-7xl mx-auto flex px-5 pt-24 flex-col items-center justify-start lg:px-24">
            <h1 className="mb-5 sm:text-6xl text-5xl items-center Avenir xl:w-2/2 text-gray-900">
              Sobre nós
            </h1>
            <div className="container flex flex-col items-center justify-center mx-auto rounded-lg ">
              <p className="text-lg">
                O projeto Nossas Plantas foi desenvolvido como um trabalho de
                conclusão do curso de pós-graduação Especialização em
                Desenvolvimento de Sistemas para Dispositivos Móveis do
                Instituto Federal de Educação, Ciência e Tecnologia de São
                Paulo, campus de São Carlos.
              </p>
              <br />
              <p className="text-lg">
                Idealizado pelo aluno Guilherme Muniz Cardoso e orientado pelo
                Prof. Dr. Rodrigo Elias Bianchi, o projeto foi inspirado por um
                mapa compartilhado a partir de um grupo de Facebook, criado por
                Rafael Moura.
              </p>
              <br />
              <p className="text-lg">
                A motivação principal do projeto é ajudar a população a mapear
                plantas que possam trazer qualquer benefício às pessoas que a
                consumirem, seja nutricional ou medicinal. Assim, qualquer
                pessoa que esteja procurando alguma planta específica, poderá
                encontrá-la no mapa do aplicativo e colhê-la ao chegar ao local
                indicado.
              </p>
            </div>
          </div>
        </section>
      </article>
      <Footer />
    </div>
  )
}
