import { Download, FileText } from 'lucide-react';

export default function CV() {
  return (
    <section id="cv" className="py-20 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-16">Currículum Vitae</h2>
        <div className="max-w-2xl mx-auto bg-gray-50 p-8 rounded-xl shadow-sm">
          <FileText className="h-16 w-16 mx-auto text-blue-600 mb-6" />
          <p className="text-gray-600 mb-8">
            Descarga mi CV completo para conocer más sobre mi
          </p>
          <a
            href="/cv-facundo-hernandez.pdf"
            download
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Download className="h-5 w-5" />
            Descargar CV
          </a>
        </div>
      </div>
    </section>
  );
}