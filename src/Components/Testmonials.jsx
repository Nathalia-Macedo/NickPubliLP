import React, { useState, useEffect } from "react"
import eu from '../Assets/eu linda.jpg'
import ingles from '../Assets/ingles.png'
import beauty from '../Assets/beauty.png'
import masso from '../Assets/masso.png'
import sam from '../Assets/samantha.png'
import ai from '../Assets/amiga.png'
import otica from '../Assets/otica.png'
import studio from '../Assets/studio.png'
import foto from '../Assets/foto.png'
const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Nathalia Macedo",
      text: "Nick me ajudou com meus reels do instagram, desde a elaboração do roteiro até a gravação e edição. Apesar de não ter muito costume em ser gravada, ela fez com que eu me sentisse a vontade a todo momento, entregou rápido e com muita qualidade!",
      avatar: eu,
    },
    {
      id: 2,
      name: "@samanthakelly._",
      text: "Bom diaa. Gostei muito do trabalho da Nick, das indicações dela. Fez com dedicação e muito empenho a divulgação dos produtos, no tempo bom.  Qualidade nos matérias de video que me mandou também. Super recomendo, carismática e atenciosa. Foi muito bom, super recomendo.❤🎉😊",
      avatar: sam,
    },
    {
      id: 3,
      name: "@amigaintimastore",
      text: "Trabalho com Nick Publi, agora Publi X, desde 2019.Gostaria de tirar um momento para agradecer pelo excelente trabalho que você  têm realizado. A dedicação e a criatividade tem  sido fundamentais para o crescimento da amiga íntima store.As campanhas recentes foram muito bem-sucedidas em atrair novos clientes e engajar os antigos. Adorei ver como você incorporara as novas mercadorias nas estratégias, tornando tudo muito atraente e alinhado com as tendências do momento.Gratidão pela dedicação, e vamos nessa que essa semana teremos muito trabalho hein…",
      avatar: ai,
    },
    {
      id: 4,
      name: "@caren.rocha.massoterapeuta",
      text: "Irei expressar minha sincera gratidão pela parceria durante esses meses. Foi um período de muito aprendizado e resultados positivos, graças ao trabalho dedicado e profissionalismo de sua parte e fico muito satisfeita com o que conseguimos conquistar juntas.Embora estejamos encerrando nossa parceria neste momento, fico com a certeza de que o trabalho foi muito bem feito e que as experiências adquiridas ao longo dessa jornada agregarão muito para ambas as partes. Espero que, no futuro, surjam novas oportunidades para voltarmos a colaborar.",
      avatar: masso,
    },
    {
      id: 5,
      name: "@emilysantolinbeauty",
      text: "Ah eu amei demais super criativa, cada detalhe era um vídeo ou foto para render o máximo de materiais possíveis, assum a gnt vê que realmente vc se esforça para entregar o máximo para o cliente. Vídeos e fotos de altíssimas qualidades e edições perfeitas. Amei demais ❤",
      avatar: beauty,
    },
    {
      id: 6,
      name: "@studiollopez",
      text: "Eu gostei muito dos seus serviços, o meu Instagram ficou top todo mundo comentou que ficou bem profissional",
      avatar: studio,
    },
    {
      id: 7,
      name: "@jornadainglesbr",
      text: "Meu nome é Alexander, sou proprietário da JORNADA INGLÊS BR.  Um curso de inglês moderno e internacionalizado. Eu/nós temos trabalhado com o Nick nos últimos 4 meses com muita satisfação.  Nick nos ajudou a criar conteúdo para nossas mídias nas redes sociais, obtendo ótimos resultados.  Recomendo o Nick para quem busca: criação de conteúdo para redes sociais, edição de vídeos e planejamento estratégico",
      avatar: ingles,
    },
    {
      id: 8,
      name: "@joseumendonca.fotografia",
      text: "Conheci Nick através das redes sociais e a convidei para uma parceria porque percebi nela um talento. E a experiência só confirmou: uma pessoa inteligente, carismática, com muitas ideias, comprometida e profissional. Meu primeiro trabalho com ela já começou de forma impactante, abrindo portas para novos clientes e possibilidades. Uma parceira com quem quero ainda fazer muitos e muitos trabalhos.",
      avatar: foto,
    },
    {
      id: 9,
      name: "@oticasil3",
      text: "Você foi incrível no time de MKT e Criação de Conteúdos das Óticas IL3! Sua criatividade, dedicação e visão única fizeram toda a diferença, trazendo inovação a cada projeto. Foi um prazer ver seu talento brilhar em cada ação que você fez. Acreditamos que você está pronta para encarar novos desafios e conquistar ainda mais sucesso. O futuro é seu!",
      avatar: otica,
    }
  ]

  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  const handleDotClick = (index) => {
    setCurrentSlide(index)
  }

  return (
    <section id="clientes" className="py-20 px-6 md:px-12 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-navy text-center mb-16">
          O que nossos clientes dizem sobre nós:
        </h2>

        <div className="relative">
          {/* Testimonial Cards */}
          <div className="overflow-hidden">
            <div
              className="transition-transform duration-500 ease-in-out flex"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-24 h-24 rounded-full bg-gray-200 mb-6">
                      {testimonial.avatar && (
                        <img
                          src={testimonial.avatar || "/placeholder.svg"}
                          alt={testimonial.name}
                          className="w-full h-full rounded-full object-cover"
                        />
                      )}
                    </div>
                    <p className="text-gray-700 text-lg mb-4 italic">"{testimonial.text}"</p>
                    <p className="text-navy font-semibold">{testimonial.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 
                  ${currentSlide === index ? "bg-[#66A5AD]" : "bg-gray-300 hover:bg-gray-400"}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials

