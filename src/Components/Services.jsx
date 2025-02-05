import React from "react"
import programacao from '../Assets/programming.webp'
const Services = () => {
  const services = [
    {
      title: "Tráfego Pago",
      description:
        "O tráfego pago é a ferramenta perfeita para o retorno rápido e consistente para o cliente, pois ele traz resultados mensuráveis e reais.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1868-vigqNKVYP7Dwkm7Re66TXaqCvE5iRS.png",
      imageAlt: "Tráfego Pago Illustration",
      align: "left",
    },
    {
      title: "Social Media",
      description:
        "As redes sociais são o novo ouro do marketing digital. Aqui você encontrará as melhores estratégias para gerar engajamento e investimentos seguros em suas redes.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1864-EGmc036m4rCpSw4ks0VbNNhzHFewAr.png",
      imageAlt: "Social Media Illustration",
      align: "right",
    },
    {
      title: "Design",
      description:
        "Com design criativo e estratégico, criamos materiais que transmitem sua identidade, conectam com seu público e garantem resultados reais.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1872-KOhYBkSW604kR2J9gGQ0EvzVFuStVs.png",
      imageAlt: "Design Illustration",
      align: "left",
    },
    {
      title: "Filmmaker ou Videomaker",
      description:
        "Ideias em vídeos de alto impacto, unindo criatividade e técnica para contar histórias que engajam e comunicam com eficiência. Seja para conteúdos cinematográficos ou vídeos dinâmicos para redes sociais, garantimos captação e produção visual de qualidade.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1871-tKYRKxgOjz0C2BmrK206HPhLpyerFx.png",
      imageAlt: "Filmmaker Illustration",
      align: "right",
    },
    {
      title: "Edições de Vídeos",
      description:
        "Transformamos suas gravações em vídeos envolventes e impactantes, com cortes precisos, efeitos, trilha sonora e identidade visual. Do simples ao cinematográfico, entregamos edições que contam sua história do jeito certo!",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3f2ab655-f3f2-477a-980a-c0e1fdd5dbc0-XVUCNb1TOHQRgZFDFdoKSHTjZ3arVS.png",
      imageAlt: "Edições Illustration",
      align: "left",
    },
    {
      title: "Copywriting Estratégico",
      description:
        "Escrevemos para convencer, engajar e converter! Criamos mensagens persuasivas e autênticas para sua marca, transformando palavras em resultados. Seja para redes sociais, sites ou campanhas, entregamos copies que fazem a diferença!.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1ad292e6-c4dc-4ace-86ef-39389fe6854b-JrmOGf3qkvBpqKQnxVw9cwOXcpBg8t.png",
      imageAlt: "Copywriter Illustration",
      align: "right",
    },
    {
      title: "Programação",
      description:
        "Desenvolvemos sites sob medida, com programação de alta qualidade para garantir performance, segurança e eficiência. Nossos especialistas criam soluções digitais que atendem às suas necessidades e oferecem uma experiência de navegação perfeita para o seu público.",
      image:
        programacao,
      imageAlt: "Programming",
      align: "left",
    },
  ]

  return (
    <section id="servicos" className="relative bg-[#1B3168] py-20 px-6 md:px-12 overflow-hidden">
      {/* Dots Pattern Top Right */}
      <div className="absolute top-8 right-8">
        <div className="grid grid-cols-4 gap-2">
          {[...Array(16)].map((_, i) => (
            <div key={i} className="w-2 h-2 rounded-full bg-white opacity-20"></div>
          ))}
        </div>
      </div>

      {/* Dots Pattern Bottom Left */}
      <div className="absolute bottom-8 left-8">
        <div className="grid grid-cols-3 gap-2">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="w-2 h-2 rounded-full bg-white opacity-20"></div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">SERVIÇOS</h2>
          <p className="text-white/80 max-w-3xl mx-auto">
            Elevamos sua marca com ideias ousadas, estratégias certeiras e soluções que conectam, engajam e entregam
            resultados reais.
          </p>
        </div>

        {/* Services Grid */}
        <div className="space-y-20">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`flex flex-col ${service.align === "right" ? "md:flex-row-reverse" : "md:flex-row"} 
                items-center gap-8 md:gap-12`}
            >
              <div className="w-full md:w-1/2">
                <div className="bg-white/10 rounded-3xl p-6 backdrop-blur-sm">
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-white/80">{service.description}</p>
                </div>
              </div>
              <div className="w-full md:w-1/2 max-w-[300px] mx-auto">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.imageAlt}
                  className="w-full h-auto rounded-3xl shadow-lg"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services

