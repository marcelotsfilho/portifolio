export default function About() {
  return (
    <section id="sobre" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-teal-400 to-purple-500 bg-clip-text text-transparent">
              Sobre Mim
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="w-80 h-80 mx-auto relative">
                <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-purple-500 rounded-full blur-lg opacity-30"></div>
                <img
                  src="/marcelotsfilho.png"
                  alt="Foto do desenvolvedor"
                  className="relative z-10 w-full h-full object-cover rounded-full border-4 border-teal-400/50"
                />
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                Sou estudante de Engenharia da Computação no CEFET-MG, com forte interesse em desenvolvimento de software, 
                arquitetura de sistemas e resolução de problemas complexos. Tenho experiência em linguagens como PHP, JavaScript 
                e SQL, além de prática em frameworks e bibliotecas modernas para desenvolvimento web.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed">
                Minha filosofia é simples: código limpo, documentação clara e foco na experiência do usuário.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed">
                Atualmente, trabalho em projetos acadêmicos e pessoais que envolvem desde aplicações backend seguras e bem estruturadas 
                até interfaces interativas e responsivas.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <span className="bg-slate-800 text-teal-400 px-4 py-2 rounded-full text-sm font-medium">
                  🚀 Inovação
                </span>
                <span className="bg-slate-800 text-purple-400 px-4 py-2 rounded-full text-sm font-medium">
                  💡 Criatividade
                </span>
                <span className="bg-slate-800 text-pink-400 px-4 py-2 rounded-full text-sm font-medium">
                  🎯 Foco em Resultados
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
