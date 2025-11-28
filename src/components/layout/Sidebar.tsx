import Link from 'next/link';
import { capitulos } from '../../data/capitulos';

export default function Sidebar() {
  return (
    <aside className="hidden lg:block w-72 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 min-h-screen overflow-y-auto transition-colors duration-300">
      <div className="p-4">
        <h3 className="font-bold text-gray-800 dark:text-gray-100 mb-4 text-lg flex items-center">
          <span className="mr-2">📖</span>
          Capítulos
        </h3>
        
        <nav className="space-y-2">
          {capitulos.map((capitulo) => (
            <Link
              key={capitulo.slug}
              href={`/capitulo/${capitulo.slug}`}
              className="block px-3 py-2.5 text-gray-700 dark:text-gray-300 hover:bg-gradient-to-r hover:from-cyan-50 hover:to-purple-50 dark:hover:from-cyan-900/30 dark:hover:to-purple-900/30 rounded-lg transition-all duration-200 text-sm font-medium border border-transparent hover:border-cyan-200 dark:hover:border-cyan-700"
            >
              <span className="mr-2">{capitulo.icone}</span>
              {capitulo.titulo}
            </Link>
          ))}
        </nav>

        <div className="mt-6 p-4 bg-gradient-to-r from-cyan-50 to-purple-50 dark:from-cyan-900/30 dark:to-purple-900/30 rounded-xl border border-cyan-100 dark:border-cyan-800">
          <p className="text-sm text-gray-600 dark:text-gray-300">
            <span className="font-semibold text-cyan-700 dark:text-cyan-400">207 páginas</span> de conteúdo científico para explorar!
          </p>
        </div>
      </div>
    </aside>
  );
}
