import { ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white pt-16">
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-600 text-transparent bg-clip-text">
          Analista de Datos
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Transformando datos en decisiones estratégicas. Especializado en visualización de datos y
          business intelligence.
        </p>
        <div className="flex justify-center gap-4">
          <a href="#contacto" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Contactar
          </a>
          <a href="#proyectos" className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors">
            Ver Proyectos
          </a>
        </div>
        <div className="mt-16 animate-bounce">
          <ArrowDown className="h-6 w-6 mx-auto text-gray-400" />
        </div>
      </div>
    </section>
  );
}