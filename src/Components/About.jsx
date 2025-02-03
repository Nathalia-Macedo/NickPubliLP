// import React from "react"

// const About = () => {
//   const features = [
//     {
//       icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/icons8-criatividade-50%20(1)-ziNlVckRlUQyIenizwURhJJnbygnVo.png",
//       title: "Criatividade",
//       description:
//         "Transformamos ideias em ações, com soluções únicas e impactantes, destacando cada marca no mercado.",
//     },
//     {
//       icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/icons8-agile-64%201-ZwjVx79TcbIktkxrh8gmT55FUjPDTL.png",
//       title: "Agilidade",
//       description: "Processos rápidos e eficientes para entregar resultados de qualidade sem perder tempo.",
//     },
//     {
//       icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/icons8-compartilhamento-de-conhecimento-50-Xa4ns9eBYokmC3tGLXcdJwDyVRFwmc.png",
//       title: "Conhecimento",
//       description: "Com ampla experiência, estamos sempre atualizados para oferecer estratégias inovadoras e eficazes.",
//     },
//     {
//       icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/icons8-inova%C3%A7%C3%A3o-50-yJvdnDD8tuLRBCdTNmqqD2iXr71ddZ.png",
//       title: "Inovação",
//       description: "Buscamos constantemente novas soluções e abordagens para surpreender e impulsionar marcas.",
//     },
//   ]

//   return (
//     <section id="sobre" className="relative bg-[#1B3168] py-20 px-6 md:px-12 overflow-hidden">
//       {/* Main Content */}
//       <div className="max-w-7xl mx-auto">
//         {/* About Card */}
//         <div className="bg-[#66A5AD] rounded-3xl p-8 md:p-12 mb-16 relative overflow-hidden">
//           <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
//             <div className="max-w-2xl">
//               <h2 className="text-3xl md:text-4xl font-medium text-white mb-6">Sobre a agência</h2>
//               <div className="space-y-4 text-white">
//                 <p>
//                   Somos a Publi X, onde a criatividade não tem limites e o impossível se torna apenas o começo. Em um
//                   mundo saturado de soluções comuns, nós criamos algo novo, algo que se destaca e faz a diferença.
//                 </p>
//                 <p>
//                   Cada ideia que transformamos é uma revolução, cada campanha, uma história que vai além do
//                   convencional. Acreditamos que a inovação é a chave para o sucesso, e estamos aqui para desbloquear o
//                   potencial ilimitado das marcas.
//                 </p>
//               </div>
//             </div>
//             <img
//               src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logotipo%20(1)-8sagoVqoxBb1xqia0rYqG1cMO8XfkO.png"
//               alt="Publi X Logo"
//               className="w-48 md:w-64 lg:w-96 mx-auto md:mx-0"
//             />
//           </div>
//         </div>

//         {/* Features Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {features.map((feature, index) => (
//             <div key={index} className="text-center text-white">
//               <div className="mb-4 flex justify-center">
//                 <img src={feature.icon || "/placeholder.svg"} alt={feature.title} className="w-12 h-12" />
//               </div>
//               <h3 className="text-sky-400 text-lg font-semibold mb-2">{feature.title}</h3>
//               <p className="text-sm opacity-90">{feature.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

// export default About

const About = () => {
  const features = [
    {
      icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/icons8-criatividade-50%20(1)-ziNlVckRlUQyIenizwURhJJnbygnVo.png",
      title: "Criatividade",
      description:
        "Transformamos ideias em ações, com soluções únicas e impactantes, destacando cada marca no mercado.",
    },
    {
      icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/icons8-agile-64%201-ZwjVx79TcbIktkxrh8gmT55FUjPDTL.png",
      title: "Agilidade",
      description: "Processos rápidos e eficientes para entregar resultados de qualidade sem perder tempo.",
    },
    {
      icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/icons8-compartilhamento-de-conhecimento-50-Xa4ns9eBYokmC3tGLXcdJwDyVRFwmc.png",
      title: "Conhecimento",
      description: "Com ampla experiência, estamos sempre atualizados para oferecer estratégias inovadoras e eficazes.",
    },
    {
      icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/icons8-inova%C3%A7%C3%A3o-50-yJvdnDD8tuLRBCdTNmqqD2iXr71ddZ.png",
      title: "Inovação",
      description: "Buscamos constantemente novas soluções e abordagens para surpreender e impulsionar marcas.",
    },
  ]

  return (
    <section
      id="sobre"
      className="relative bg-[#1B3168] py-20 px-6 md:px-12 overflow-hidden"
      style={{
        backgroundImage:
          'url("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group%2010-Hdip55kNEyp0tVurZAyi54D7h6si7z.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "rgba(27, 49, 104, 0.95)",
        backgroundBlendMode: "multiply",
      }}
    >
      {/* Main Content */}
      <div className="max-w-7xl mx-auto">
        {/* About Card */}
        <div className="bg-[#66A5AD] rounded-3xl p-8 md:p-12 mb-16 relative overflow-hidden">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-medium text-white mb-6">Sobre a agência</h2>
              <div className="space-y-4 text-white">
                <p>
                  Somos a Publi X, onde a criatividade não tem limites e o impossível se torna apenas o começo. Em um
                  mundo saturado de soluções comuns, nós criamos algo novo, algo que se destaca e faz a diferença.
                </p>
                <p>
                  Cada ideia que transformamos é uma revolução, cada campanha, uma história que vai além do
                  convencional. Acreditamos que a inovação é a chave para o sucesso, e estamos aqui para desbloquear o
                  potencial ilimitado das marcas.
                </p>
              </div>
            </div>
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logotipo%20(1)-8sagoVqoxBb1xqia0rYqG1cMO8XfkO.png"
              alt="Publi X Logo"
              className="w-48 md:w-64 lg:w-96 mx-auto md:mx-0"
            />
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center text-white">
              <div className="mb-4 flex justify-center">
                <img src={feature.icon || "/placeholder.svg"} alt={feature.title} className="w-12 h-12" />
              </div>
              <h3 className="text-sky-400 text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm opacity-90">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About

