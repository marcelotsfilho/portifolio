const projects = [
  {
    id: 1,
    title: "Atlética Panterão",
    description: "Aplicação voltada para gestão da Atlética Panterão do CEFET-MG Leopoldina.",
    image: "./atletica-panterao.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/usuario/ecommerce",
    liveUrl: "https://atleticaleopoldina.netlify.app/",
    featured: true,
  },
  {
    id: 2,
    title: "Campus Aberto",
    description: "Projeto de extensão que conecta o Campus CEFET-MG Leopoldina a comunidade.",
    image: "./campus-aberto.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/usuario/dashboard",
    liveUrl: "https://campusaberto.netlify.app/",
    featured: true,
  },
  // {
  //   id: 3,
  //   title: "App de Tarefas",
  //   description: "Aplicativo de gerenciamento de tarefas com colaboração em equipe.",
  //   image: "/task-management-app.png",
  //   technologies: ["React Native", "Firebase", "TypeScript"],
  //   githubUrl: "https://github.com/usuario/task-app",
  //   liveUrl: "https://task-app-demo.vercel.app",
  //   featured: false,
  // },
  // {
  //   id: 4,
  //   title: "API RESTful",
  //   description: "API robusta para gerenciamento de usuários com autenticação JWT.",
  //   image: "/api-documentation-interface.png",
  //   technologies: ["Node.js", "Express", "JWT", "PostgreSQL"],
  //   githubUrl: "https://github.com/usuario/api-rest",
  //   liveUrl: "https://api-docs-demo.vercel.app",
  //   featured: false,
  // },
  // {
  //   id: 5,
  //   title: "Blog Pessoal",
  //   description: "Blog com sistema de CMS, comentários e otimização para SEO.",
  //   image: "/modern-blog-interface.png",
  //   technologies: ["Next.js", "MDX", "Tailwind", "Vercel"],
  //   githubUrl: "https://github.com/usuario/blog",
  //   liveUrl: "https://blog-demo.vercel.app",
  //   featured: false,
  // },
  // {
  //   id: 6,
  //   title: "Chat em Tempo Real",
  //   description: "Aplicação de chat com mensagens instantâneas e salas privadas.",
  //   image: "/placeholder-pw9c7.png",
  //   technologies: ["Socket.io", "React", "Node.js", "Redis"],
  //   githubUrl: "https://github.com/usuario/chat-app",
  //   liveUrl: "https://chat-demo.vercel.app",
  //   featured: false,
  // },
]

export default function Projects() {
  return (
    <section id="projetos" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-teal-400 to-purple-500 bg-clip-text text-transparent">Projetos</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className={`
                  group bg-slate-800 rounded-xl overflow-hidden border border-slate-700 
                  hover:border-teal-400/50 transition-all duration-300 transform hover:scale-105
                  ${project.featured ? "md:col-span-2 lg:col-span-1" : ""}
                `}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-white group-hover:text-teal-400 transition-colors duration-200">
                    {project.title}
                  </h3>

                  <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-slate-700 text-teal-300 rounded-full px-3 py-1 text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                      Código
                    </a>

                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-400 hover:text-teal-400 transition-colors duration-200"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="https://github.com/marcelotsfilho"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-500 to-purple-600 hover:from-teal-600 hover:to-purple-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              Ver Mais no GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
