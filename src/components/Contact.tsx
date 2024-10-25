import { Mail, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contacto" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Contacto</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-4">Información de Contacto</h3>
            <div className="flex items-center gap-4">
              <Mail className="h-6 w-6 text-blue-600" />
              <div>
                <p className="font-medium">Correo</p>
                <a href="mailto:facundo123hernandez@gmail.com" className="text-gray-600 hover:text-blue-600">
                  facundo123hernandez@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="h-6 w-6 text-blue-600" />
              <div>
                <p className="font-medium">Teléfono</p>
                <a href="tel:+54 2964 473244" className="text-gray-600 hover:text-blue-600">
                  +54 2964 473244
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="h-6 w-6 text-blue-600" />
              <div>
                <p className="font-medium">Ubicación</p>
                <p className="text-gray-600">Buenos Aires, Argentina</p>
              </div>
            </div>
          </div>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Tu nombre"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Correo</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="tu@correo.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Mensaje</label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Tu mensaje"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}