import Button from "./Button"

const CallToAction = () => {
  const handleWhatsAppRedirect = (e) => {
    e.preventDefault()
    const phoneNumber = "5571981594454" // Número formatado para o WhatsApp
    const whatsappUrl = `https://wa.me/${phoneNumber}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <section className="bg-[#66A5AD] py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight">
            Transforme sua visão em resultados concretos.
            <br />
            Vamos criar juntos a história de sucesso da sua marca!
          </h2>
        </div>
        <a href="#" onClick={handleWhatsAppRedirect}>
          <Button
            className="px-8 py-4 text-lg font-bold bg-gradient-to-r from-[#4361EE] to-[#7209B7] text-white rounded-full 
            transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_20px_rgba(67,97,238,0.5)] 
            active:scale-95 hover:from-[#7209B7] hover:to-[#4361EE]"
          >
            Impulsione agora!
          </Button>
        </a>
      </div>
    </section>
  )
}

export default CallToAction

