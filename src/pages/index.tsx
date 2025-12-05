import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import Header from '../components/layout/Header';
import Sidebar from '../components/layout/Sidebar';
import Footer from '../components/layout/Footer';
import { capitulos } from '../data/capitulos';

// Importação dinâmica do Atom3D (client-side only)
const Atom3D = dynamic(() => import('../components/content/Atom3D'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[400px] md:h-[500px] rounded-2xl bg-gradient-to-b from-gray-900 via-indigo-950 to-purple-950 flex items-center justify-center">
      <div className="text-white/60 text-lg">Carregando átomo 3D...</div>
    </div>
  ),
});

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/buscar?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
      <Header />
      
      <main className="flex flex-1">
        <Sidebar />
        
        <div className="flex-1 overflow-y-auto">
          {/* Hero Section com Átomo 3D */}
          <section className="bg-gradient-to-b from-white to-cyan-50/30 dark:from-gray-900 dark:to-gray-900/50">
            <div className="px-4 py-6">
              <Atom3D />
            </div>
          </section>

          {/* Barra de Busca */}
          <section className="px-4 md:px-8 -mt-4">
            <form onSubmit={handleSearch} className="max-w-2xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Buscar na enciclopédia... (ex: átomo, fotossíntese, planetas)"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-6 py-4 pr-14 text-lg border-2 border-gray-200 dark:border-gray-700 rounded-2xl shadow-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:border-cyan-500 dark:focus:border-cyan-400 focus:ring-4 focus:ring-cyan-100 dark:focus:ring-cyan-900/50 transition-all"
                />
                <button 
                  type="submit"
                  className="absolute right-3 top-1/2 -translate-y-1/2 bg-gradient-to-r from-cyan-600 to-purple-600 text-white p-3 rounded-xl hover:opacity-90 transition-opacity"
                >
                  🔍
                </button>
              </div>
            </form>
          </section>

          {/* Seção de Boas-vindas */}
          <section className="px-4 md:px-8 py-12">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-10">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                  Bem-vindo à Enciclopédia da Ciência
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  Explore capítulos e subcapítulos para descobrir os mistérios do universo, 
                  da vida e da matéria de forma clara e acessível.
                </p>
              </div>

              {/* Grid de TODOS os Capítulos */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {capitulos.map((capitulo) => (
                  <Link
                    key={capitulo.slug}
                    href={`/capitulo/${capitulo.slug}`}
                    className="group bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl dark:shadow-gray-900/50 transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700"
                  >
                    <div className={`h-2 bg-gradient-to-r ${capitulo.cor}`}></div>
                    <div className="p-6">
                      <div className="flex items-center mb-3">
                        <span className="text-3xl mr-3">{capitulo.icone}</span>
                        <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                          {capitulo.titulo}
                        </h3>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        {capitulo.descricao}
                      </p>
                      <div className="mt-4 flex items-center text-cyan-600 text-sm font-medium">
                        Explorar capítulo
                        <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              {/* CTA para ver sumário */}
              <div className="text-center mt-10">
                <Link
                  href="/sumario"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-600 to-purple-600 text-white font-bold rounded-xl hover:opacity-90 transition-opacity shadow-lg"
                >
                  📚 Ver Sumário Completo
                  <span className="ml-2">→</span>
                </Link>
              </div>
            </div>
          </section>

          {/* Seção de Estatísticas */}
          <section className="px-4 md:px-8 py-12 bg-gradient-to-r from-cyan-600 to-purple-600">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
                <div>
                  <div className="text-4xl font-bold mb-2">10</div>
                  <div className="text-cyan-100 text-sm">Capítulos</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">207</div>
                  <div className="text-cyan-100 text-sm">Páginas</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">∞</div>
                  <div className="text-cyan-100 text-sm">Conhecimento</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">100%</div>
                  <div className="text-cyan-100 text-sm">Gratuito</div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

// Desabilitar layout global (esta página tem layout próprio)
Home.noLayout = true;
