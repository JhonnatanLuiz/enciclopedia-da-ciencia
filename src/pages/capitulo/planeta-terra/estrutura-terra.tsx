import Head from "next/head";
import Link from "next/link";
import { FaArrowLeft, FaArrowRight, FaGlobeAmericas, FaBookOpen } from "react-icons/fa";
import { GiMagnet, GiEarthAmerica } from "react-icons/gi";
import { MdLayers, Md3dRotation } from "react-icons/md";
import ImageCarousel from "@/components/ui/ImageCarousel";
import ThemeToggle from "@/components/ui/ThemeToggle";

// Dados das camadas da Terra
const camadasTerra = [
  {
    nome: "Crosta Continental",
    icon: "🏔️",
    espessura: "30-70 km",
    temperatura: "0°C a 400°C",
    composicao: "Granito, rochas sedimentares",
    cor: "from-amber-700 to-yellow-900",
    borderCor: "border-amber-500/30",
    curiosidade: "Contém todos os continentes e montanhas. É mais espessa sob as cordilheiras.",
  },
  {
    nome: "Crosta Oceânica",
    icon: "🌊",
    espessura: "5-10 km",
    temperatura: "0°C a 200°C",
    composicao: "Basalto, gabro",
    cor: "from-blue-800 to-cyan-900",
    borderCor: "border-blue-500/30",
    curiosidade: "Mais densa e mais jovem que a continental. Constantemente renovada nas dorsais oceânicas.",
  },
  {
    nome: "Manto Superior",
    icon: "🔥",
    espessura: "~660 km",
    temperatura: "500°C a 900°C",
    composicao: "Peridotito, olivina",
    cor: "from-orange-600 to-red-800",
    borderCor: "border-orange-500/30",
    curiosidade: "Contém a astenosfera, onde o magma é parcialmente fundido e permite o movimento das placas tectônicas.",
  },
  {
    nome: "Manto Inferior",
    icon: "🌋",
    espessura: "~2.240 km",
    temperatura: "900°C a 4.000°C",
    composicao: "Silicatos de alta pressão",
    cor: "from-red-700 to-orange-900",
    borderCor: "border-red-500/30",
    curiosidade: "Sólido devido à imensa pressão, apesar das altas temperaturas. Movimentos de convecção lentos.",
  },
  {
    nome: "Núcleo Externo",
    icon: "💛",
    espessura: "~2.200 km",
    temperatura: "4.000°C a 5.000°C",
    composicao: "Ferro e níquel líquidos",
    cor: "from-yellow-600 to-amber-800",
    borderCor: "border-yellow-500/30",
    curiosidade: "Estado líquido! Suas correntes de convecção geram o campo magnético que protege a Terra da radiação solar.",
  },
  {
    nome: "Núcleo Interno",
    icon: "❤️‍🔥",
    espessura: "~1.220 km (raio)",
    temperatura: "~5.400°C",
    composicao: "Ferro e níquel sólidos",
    cor: "from-red-600 to-orange-700",
    borderCor: "border-red-500/30",
    curiosidade: "Tão quente quanto a superfície do Sol, mas sólido devido à pressão de 360 GPa (3,6 milhões de atmosferas)!",
  },
];

// Dados científicos principais
const dadosCientificos = [
  {
    valor: "6.371",
    unidade: "km",
    label: "Raio da Terra",
    cor: "text-cyan-600 dark:text-cyan-400",
    bgCor: "from-cyan-200/50 to-blue-200/50 dark:from-cyan-900/30 dark:to-blue-900/30",
    borderCor: "border-cyan-400/30 dark:border-cyan-500/20",
  },
  {
    valor: "5.400",
    unidade: "°C",
    label: "Temperatura do Núcleo",
    cor: "text-orange-600 dark:text-orange-400",
    bgCor: "from-orange-200/50 to-red-200/50 dark:from-orange-900/30 dark:to-red-900/30",
    borderCor: "border-orange-400/30 dark:border-orange-500/20",
  },
  {
    valor: "360",
    unidade: "GPa",
    label: "Pressão no Núcleo",
    cor: "text-purple-600 dark:text-purple-400",
    bgCor: "from-purple-200/50 to-pink-200/50 dark:from-purple-900/30 dark:to-pink-900/30",
    borderCor: "border-purple-400/30 dark:border-purple-500/20",
  },
  {
    valor: "5.97",
    unidade: "× 10²⁴ kg",
    label: "Massa Total",
    cor: "text-green-600 dark:text-green-400",
    bgCor: "from-green-200/50 to-emerald-200/50 dark:from-green-900/30 dark:to-emerald-900/30",
    borderCor: "border-green-400/30 dark:border-green-500/20",
  },
];

// Curiosidades científicas
const curiosidades = [
  {
    icon: "🧲",
    titulo: "Campo Magnético",
    descricao: "O núcleo externo líquido gera um campo magnético que se estende até 65.000 km no espaço, protegendo-nos da radiação solar.",
  },
  {
    icon: "🌡️",
    titulo: "Gradiente Geotérmico",
    descricao: "A cada 33 metros de profundidade, a temperatura aumenta cerca de 1°C. Isso se chama gradiente geotérmico.",
  },
  {
    icon: "🔄",
    titulo: "Correntes de Convecção",
    descricao: "O manto se move lentamente (poucos cm/ano) em correntes de convecção, movendo as placas tectônicas na superfície.",
  },
  {
    icon: "💎",
    titulo: "Diamantes do Manto",
    descricao: "Diamantes se formam no manto superior (150-200 km) sob pressão extrema e sobem através de erupções vulcânicas.",
  },
  {
    icon: "🌊",
    titulo: "Oceano Subterrâneo",
    descricao: "Cientistas descobriram que a zona de transição do manto (410-660 km) pode conter água equivalente a 3× todos os oceanos!",
  },
  {
    icon: "⚡",
    titulo: "Inversão dos Polos",
    descricao: "O campo magnético já inverteu centenas de vezes! A última inversão foi há 780.000 anos. Uma nova pode estar a caminho.",
  },
];

export default function EstruturaTerra() {
  return (
    <>
      <Head>
        <title>Estrutura da Terra | Enciclopédia da Ciência</title>
        <meta
          name="description"
          content="Descubra as camadas internas da Terra: crosta, manto e núcleo. Visualização 3D interativa e dados científicos."
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
                <Link href="/" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Início</Link>
                <span>/</span>
                <Link href="/capitulo/planeta-terra" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Planeta Terra</Link>
                <span>/</span>
                <span className="text-cyan-600 dark:text-cyan-400">Estrutura da Terra</span>
              </div>
              <ThemeToggle />
            </nav>

            {/* Título */}
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 rounded-2xl bg-gradient-to-br from-orange-300/40 to-red-300/40 dark:from-orange-500/20 dark:to-red-500/20 border border-orange-400/50 dark:border-orange-500/30">
                <MdLayers className="text-4xl text-orange-600 dark:text-orange-400" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                  Estrutura da Terra
                </h1>
                <p className="text-gray-600 dark:text-gray-400 mt-1">Capítulo: Planeta Terra</p>
              </div>
            </div>

            {/* Introdução */}
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl leading-relaxed">
              Descubra como a <span className="text-cyan-600 dark:text-cyan-400 font-semibold">Terra</span> é formada 
              por camadas internas — <span className="text-amber-600 dark:text-amber-400">crosta</span>, 
              <span className="text-orange-600 dark:text-orange-400"> manto</span> e <span className="text-red-600 dark:text-red-400">núcleo</span> — 
              que moldam sua dinâmica geológica e protegem a vida na superfície.
            </p>
          </div>
        </section>

        {/* Visualização 3D - Sketchfab Embed */}
        <section className="container mx-auto px-4 py-8">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
              <Md3dRotation className="text-cyan-600 dark:text-cyan-400" />
              Visualização Interativa 3D
            </h2>
            <p className="text-gray-600 dark:text-slate-400 text-sm mt-2 max-w-2xl">
              Explore as camadas internas da Terra em um modelo 3D interativo. 
              Arraste para rotacionar, use scroll para zoom e clique nas anotações para mais detalhes.
            </p>
          </div>
          
          {/* Embed do Sketchfab */}
          <div className="relative w-full rounded-2xl overflow-hidden border border-gray-300/50 dark:border-slate-700/50 shadow-2xl bg-gray-100 dark:bg-slate-950">
            <iframe
              title="Estrutura Interna da Terra - Do Núcleo à Atmosfera"
              src="https://sketchfab.com/models/092d706414944c719fe1715cc82bdbfc/embed?autostart=1&ui_theme=dark&ui_infos=0&ui_watermark=0"
              width="100%"
              height="500"
              allow="autoplay; fullscreen; xr-spatial-tracking"
              allowFullScreen
              className="w-full h-[400px] md:h-[550px] rounded-2xl"
              style={{ border: 'none' }}
            />
          </div>
          
          <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
            <p className="text-gray-600 dark:text-slate-400 text-sm">
              💡 <strong>Dica:</strong> Arraste para rotacionar o modelo, use scroll para zoom. 
              Clique no ícone de tela cheia para uma experiência imersiva.
            </p>
            
            {/* Link para ver no Sketchfab */}
            <a 
              href="https://sketchfab.com/3d-models/earths-internal-structure-core-to-atmosphere-092d706414944c719fe1715cc82bdbfc"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-gray-200/50 dark:bg-slate-800/50 hover:bg-gray-300/50 dark:hover:bg-slate-700/50 rounded-lg text-sm text-gray-700 dark:text-slate-300 hover:text-gray-900 dark:hover:text-white transition-colors border border-gray-300/50 dark:border-slate-700/50"
            >
              <span className="text-cyan-600 dark:text-cyan-400">🔗</span>
              <span>Ver no Sketchfab</span>
            </a>
          </div>
        </section>

        {/* Dados Científicos Principais */}
        <section className="container mx-auto px-4 py-12">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
              <span className="text-4xl">📊</span>
              Dados Científicos
            </h2>
            <p className="text-gray-600 dark:text-slate-400 max-w-3xl">
              Números impressionantes sobre a estrutura interna do nosso planeta.
            </p>
          </div>

          {/* Grid de estatísticas */}
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

        {/* Camadas da Terra - Cards detalhados */}
        <section className="container mx-auto px-4 py-12">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
              <GiEarthAmerica className="text-red-600 dark:text-red-400" />
              As Camadas da Terra
            </h2>
            <p className="text-gray-600 dark:text-slate-400 max-w-3xl">
              Da superfície ao centro, a Terra é dividida em camadas distintas com características únicas.
              A espessura total é de aproximadamente 6.371 km até o centro.
            </p>
          </div>

          {/* Grid de camadas */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {camadasTerra.map((camada, index) => (
              <div 
                key={camada.nome}
                className={`relative rounded-2xl overflow-hidden bg-gradient-to-br ${camada.cor} p-6 border ${camada.borderCor} hover:scale-[1.02] transition-transform duration-300`}
              >
                <div className="absolute top-4 right-4 text-4xl opacity-30">
                  {camada.icon}
                </div>
                
                <div className="relative z-10">
                  <span className="px-2 py-1 bg-black/30 text-white text-xs rounded-full mb-3 inline-block">
                    Camada {index + 1}
                  </span>
                  
                  <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                    <span>{camada.icon}</span>
                    {camada.nome}
                  </h3>
                  
                  <div className="space-y-2 text-sm">
                    <p className="text-white/90">
                      <span className="font-semibold">📏 Espessura:</span> {camada.espessura}
                    </p>
                    <p className="text-white/90">
                      <span className="font-semibold">🌡️ Temperatura:</span> {camada.temperatura}
                    </p>
                    <p className="text-white/90">
                      <span className="font-semibold">🧪 Composição:</span> {camada.composicao}
                    </p>
                  </div>
                  
                  <p className="text-white/80 text-sm mt-4 italic border-t border-white/20 pt-3">
                    💡 {camada.curiosidade}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Diagrama de Profundidade */}
        <section className="container mx-auto px-4 py-12">
          <div className="bg-gradient-to-r from-gray-200 to-gray-300 dark:from-slate-800 dark:to-slate-900 rounded-2xl p-8 border border-gray-300/50 dark:border-slate-700/50">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
              <span>📐</span> Diagrama de Profundidade
            </h3>
            
            <div className="space-y-4">
              {/* Barra visual de profundidade */}
              <div className="relative h-16 rounded-xl overflow-hidden flex">
                {/* Crosta */}
                <div className="h-full bg-gradient-to-r from-amber-700 to-amber-600 flex items-center justify-center" style={{ width: '1%' }}>
                  <span className="text-white text-[8px] font-bold rotate-90 whitespace-nowrap">Crosta</span>
                </div>
                {/* Manto */}
                <div className="h-full bg-gradient-to-r from-orange-600 to-red-600 flex items-center justify-center" style={{ width: '45%' }}>
                  <span className="text-white text-sm font-bold">Manto (45%)</span>
                </div>
                {/* Núcleo Externo */}
                <div className="h-full bg-gradient-to-r from-yellow-600 to-amber-600 flex items-center justify-center" style={{ width: '35%' }}>
                  <span className="text-gray-900 text-sm font-bold">Núcleo Externo (35%)</span>
                </div>
                {/* Núcleo Interno */}
                <div className="h-full bg-gradient-to-r from-red-600 to-orange-600 flex items-center justify-center" style={{ width: '19%' }}>
                  <span className="text-white text-xs font-bold">N. Interno</span>
                </div>
              </div>
              
              {/* Legendas de profundidade */}
              <div className="flex justify-between text-xs text-gray-500 dark:text-slate-400">
                <span>0 km (Superfície)</span>
                <span>35 km</span>
                <span>2.900 km</span>
                <span>5.100 km</span>
                <span>6.371 km (Centro)</span>
              </div>
            </div>
          </div>
        </section>

        {/* Curiosidades */}
        <section className="container mx-auto px-4 py-12">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
              <GiMagnet className="text-purple-600 dark:text-purple-400" />
              Curiosidades Fascinantes
            </h2>
            <p className="text-gray-600 dark:text-slate-400 max-w-3xl">
              Fatos surpreendentes sobre o interior do nosso planeta que a ciência descobriu.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {curiosidades.map((curiosidade, index) => (
              <div 
                key={index}
                className="bg-gray-200/60 dark:bg-slate-800/50 rounded-2xl p-6 border border-gray-300/50 dark:border-slate-700/50 hover:border-purple-500/30 transition-colors"
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

        {/* Aprofundamento Científico */}
        <section className="container mx-auto px-4 py-12">
          <div className="bg-gradient-to-br from-gray-200/80 via-gray-100/90 to-gray-200/80 dark:from-slate-800/80 dark:via-slate-900/90 dark:to-slate-800/80 rounded-2xl p-8 md:p-10 border border-gray-300/50 dark:border-slate-700/50">
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/20 rounded-full text-emerald-600 dark:text-emerald-400 text-sm mb-4">
                <span className="text-lg">🔬</span>
                Aprofundamento Científico
              </div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Como Sabemos o que Existe no Interior da Terra?
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Coluna 1: Sismologia */}
              <div className="space-y-6">
                <div className="bg-gray-200/60 dark:bg-slate-800/60 rounded-xl p-6 border border-gray-300/40 dark:border-slate-700/40">
                  <h3 className="text-xl font-bold text-cyan-600 dark:text-cyan-400 mb-4 flex items-center gap-2">
                    <span className="text-2xl">🌊</span>
                    Ondas Sísmicas: A Radiografia do Planeta
                  </h3>
                  <p className="text-gray-700 dark:text-slate-300 leading-relaxed mb-4">
                    Assim como médicos usam ultrassom para ver o interior do corpo, geofísicos usam 
                    <strong className="text-gray-900 dark:text-white"> ondas sísmicas</strong> geradas por terremotos para "enxergar" 
                    dentro da Terra. Existem dois tipos principais:
                  </p>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-3 text-gray-700 dark:text-slate-300">
                      <span className="text-cyan-600 dark:text-cyan-400 font-bold mt-1">P</span>
                      <div>
                        <strong className="text-gray-900 dark:text-white">Ondas Primárias (P)</strong> — Compressão, como som. 
                        Viajam por sólidos e líquidos. Velocidade: 6-14 km/s.
                      </div>
                    </li>
                    <li className="flex items-start gap-3 text-gray-700 dark:text-slate-300">
                      <span className="text-purple-600 dark:text-purple-400 font-bold mt-1">S</span>
                      <div>
                        <strong className="text-gray-900 dark:text-white">Ondas Secundárias (S)</strong> — Cisalhamento, ondulação lateral. 
                        <em className="text-amber-600 dark:text-amber-400"> NÃO atravessam líquidos!</em> Velocidade: 3-7 km/s.
                      </div>
                    </li>
                  </ul>
                  <p className="text-gray-500 dark:text-slate-400 text-sm mt-4 italic border-t border-gray-300/50 dark:border-slate-700/50 pt-4">
                    💡 <strong>Descoberta histórica:</strong> Em 1906, o sismólogo Richard Oldham percebeu que ondas S 
                    desapareciam ao atravessar o centro da Terra — provando que o núcleo externo é líquido!
                  </p>
                </div>

                <div className="bg-gray-200/60 dark:bg-slate-800/60 rounded-xl p-6 border border-gray-300/40 dark:border-slate-700/40">
                  <h3 className="text-xl font-bold text-amber-600 dark:text-amber-400 mb-4 flex items-center gap-2">
                    <span className="text-2xl">🔭</span>
                    Descontinuidades: Fronteiras Invisíveis
                  </h3>
                  <p className="text-gray-700 dark:text-slate-300 leading-relaxed mb-4">
                    Quando ondas sísmicas passam de uma camada para outra, mudam de velocidade bruscamente. 
                    Esses "saltos" revelam as fronteiras entre camadas:
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-gray-300/50 dark:bg-slate-900/50 rounded-lg">
                      <div>
                        <p className="text-gray-900 dark:text-white font-medium">Descontinuidade de Mohorovičić</p>
                        <p className="text-gray-500 dark:text-slate-400 text-xs">Andrija Mohorovičić, 1909</p>
                      </div>
                      <span className="text-cyan-600 dark:text-cyan-400 font-mono">~35 km</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-300/50 dark:bg-slate-900/50 rounded-lg">
                      <div>
                        <p className="text-gray-900 dark:text-white font-medium">Descontinuidade de Gutenberg</p>
                        <p className="text-gray-500 dark:text-slate-400 text-xs">Beno Gutenberg, 1914</p>
                      </div>
                      <span className="text-orange-600 dark:text-orange-400 font-mono">2.900 km</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-300/50 dark:bg-slate-900/50 rounded-lg">
                      <div>
                        <p className="text-gray-900 dark:text-white font-medium">Descontinuidade de Lehmann</p>
                        <p className="text-gray-500 dark:text-slate-400 text-xs">Inge Lehmann, 1936</p>
                      </div>
                      <span className="text-red-600 dark:text-red-400 font-mono">5.150 km</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Coluna 2: Composição e Dinâmica */}
              <div className="space-y-6">
                <div className="bg-gray-200/60 dark:bg-slate-800/60 rounded-xl p-6 border border-gray-300/40 dark:border-slate-700/40">
                  <h3 className="text-xl font-bold text-emerald-600 dark:text-emerald-400 mb-4 flex items-center gap-2">
                    <span className="text-2xl">🧪</span>
                    Composição Química das Camadas
                  </h3>
                  <p className="text-gray-700 dark:text-slate-300 leading-relaxed mb-4">
                    A composição do interior terrestre é determinada através de meteoritos (que são fragmentos 
                    do mesmo material que formou a Terra), análise de xenólitos vulcânicos e experimentos de 
                    alta pressão:
                  </p>
                  <div className="space-y-3 text-sm">
                    <div className="p-3 bg-gradient-to-r from-amber-200/30 dark:from-amber-900/30 to-transparent rounded-lg border-l-4 border-amber-500">
                      <p className="text-gray-900 dark:text-white font-medium mb-1">Crosta</p>
                      <p className="text-gray-600 dark:text-slate-400">Oxigênio (46%), Silício (28%), Alumínio (8%), Ferro (5%)</p>
                    </div>
                    <div className="p-3 bg-gradient-to-r from-orange-200/30 dark:from-orange-900/30 to-transparent rounded-lg border-l-4 border-orange-500">
                      <p className="text-gray-900 dark:text-white font-medium mb-1">Manto</p>
                      <p className="text-gray-600 dark:text-slate-400">Silicatos ricos em Mg e Fe: olivina [(Mg,Fe)₂SiO₄] e piroxênios</p>
                    </div>
                    <div className="p-3 bg-gradient-to-r from-yellow-200/30 dark:from-yellow-900/30 to-transparent rounded-lg border-l-4 border-yellow-500">
                      <p className="text-gray-900 dark:text-white font-medium mb-1">Núcleo</p>
                      <p className="text-gray-600 dark:text-slate-400">~85% Ferro, ~10% Níquel, ~5% elementos leves (S, O, Si, H)</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-200/60 dark:bg-slate-800/60 rounded-xl p-6 border border-gray-300/40 dark:border-slate-700/40">
                  <h3 className="text-xl font-bold text-purple-600 dark:text-purple-400 mb-4 flex items-center gap-2">
                    <span className="text-2xl">⚡</span>
                    A Geodínamo: Motor do Campo Magnético
                  </h3>
                  <p className="text-gray-700 dark:text-slate-300 leading-relaxed mb-4">
                    O campo magnético terrestre é gerado pelo <strong className="text-gray-900 dark:text-white">efeito dínamo</strong> no 
                    núcleo externo líquido. Correntes de convecção de ferro fundido, combinadas com a rotação da 
                    Terra (efeito Coriolis), geram correntes elétricas que produzem o campo magnético.
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="p-4 bg-gray-300/50 dark:bg-slate-900/50 rounded-xl">
                      <p className="text-3xl font-bold text-cyan-600 dark:text-cyan-400">25-65</p>
                      <p className="text-gray-600 dark:text-slate-400 text-xs">μT na superfície</p>
                    </div>
                    <div className="p-4 bg-gray-300/50 dark:bg-slate-900/50 rounded-xl">
                      <p className="text-3xl font-bold text-purple-600 dark:text-purple-400">~780k</p>
                      <p className="text-gray-600 dark:text-slate-400 text-xs">anos desde última inversão</p>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-slate-400 text-sm mt-4 italic">
                    Sem o campo magnético, o vento solar teria arrancado nossa atmosfera há bilhões de anos — 
                    como aconteceu com Marte.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-indigo-100/40 to-purple-100/40 dark:from-indigo-900/40 dark:to-purple-900/40 rounded-xl p-6 border border-indigo-500/30">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                    <span className="text-xl">🌡️</span>
                    Fluxo de Calor e Convecção do Manto
                  </h3>
                  <p className="text-gray-700 dark:text-slate-300 text-sm leading-relaxed">
                    O interior da Terra libera <strong className="text-gray-900 dark:text-white">~47 TW de calor</strong> (equivalente a 
                    ~3 milhões de usinas nucleares). Cerca de 50% vem do decaimento radioativo de urânio, tório e 
                    potássio, e 50% é calor primordial da formação do planeta há 4,5 bilhões de anos. Este calor 
                    impulsiona a convecção do manto, que por sua vez move as placas tectônicas, causando terremotos, 
                    vulcões e a formação de montanhas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Comparação com outros planetas */}
        <section className="container mx-auto px-4 py-12">
          <div className="bg-gradient-to-r from-gray-200 to-gray-300 dark:from-slate-800 dark:to-slate-900 rounded-2xl p-8 border border-gray-300/50 dark:border-slate-700/50">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
              <FaGlobeAmericas className="text-blue-600 dark:text-blue-400" />
              Comparação: Terra vs Outros Planetas
            </h3>
            
            <div className="grid md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-gray-300/30 dark:bg-slate-700/30 rounded-xl">
                <span className="text-3xl mb-2 block">🌍</span>
                <p className="text-gray-900 dark:text-white font-bold">Terra</p>
                <p className="text-cyan-600 dark:text-cyan-400 text-sm">Núcleo: Fe + Ni</p>
                <p className="text-gray-500 dark:text-slate-400 text-xs">Manto ativo</p>
              </div>
              <div className="text-center p-4 bg-gray-300/30 dark:bg-slate-700/30 rounded-xl">
                <span className="text-3xl mb-2 block">🔴</span>
                <p className="text-gray-900 dark:text-white font-bold">Marte</p>
                <p className="text-orange-600 dark:text-orange-400 text-sm">Núcleo menor</p>
                <p className="text-gray-500 dark:text-slate-400 text-xs">Sem campo magnético</p>
              </div>
              <div className="text-center p-4 bg-gray-300/30 dark:bg-slate-700/30 rounded-xl">
                <span className="text-3xl mb-2 block">🟠</span>
                <p className="text-gray-900 dark:text-white font-bold">Vênus</p>
                <p className="text-yellow-600 dark:text-yellow-400 text-sm">Similar à Terra</p>
                <p className="text-gray-500 dark:text-slate-400 text-xs">Sem placas tectônicas</p>
              </div>
              <div className="text-center p-4 bg-gray-300/30 dark:bg-slate-700/30 rounded-xl">
                <span className="text-3xl mb-2 block">☿️</span>
                <p className="text-gray-900 dark:text-white font-bold">Mercúrio</p>
                <p className="text-purple-600 dark:text-purple-400 text-sm">70% núcleo!</p>
                <p className="text-gray-500 dark:text-slate-400 text-xs">Maior proporção</p>
              </div>
            </div>
          </div>
        </section>

        {/* Infográfico Educativo */}
        <section className="container mx-auto px-4 py-12">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
              <span className="text-4xl">📋</span>
              Infográfico Educativo
            </h2>
            <p className="text-gray-600 dark:text-slate-400 max-w-3xl">
              Este infográfico resume a composição química e as propriedades mecânicas das camadas internas da Terra.
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-200/60 to-gray-300/60 dark:from-slate-800/60 dark:to-slate-900/60 rounded-2xl p-6 md:p-8 border border-gray-300/50 dark:border-slate-700/50">
            <div className="flex justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/infograficos/Estrutura da Terra infográfico.png"
                alt="Infográfico Desvendando a Estrutura da Terra - Composição química e propriedades mecânicas das camadas internas"
                className="rounded-xl shadow-lg shadow-gray-400/50 dark:shadow-slate-900/50 max-w-full h-auto border border-gray-300/30 dark:border-slate-700/30"
                loading="lazy"
              />
            </div>
            <p className="text-sm text-center mt-4 text-gray-500 dark:text-slate-400">
              Fonte: <span className="text-cyan-600 dark:text-cyan-400">Enciclopédia da Ciência</span>
            </p>
          </div>
        </section>

        {/* Vídeo Educativo */}
        <section className="container mx-auto px-4 py-12">
          <div className="bg-gradient-to-br from-red-200/20 via-gray-200/50 to-purple-200/20 dark:from-red-900/20 dark:via-slate-800/50 dark:to-purple-900/20 rounded-2xl p-8 border border-red-400/20 dark:border-red-500/20">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/20 rounded-full text-red-600 dark:text-red-400 text-sm mb-4">
                <span className="animate-pulse">🔴</span> Vídeo Exclusivo
              </div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 flex items-center justify-center gap-3">
                <span className="text-4xl">🎬</span>
                Vídeo Educativo
              </h2>
              <p className="text-gray-600 dark:text-slate-400 max-w-2xl mx-auto">
                Assista ao vídeo produzido especialmente para este subcapítulo, explicando a estrutura 
                interna da Terra com recursos visuais e narrativos.
              </p>
            </div>

            {/* Player do YouTube */}
            <div className="relative w-full max-w-4xl mx-auto">
              <div className="aspect-video rounded-xl overflow-hidden shadow-2xl shadow-red-500/10 border border-slate-700/50">
                <iframe
                  src="https://www.youtube.com/embed/ylMrcsBKCtI"
                  title="Estrutura da Terra - Vídeo Educativo"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>

            {/* Info adicional */}
            <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm">
              <a 
                href="https://youtu.be/ylMrcsBKCtI" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-500 rounded-lg text-white transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                Assistir no YouTube
              </a>
              <span className="flex items-center gap-2 px-4 py-2 bg-gray-300/50 dark:bg-slate-700/50 rounded-lg text-gray-700 dark:text-slate-300">
                <span>📺</span> Feito especialmente para a Enciclopédia da Ciência
              </span>
            </div>
          </div>
        </section>

        {/* Galeria de Imagens - Carousel */}
        <section className="container mx-auto px-4 py-12">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
              <FaBookOpen className="text-emerald-600 dark:text-emerald-400" />
              O Interior do Nosso Planeta
            </h2>
            <p className="text-gray-600 dark:text-slate-400 max-w-3xl">
              Uma jornada científica pelas camadas internas da Terra. Navegue pelas imagens para 
              explorar cada aspecto da estrutura terrestre, desde a crosta até o núcleo interno.
            </p>
          </div>

          <ImageCarousel />
          
          <p className="text-sm text-center mt-6 text-gray-500 dark:text-slate-500">
            💡 Use os controles para navegar manualmente ou deixe em reprodução automática.
          </p>
        </section>

        {/* Navegação */}
        <section className="container mx-auto px-4 py-12">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 border-t border-gray-300/50 dark:border-slate-700/50 pt-8">
            <Link
              href="/capitulo/planeta-terra/sistema-solar"
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gray-200 hover:bg-gray-300 dark:bg-slate-800 dark:hover:bg-slate-700 text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-all group"
            >
              <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
              Anterior: Sistema Solar
            </Link>

            <Link
              href="/capitulo/planeta-terra/rotacao-terra"
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white transition-all group"
            >
              Próximo: Rotação da Terra
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Rodapé institucional */}
          <footer className="mt-12 text-center text-sm text-gray-500 dark:text-gray-400">
            <p>Enciclopédia da Ciência © 2025 - Todos os direitos reservados</p>
            <p>Conteúdo Feito com ❤️ e ☕ por Jhonnatan Luiz</p>
          </footer>
        </section>
      </main>
    </>
  );
}

// Desabilitar layout global (esta página tem layout próprio)
EstruturaTerra.noLayout = true;
