import { useMemo } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import Header from '../../../components/layout/Header';
import Footer from '../../../components/layout/Footer';
import { capitulos } from '../../../data/capitulos';

// Importação dinâmica do componente 3D (client-side only)
const PlanetEarth3D = dynamic(
  () => import('../../../components/content/PlanetEarth3D'),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-[300px] md:h-[400px] rounded-2xl bg-gradient-to-b from-gray-950 via-indigo-950 to-blue-950 flex items-center justify-center">
        <div className="text-white/60 text-lg animate-pulse">🌍 Carregando planeta...</div>
      </div>
    ),
  }
);

export default function PlanetaTerra() {
  // Encontrar dados do capítulo atual
  const capitulo = useMemo(
    () => capitulos.find((c) => c.slug === 'planeta-terra'),
    []
  );

  // Encontrar capítulo anterior e próximo
  const capituloIndex = capitulos.findIndex((c) => c.slug === 'planeta-terra');
  const proximoCapitulo = capitulos[capituloIndex + 1];

  if (!capitulo) {
    return <div>Capítulo não encontrado</div>;
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
      <Header />

      <main className="flex-1">
        {/* Hero do Capítulo */}
        <section className={`bg-gradient-to-r ${capitulo.cor} py-12 md:py-16`}>
          <div className="max-w-5xl mx-auto px-4">
            {/* Breadcrumb */}
            <nav className="mb-6" aria-label="Breadcrumb">
              <ol className="flex items-center gap-2 text-sm text-white/80">
                <li>
                  <Link href="/" className="hover:text-white transition-colors">
                    Início
                  </Link>
                </li>
                <li>/</li>
                <li>
                  <Link href="/sumario" className="hover:text-white transition-colors">
                    Sumário
                  </Link>
                </li>
                <li>/</li>
                <li className="text-white font-medium">{capitulo.titulo}</li>
              </ol>
            </nav>

            {/* Título e descrição */}
            <div className="flex items-center gap-4 mb-4">
              <span className="text-5xl md:text-6xl">{capitulo.icone}</span>
              <div>
                <span className="text-white/80 text-sm font-medium">Capítulo 1</span>
                <h1 className="text-3xl md:text-5xl font-bold text-white">
                  {capitulo.titulo}
                </h1>
              </div>
            </div>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl">
              {capitulo.descricao}
            </p>

            {/* Stats do capítulo */}
            <div className="flex gap-6 mt-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">
                  {capitulo.subcapitulos.length}
                </div>
                <div className="text-white/70 text-sm">Subcapítulos</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">1</div>
                <div className="text-white/70 text-sm">de 10 capítulos</div>
              </div>
            </div>
          </div>
        </section>

        {/* Visualização 3D Compacta */}
        <section className="max-w-5xl mx-auto px-4 py-8">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100">
              🌐 Explore o Planeta Terra
            </h2>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Interativo • Arraste para girar
            </span>
          </div>
          <PlanetEarth3D />
        </section>

        {/* CTA para começar */}
        <section className="max-w-5xl mx-auto px-4 py-4">
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-6 md:p-8 text-center shadow-lg">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Pronto para explorar?
            </h2>
            <p className="text-white/90 mb-6 max-w-xl mx-auto">
              Comece sua jornada pelo Planeta Terra! Navegue pelos subcapítulos abaixo 
              ou inicie pela introdução.
            </p>
            <Link
              href="/capitulo/planeta-terra/introducao"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-green-700 font-bold rounded-xl hover:bg-green-50 transition-colors shadow-md"
            >
              🚀 Começar pela Introdução
            </Link>
          </div>
        </section>

        {/* Grid de Subcapítulos */}
        <section className="max-w-5xl mx-auto px-4 py-10">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">
            📚 Subcapítulos
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Escolha um tema para explorar em detalhes.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {capitulo.subcapitulos.map((sub, index) => (
              <Link
                key={sub.slug}
                href={`/capitulo/${capitulo.slug}/${sub.slug}`}
                className="group bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl dark:shadow-gray-900/50 overflow-hidden border border-gray-100 dark:border-gray-700 transition-all hover:scale-[1.02] hover:border-green-300 dark:hover:border-green-600"
                aria-label={`Ir para ${sub.titulo}`}
              >
                <div className={`h-1.5 bg-gradient-to-r ${capitulo.cor}`} />
                <div className="p-5">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-sm font-bold">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="font-semibold text-gray-800 dark:text-gray-100 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors flex-1">
                      {sub.titulo}
                    </span>
                    <span className="text-gray-300 dark:text-gray-600 group-hover:text-green-500 group-hover:translate-x-1 transition-all text-xl">
                      →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Resumo rápido do capítulo */}
        <section className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-gray-800 dark:to-gray-900 py-10">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-6 text-center">
              🌍 O que você vai aprender neste capítulo
            </h2>
            <div className="grid md:grid-cols-4 gap-4">
              {[
                { icone: '🪨', titulo: 'Geologia', desc: 'Estrutura interna, rochas, vulcões e terremotos' },
                { icone: '🌊', titulo: 'Hidrosfera', desc: 'Oceanos, rios, ciclo da água e vida marinha' },
                { icone: '🌬️', titulo: 'Atmosfera', desc: 'Clima, ventos, tempestades e fenômenos' },
                { icone: '⏳', titulo: 'História', desc: 'Eras geológicas, fósseis e evolução' },
              ].map((item) => (
                <div key={item.titulo} className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-md text-center">
                  <div className="text-3xl mb-3">{item.icone}</div>
                  <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-1">{item.titulo}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Navegação entre capítulos */}
        <section className="max-w-5xl mx-auto px-4 py-10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <Link
              href="/sumario"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-medium rounded-xl border border-gray-200 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-500 transition-colors shadow-md"
              aria-label="Voltar ao sumário"
            >
              ← Voltar ao Sumário
            </Link>

            {proximoCapitulo && (
              <Link
                href={`/capitulo/${proximoCapitulo.slug}`}
                className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${proximoCapitulo.cor} text-white font-medium rounded-xl hover:opacity-90 transition-opacity shadow-md`}
                aria-label={`Ir para próximo capítulo: ${proximoCapitulo.titulo}`}
              >
                {proximoCapitulo.icone} Próximo Capítulo: {proximoCapitulo.titulo} →
              </Link>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
