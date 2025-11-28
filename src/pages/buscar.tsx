import { useState, useMemo } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Fuse from 'fuse.js';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { capitulos } from '../data/capitulos';

// Tipo para os itens de busca
interface SearchItem {
  type: 'capitulo' | 'subcapitulo';
  capitulo: string;
  capSlug: string;
  capIcone: string;
  capCor: string;
  subSlug?: string;
  titulo: string;
  descricao: string;
}

// Criar array de itens pesquisáveis (capítulos + subcapítulos)
const searchableItems: SearchItem[] = [
  // Adicionar capítulos
  ...capitulos.map((cap) => ({
    type: 'capitulo' as const,
    capitulo: cap.titulo,
    capSlug: cap.slug,
    capIcone: cap.icone,
    capCor: cap.cor,
    titulo: cap.titulo,
    descricao: cap.descricao,
  })),
  // Adicionar subcapítulos
  ...capitulos.flatMap((cap) =>
    cap.subcapitulos.map((sub) => ({
      type: 'subcapitulo' as const,
      capitulo: cap.titulo,
      capSlug: cap.slug,
      capIcone: cap.icone,
      capCor: cap.cor,
      subSlug: sub.slug,
      titulo: sub.titulo,
      descricao: `Subcapítulo de ${cap.titulo}`,
    }))
  ),
];

// Configurar Fuse.js
const fuseOptions = {
  keys: [
    { name: 'titulo', weight: 0.5 },
    { name: 'descricao', weight: 0.3 },
    { name: 'capitulo', weight: 0.2 },
  ],
  threshold: 0.4,
  includeScore: true,
  minMatchCharLength: 2,
};

const fuse = new Fuse(searchableItems, fuseOptions);

// Sugestões populares
const popularSearches = [
  'átomo',
  'planeta',
  'célula',
  'energia',
  'estrelas',
  'evolução',
  'magnetismo',
  'fotossíntese',
];

export default function Buscar() {
  const router = useRouter();
  const initialQuery = (router.query.q as string) || '';
  const [query, setQuery] = useState(initialQuery);
  const [isFocused, setIsFocused] = useState(false);

  // Resultados da busca com memoização
  const results = useMemo(() => {
    if (!query || query.length < 2) return [];
    return fuse.search(query).slice(0, 20).map((r) => r.item);
  }, [query]);

  // Agrupar resultados por capítulo
  const groupedResults = useMemo(() => {
    const groups: Record<string, SearchItem[]> = {};
    results.forEach((item) => {
      if (!groups[item.capSlug]) {
        groups[item.capSlug] = [];
      }
      groups[item.capSlug].push(item);
    });
    return groups;
  }, [results]);

  // Buscar ao clicar em sugestão
  const handleSuggestionClick = (term: string) => {
    setQuery(term);
  };

  // Limpar busca
  const clearSearch = () => {
    setQuery('');
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-purple-600 via-indigo-600 to-cyan-600 dark:from-purple-800 dark:via-indigo-800 dark:to-cyan-800 text-white py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              🔍 Buscar na Enciclopédia
            </h1>
            <p className="text-lg md:text-xl text-purple-100 max-w-2xl mx-auto mb-8">
              Encontre qualquer assunto científico em nossa base de conhecimento.
            </p>

            {/* Campo de Busca */}
            <div className="relative max-w-2xl mx-auto">
              <div
                className={`relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl transition-all duration-300 ${
                  isFocused ? 'ring-4 ring-cyan-300 dark:ring-cyan-600' : ''
                }`}
              >
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                  placeholder="Digite um termo... ex: energia, célula, universo"
                  className="w-full px-6 py-5 pr-24 text-lg bg-transparent text-gray-900 dark:text-gray-100 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none rounded-2xl"
                  aria-label="Campo de busca - digite um termo para pesquisar na enciclopédia"
                  autoFocus
                />
                
                {/* Botões dentro do input */}
                <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
                  {query && (
                    <button
                      onClick={clearSearch}
                      className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                      aria-label="Limpar busca"
                    >
                      ✕
                    </button>
                  )}
                  <div className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white p-3 rounded-xl">
                    🔍
                  </div>
                </div>
              </div>

              {/* Contador de resultados */}
              {query.length >= 2 && (
                <div className="mt-3 text-purple-100 text-sm">
                  {results.length > 0
                    ? `${results.length} resultado${results.length !== 1 ? 's' : ''} encontrado${results.length !== 1 ? 's' : ''}`
                    : 'Nenhum resultado encontrado'}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Sugestões Populares (quando não há busca) */}
        {!query && (
          <section className="max-w-4xl mx-auto px-4 py-8">
            <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4 text-center">
              ✨ Sugestões Populares
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {popularSearches.map((term) => (
                <button
                  key={term}
                  onClick={() => handleSuggestionClick(term)}
                  className="px-4 py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full border border-gray-200 dark:border-gray-700 hover:border-purple-500 dark:hover:border-purple-400 hover:text-purple-600 dark:hover:text-purple-400 transition-all shadow-sm hover:shadow-md"
                  aria-label={`Buscar por ${term}`}
                >
                  {term}
                </button>
              ))}
            </div>
          </section>
        )}

        {/* Resultados da Busca */}
        {query.length >= 2 && (
          <section className="max-w-4xl mx-auto px-4 py-8">
            {results.length > 0 ? (
              <div className="space-y-6">
                {Object.entries(groupedResults).map(([capSlug, items]) => {
                  const capInfo = capitulos.find((c) => c.slug === capSlug);
                  if (!capInfo) return null;

                  return (
                    <div
                      key={capSlug}
                      className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg dark:shadow-gray-900/50 overflow-hidden border border-gray-100 dark:border-gray-700"
                    >
                      {/* Header do grupo (capítulo) */}
                      <div className={`h-1 bg-gradient-to-r ${capInfo.cor}`} />
                      <div className="px-6 py-4 bg-gray-50 dark:bg-gray-800/50 border-b border-gray-100 dark:border-gray-700">
                        <Link
                          href={`/capitulo/${capSlug}`}
                          className="flex items-center gap-3 hover:opacity-80 transition-opacity"
                          aria-label={`Ir para capítulo ${capInfo.titulo}`}
                        >
                          <span className="text-2xl">{capInfo.icone}</span>
                          <span className="font-bold text-gray-800 dark:text-gray-100">
                            {capInfo.titulo}
                          </span>
                          <span className="text-xs bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-1 rounded-full">
                            {items.length} resultado{items.length !== 1 ? 's' : ''}
                          </span>
                        </Link>
                      </div>

                      {/* Lista de resultados do grupo */}
                      <div className="divide-y divide-gray-100 dark:divide-gray-700">
                        {items.map((item, idx) => (
                          <Link
                            key={`${item.capSlug}-${item.subSlug || 'main'}-${idx}`}
                            href={
                              item.type === 'capitulo'
                                ? `/capitulo/${item.capSlug}`
                                : `/capitulo/${item.capSlug}/${item.subSlug}`
                            }
                            className="group flex items-center justify-between px-6 py-4 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                            aria-label={`Ir para ${item.titulo}`}
                          >
                            <div className="flex-1">
                              <div className="flex items-center gap-2">
                                {item.type === 'capitulo' && (
                                  <span className="text-xs bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 px-2 py-0.5 rounded-full">
                                    Capítulo
                                  </span>
                                )}
                                <h3 className="font-semibold text-gray-800 dark:text-gray-100 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                                  {item.titulo}
                                </h3>
                              </div>
                              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                                {item.descricao}
                              </p>
                            </div>
                            <span className="text-gray-300 dark:text-gray-600 group-hover:text-purple-500 group-hover:translate-x-1 transition-all ml-4">
                              →
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              /* Nenhum resultado */
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🔎</div>
                <h2 className="text-xl font-bold text-gray-700 dark:text-gray-300 mb-2">
                  Nenhum resultado encontrado
                </h2>
                <p className="text-gray-500 dark:text-gray-400 mb-6">
                  Não encontramos nada para "<span className="font-semibold">{query}</span>".
                  <br />
                  Tente usar outras palavras-chave ou verifique a ortografia.
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  <button
                    onClick={clearSearch}
                    className="px-4 py-2 bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-full hover:opacity-90 transition-opacity"
                  >
                    🔄 Nova busca
                  </button>
                  <Link
                    href="/sumario"
                    className="px-4 py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full border border-gray-200 dark:border-gray-700 hover:border-purple-500 transition-colors"
                  >
                    📚 Ver sumário
                  </Link>
                </div>
              </div>
            )}
          </section>
        )}

        {/* Navegar por Capítulos (quando não há busca) */}
        {!query && (
          <section className="max-w-4xl mx-auto px-4 pb-12">
            <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-6 text-center">
              📖 Ou navegue pelos capítulos
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {capitulos.map((cap) => (
                <Link
                  key={cap.slug}
                  href={`/capitulo/${cap.slug}`}
                  className="group bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg dark:shadow-gray-900/50 overflow-hidden border border-gray-100 dark:border-gray-700 transition-all hover:scale-105"
                  aria-label={`Ir para capítulo ${cap.titulo}`}
                >
                  <div className={`h-1 bg-gradient-to-r ${cap.cor}`} />
                  <div className="p-4 text-center">
                    <div className="text-3xl mb-2">{cap.icone}</div>
                    <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-100 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                      {cap.titulo}
                    </h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      {cap.subcapitulos.length} tópicos
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Dicas de Busca */}
        <section className="bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 py-10">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-6 text-center">
              💡 Dicas de Busca
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
                <div className="text-2xl mb-3">🎯</div>
                <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-2">
                  Seja específico
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Use termos como "sistema solar" em vez de apenas "sistema".
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
                <div className="text-2xl mb-3">📝</div>
                <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-2">
                  Palavras-chave
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Tente usar nomes científicos ou conceitos principais.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
                <div className="text-2xl mb-3">🔄</div>
                <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-2">
                  Sinônimos
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Se não encontrar, tente palavras similares ou relacionadas.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
