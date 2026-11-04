import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center text-center px-6 bg-ice-50">
      <main>
        <h1 className="text-8xl font-extrabold text-navy-900">404</h1>
        <p className="mt-4 text-lg text-navy-800">Página não encontrada</p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-600 text-white font-semibold hover:bg-brand-500 transition-colors"
        >
          <ArrowLeft size={18} /> Voltar ao início
        </Link>
      </main>
    </div>
  );
}
