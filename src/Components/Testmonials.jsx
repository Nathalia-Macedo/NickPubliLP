import React, { useState, useEffect } from "react"
import eu from '../Assets/eu linda.jpg'
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
      name: "Maria Silva",
      text: "Excelente trabalho! A equipe da Publi X transformou completamente nossa presença digital. Os resultados superaram todas as expectativas.",
      avatar: "/placeholder.svg",
    },
    {
      id: 3,
      name: "João Santos",
      text: "Profissionalismo e criatividade em cada projeto. Nossa empresa cresceu significativamente desde que começamos a trabalhar com a Publi X.",
      avatar: "/placeholder.svg",
    },
    {
      id: 4,
      name: "Ana Costa",
      text: "Estratégias certeiras e atendimento personalizado. A Publi X entende exatamente o que precisamos e entrega resultados impressionantes.",
      avatar: "/placeholder.svg",
    },
    {
      id: 5,
      name: "Pedro Oliveira",
      text: "A melhor decisão que tomamos foi contratar a Publi X. Nossa visibilidade aumentou e os resultados são consistentes mês após mês.",
      avatar: "/placeholder.svg",
    },
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

