"use client"

import { useState } from "react"

const technologies = [
  { name: "React", icon: "./react-icon.png", color: "from-blue-400 to-cyan-400" },
  { name: "Next.js", icon: "./nextjs-icon.png", color: "from-gray-400 to-gray-600" },
  { name: "JavaScript", icon: "./javascript-icon.png", color: "from-blue-500 to-blue-700" },
  { name: "TypeScript", icon: "./typescript-icon.png", color: "from-blue-500 to-blue-700" },
  { name: "Node.js", icon: "./node-icon.png", color: "from-green-400 to-green-600" },
  { name: "MySQL", icon: "./mysql-icon.png", color: "from-blue-600 to-indigo-600" },
  { name: "Docker", icon: "./docker-icon.png", color: "from-blue-400 to-blue-600" },
  { name: "Tailwind", icon: "./tailwind-css-icon.png", color: "from-teal-400 to-blue-500" },
]

export default function Skills() {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null)

  return (
    <section id="habilidades" className="py-20 bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-teal-400 to-purple-500 bg-clip-text text-transparent">
              Tecnologias
            </span>
          </h2>

          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6">
            {technologies.map((tech) => (
              <div
                key={tech.name}
                className="relative group cursor-pointer"
                onMouseEnter={() => setHoveredTech(tech.name)}
                onMouseLeave={() => setHoveredTech(null)}
              >
                <div
                  className={`
                  bg-slate-800 hover:bg-slate-700 rounded-xl p-6 text-center transition-all duration-300 
                  transform hover:scale-110 hover:shadow-lg border border-slate-700 hover:border-teal-400/50
                  ${hoveredTech === tech.name ? "scale-110 shadow-lg border-teal-400/50" : ""}
                `}
                >
                  <div className="text-3xl mb-2">
                    {tech.icon.endsWith(".png") || tech.icon.endsWith(".jpg") || tech.icon.endsWith(".svg") ? (
                      <img
                        src={tech.icon}
                        alt={tech.name}
                        className="mx-auto w-10 h-10 object-contain"
                      />
                    ) : (
                      tech.icon
                    )}
                  </div>
                  <div
                    className={`
                    text-sm font-medium transition-all duration-300
                    ${hoveredTech === tech.name ? "text-teal-400" : "text-gray-400"}
                  `}
                  >
                    {tech.name}
                  </div>
                </div>

                {/* Tooltip */}
                {hoveredTech === tech.name && (
                  <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-slate-800 text-white px-3 py-1 rounded-lg text-sm font-medium border border-teal-400/50 z-10">
                    {tech.name}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-800"></div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
              Sempre em busca de novas tecnologias e metodologias para criar soluções mais eficientes e inovadoras. Meu
              foco está em manter-me atualizado com as melhores práticas do mercado.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
