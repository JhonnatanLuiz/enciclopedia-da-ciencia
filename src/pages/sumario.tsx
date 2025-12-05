import { useState } from 'react';
import Link from 'next/link';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { capitulos } from '../data/capitulos';

export default function Sumario() {
  const [expandedCapitulos, setExpandedCapitulos] = useState<string[]>([]);
  const [allExpanded, setAllExpanded] = useState(false);

  // Toggle individual capítulo
  const toggleCapitulo = (slug: string) => {
    setExpandedCapitulos((prev) =>
      prev.includes(slug)
        ? prev.filter((s) => s !== slug)
        : [...prev, slug]
    );
  };

  // Expandir/colapsar todos
  const toggleAll = () => {
    if (allExpanded) {
      setExpandedCapitulos([]);
    } else {
      setExpandedCapitulos(capitulos.map((c) => c.slug));
    }
    setAllExpanded(!allExpanded);
  };

  // Contar total de subcapítulos
  const totalSubcapitulos = capitulos.reduce(
    (acc, cap) => acc + cap.subcapitulos.length,
    0
  );

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-cyan-600 via-purple-600 to-indigo-700 dark:from-cyan-800 dark:via-purple-800 dark:to-indigo-900 text-white py-12 md:py-16">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              📚 Sumário da Enciclopédia
            </h1>
            <p className="text-lg md:text-xl text-cyan-100 max-w-2xl mx-auto mb-6">
              Explore todos os capítulos e subcapítulos organizados por tema.
              Navegue pelo conhecimento científico de forma clara e acessível.
            </p>
            
            {/* Estatísticas */}
            <div className="flex justify-center gap-8 mt-6">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold">{capitulos.length}</div>
                <div className="text-cyan-200 text-sm">Capítulos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold">{totalSubcapitulos}</div>
                <div className="text-cyan-200 text-sm">Subcapítulos</div>
              </div>
            </div>
          </div>
        </section>

        {/* Controles */}
        <section className="max-w-5xl mx-auto px-4 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Clique em um capítulo para ver seus subcapítulos
            </p>
            <button
              onClick={toggleAll}
              className="px-4 py-2 bg-gradient-to-r from-cyan-600 to-purple-600 text-white text-sm font-medium rounded-full hover:opacity-90 transition-all shadow-md"
              aria-label={allExpanded ? 'Colapsar todos os capítulos' : 'Expandir todos os capítulos'}
            >
              {allExpanded ? '🔼 Colapsar Todos' : '🔽 Expandir Todos'}
            </button>
          </div>
        </section>

        {/* Lista de Capítulos Accordion */}
        <section className="max-w-5xl mx-auto px-4 pb-12">
          <div className="space-y-4">
            {capitulos.map((capitulo, index) => {
              const isExpanded = expandedCapitulos.includes(capitulo.slug);
              const accordionId = `accordion-content-${capitulo.slug}`;

              return (
                <div
                  key={capitulo.slug}
                  className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg dark:shadow-gray-900/50 overflow-hidden border border-gray-100 dark:border-gray-700 transition-all duration-300"
                >
                  {/* Barra de cor do capítulo */}
                  <div className={`h-1.5 bg-gradient-to-r ${capitulo.cor}`} />

                  {/* Header do Accordion (clicável) */}
                  <button
                    onClick={() => toggleCapitulo(capitulo.slug)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                    aria-expanded={isExpanded}
                    aria-controls={accordionId}
                    aria-label={`${capitulo.titulo}: ${capitulo.descricao}. ${isExpanded ? 'Clique para colapsar' : 'Clique para expandir'}`}
                  >
                    <div className="flex items-center gap-4">
                      {/* Número do capítulo */}
                      <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${capitulo.cor} flex items-center justify-center text-white font-bold text-lg shadow-md`}>
                        {index + 1}
                      </div>
                      
                      {/* Ícone e Título */}
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-2xl" role="img" aria-hidden="true">
                            {capitulo.icone}
                          </span>
                          <h2 className="text-lg md:text-xl font-bold text-gray-800 dark:text-gray-100">
                            {capitulo.titulo}
                          </h2>
                        </div>
                        <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                          {capitulo.descricao}
                        </p>
                      </div>
                    </div>

                    {/* Indicador de expansão e contagem */}
                    <div className="flex items-center gap-3">
                      <span className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded-full">
                        {capitulo.subcapitulos.length} tópicos
                      </span>
                      <span
                        className={`text-gray-400 dark:text-gray-500 transition-transform duration-300 ${
                          isExpanded ? 'rotate-180' : ''
                        }`}
                      >
                        ▼
                      </span>
                    </div>
                  </button>

                  {/* Conteúdo do Accordion (subcapítulos) */}
                  <div
                    id={accordionId}
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
                    role="region"
                    aria-labelledby={`accordion-header-${capitulo.slug}`}
                  >
                    <div className="px-6 pb-6 pt-2 border-t border-gray-100 dark:border-gray-700">
                      {/* Grid de subcapítulos */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                        {capitulo.subcapitulos.map((sub, subIndex) => (
                          <Link
                            key={sub.slug}
                            href={`/capitulo/${capitulo.slug}/${sub.slug}`}
                            className="group flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-all"
                            aria-label={`Ir para ${sub.titulo} no capítulo ${capitulo.titulo}`}
                          >
                            {/* Número do subcapítulo */}
                            <span className="text-xs text-gray-400 dark:text-gray-500 font-mono w-6">
                              {String(subIndex + 1).padStart(2, '0')}
                            </span>
                            
                            {/* Título com hover effect */}
                            <span className="text-gray-700 dark:text-gray-300 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors flex-1">
                              {sub.titulo}
                            </span>
                            
                            {/* Seta de navegação */}
                            <span className="text-gray-300 dark:text-gray-600 group-hover:text-cyan-500 group-hover:translate-x-1 transition-all">
                              →
                            </span>
                          </Link>
                        ))}
                      </div>

                      {/* Link para página principal do capítulo */}
                      <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                        <Link
                          href={`/capitulo/${capitulo.slug}`}
                          className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${capitulo.cor} text-white text-sm font-medium rounded-full hover:opacity-90 transition-all shadow-md`}
                          aria-label={`Ver página principal do capítulo ${capitulo.titulo}`}
                        >
                          {capitulo.icone} Explorar {capitulo.titulo}
                          <span>→</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Navegação rápida */}
        <section className="bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 py-10">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-6 text-center">
              🚀 Navegação Rápida por Capítulo
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {capitulos.map((cap) => (
                <Link
                  key={cap.slug}
                  href={`/capitulo/${cap.slug}`}
                  className={`px-4 py-2 bg-gradient-to-r ${cap.cor} text-white text-sm font-medium rounded-full hover:opacity-90 hover:scale-105 transition-all shadow-md`}
                  aria-label={`Ir para capítulo ${cap.titulo}`}
                >
                  {cap.icone} {cap.titulo}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-12 px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
              Pronto para explorar?
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Comece sua jornada pelo conhecimento científico agora mesmo!
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/"
                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-cyan-600 to-purple-600 text-white font-bold rounded-xl hover:opacity-90 transition-opacity shadow-lg"
                aria-label="Voltar para a página inicial"
              >
                🏠 Página Inicial
              </Link>
              <Link
                href="/buscar"
                className="inline-flex items-center justify-center px-6 py-3 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 font-bold rounded-xl border-2 border-gray-200 dark:border-gray-700 hover:border-cyan-500 dark:hover:border-cyan-400 transition-colors shadow-lg"
                aria-label="Ir para página de busca"
              >
                🔍 Buscar Conteúdo
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

// Desabilitar layout global (esta página tem layout próprio)
Sumario.noLayout = true;
