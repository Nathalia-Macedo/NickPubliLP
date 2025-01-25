import React from "react"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#1B3168] text-white py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          {/* Logo and Tagline - Full width on mobile, 5 cols on desktop */}
          <div className="md:col-span-5 text-center md:text-left">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0489%202%204-9Klg54kkhoo9CdzIlPIrZTklO67t4a.png"
              alt="Publi X"
              className="w-24 mb-4 mx-auto md:mx-0"
            />
            <p className="text-lg mb-8 md:mb-0">
              Vamos transformar ideias
              <br />
              em sucesso juntos?
            </p>
          </div>

          {/* Navigation Columns - Organized in a grid on mobile */}
          <div className="md:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {/* Saiba Tudo Column */}
              <div className="text-center md:text-left">
                <h3 className="text-lg font-bold mb-4">Saiba Tudo</h3>
                <ul className="space-y-3">
                  <li>
                    <a href="#" className="hover:opacity-80 transition-opacity">
                      Política de Privacidade
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:opacity-80 transition-opacity">
                      Termos de Uso
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:opacity-80 transition-opacity">
                      FAQ ou Suporte
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:opacity-80 transition-opacity">
                      Sobre a Empresa
                    </a>
                  </li>
                </ul>
              </div>

              {/* Contatos Column */}
              <div className="text-center md:text-left">
                <h3 className="text-lg font-bold mb-4">Contatos</h3>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="mailto:publicagencybusiness@gmail.com"
                      className="hover:opacity-80 transition-opacity break-all"
                    >
                      publicagencybusiness@gmail.com
                    </a>
                  </li>
                  <li>
                    <a href="tel:71991594454" className="hover:opacity-80 transition-opacity">
                      71991594454
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:opacity-80 transition-opacity">
                      @publixagency
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright - Always centered */}
        <div className="text-center pt-8 mt-8 border-t border-white/10">
          <p className="text-sm opacity-80">© {currentYear} Publi X. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

