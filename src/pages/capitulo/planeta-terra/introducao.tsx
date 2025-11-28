import Head from 'next/head';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { 
  FaGlobeAmericas, 
  FaArrowLeft, 
  FaArrowRight,
  FaThermometerHalf,
  FaWater,
  FaMountain,
  FaMagnet,
  FaSun,
  FaMoon
} from 'react-icons/fa';
import { GiEarthAmerica, GiMolecule, GiVolcano, GiMagnet } from 'react-icons/gi';
import { MdOutlineScience } from 'react-icons/md';

// Componente 3D carregado dinamicamente
const PlanetEarth3D = dynamic(
  () => import('@/components/content/PlanetEarth3D'),
  { 
    ssr: false,
    loading: () => (
      <div className="w-full h-full flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    )
  }
);

export default function IntroducaoPlanetaTerra() {
  return (
    <>
      <Head>
        <title>Introdução ao Planeta Terra | Enciclopédia da Ciência</title>
        <meta name="description" content="Introdução científica completa ao Planeta Terra - características físicas, composição, atmosfera e lugar no Sistema Solar" />
      </Head>

      <main className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900">
        {/* Header de Navegação */}
        <nav className="sticky top-0 z-50 bg-slate-900/90 backdrop-blur-md border-b border-blue-500/20">
          <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
            <Link 
              href="/capitulo/planeta-terra"
              className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
            >
              <FaArrowLeft />
              <span>Voltar ao Capítulo</span>
            </Link>
            <div className="flex items-center gap-2 text-slate-400">
              <FaGlobeAmericas className="text-blue-400" />
              <span className="text-sm">Planeta Terra</span>
              <span className="text-slate-600">›</span>
              <span className="text-sm text-blue-300">Introdução</span>
            </div>
          </div>
        </nav>

        {/* Hero Section com Terra 3D */}
        <section className="relative min-h-[70vh] flex items-center">
          {/* Background */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 grid lg:grid-cols-2 gap-12 items-center">
            {/* Texto */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 rounded-full border border-blue-500/30">
                <MdOutlineScience className="text-blue-400" />
                <span className="text-blue-300 text-sm font-medium">Subcapítulo 1</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                  Introdução ao
                </span>
                <br />
                <span className="text-white">Planeta Terra</span>
              </h1>

              <p className="text-lg text-slate-300 leading-relaxed max-w-xl">
                Uma análise científica completa do terceiro planeta do Sistema Solar — 
                nossa casa cósmica e o único lugar conhecido no universo que abriga vida.
              </p>

              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30">
                  Geofísica
                </span>
                <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm border border-cyan-500/30">
                  Astronomia
                </span>
                <span className="px-3 py-1 bg-teal-500/20 text-teal-300 rounded-full text-sm border border-teal-500/30">
                  Ciências da Terra
                </span>
              </div>
            </div>

            {/* Terra 3D */}
            <div className="h-[400px] lg:h-[500px]">
              <PlanetEarth3D />
            </div>
          </div>
        </section>

        {/* Seção: O que é a Terra */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-blue-500/20 rounded-xl">
                <GiEarthAmerica className="text-3xl text-blue-400" />
              </div>
              <h2 className="text-3xl font-bold text-white">O Que É a Terra?</h2>
            </div>

            <div className="space-y-6 text-slate-300 leading-relaxed">
              <p className="text-lg">
                A <strong className="text-blue-400">Terra</strong> é o terceiro planeta a partir do Sol 
                e o quinto maior do Sistema Solar. Com um diâmetro equatorial de aproximadamente 
                <strong className="text-cyan-400"> 12.756 quilômetros</strong>, ela é o maior dos planetas 
                rochosos (telúricos) e o único corpo celeste conhecido que sustenta vida.
              </p>

              <p>
                Formada há cerca de <strong className="text-blue-400">4,54 bilhões de anos</strong> a partir 
                da nebulosa solar primordial, a Terra passou por transformações dramáticas — desde um mundo 
                de magma fundido até o planeta azul que conhecemos hoje, com oceanos líquidos, atmosfera 
                rica em oxigênio e uma biosfera extraordinariamente diversa.
              </p>

              <p>
                Do ponto de vista astronômico, a Terra orbita o Sol a uma distância média de 
                <strong className="text-cyan-400"> 149,6 milhões de km</strong> (1 Unidade Astronômica), 
                completando uma volta a cada <strong className="text-blue-400">365,256 dias</strong>. 
                Sua órbita levemente elíptica e a inclinação axial de 23,44° são responsáveis pelas 
                estações do ano.
              </p>

              <div className="p-6 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-2xl border border-blue-500/20 mt-8">
                <h3 className="text-xl font-semibold text-white mb-4">💡 Por que "Terra"?</h3>
                <p>
                  O nome "Terra" deriva do latim <em className="text-blue-300">terra</em>, que significa 
                  "solo" ou "chão". Em inglês, <em className="text-cyan-300">Earth</em> vem do germânico 
                  antigo <em>erde</em>. Curiosamente, é o único planeta do Sistema Solar cujo nome não 
                  deriva da mitologia greco-romana.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Seção: Galeria - A Terra Vista do Espaço */}
        <section className="py-20 px-4 bg-slate-800/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">🌍 A Terra em Imagens</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                Explore a diversidade extraordinária do nosso planeta através dessas imagens que 
                capturam desde a visão espacial até os ecossistemas mais impressionantes.
              </p>
            </div>

            {/* Imagem Principal - Terra do Espaço */}
            <div className="mb-8">
              <div className="relative rounded-2xl overflow-hidden group">
                <img 
                  src="/images/planeta-terra/terra-espaco.png" 
                  alt="Planeta Terra vista do espaço" 
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">A "Bolinha Azul"</h3>
                  <p className="text-slate-300 max-w-2xl">
                    Vista do espaço, a Terra revela sua característica mais marcante: o azul intenso dos oceanos 
                    que cobrem 71% da superfície. Os astronautas descrevem a emoção de ver nosso planeta 
                    flutuando no vazio cósmico — um oásis frágil de vida em meio à imensidão do universo.
                  </p>
                </div>
              </div>
            </div>

            {/* Grid de 4 imagens */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Floresta Amazônica */}
              <div className="relative rounded-2xl overflow-hidden group">
                <img 
                  src="/images/planeta-terra/floresta-amazonica.png" 
                  alt="Floresta Amazônica e Rio Amazonas" 
                  className="w-full h-[300px] object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-1 bg-green-500/30 text-green-300 text-xs rounded-full">Biosfera</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">Floresta Amazônica</h3>
                  <p className="text-slate-300 text-sm">
                    O "pulmão do mundo" abriga 10% de todas as espécies conhecidas. O Rio Amazonas 
                    despeja 209.000 m³/s de água doce no Atlântico — 20% de toda a água fluvial do planeta.
                  </p>
                </div>
              </div>

              {/* Himalaia */}
              <div className="relative rounded-2xl overflow-hidden group">
                <img 
                  src="/images/planeta-terra/himalaia-everest.png" 
                  alt="Cordilheira do Himalaia com Monte Everest" 
                  className="w-full h-[300px] object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-1 bg-blue-500/30 text-blue-300 text-xs rounded-full">Tectônica</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">Himalaia & Monte Everest</h3>
                  <p className="text-slate-300 text-sm">
                    Com 8.849m, o Everest é o ponto mais alto da Terra. O Himalaia ainda cresce ~5mm/ano 
                    devido à colisão entre as placas Indiana e Eurasiana, iniciada há 50 milhões de anos.
                  </p>
                </div>
              </div>

              {/* Deserto do Saara */}
              <div className="relative rounded-2xl overflow-hidden group">
                <img 
                  src="/images/planeta-terra/deserto-saara.png" 
                  alt="Deserto do Saara" 
                  className="w-full h-[300px] object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-1 bg-amber-500/30 text-amber-300 text-xs rounded-full">Clima</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">Deserto do Saara</h3>
                  <p className="text-slate-300 text-sm">
                    O maior deserto quente do mundo (9 milhões km²) já foi verde há 6.000 anos. 
                    Suas areias viajam pelo Atlântico e fertilizam a Amazônia com fósforo essencial.
                  </p>
                </div>
              </div>

              {/* Fundo do Oceano */}
              <div className="relative rounded-2xl overflow-hidden group">
                <img 
                  src="/images/planeta-terra/fundo-oceano.png" 
                  alt="Fundo do Oceano" 
                  className="w-full h-[300px] object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-1 bg-cyan-500/30 text-cyan-300 text-xs rounded-full">Hidrosfera</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">Fundo do Oceano</h3>
                  <p className="text-slate-300 text-sm">
                    Conhecemos melhor a superfície da Lua do que o fundo oceânico. A Fossa das Marianas 
                    atinge 10.994m — se o Everest fosse colocado lá, ainda sobraria 1km de água acima.
                  </p>
                </div>
              </div>

              {/* Fauna Terrestre - Savana Africana */}
              <div className="relative rounded-2xl overflow-hidden group">
                <img 
                  src="/images/planeta-terra/fauna-terrestre.png" 
                  alt="Fauna terrestre da Savana Africana" 
                  className="w-full h-[300px] object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-1 bg-orange-500/30 text-orange-300 text-xs rounded-full">Fauna</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">Riqueza da Fauna Terrestre</h3>
                  <p className="text-slate-300 text-sm">
                    A Terra abriga cerca de 8,7 milhões de espécies, das quais apenas 1,2 milhão foram catalogadas. 
                    A savana africana exemplifica a coexistência de grandes mamíferos em um equilíbrio ecológico único.
                  </p>
                </div>
              </div>

              {/* Habitat Humano - Cidade Sustentável */}
              <div className="relative rounded-2xl overflow-hidden group">
                <img 
                  src="/images/planeta-terra/habitat-humano.png" 
                  alt="Cidade sustentável - habitat humano" 
                  className="w-full h-[300px] object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-1 bg-emerald-500/30 text-emerald-300 text-xs rounded-full">Antroposfera</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">Habitat Humano</h3>
                  <p className="text-slate-300 text-sm">
                    Mais de 8 bilhões de humanos transformaram a Terra. Cidades sustentáveis com energia renovável, 
                    áreas verdes e harmonia com a natureza representam o futuro da coexistência planetária.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Seção: Vídeo - Planeta Terra: Uma Biografia */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/20 rounded-full border border-red-500/30 mb-4">
                <svg className="w-5 h-5 text-red-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                <span className="text-red-300 text-sm font-medium">Vídeo Exclusivo</span>
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">🎬 Planeta Terra: Uma Biografia</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                Assista a este documentário que conta a história completa do nosso planeta — 
                desde sua formação há 4,5 bilhões de anos até os dias atuais.
              </p>
            </div>

            {/* Player do YouTube */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-blue-500/10">
              <div className="aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/zodwwKxrH58"
                  title="Planeta Terra: Uma Biografia"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>

            {/* Info do vídeo */}
            <div className="mt-6 p-4 bg-slate-800/50 rounded-xl border border-slate-700/50">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">EC</span>
                </div>
                <div>
                  <h4 className="text-white font-medium">Enciclopédia da Ciência</h4>
                  <p className="text-slate-500 text-sm">Conteúdo original do canal</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Seção: Dados Fundamentais */}
        <section className="py-20 px-4 bg-slate-800/30">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-12 justify-center">
              <div className="p-3 bg-cyan-500/20 rounded-xl">
                <MdOutlineScience className="text-3xl text-cyan-400" />
              </div>
              <h2 className="text-3xl font-bold text-white">Dados Científicos Fundamentais</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Card: Dimensões */}
              <div className="p-6 bg-gradient-to-br from-blue-500/10 to-blue-600/5 rounded-2xl border border-blue-500/20">
                <h3 className="text-lg font-semibold text-blue-400 mb-4 flex items-center gap-2">
                  <FaGlobeAmericas /> Dimensões
                </h3>
                <ul className="space-y-2 text-slate-300 text-sm">
                  <li><span className="text-slate-500">Diâmetro equatorial:</span> <strong>12.756 km</strong></li>
                  <li><span className="text-slate-500">Diâmetro polar:</span> <strong>12.714 km</strong></li>
                  <li><span className="text-slate-500">Circunferência:</span> <strong>40.075 km</strong></li>
                  <li><span className="text-slate-500">Área de superfície:</span> <strong>510,1 milhões km²</strong></li>
                  <li><span className="text-slate-500">Volume:</span> <strong>1,083 × 10¹² km³</strong></li>
                </ul>
              </div>

              {/* Card: Massa e Densidade */}
              <div className="p-6 bg-gradient-to-br from-cyan-500/10 to-cyan-600/5 rounded-2xl border border-cyan-500/20">
                <h3 className="text-lg font-semibold text-cyan-400 mb-4 flex items-center gap-2">
                  <GiMolecule /> Massa e Densidade
                </h3>
                <ul className="space-y-2 text-slate-300 text-sm">
                  <li><span className="text-slate-500">Massa:</span> <strong>5,972 × 10²⁴ kg</strong></li>
                  <li><span className="text-slate-500">Densidade média:</span> <strong>5,515 g/cm³</strong></li>
                  <li><span className="text-slate-500">Gravidade superficial:</span> <strong>9,807 m/s²</strong></li>
                  <li><span className="text-slate-500">Velocidade de escape:</span> <strong>11,186 km/s</strong></li>
                  <li><span className="text-slate-500">Achatamento:</span> <strong>0,003353</strong></li>
                </ul>
              </div>

              {/* Card: Órbita */}
              <div className="p-6 bg-gradient-to-br from-teal-500/10 to-teal-600/5 rounded-2xl border border-teal-500/20">
                <h3 className="text-lg font-semibold text-teal-400 mb-4 flex items-center gap-2">
                  <FaSun /> Parâmetros Orbitais
                </h3>
                <ul className="space-y-2 text-slate-300 text-sm">
                  <li><span className="text-slate-500">Semieixo maior:</span> <strong>149,598 × 10⁶ km</strong></li>
                  <li><span className="text-slate-500">Periélio:</span> <strong>147,09 × 10⁶ km</strong></li>
                  <li><span className="text-slate-500">Afélio:</span> <strong>152,10 × 10⁶ km</strong></li>
                  <li><span className="text-slate-500">Excentricidade:</span> <strong>0,0167</strong></li>
                  <li><span className="text-slate-500">Velocidade orbital:</span> <strong>29,78 km/s</strong></li>
                </ul>
              </div>

              {/* Card: Rotação */}
              <div className="p-6 bg-gradient-to-br from-indigo-500/10 to-indigo-600/5 rounded-2xl border border-indigo-500/20">
                <h3 className="text-lg font-semibold text-indigo-400 mb-4 flex items-center gap-2">
                  <FaGlobeAmericas /> Rotação
                </h3>
                <ul className="space-y-2 text-slate-300 text-sm">
                  <li><span className="text-slate-500">Período sideral:</span> <strong>23h 56m 4,1s</strong></li>
                  <li><span className="text-slate-500">Período solar:</span> <strong>24 horas</strong></li>
                  <li><span className="text-slate-500">Inclinação axial:</span> <strong>23,44°</strong></li>
                  <li><span className="text-slate-500">Vel. no equador:</span> <strong>1.674 km/h</strong></li>
                  <li><span className="text-slate-500">Direção:</span> <strong>Anti-horário (vista N)</strong></li>
                </ul>
              </div>

              {/* Card: Temperatura */}
              <div className="p-6 bg-gradient-to-br from-orange-500/10 to-orange-600/5 rounded-2xl border border-orange-500/20">
                <h3 className="text-lg font-semibold text-orange-400 mb-4 flex items-center gap-2">
                  <FaThermometerHalf /> Temperatura
                </h3>
                <ul className="space-y-2 text-slate-300 text-sm">
                  <li><span className="text-slate-500">Média global:</span> <strong>14°C (287 K)</strong></li>
                  <li><span className="text-slate-500">Máxima registrada:</span> <strong>56,7°C</strong></li>
                  <li><span className="text-slate-500">Mínima registrada:</span> <strong>-89,2°C</strong></li>
                  <li><span className="text-slate-500">Núcleo interno:</span> <strong>~5.400°C</strong></li>
                  <li><span className="text-slate-500">Núcleo externo:</span> <strong>~4.500°C</strong></li>
                </ul>
              </div>

              {/* Card: Satélite */}
              <div className="p-6 bg-gradient-to-br from-slate-500/10 to-slate-600/5 rounded-2xl border border-slate-500/20">
                <h3 className="text-lg font-semibold text-slate-400 mb-4 flex items-center gap-2">
                  <FaMoon /> Satélite Natural
                </h3>
                <ul className="space-y-2 text-slate-300 text-sm">
                  <li><span className="text-slate-500">Nome:</span> <strong>Lua (Moon)</strong></li>
                  <li><span className="text-slate-500">Diâmetro:</span> <strong>3.474 km</strong></li>
                  <li><span className="text-slate-500">Distância média:</span> <strong>384.400 km</strong></li>
                  <li><span className="text-slate-500">Período orbital:</span> <strong>27,3 dias</strong></li>
                  <li><span className="text-slate-500">Razão Terra/Lua:</span> <strong>81:1 (massa)</strong></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Continua na próxima seção... */}
        {/* Seção: Estrutura Interna */}
        <section className="py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-12 justify-center">
              <div className="p-3 bg-orange-500/20 rounded-xl">
                <GiVolcano className="text-3xl text-orange-400" />
              </div>
              <h2 className="text-3xl font-bold text-white">Estrutura Interna</h2>
            </div>

            <p className="text-center text-slate-300 mb-12 max-w-3xl mx-auto">
              A Terra é um planeta diferenciado, com camadas distintas formadas pela 
              separação gravitacional de materiais de diferentes densidades durante 
              sua formação e evolução.
            </p>

            <div className="space-y-6">
              {/* Crosta */}
              <div className="p-6 bg-gradient-to-r from-amber-500/10 to-amber-600/5 rounded-2xl border border-amber-500/20">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-amber-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold text-amber-400">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-amber-400 mb-2">Crosta</h3>
                    <p className="text-slate-300 mb-3">
                      A camada mais externa e fina, dividida em <strong className="text-amber-300">crosta continental</strong> 
                      (30-70 km, rica em silício e alumínio — SiAl) e <strong className="text-amber-300">crosta oceânica</strong> 
                      (5-10 km, rica em silício e magnésio — SiMa). Representa apenas 1% do volume terrestre.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-amber-500/20 text-amber-300 rounded text-xs">Espessura: 5-70 km</span>
                      <span className="px-2 py-1 bg-amber-500/20 text-amber-300 rounded text-xs">Densidade: 2,7-3,0 g/cm³</span>
                      <span className="px-2 py-1 bg-amber-500/20 text-amber-300 rounded text-xs">Temperatura: até 400°C</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Manto */}
              <div className="p-6 bg-gradient-to-r from-orange-500/10 to-orange-600/5 rounded-2xl border border-orange-500/20">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold text-orange-400">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-orange-400 mb-2">Manto</h3>
                    <p className="text-slate-300 mb-3">
                      A maior camada da Terra, composta principalmente por <strong className="text-orange-300">silicatos de ferro e magnésio</strong>. 
                      Divide-se em manto superior (até 670 km, incluindo a astenosfera — zona parcialmente fundida) 
                      e manto inferior (até 2.900 km). As correntes de convecção no manto impulsionam a tectônica de placas.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-orange-500/20 text-orange-300 rounded text-xs">Espessura: ~2.900 km</span>
                      <span className="px-2 py-1 bg-orange-500/20 text-orange-300 rounded text-xs">Densidade: 3,4-5,6 g/cm³</span>
                      <span className="px-2 py-1 bg-orange-500/20 text-orange-300 rounded text-xs">Temperatura: 500-4.000°C</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Núcleo Externo */}
              <div className="p-6 bg-gradient-to-r from-red-500/10 to-red-600/5 rounded-2xl border border-red-500/20">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold text-red-400">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-red-400 mb-2">Núcleo Externo</h3>
                    <p className="text-slate-300 mb-3">
                      Camada líquida composta por <strong className="text-red-300">ferro e níquel fundidos</strong>. 
                      Os movimentos de convecção neste "oceano de metal" geram o 
                      <strong className="text-red-300"> campo magnético terrestre</strong> através do efeito dínamo — 
                      essencial para proteger a vida da radiação cósmica.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-red-500/20 text-red-300 rounded text-xs">Espessura: ~2.200 km</span>
                      <span className="px-2 py-1 bg-red-500/20 text-red-300 rounded text-xs">Densidade: 9,9-12,2 g/cm³</span>
                      <span className="px-2 py-1 bg-red-500/20 text-red-300 rounded text-xs">Temperatura: 4.000-5.000°C</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Núcleo Interno */}
              <div className="p-6 bg-gradient-to-r from-yellow-500/10 to-yellow-600/5 rounded-2xl border border-yellow-500/20">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-yellow-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold text-yellow-400">4</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-yellow-400 mb-2">Núcleo Interno</h3>
                    <p className="text-slate-300 mb-3">
                      Uma esfera sólida de <strong className="text-yellow-300">ferro cristalino</strong> com 
                      temperatura semelhante à superfície do Sol (~5.400°C), mas mantida sólida pela 
                      pressão extrema de 360 GPa. Descoberto em 1936 pela sismóloga dinamarquesa Inge Lehmann.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-yellow-500/20 text-yellow-300 rounded text-xs">Raio: ~1.220 km</span>
                      <span className="px-2 py-1 bg-yellow-500/20 text-yellow-300 rounded text-xs">Densidade: 12,8-13,1 g/cm³</span>
                      <span className="px-2 py-1 bg-yellow-500/20 text-yellow-300 rounded text-xs">Pressão: 330-360 GPa</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Seção: Atmosfera */}
        <section className="py-20 px-4 bg-slate-800/30">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-12 justify-center">
              <div className="p-3 bg-sky-500/20 rounded-xl">
                <FaWater className="text-3xl text-sky-400" />
              </div>
              <h2 className="text-3xl font-bold text-white">Atmosfera Terrestre</h2>
            </div>

            <p className="text-center text-slate-300 mb-12 max-w-3xl mx-auto">
              A atmosfera é uma fina camada de gases retida pela gravidade, com massa total 
              de aproximadamente 5,15 × 10¹⁸ kg — apenas 0,0001% da massa terrestre.
            </p>

            {/* Composição */}
            <div className="p-6 bg-gradient-to-br from-sky-500/10 to-blue-500/10 rounded-2xl border border-sky-500/20 mb-8">
              <h3 className="text-xl font-semibold text-sky-400 mb-4">Composição Química</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-sky-500/10 rounded-xl">
                  <div className="text-3xl font-bold text-sky-400">78,08%</div>
                  <div className="text-slate-400">Nitrogênio (N₂)</div>
                </div>
                <div className="text-center p-4 bg-blue-500/10 rounded-xl">
                  <div className="text-3xl font-bold text-blue-400">20,95%</div>
                  <div className="text-slate-400">Oxigênio (O₂)</div>
                </div>
                <div className="text-center p-4 bg-indigo-500/10 rounded-xl">
                  <div className="text-3xl font-bold text-indigo-400">0,93%</div>
                  <div className="text-slate-400">Argônio (Ar)</div>
                </div>
                <div className="text-center p-4 bg-purple-500/10 rounded-xl">
                  <div className="text-3xl font-bold text-purple-400">0,04%</div>
                  <div className="text-slate-400">CO₂ e outros</div>
                </div>
              </div>
            </div>

            {/* Camadas */}
            <div className="space-y-4">
              <div className="p-4 bg-gradient-to-r from-blue-900/30 to-blue-800/20 rounded-xl border border-blue-500/20">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-semibold text-blue-300">Troposfera</h4>
                  <span className="text-sm text-slate-400">0-12 km</span>
                </div>
                <p className="text-sm text-slate-400">
                  Onde ocorrem os fenômenos meteorológicos. Contém 80% da massa atmosférica. 
                  Temperatura diminui ~6,5°C por km de altitude.
                </p>
              </div>

              <div className="p-4 bg-gradient-to-r from-cyan-900/30 to-cyan-800/20 rounded-xl border border-cyan-500/20">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-semibold text-cyan-300">Estratosfera</h4>
                  <span className="text-sm text-slate-400">12-50 km</span>
                </div>
                <p className="text-sm text-slate-400">
                  Contém a camada de ozônio (O₃) que absorve radiação UV. Temperatura aumenta com altitude. 
                  Aviões comerciais voam na baixa estratosfera.
                </p>
              </div>

              <div className="p-4 bg-gradient-to-r from-indigo-900/30 to-indigo-800/20 rounded-xl border border-indigo-500/20">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-semibold text-indigo-300">Mesosfera</h4>
                  <span className="text-sm text-slate-400">50-80 km</span>
                </div>
                <p className="text-sm text-slate-400">
                  Onde meteoros se desintegram criando "estrelas cadentes". Temperatura pode chegar a -90°C. 
                  Região menos estudada da atmosfera.
                </p>
              </div>

              <div className="p-4 bg-gradient-to-r from-purple-900/30 to-purple-800/20 rounded-xl border border-purple-500/20">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-semibold text-purple-300">Termosfera</h4>
                  <span className="text-sm text-slate-400">80-700 km</span>
                </div>
                <p className="text-sm text-slate-400">
                  Temperaturas podem exceder 2.000°C, mas densidade tão baixa que não se sente calor. 
                  Onde ocorrem as auroras e orbitam a ISS e satélites LEO.
                </p>
              </div>

              <div className="p-4 bg-gradient-to-r from-slate-800/30 to-slate-700/20 rounded-xl border border-slate-500/20">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-semibold text-slate-300">Exosfera</h4>
                  <span className="text-sm text-slate-400">700-10.000 km</span>
                </div>
                <p className="text-sm text-slate-400">
                  Transição gradual para o espaço interplanetário. Átomos individuais podem escapar 
                  para o espaço. Contém os satélites geoestacionários.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Seção: Campo Magnético */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-purple-500/20 rounded-xl">
                <GiMagnet className="text-3xl text-purple-400" />
              </div>
              <h2 className="text-3xl font-bold text-white">Campo Magnético</h2>
            </div>

            <div className="space-y-6 text-slate-300 leading-relaxed">
              <p>
                O <strong className="text-purple-400">campo geomagnético</strong> é gerado pelo movimento 
                do ferro líquido no núcleo externo — um processo chamado <strong className="text-purple-300">geodínamo</strong>. 
                Este campo se estende milhares de quilômetros no espaço, formando a 
                <strong className="text-purple-400"> magnetosfera</strong>.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="p-5 bg-purple-500/10 rounded-xl border border-purple-500/20">
                  <h3 className="text-lg font-semibold text-purple-400 mb-3">Características</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Intensidade na superfície: 25-65 μT</li>
                    <li>• Polos magnéticos ≠ polos geográficos</li>
                    <li>• Inversões a cada ~200.000-300.000 anos</li>
                    <li>• Última inversão: 780.000 anos atrás</li>
                  </ul>
                </div>

                <div className="p-5 bg-indigo-500/10 rounded-xl border border-indigo-500/20">
                  <h3 className="text-lg font-semibold text-indigo-400 mb-3">Funções Vitais</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Desvia o vento solar e radiação cósmica</li>
                    <li>• Protege a atmosfera da erosão solar</li>
                    <li>• Permite navegação por bússola</li>
                    <li>• Orientação de animais migratórios</li>
                  </ul>
                </div>
              </div>

              <div className="p-6 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 rounded-2xl border border-purple-500/20">
                <h3 className="text-xl font-semibold text-white mb-4">🌌 Auroras</h3>
                <p>
                  Quando partículas carregadas do vento solar colidem com átomos na atmosfera 
                  (guiadas pelo campo magnético para os polos), produzem as espetaculares 
                  <strong className="text-green-400"> auroras boreais</strong> (norte) e 
                  <strong className="text-green-400"> austrais</strong> (sul). O oxigênio emite 
                  luz verde/vermelha; o nitrogênio, azul/violeta.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Seção: Hidrosfera */}
        <section className="py-20 px-4 bg-slate-800/30">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-cyan-500/20 rounded-xl">
                <FaWater className="text-3xl text-cyan-400" />
              </div>
              <h2 className="text-3xl font-bold text-white">Hidrosfera: O Mundo das Águas</h2>
            </div>

            <div className="space-y-6 text-slate-300 leading-relaxed">
              <p>
                A <strong className="text-cyan-400">hidrosfera</strong> engloba toda a água do planeta — 
                um volume estimado de <strong className="text-cyan-300">1,386 bilhões de km³</strong>. 
                A água cobre 71% da superfície terrestre, dando à Terra seu característico 
                aspecto azul visto do espaço.
              </p>

              <div className="grid sm:grid-cols-3 gap-4 my-8">
                <div className="text-center p-5 bg-blue-500/10 rounded-xl border border-blue-500/20">
                  <div className="text-3xl font-bold text-blue-400">97,5%</div>
                  <div className="text-slate-400 text-sm mt-1">Água Salgada</div>
                  <div className="text-slate-500 text-xs">Oceanos e mares</div>
                </div>
                <div className="text-center p-5 bg-cyan-500/10 rounded-xl border border-cyan-500/20">
                  <div className="text-3xl font-bold text-cyan-400">2,5%</div>
                  <div className="text-slate-400 text-sm mt-1">Água Doce</div>
                  <div className="text-slate-500 text-xs">Gelo, rios, lagos, aquíferos</div>
                </div>
                <div className="text-center p-5 bg-teal-500/10 rounded-xl border border-teal-500/20">
                  <div className="text-3xl font-bold text-teal-400">0,3%</div>
                  <div className="text-slate-400 text-sm mt-1">Acessível</div>
                  <div className="text-slate-500 text-xs">Água doce líquida de superfície</div>
                </div>
              </div>

              <p>
                A água é fundamental para a vida devido às suas propriedades únicas: alto calor específico 
                (regula temperatura), alta tensão superficial (capilaridade), expansão ao congelar 
                (gelo flutua), e capacidade como solvente universal.
              </p>
            </div>
          </div>
        </section>

        {/* Seção: Por Que a Terra é Especial */}
        <section className="py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-12 justify-center">
              <div className="p-3 bg-green-500/20 rounded-xl">
                <FaGlobeAmericas className="text-3xl text-green-400" />
              </div>
              <h2 className="text-3xl font-bold text-white">Por Que a Terra é Especial?</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-gradient-to-br from-green-500/10 to-teal-500/10 rounded-2xl border border-green-500/20">
                <h3 className="text-lg font-semibold text-green-400 mb-3">🌡️ Zona Habitável</h3>
                <p className="text-slate-300 text-sm">
                  A Terra orbita na "Zona Goldilocks" — nem muito perto nem muito longe do Sol — 
                  permitindo água líquida na superfície, ingrediente essencial para a vida como conhecemos.
                </p>
              </div>

              <div className="p-6 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-2xl border border-blue-500/20">
                <h3 className="text-lg font-semibold text-blue-400 mb-3">🛡️ Atmosfera Protetora</h3>
                <p className="text-slate-300 text-sm">
                  Nossa atmosfera bloqueia radiação UV nociva, queima meteoros antes de atingirem a 
                  superfície, e mantém a temperatura estável através do efeito estufa natural.
                </p>
              </div>

              <div className="p-6 bg-gradient-to-br from-purple-500/10 to-indigo-500/10 rounded-2xl border border-purple-500/20">
                <h3 className="text-lg font-semibold text-purple-400 mb-3">🧲 Escudo Magnético</h3>
                <p className="text-slate-300 text-sm">
                  O campo magnético desvia partículas carregadas letais do vento solar, preservando 
                  nossa atmosfera e protegendo toda a biosfera da radiação cósmica.
                </p>
              </div>

              <div className="p-6 bg-gradient-to-br from-amber-500/10 to-orange-500/10 rounded-2xl border border-amber-500/20">
                <h3 className="text-lg font-semibold text-amber-400 mb-3">🌙 Lua Estabilizadora</h3>
                <p className="text-slate-300 text-sm">
                  A Lua estabiliza a inclinação axial da Terra, garantindo estações climáticas previsíveis 
                  ao longo de milhões de anos — condição crucial para a evolução da vida complexa.
                </p>
              </div>

              <div className="p-6 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl border border-cyan-500/20">
                <h3 className="text-lg font-semibold text-cyan-400 mb-3">🌊 Tectônica Ativa</h3>
                <p className="text-slate-300 text-sm">
                  A reciclagem contínua da crosta regula o CO₂ atmosférico, renova a superfície, 
                  e cria novos habitats — um "termostato planetário" que opera há bilhões de anos.
                </p>
              </div>

              <div className="p-6 bg-gradient-to-br from-emerald-500/10 to-green-500/10 rounded-2xl border border-emerald-500/20">
                <h3 className="text-lg font-semibold text-emerald-400 mb-3">🪐 Júpiter Guardião</h3>
                <p className="text-slate-300 text-sm">
                  Júpiter, com sua enorme gravidade, age como um "aspirador cósmico", desviando 
                  asteroides e cometas que poderiam devastar a Terra, reduzindo impactos catastróficos.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Navegação */}
        <section className="py-16 px-4 border-t border-blue-500/20">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4 justify-between">
              <Link 
                href="/capitulo/planeta-terra"
                className="flex items-center gap-3 p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-blue-500/50 transition-colors group"
              >
                <FaArrowLeft className="text-blue-400 group-hover:-translate-x-1 transition-transform" />
                <div>
                  <div className="text-sm text-slate-500">Voltar</div>
                  <div className="text-white">Capítulo: Planeta Terra</div>
                </div>
              </Link>

              <Link 
                href="/capitulo/planeta-terra/estrutura"
                className="flex items-center gap-3 p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-blue-500/50 transition-colors group text-right sm:text-left"
              >
                <div className="order-2 sm:order-1">
                  <div className="text-sm text-slate-500">Próximo</div>
                  <div className="text-white">Estrutura da Terra</div>
                </div>
                <FaArrowRight className="text-blue-400 order-1 sm:order-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-4 border-t border-slate-800">
          <div className="max-w-4xl mx-auto text-center text-slate-500 text-sm">
            <p>Enciclopédia da Ciência © 2025</p>
            <p className="mt-1">Fontes: NASA, ESA, USGS, NOAA</p>
          </div>
        </footer>
      </main>
    </>
  );
}
