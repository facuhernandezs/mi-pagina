import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "Análisis de Ventas Retail",
    description: "Dashboard interactivo en Power BI para análisis de ventas, tendencias y KPIs principales",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    tools: ["Power BI", "SQL", "Excel"],
    link: "https://ejemplo.com/proyecto1"
  },
  {
    title: "Predicción de Demanda",
    description: "Modelo predictivo en Python para forecast de demanda de productos",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    tools: ["Python", "Scikit-learn", "Pandas"],
    link: "https://ejemplo.com/proyecto2"
  },
  {
    title: "Optimización de Inventario",
    description: "Análisis y optimización de niveles de inventario usando SQL y Excel",
    image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&q=80&w=800",
    tools: ["SQL", "Excel", "Power BI"],
    link: "https://ejemplo.com/proyecto3"
  }
];

export default function Projects() {
  return (
    <section id="proyectos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Proyectos Destacados</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tools.map((tool, i) => (
                    <span key={i} className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                      {tool}
                    </span>
                  ))}
                </div>
                <a href={project.link} target="_blank" rel="noopener noreferrer"
                   className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors">
                  <ExternalLink className="h-5 w-5" />
                  Ver Proyecto
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}