import Head from "next/head";
import Link from "next/link";
import { FaArrowLeft, FaArrowRight, FaTemperatureHigh, FaFire } from "react-icons/fa";
import { GiVolcano, GiMountainCave, GiSmokeBomb } from "react-icons/gi";
import { Md3dRotation, MdDangerous } from "react-icons/md";
import ThemeToggle from "@/components/ui/ThemeToggle";
import dynamic from "next/dynamic";

const Vulcao3D = dynamic(() => import("@/components/content/Vulcao3D"), {
  ssr: false,
  loading: () => <div className="w-full h-full flex items-center justify-center bg-slate-100 dark:bg-slate-800 text-gray-500">Carregando Modelo 3D...</div>
});


// Tipos de vulcões
const tiposVulcoes = [
  {
    nome: "Vulcão-Escudo",
    icon: "🛡️",
    exemplo: "Mauna Loa (Havaí)",
    formato: "Largo e baixo, parece um escudo guerreiro deitado.",
    erupcao: "Efusiva",
    cor: "from-orange-700 to-amber-800",
    borderCor: "border-orange-500/30",
    descricao: "Formado por lava fluida que percorre grandes distâncias. Erupções geralmente calmas.",
  },
  {
    nome: "Estratovulcão",
    icon: "🌋",
    exemplo: "Monte Fuji (Japão), Vesúvio (Itália)",
    formato: "Cônico, alto e simétrico.",
    erupcao: "Explosiva",
    cor: "from-red-800 to-rose-900",
    borderCor: "border-red-500/30",
    descricao: "Camadas alternadas de lava e cinzas. Erupções violentas e perigosas.",
  },
  {
    nome: "Cone de Cinzas",
    icon: "⛰️",
    exemplo: "Paricutín (México)",
    formato: "Pequeno cone com cratera no topo.",
    erupcao: "Estromboliana",
    cor: "from-gray-700 to-zinc-800",
    borderCor: "border-gray-500/30",
    descricao: "Formado por fragmentos de lava solidificada (piroclastos) acumulados ao redor da ventilação.",
  },
  {
    nome: "Caldera",
    icon: "🕳️",
    exemplo: "Yellowstone (EUA)",
    formato: "Grande depressão ou 'buraco'.",
    erupcao: "Catastrófica",
    cor: "from-yellow-800 to-amber-900",
    borderCor: "border-yellow-500/30",
    descricao: "Formada quando um vulcão colapsa sobre si mesmo após esvaziar sua câmara magmática.",
  },
];

// Dados científicos principais
const dadosCientificos = [
  {
    valor: "1.250",
    unidade: "°C",
    label: "Temp. Máx. da Lava",
    cor: "text-orange-600 dark:text-orange-400",
    bgCor: "from-orange-200/50 to-red-200/50 dark:from-orange-900/30 dark:to-red-900/30",
    borderCor: "border-orange-400/30 dark:border-orange-500/20",
  },
  {
    valor: "1.500",
    unidade: "ativos",
    label: "Vulcões Terrestres",
    cor: "text-red-600 dark:text-red-400",
    bgCor: "from-red-200/50 to-rose-200/50 dark:from-red-900/30 dark:to-rose-900/30",
    borderCor: "border-red-400/30 dark:border-red-500/20",
  },
  {
    valor: "8",
    unidade: "VEI",
    label: "Índice Explosividade Máx.",
    cor: "text-purple-600 dark:text-purple-400",
    bgCor: "from-purple-200/50 to-pink-200/50 dark:from-purple-900/30 dark:to-pink-900/30",
    borderCor: "border-purple-400/30 dark:border-purple-500/20",
  },
  {
    valor: "75%",
    unidade: "",
    label: "No Círculo de Fogo",
    cor: "text-amber-600 dark:text-amber-400",
    bgCor: "from-amber-200/50 to-yellow-200/50 dark:from-amber-900/30 dark:to-yellow-900/30",
    borderCor: "border-amber-400/30 dark:border-amber-500/20",
  },
];

// Curiosidades vulcânicas
const curiosidades = [
  {
    icon: "⚡",
    titulo: "Raios Vulcânicos",
    descricao: "Erupções violentas podem gerar sua própria tempestade elétrica devido ao atrito entre partículas de cinza.",
  },
  {
    icon: "🌱",
    titulo: "Solo Fértil",
    descricao: "Apesar da destruição, as cinzas vulcânicas enriquecem o solo com minerais, tornando-o excelente para agricultura.",
  },
  {
    icon: "🔊",
    titulo: "O Som Mais Alto",
    descricao: "A erupção do Krakatoa em 1883 produziu o som mais alto da história moderna, ouvido a 4.800 km de distância!",
  },
  {
    icon: "❄️",
    titulo: "Inverno Vulcânico",
    descricao: "Cinzas e gases na estratosfera podem bloquear a luz solar e resfriar o planeta por anos.",
  },
  {
    icon: "💎",
    titulo: "Pedras Preciosas",
    descricao: "Alguns magmas trazem diamantes e outras gemas das profundezas do manto para a superfície.",
  },
  {
    icon: "🪐",
    titulo: "Vulcões Espaciais",
    descricao: "O Monte Olimpo em Marte é o maior vulcão do Sistema Solar, com 21 km de altura (3x o Everest)!",
  },
];

// Dados detalhados da anatomia
const anatomiaDetalhada = [
  {
    part: "Câmara Magmática",
    detail: "O coração do vulcão. É um grande reservatório subterrâneo de rocha fundida (magma) sob alta pressão. Quando a pressão se torna insustentável, o magma busca um caminho para a superfície, iniciando uma erupção.",
    color: "text-red-600 dark:text-red-400",
    bg: "bg-red-500/10",
    border: "border-red-500/20"
  },
  {
    part: "Magma",
    detail: "Rocha fundida localizada no interior da Terra. Composto por silicatos, gases dissolvidos e cristais. Sua viscosidade (fluidez) determina se a erupção será explosiva (magma viscoso) ou efusiva (magma fluido).",
    color: "text-orange-600 dark:text-orange-400",
    bg: "bg-orange-500/10",
    border: "border-orange-500/20"
  },
  {
    part: "Chaminé Principal",
    detail: "O conduto vertical central que conecta a câmara magmática à superfície. É a 'estrada' principal por onde o magma ascende durante uma erupção.",
    color: "text-yellow-600 dark:text-yellow-400",
    bg: "bg-yellow-500/10",
    border: "border-yellow-500/20"
  },
  {
    part: "Chaminé Secundária",
    detail: "Canais laterais que se ramificam do conduto principal. O magma pode escapar por essas falhas nas rochas, criando cones parasitas menores nos flancos do vulcão.",
    color: "text-amber-600 dark:text-amber-400",
    bg: "bg-amber-500/10",
    border: "border-amber-500/20"
  },
  {
    part: "Cratera",
    detail: "A depressão circular no topo do vulcão, formada pela atividade explosiva ou pelo colapso de material vulcânico. É a boca principal da erupção.",
    color: "text-stone-600 dark:text-stone-400",
    bg: "bg-stone-500/10",
    border: "border-stone-500/20"
  },
  {
    part: "Lava",
    detail: "O nome dado ao magma após atingir a superfície. Ao perder gases, ela escorre pelas encostas, solidificando-se para formar novas rochas ígneas.",
    color: "text-rose-600 dark:text-rose-400",
    bg: "bg-rose-500/10",
    border: "border-rose-500/20"
  },
  {
    part: "Cinzas e Gases",
    detail: "Fragmentos de rocha pulverizada e gases vulcânicos (vapor d'água, CO2, enxofre) lançados violentamente na atmosfera. Podem viajar milhares de quilômetros e afetar o clima global.",
    color: "text-gray-600 dark:text-gray-400",
    bg: "bg-gray-500/10",
    border: "border-gray-500/20"
  },
  {
    part: "Camadas (Estratos)",
    detail: "Registro histórico do vulcão. Estratovulcões são construídos por camadas alternadas de lava solidificada, cinzas e rochas de erupções passadas, ganhando altura ao longo de milênios.",
    color: "text-brown-600 dark:text-stone-500", // using stone for brown equivalent
    bg: "bg-stone-500/10",
    border: "border-stone-500/20"
  }
];

export default function Vulcoes() {
  return (
    <>
      <Head>
        <title>Vulcões | Enciclopédia da Ciência</title>
        <meta
          name="description"
          content="Explore o mundo dos vulcões: tipos de erupção, estrutura interna, o Círculo de Fogo e o poder da natureza."
        />
      </Head>

      <main className="min-h-screen bg-gradient-to-b from-gray-50 via-gray-100 to-gray-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/textures/stars-bg.jpg')] opacity-5 dark:opacity-20"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-50/50 to-gray-50 dark:via-slate-900/50 dark:to-slate-900"></div>

          <div className="relative container mx-auto px-4 py-12">
            {/* Breadcrumb */}
            <nav className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400 mb-6">
              <div className="flex items-center gap-2">
                <Link href="/" className="hover:text-red-600 dark:hover:text-red-400 transition-colors">Início</Link>
                <span>/</span>
                <Link href="/capitulo/planeta-terra" className="hover:text-red-600 dark:hover:text-red-400 transition-colors">Planeta Terra</Link>
                <span>/</span>
                <span className="text-red-600 dark:text-red-400">Vulcões</span>
              </div>
              <ThemeToggle />
            </nav>

            {/* Título */}
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 rounded-2xl bg-gradient-to-br from-red-300/40 to-orange-300/40 dark:from-red-500/20 dark:to-orange-500/20 border border-red-400/50 dark:border-red-500/30">
                <GiVolcano className="text-4xl text-red-600 dark:text-red-400" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                  Vulcões
                </h1>
                <p className="text-gray-600 dark:text-gray-400 mt-1">Capítulo: Planeta Terra</p>
              </div>
            </div>

            {/* Introdução */}
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl leading-relaxed">
              Vulcões são <span className="text-red-600 dark:text-red-400 font-semibold">janelas para o interior da Terra</span>.
              Eles são aberturas na crosta por onde <span className="text-orange-600 dark:text-orange-400">magma</span>,
              cinzas e gases escapam, moldando paisagens e influenciando o clima global.
            </p>
          </div>
        </section>

        {/* Visualização 3D - Sketchfab Embed */}
        <section className="container mx-auto px-4 py-8">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
              <Md3dRotation className="text-red-600 dark:text-red-400" />
              Visualização Interativa 3D
            </h2>
            <p className="text-gray-600 dark:text-slate-400 text-sm mt-2 max-w-2xl">
              Explore a estrutura de um vulcão em erupção com nosso modelo 3D interativo. Observe o cone vulcânico, a cratera e o fluxo de lava.
            </p>
          </div>

          {/* Embed 3D Vulcão Sketchfab */}
          <div className="w-full sketchfab-embed-wrapper rounded-2xl overflow-hidden shadow-xl">
            <iframe title="the volcano" className="w-full h-[500px]" frameBorder="0" allowFullScreen allow="autoplay; fullscreen; xr-spatial-tracking" src="https://sketchfab.com/models/8ca14d37f7144b03bd8bdbb8b3c8a455/embed?autostart=1"> </iframe> <p style={{ fontSize: '13px', fontWeight: 'normal', margin: '5px', color: '#4A4A4A' }}> <a href="https://sketchfab.com/3d-models/the-volcano-8ca14d37f7144b03bd8bdbb8b3c8a455?utm_medium=embed&utm_campaign=share-popup&utm_content=8ca14d37f7144b03bd8bdbb8b3c8a455" target="_blank" rel="nofollow" style={{ fontWeight: 'bold', color: '#1CAAD9' }}> the volcano </a> by <a href="https://sketchfab.com/Cozmoth?utm_medium=embed&utm_campaign=share-popup&utm_content=8ca14d37f7144b03bd8bdbb8b3c8a455" target="_blank" rel="nofollow" style={{ fontWeight: 'bold', color: '#1CAAD9' }}> Cozmoth </a> on <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=8ca14d37f7144b03bd8bdbb8b3c8a455" target="_blank" rel="nofollow" style={{ fontWeight: 'bold', color: '#1CAAD9' }}>Sketchfab</a></p>
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
            <p className="text-gray-600 dark:text-slate-400 text-sm">
              💡 <strong>Dica:</strong> Explore o modelo externo com este visualizador detalhado.
            </p>

            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-200/50 dark:bg-slate-800/50 rounded-lg text-sm text-gray-700 dark:text-slate-300 border border-gray-300/50 dark:border-slate-700/50">
              <span className="text-red-600 dark:text-red-400">⚡</span>
              <span>Renderização em Tempo Real</span>
            </div>
          </div>
        </section>

        {/* Dados Científicos Principais */}
        <section className="container mx-auto px-4 py-12">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
              <span className="text-4xl">📊</span>
              Dados Explosivos
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {dadosCientificos.map((dado, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${dado.bgCor} rounded-2xl p-6 border ${dado.borderCor} text-center`}
              >
                <p className={`text-3xl md:text-4xl font-bold ${dado.cor}`}>
                  {dado.valor}
                  <span className="text-lg md:text-xl ml-1">{dado.unidade}</span>
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">{dado.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Tipos de Vulcões */}
        <section className="container mx-auto px-4 py-12">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
              <GiMountainCave className="text-orange-600 dark:text-orange-400" />
              Tipos de Vulcões
            </h2>
            <p className="text-gray-600 dark:text-slate-400 max-w-3xl">
              Nem todos os vulcões são iguais. Sua forma e explosividade dependem da composição do magma.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {tiposVulcoes.map((vulcao) => (
              <div
                key={vulcao.nome}
                className={`relative rounded-2xl overflow-hidden bg-gradient-to-br ${vulcao.cor} p-6 border ${vulcao.borderCor} hover:scale-[1.02] transition-transform duration-300`}
              >
                <div className="absolute top-4 right-4 text-4xl opacity-30">
                  {vulcao.icon}
                </div>

                <div className="relative z-10">
                  <span className="px-2 py-1 bg-black/30 text-white text-xs rounded-full mb-3 inline-block">
                    Erupção {vulcao.erupcao}
                  </span>

                  <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                    {vulcao.nome}
                  </h3>

                  <p className="text-white/90 text-sm font-medium mb-4 italic">
                    Ex: {vulcao.exemplo}
                  </p>

                  <div className="space-y-2 text-sm text-white/90">
                    <p>{vulcao.descricao}</p>
                    <p className="text-xs opacity-80 mt-2">📍 {vulcao.formato}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Anatomia de um Vulcão (Conceito CSS/Diagrama) */}
        <section className="container mx-auto px-4 py-12">
          <div className="bg-gradient-to-r from-gray-200 to-gray-300 dark:from-slate-800 dark:to-slate-900 rounded-2xl p-8 border border-gray-300/50 dark:border-slate-700/50">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
              <FaFire className="text-red-500" /> Anatomia Vulcânica
            </h3>





            <div className="grid lg:grid-cols-2 gap-8 items-start">
              {/* Lista Scrollable de Detalhes */}
              <div className="h-[500px] overflow-y-auto pr-4 space-y-4 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent">
                {anatomiaDetalhada.map((item, idx) => (
                  <div key={idx} className={`p-4 rounded-xl border ${item.border} ${item.bg} hover:scale-[1.02] transition-transform`}>
                    <h4 className={`font-bold text-lg mb-2 ${item.color} flex items-center gap-2`}>
                      <span className="text-sm opacity-50">#{idx + 1}</span>
                      {item.part}
                    </h4>
                    <p className="text-sm text-gray-700 dark:text-slate-300 leading-relaxed text-justify">
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>

              {/* Modelo 3D Interativo (Corte Transversal) */}
              <div className="w-full relative h-[500px] bg-slate-100 dark:bg-slate-800 rounded-2xl overflow-hidden border border-gray-300 dark:border-slate-700 shadow-inner">
                <div className="absolute top-2 right-2 z-10 bg-black/50 text-white text-xs px-2 py-1 rounded backdrop-blur-sm pointer-events-none">
                  Interativo
                </div>
                <Vulcao3D />
              </div>
            </div>
          </div>
        </section>

        {/* Curiosidades */}
        <section className="container mx-auto px-4 py-12">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
              <FaFire className="text-red-500 animate-pulse" />
              Você Sabia?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {curiosidades.map((curiosidade, index) => (
              <div
                key={index}
                className="bg-gray-200/60 dark:bg-slate-800/50 rounded-2xl p-6 border border-gray-300/50 dark:border-slate-700/50 hover:border-red-500/30 transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{curiosidade.icon}</span>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">{curiosidade.titulo}</h3>
                </div>
                <p className="text-gray-700 dark:text-slate-300 text-sm leading-relaxed">
                  {curiosidade.descricao}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Vídeo Educativo (Opcional/Placeholder) */}
        <section className="container mx-auto px-4 py-12">
          <div className="bg-black/5 dark:bg-white/5 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Veja em Ação</h3>
            <div className="aspect-video max-w-4xl mx-auto rounded-xl overflow-hidden shadow-lg">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/VNGUdObDoLk"
                title="Volcano Eruption Explained"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </section>

        {/* Navegação */}
        <section className="container mx-auto px-4 py-12">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 border-t border-gray-300/50 dark:border-slate-700/50 pt-8">
            <Link
              href="/capitulo/planeta-terra/continentes"
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gray-200 hover:bg-gray-300 dark:bg-slate-800 dark:hover:bg-slate-700 text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-all group"
            >
              <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
              Anterior: Continentes
            </Link>

            <Link
              href="/capitulo/planeta-terra/terremotos"
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-500 hover:to-orange-500 text-white transition-all group"
            >
              Próximo: Terremotos
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <footer className="mt-12 text-center text-sm text-gray-500 dark:text-gray-400">
            <p>Enciclopédia da Ciência © 2025 - Todos os direitos reservados</p>
            <p>Conteúdo Feito com ❤️ e ☕ por Jhonnatan Luiz</p>
          </footer>
        </section>
      </main>
    </>
  );
}

// Desabilitar layout global
Vulcoes.noLayout = true;
