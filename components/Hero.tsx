"use client";

export default function Hero() {
  const scrollToProjects = () => {
    const element = document.getElementById("projetos");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        {/* Floating particles effect */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-teal-400/30 rounded-full animate-ping"></div>
          <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-purple-400/40 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-pink-400/20 rounded-full animate-bounce delay-500"></div>
          <div className="absolute bottom-1/3 right-1/6 w-3 h-3 bg-pink-400/20 rounded-full animate-ping delay-500"></div>
          <div className="absolute bottom-1/2 left-1/6 w-4 h-4 bg-red-400/20 rounded-full animate-bounce delay-500"></div>
          <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-teal-300/50 rounded-full animate-ping delay-700"></div>
          <div className="absolute bottom-1/4 right-1/5 w-2 h-2 bg-purple-300/30 rounded-full animate-pulse delay-300"></div>
          <div className="absolute top-3/4 left-1/5 w-1 h-1 bg-pink-300/40 rounded-full animate-bounce delay-1200"></div>
          <div className="absolute top-3/5 left-2/5 w-2 h-2 bg-blue-300/40 rounded-full animate-ping delay-1200"></div>
        </div>
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-slate-950/30"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-7xl font-extrabold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-teal-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Marcelotsfilho
            </span>
            {/* <br /> */}
            {/* <span className="text-white text-5xl">Full Stack Developer</span> */}
          </h1>

          <p className="text-4xl md:text-6xl font-extrabold text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Full Stack Developer
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={scrollToProjects}
              className="bg-gradient-to-r from-teal-500 to-purple-600 hover:from-teal-600 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-teal-500/25"
            >
              Ver Projetos
            </button>

            <a
              href="#contato"
              className="border-2 border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-slate-950 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300"
            >
              Entre em Contato
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-teal-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-teal-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
