import Button from "./Button"

const Hero = () => {
  const handleWhatsAppRedirect = (e) => {
    e.preventDefault()
    const phoneNumber = "5571981594454" // Número formatado para o WhatsApp
    const whatsappUrl = `https://wa.me/${phoneNumber}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <div className="relative min-h-screen px-6 md:px-12 py-12 overflow-hidden bg-purple-50">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        {/* Dots Pattern */}
        <div className="absolute bottom-12 left-12">
          <div className="grid grid-cols-5 gap-2">
            {[...Array(15)].map((_, i) => (
              <div key={i} className="w-2 h-2 rounded-full bg-navy opacity-20"></div>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 max-w-7xl mx-auto">
        {/* Text Content */}
        <div className="flex-1 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-navy leading-tight">
            Publi X:
            <br />
            Onde estratégia e<br />
            inovação se encontram!
          </h1>
          <p className="text-gray-600 max-w-xl">
            Aqui, o "X" é o ele que conecta tecnologia, criatividade e resultados. Com anos de experiência e uma visão
            atual, criamos campanhas que posicionam marcas de forma única e impactante.
          </p>
          <p className="text-gray-600 max-w-xl">
            Somos uma agência nova, mas com bagagem para entregar soluções modernas, estratégicas e personalizadas para
            destacar sua empresa no mercado.
          </p>
          <div className="pt-4">
            {" "}
            {/* Adicionado espaçamento extra aqui */}
            <a href="#" onClick={handleWhatsAppRedirect}>
              <Button className="px-8 py-4 text-lg font-bold bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Impulsione agora!
              </Button>
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="flex-1 w-full max-w-[400px] lg:max-w-[450px]">
          <div className="rounded-3xl overflow-hidden border-8 border-white shadow-2xl">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Rectangle%204-M5hicb7dzaIgrIDJFzBZnJnnzfd5xR.png"
              alt="Professional portrait"
              className="w-full h-auto"
              width={450}
              height={518}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero

