"use client"

import { useState, useEffect } from "react"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-slate-950/90 backdrop-blur-md border-b border-slate-800" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold bg-gradient-to-r from-teal-400 to-purple-500 bg-clip-text text-transparent">
            Portfólio
          </div>

          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection("inicio")}
              className="hover:text-teal-400 transition-colors duration-200"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection("sobre")}
              className="hover:text-teal-400 transition-colors duration-200"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("habilidades")}
              className="hover:text-teal-400 transition-colors duration-200"
            >
              Habilidades
            </button>
            <button
              onClick={() => scrollToSection("projetos")}
              className="hover:text-teal-400 transition-colors duration-200"
            >
              Projetos
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="hover:text-teal-400 transition-colors duration-200"
            >
              Contato
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}
