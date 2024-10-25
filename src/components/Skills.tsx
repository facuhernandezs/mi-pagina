import { BarChart, Database, FileSpreadsheet, LineChart } from 'lucide-react';

const skills = [
  {
    icon: <BarChart className="h-8 w-8" />,
    title: "Power BI",
    description: "Creación de dashboards interactivos, DAX, modelado de datos y ETL"
  },
  {
    icon: <Database className="h-8 w-8" />,
    title: "SQL",
    description: "Consultas complejas, optimización de bases de datos, stored procedures"
  },
  {
    icon: <LineChart className="h-8 w-8" />,
    title: "Python",
    description: "Pandas, Matplotlib y análisis estadístico"
  },
  {
    icon: <FileSpreadsheet className="h-8 w-8" />,
    title: "Excel",
    description: "Fórmulas avanzadas, macros VBA, tablas dinámicas, modelado financiero"
  }
];

export default function Skills() {
  return (
    <section id="habilidades" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Habilidades Técnicas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="p-6 rounded-xl border border-gray-200 hover:border-blue-500 transition-colors group">
              <div className="text-blue-600 mb-4 group-hover:scale-110 transition-transform">
                {skill.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
              <p className="text-gray-600">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}