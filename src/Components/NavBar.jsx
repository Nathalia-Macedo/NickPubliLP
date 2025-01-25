import React, { useState } from "react"
import Button from "./Button"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleLinkClick = (e, href) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const navLinks = [
    { href: "#sobre", text: "Sobre" },
    { href: "#servicos", text: "Serviços" },
    { href: "#clientes", text: "Clientes" },
  ]

  return (
    <nav className="relative z-50 bg-[#1B3168]">
      <div className="flex justify-between items-center py-4 px-6 md:px-12">
        <div className="w-24">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logotipo%201-UM6c7MyouIuoggx8QVSAoQcpGmwrl8.png"
            alt="Publi X Logo"
            className="w-full"
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white hover:text-opacity-80"
              onClick={(e) => handleLinkClick(e, link.href)}
            >
              {link.text}
            </a>
          ))}
          <Button variant="outline">Contato</Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`absolute top-full left-0 right-0 bg-[#1B3168] shadow-lg md:hidden transition-all duration-300 ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
      >
        <div className="flex flex-col p-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="py-2 text-white hover:text-opacity-80"
              onClick={(e) => handleLinkClick(e, link.href)}
            >
              {link.text}
            </a>
          ))}
          <Button variant="outline" className="mt-2" onClick={() => setIsMenuOpen(false)}>
            Contato
          </Button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

