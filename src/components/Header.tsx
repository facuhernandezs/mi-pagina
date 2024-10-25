import { BarChart2, Github, Linkedin, Mail } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <BarChart2 className="h-6 w-6 text-blue-600" />
          <span className="font-bold text-xl">Facundo Hernández</span>
        </div>
        <nav className="hidden md:flex gap-6">
          <a href="#inicio" className="hover:text-blue-600 transition-colors">Inicio</a>
          <a href="#habilidades" className="hover:text-blue-600 transition-colors">Habilidades</a>
          <a href="#proyectos" className="hover:text-blue-600 transition-colors">Proyectos</a>
          <a href="#cv" className="hover:text-blue-600 transition-colors">CV</a>
          <a href="#contacto" className="hover:text-blue-600 transition-colors">Contacto</a>
        </nav>
        <div className="flex items-center gap-4">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
            <Github className="h-5 w-5" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
            <Linkedin className="h-5 w-5" />
          </a>
          <a href="mailto:facundo@ejemplo.com" className="hover:text-blue-600 transition-colors">
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>
    </header>
  );
}