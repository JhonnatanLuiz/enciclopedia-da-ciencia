import Link from 'next/link';
import ThemeToggle from '../ui/ThemeToggle';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-cyan-600 via-purple-600 to-indigo-600 dark:from-cyan-700 dark:via-purple-700 dark:to-indigo-700 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo e Título */}
          <Link href="/" className="flex items-center space-x-3 hover:opacity-90 transition-opacity">
            <div className="bg-white dark:bg-gray-900 text-cyan-600 dark:text-cyan-400 font-bold text-xl px-3 py-1 rounded-lg shadow">
              🔬
            </div>
            <span className="text-2xl font-bold hidden sm:block">Enciclopédia da Ciência</span>
            <span className="text-xl font-bold sm:hidden">Enciclopédia</span>
          </Link>

          {/* Navegação Desktop */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link 
              href="/sumario" 
              className="hover:text-cyan-200 transition-colors font-medium"
            >
              📚 Sumário
            </Link>
            <Link 
              href="/buscar" 
              className="hover:text-cyan-200 transition-colors font-medium"
            >
              🔍 Buscar
            </Link>
            <ThemeToggle />
          </nav>

          {/* Menu Mobile */}
          <div className="md:hidden flex items-center space-x-4">
            <Link 
              href="/sumario" 
              className="hover:text-cyan-200 transition-colors text-sm"
            >
              📚
            </Link>
            <Link 
              href="/buscar" 
              className="hover:text-cyan-200 transition-colors text-sm"
            >
              🔍
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
