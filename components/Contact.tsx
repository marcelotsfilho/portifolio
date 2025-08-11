export default function Contact() {
  return (
    <section id="contato" className="py-20 bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            <span className="bg-gradient-to-r from-teal-400 to-purple-500 bg-clip-text text-transparent">
              Vamos Construir Algo Juntos?
            </span>
          </h2>

          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            Estou sempre aberto a novos desafios e oportunidades. Se você tem um projeto em mente ou quer apenas
            conversar sobre tecnologia, não hesite em entrar em contato!
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-slate-900 p-6 rounded-xl border border-slate-700 hover:border-teal-400/50 transition-all duration-300">
              <div className="text-3xl mb-4">
                <img
                  src="/email-icon.png"
                  alt="Email"
                  className="mx-auto w-10 h-10 object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-teal-400">Email</h3>
              <a
                href="mailto:seu.email@exemplo.com"
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                marcelo.estudo.cefet@gmail.com
              </a>
            </div>

            <div className="bg-slate-900 p-6 rounded-xl border border-slate-700 hover:border-teal-400/50 transition-all duration-300">
              <div className="text-3xl mb-4">
                <img
                  src="/linkedin-logo.png"
                  alt="LinkedIn"
                  className="mx-auto w-10 h-10 object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-teal-400">LinkedIn</h3>
              <a
                href="https://www.linkedin.com/in/marcelo-teixeira-574926311/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                /in/marcelo-teixeira
              </a>
            </div>

            <div className="bg-slate-900 p-6 rounded-xl border border-slate-700 hover:border-teal-400/50 transition-all duration-300">
              <div className="text-3xl mb-4">
                <img
                  src="/github-icon.png"
                  alt="GitHub"
                  className="mx-auto w-10 h-10 object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-teal-400">GitHub</h3>
              <a
                href="https://github.com/marcelotsfilho"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                @marcelotsfilho
              </a>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:seu.email@exemplo.com"
              className="bg-gradient-to-r from-teal-500 to-purple-600 hover:from-teal-600 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-teal-500/25"
            >
              Enviar Email
            </a>

            <a
              href="/professional-resume.png"
              download
              className="border-2 border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-slate-950 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
