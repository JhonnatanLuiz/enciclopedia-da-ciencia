import Head from "next/head";
import Link from "next/link";
import dynamic from "next/dynamic";
import { FaSun, FaGlobeAmericas, FaMoon, FaRocket, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { GiMoonOrbit } from "react-icons/gi";

// Importação dinâmica do componente 3D para evitar erros de SSR
const SolarSystem3D = dynamic(
  () => import("@/components/content/SolarSystem3D"),
  { ssr: false, loading: () => (
    <div className="w-full h-[500px] rounded-2xl bg-slate-900 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-500 mx-auto mb-4"></div>
        <p className="text-gray-400">Carregando Sistema Solar 3D...</p>
      </div>
    </div>
  )}
);

// Dados dos planetas
const planetas = [
  {
    nome: "Mercúrio",
    icon: "☿️",
    tipo: "Rochoso",
    distancia: "57,9 milhões km",
    diametro: "4.879 km",
    curiosidade: "O planeta mais próximo do Sol completa uma órbita em apenas 88 dias terrestres.",
  },
  {
    nome: "Vênus",
    icon: "♀️",
    tipo: "Rochoso",
    distancia: "108,2 milhões km",
    diametro: "12.104 km",
    curiosidade: "O planeta mais quente do Sistema Solar, com temperaturas de até 465°C.",
  },
  {
    nome: "Terra",
    icon: "🌍",
    tipo: "Rochoso",
    distancia: "149,6 milhões km",
    diametro: "12.742 km",
    curiosidade: "O único planeta conhecido com vida e água líquida em abundância.",
  },
  {
    nome: "Marte",
    icon: "♂️",
    tipo: "Rochoso",
    distancia: "227,9 milhões km",
    diametro: "6.779 km",
    curiosidade: "Possui o maior vulcão do Sistema Solar: Monte Olimpo, com 21 km de altura.",
  },
  {
    nome: "Júpiter",
    icon: "♃",
    tipo: "Gasoso",
    distancia: "778,5 milhões km",
    diametro: "139.820 km",
    curiosidade: "Sua Grande Mancha Vermelha é uma tempestade maior que a Terra, ativa há mais de 400 anos.",
  },
  {
    nome: "Saturno",
    icon: "♄",
    tipo: "Gasoso",
    distancia: "1,4 bilhões km",
    diametro: "116.460 km",
    curiosidade: "Seus anéis são compostos principalmente de gelo e rocha, com 282.000 km de extensão.",
  },
  {
    nome: "Urano",
    icon: "⛢",
    tipo: "Gigante de Gelo",
    distancia: "2,9 bilhões km",
    diametro: "50.724 km",
    curiosidade: "O único planeta que rotaciona 'deitado', com inclinação axial de 98°.",
  },
  {
    nome: "Netuno",
    icon: "♆",
    tipo: "Gigante de Gelo",
    distancia: "4,5 bilhões km",
    diametro: "49.244 km",
    curiosidade: "Possui os ventos mais fortes do Sistema Solar, atingindo 2.100 km/h.",
  },
];

// Dados do Sol
const dadosSol = {
  diametro: "1.392.684 km",
  massa: "1,989 × 10³⁰ kg",
  temperatura: "5.500°C (superfície) / 15 milhões °C (núcleo)",
  composicao: "73% Hidrogênio, 25% Hélio, 2% outros",
  idade: "4,6 bilhões de anos",
};

export default function SistemaSolar() {
  return (
    <>
      <Head>
        <title>Sistema Solar | Enciclopédia da Ciência</title>
        <meta
          name="description"
          content="Explore o Sistema Solar, seus planetas, luas e mistérios cósmicos. Visualização 3D interativa."
        />
      </Head>

      <main className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/textures/stars-bg.jpg')] opacity-20"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-slate-900"></div>

          <div className="relative container mx-auto px-4 py-12">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
              <Link href="/" className="hover:text-cyan-400 transition-colors">Início</Link>
              <span>/</span>
              <Link href="/capitulo/planeta-terra" className="hover:text-cyan-400 transition-colors">Planeta Terra</Link>
              <span>/</span>
              <span className="text-cyan-400">Sistema Solar</span>
            </nav>

            {/* Título */}
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 rounded-2xl bg-gradient-to-br from-yellow-500/20 to-orange-500/20 border border-yellow-500/30">
                <FaSun className="text-4xl text-yellow-400" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-white">
                  Sistema Solar
                </h1>
                <p className="text-gray-400 mt-1">Capítulo: Planeta Terra</p>
              </div>
            </div>

            {/* Introdução */}
            <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
              Explore o <span className="text-cyan-400 font-semibold">Sistema Solar</span>, 
              nossa vizinhança cósmica composta pelo Sol e todos os objetos que orbitam ao 
              seu redor: <span className="text-yellow-400">8 planetas</span>, mais de 
              <span className="text-purple-400"> 200 luas</span>, asteroides, cometas e muito mais.
            </p>
          </div>
        </section>

        {/* Visualização 3D */}
        <section className="container mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <GiMoonOrbit className="text-cyan-400" />
            Visualização Interativa
          </h2>
          <SolarSystem3D />
        </section>

        {/* O Sol */}
        <section className="container mx-auto px-4 py-12">
          <div className="bg-gradient-to-r from-yellow-900/30 to-orange-900/30 rounded-2xl p-8 border border-yellow-500/20">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="text-4xl">☀️</span> O Sol: Nossa Estrela
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4 text-gray-300">
                <p className="text-lg leading-relaxed">
                  O <span className="text-yellow-400 font-semibold">Sol</span> é a estrela 
                  central do nosso sistema, responsável por 99,86% de toda a massa. É uma 
                  esfera quase perfeita de plasma quente, gerando energia através da 
                  <span className="text-orange-400"> fusão nuclear</span> de hidrogênio em hélio.
                </p>
                <p className="leading-relaxed">
                  A luz solar leva aproximadamente <span className="text-cyan-400">8 minutos e 20 segundos</span> para 
                  chegar à Terra, viajando a 299.792 km/s.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50">
                  <p className="text-gray-400 text-sm">Diâmetro</p>
                  <p className="text-yellow-400 font-bold text-lg">{dadosSol.diametro}</p>
                </div>
                <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50">
                  <p className="text-gray-400 text-sm">Idade</p>
                  <p className="text-yellow-400 font-bold text-lg">{dadosSol.idade}</p>
                </div>
                <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50 col-span-2">
                  <p className="text-gray-400 text-sm">Temperatura</p>
                  <p className="text-orange-400 font-bold">{dadosSol.temperatura}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Os 8 Planetas */}
        <section className="container mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <FaGlobeAmericas className="text-blue-400" />
            Os 8 Planetas
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {planetas.map((planeta, index) => (
              <div
                key={planeta.nome}
                className="group bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{planeta.icon}</span>
                  <div>
                    <h3 className="text-xl font-bold text-white">{planeta.nome}</h3>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${
                      planeta.tipo === "Rochoso" 
                        ? "bg-amber-900/50 text-amber-400" 
                        : planeta.tipo === "Gasoso"
                          ? "bg-purple-900/50 text-purple-400"
                          : "bg-cyan-900/50 text-cyan-400"
                    }`}>
                      {planeta.tipo}
                    </span>
                  </div>
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex justify-between text-gray-400">
                    <span>Distância do Sol:</span>
                    <span className="text-gray-300">{planeta.distancia}</span>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>Diâmetro:</span>
                    <span className="text-gray-300">{planeta.diametro}</span>
                  </div>
                </div>

                <p className="mt-4 text-sm text-gray-400 leading-relaxed">
                  💡 {planeta.curiosidade}
                </p>

                <div className="mt-4 pt-4 border-t border-slate-700/50">
                  <span className="text-gray-500 text-xs">Ordem: {index + 1}º planeta</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Outros Objetos */}
        <section className="container mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <FaRocket className="text-purple-400" />
            Outros Objetos do Sistema Solar
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <div className="text-4xl mb-4">🌙</div>
              <h3 className="text-xl font-bold text-white mb-2">Luas e Satélites</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Mais de <span className="text-cyan-400 font-semibold">200 luas</span> orbitam 
                os planetas do Sistema Solar. A maior é Ganimedes (lua de Júpiter), maior que Mercúrio.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <div className="text-4xl mb-4">☄️</div>
              <h3 className="text-xl font-bold text-white mb-2">Cometas</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Corpos gelados que desenvolvem caudas brilhantes ao se aproximarem do Sol. 
                O famoso <span className="text-cyan-400">Cometa Halley</span> passa pela Terra a cada 76 anos.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <div className="text-4xl mb-4">🪨</div>
              <h3 className="text-xl font-bold text-white mb-2">Cinturão de Asteroides</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Localizado entre Marte e Júpiter, contém milhões de asteroides rochosos. 
                O maior é <span className="text-cyan-400">Ceres</span>, classificado como planeta anão.
              </p>
            </div>
          </div>
        </section>

        {/* Dados Científicos */}
        <section className="container mx-auto px-4 py-12">
          <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700/50">
            <h2 className="text-2xl font-bold text-white mb-6">📊 Dados Científicos</h2>
            
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <p className="text-4xl font-bold text-cyan-400">4,6</p>
                <p className="text-gray-400 text-sm">Bilhões de anos de idade</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-yellow-400">8</p>
                <p className="text-gray-400 text-sm">Planetas oficiais</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-purple-400">200+</p>
                <p className="text-gray-400 text-sm">Luas conhecidas</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-orange-400">5</p>
                <p className="text-gray-400 text-sm">Planetas anões</p>
              </div>
            </div>
          </div>
        </section>

        {/* Navegação */}
        <section className="container mx-auto px-4 py-12">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 border-t border-slate-700/50 pt-8">
            <Link
              href="/capitulo/planeta-terra"
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-gray-300 hover:text-white transition-all group"
            >
              <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
              Voltar ao Capítulo
            </Link>

            <Link
              href="/capitulo/planeta-terra/rotacao-terra"
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white transition-all group"
            >
              Próximo: Rotação da Terra
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
