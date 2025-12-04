import Head from "next/head";
import Link from "next/link";
import dynamic from "next/dynamic";
import { FaArrowLeft, FaArrowRight, FaClock, FaHistory } from "react-icons/fa";
import { GiEarthAmerica, GiWindSlap, GiSunrise } from "react-icons/gi";
import { MdRotateRight, MdSpeed } from "react-icons/md";

// Importação dinâmica do componente 3D (client-side only)
const PlanetEarthRotation3D = dynamic(
  () => import("@/components/content/PlanetEarthRotation3D"),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-[400px] md:h-[500px] rounded-2xl bg-gradient-to-b from-gray-950 via-indigo-950 to-blue-950 flex items-center justify-center border border-slate-700/50">
        <div className="text-white/60 text-lg animate-pulse">🌍 Carregando visualização 3D...</div>
      </div>
    ),
  }
);

// Dados científicos principais
const dadosCientificos = [
  {
    valor: "23h 56m",
    unidade: "4s",
    label: "Período Sideral",
    cor: "text-cyan-400",
    bgCor: "from-cyan-900/30 to-blue-900/30",
    borderCor: "border-cyan-500/20",
    descricao: "Tempo para uma rotação completa em relação às estrelas",
  },
  {
    valor: "1.670",
    unidade: "km/h",
    label: "Velocidade no Equador",
    cor: "text-orange-400",
    bgCor: "from-orange-900/30 to-red-900/30",
    borderCor: "border-orange-500/20",
    descricao: "Velocidade linear máxima na superfície",
  },
  {
    valor: "23,5",
    unidade: "°",
    label: "Inclinação Axial",
    cor: "text-purple-400",
    bgCor: "from-purple-900/30 to-pink-900/30",
    borderCor: "border-purple-500/20",
    descricao: "Ângulo do eixo em relação à órbita",
  },
  {
    valor: "465",
    unidade: "m/s",
    label: "Velocidade Angular",
    cor: "text-green-400",
    bgCor: "from-green-900/30 to-emerald-900/30",
    borderCor: "border-green-500/20",
    descricao: "Velocidade de rotação no equador",
  },
];

// Consequências da rotação
const consequenciasRotacao = [
  {
    icon: "🌅",
    titulo: "Dia e Noite",
    descricao: "A alternância entre dia e noite é a consequência mais evidente da rotação. Enquanto uma face da Terra está iluminada pelo Sol, a outra permanece na escuridão.",
    cor: "from-amber-500/20 to-orange-500/20",
    borderCor: "border-amber-500/30",
  },
  {
    icon: "🌀",
    titulo: "Efeito Coriolis",
    descricao: "A rotação causa o desvio de objetos em movimento (ventos, correntes oceânicas). No hemisfério norte, desviam para a direita; no sul, para a esquerda.",
    cor: "from-blue-500/20 to-cyan-500/20",
    borderCor: "border-blue-500/30",
  },
  {
    icon: "🌊",
    titulo: "Correntes Oceânicas",
    descricao: "As grandes correntes oceânicas são influenciadas pela rotação, formando giros no sentido horário no hemisfério norte e anti-horário no sul.",
    cor: "from-teal-500/20 to-emerald-500/20",
    borderCor: "border-teal-500/30",
  },
  {
    icon: "💨",
    titulo: "Padrões de Ventos",
    descricao: "Os ventos alísios, ventos de oeste e ventos polares são resultado direto da rotação combinada com o aquecimento diferencial da atmosfera.",
    cor: "from-purple-500/20 to-indigo-500/20",
    borderCor: "border-purple-500/30",
  },
  {
    icon: "🏔️",
    titulo: "Achatamento Polar",
    descricao: "A força centrífuga causada pela rotação faz com que a Terra seja ligeiramente achatada nos polos e mais larga no equador (21 km de diferença).",
    cor: "from-rose-500/20 to-pink-500/20",
    borderCor: "border-rose-500/30",
  },
  {
    icon: "🧭",
    titulo: "Campo Magnético",
    descricao: "A rotação do núcleo externo líquido, combinada com convecção, gera o campo magnético terrestre através do efeito dínamo.",
    cor: "from-violet-500/20 to-purple-500/20",
    borderCor: "border-violet-500/30",
  },
];

// Evolução histórica da rotação
const evolucaoHistorica = [
  {
    era: "4,5 bilhões de anos atrás",
    duracao: "~6 horas",
    evento: "Formação da Terra",
    descricao: "Logo após a formação, a Terra girava muito mais rápido, completando uma rotação em apenas 6 horas.",
  },
  {
    era: "620 milhões de anos atrás",
    duracao: "~21,9 horas",
    evento: "Era Ediacarana",
    descricao: "Fósseis de recifes de coral e registros geológicos indicam dias mais curtos nesta época.",
  },
  {
    era: "350 milhões de anos atrás",
    duracao: "~23 horas",
    evento: "Período Carbonífero",
    descricao: "Análise de anéis de crescimento em corais fósseis confirmam a duração do dia.",
  },
  {
    era: "Hoje",
    duracao: "24 horas",
    evento: "Era Atual",
    descricao: "A rotação continua desacelerando cerca de 1,4 milissegundos por século devido às marés.",
  },
  {
    era: "250 milhões de anos no futuro",
    duracao: "~25 horas",
    evento: "Previsão",
    descricao: "Se a tendência continuar, os dias terão 25 horas. A Lua estará mais distante da Terra.",
  },
];

// Comparação de velocidades
const comparacaoVelocidades = [
  { local: "Equador (0°)", velocidade: "1.670 km/h", porcentagem: 100 },
  { local: "Trópico de Câncer (23,5°N)", velocidade: "1.530 km/h", porcentagem: 92 },
  { local: "Nova York (40°N)", velocidade: "1.280 km/h", porcentagem: 77 },
  { local: "Paris (49°N)", velocidade: "1.100 km/h", porcentagem: 66 },
  { local: "Círculo Polar Ártico (66,5°N)", velocidade: "670 km/h", porcentagem: 40 },
  { local: "Polo Norte/Sul (90°)", velocidade: "~0 km/h", porcentagem: 0 },
];

// Curiosidades
const curiosidades = [
  {
    icon: "🌙",
    titulo: "Influência da Lua",
    descricao: "A gravidade da Lua causa fricção nas marés, desacelerando a rotação da Terra. Como consequência, a Lua se afasta ~3,8 cm/ano.",
  },
  {
    icon: "🦖",
    titulo: "Dias dos Dinossauros",
    descricao: "Há 70 milhões de anos, um dia tinha apenas 23,5 horas. Os dinossauros viviam com mais dias por ano (cerca de 372).",
  },
  {
    icon: "⚡",
    titulo: "Segundos Intercalares",
    descricao: "Para compensar a desaceleração, cientistas adicionam 'segundos bissextos' ao tempo oficial (27 desde 1972).",
  },
  {
    icon: "🌋",
    titulo: "Terremotos Alteram Rotação",
    descricao: "O terremoto do Japão (2011) encurtou o dia em 1,8 microssegundo ao redistribuir massa da Terra.",
  },
  {
    icon: "🏃",
    titulo: "Por que não sentimos?",
    descricao: "A velocidade é constante e a atmosfera gira junto. Só percebemos mudanças de velocidade (aceleração), não velocidade constante.",
  },
  {
    icon: "🌐",
    titulo: "GPS e Rotação",
    descricao: "Os satélites GPS precisam compensar a rotação da Terra e efeitos relativísticos para fornecer localização precisa.",
  },
];

export default function RotacaoTerra() {
  return (
    <>
      <Head>
        <title>Rotação da Terra | Enciclopédia da Ciência</title>
        <meta
          name="description"
          content="Descubra como a rotação da Terra funciona: velocidade, inclinação axial, efeito Coriolis, dia e noite. Visualização 3D interativa."
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
              <span className="text-cyan-400">Rotação da Terra</span>
            </nav>

            {/* Título */}
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30">
                <MdRotateRight className="text-4xl text-cyan-400" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-white">
                  Rotação da Terra
                </h1>
                <p className="text-gray-400 mt-1">Capítulo: Planeta Terra • Subcapítulo 4</p>
              </div>
            </div>

            {/* Introdução */}
            <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
              A <span className="text-cyan-400 font-semibold">rotação da Terra</span> é o movimento 
              que o planeta realiza em torno de seu próprio eixo, responsável pela 
              <span className="text-amber-400"> alternância entre dia e noite</span>. Este movimento 
              fundamental determina nossos ciclos diários e influencia fenômenos globais como 
              ventos, correntes oceânicas e o campo magnético.
            </p>
          </div>
        </section>

        {/* Visualização 3D */}
        <section className="container mx-auto px-4 py-8">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
              <GiEarthAmerica className="text-cyan-400" />
              Visualização Interativa 3D
            </h2>
            <p className="text-slate-400 text-sm mt-2 max-w-2xl">
              Observe a Terra girando em seu eixo inclinado de 23,5°. A linha amarela representa 
              o eixo de rotação e a linha vermelha marca o equador.
            </p>
          </div>
          
          <PlanetEarthRotation3D />
          
          <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
            <p className="text-slate-400 text-sm">
              💡 <strong>Dica:</strong> Arraste para mudar o ângulo de visão. A rotação da Terra 
              ocorre de oeste para leste (sentido anti-horário visto do Polo Norte).
            </p>
          </div>
        </section>

        {/* Dados Científicos Principais */}
        <section className="container mx-auto px-4 py-12">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
              <FaClock className="text-cyan-400" />
              Dados Científicos
            </h2>
            <p className="text-slate-400 max-w-3xl">
              Números fundamentais que definem a rotação do nosso planeta.
            </p>
          </div>

          {/* Grid de estatísticas */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {dadosCientificos.map((dado, index) => (
              <div 
                key={index}
                className={`bg-gradient-to-br ${dado.bgCor} rounded-2xl p-6 border ${dado.borderCor}`}
              >
                <p className={`text-3xl md:text-4xl font-bold ${dado.cor}`}>
                  {dado.valor}
                  <span className="text-lg md:text-xl ml-1">{dado.unidade}</span>
                </p>
                <p className="text-white font-medium mt-1">{dado.label}</p>
                <p className="text-gray-400 text-xs mt-2">{dado.descricao}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Velocidade vs Latitude */}
        <section className="container mx-auto px-4 py-12">
          <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700/50">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <MdSpeed className="text-orange-400" />
              Velocidade de Rotação por Latitude
            </h3>
            <p className="text-slate-400 mb-6">
              A velocidade linear diminui conforme nos aproximamos dos polos, pois o raio de rotação é menor.
            </p>
            
            <div className="space-y-4">
              {comparacaoVelocidades.map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-white">{item.local}</span>
                    <span className="text-cyan-400 font-medium">{item.velocidade}</span>
                  </div>
                  <div className="h-3 bg-slate-700 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full transition-all duration-1000"
                      style={{ width: `${item.porcentagem}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
            
            <p className="text-slate-500 text-sm mt-6 italic">
              💡 Nos polos, a velocidade linear é praticamente zero, mas a velocidade angular 
              (uma rotação por dia) é a mesma em qualquer ponto da Terra.
            </p>
          </div>
        </section>

        {/* Consequências da Rotação */}
        <section className="container mx-auto px-4 py-12">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
              <GiWindSlap className="text-purple-400" />
              Consequências da Rotação
            </h2>
            <p className="text-slate-400 max-w-3xl">
              A rotação da Terra produz uma série de fenômenos físicos e geográficos fundamentais 
              para a vida no planeta.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {consequenciasRotacao.map((item, index) => (
              <div 
                key={index}
                className={`bg-gradient-to-br ${item.cor} rounded-2xl p-6 border ${item.borderCor} hover:scale-[1.02] transition-transform`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{item.icon}</span>
                  <h3 className="text-lg font-bold text-white">{item.titulo}</h3>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {item.descricao}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Inclinação Axial e Estações */}
        <section className="container mx-auto px-4 py-12">
          <div className="bg-gradient-to-br from-amber-900/20 via-slate-800/50 to-orange-900/20 rounded-2xl p-8 border border-amber-500/20">
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/20 rounded-full text-amber-400 text-sm mb-4">
                <GiSunrise className="text-lg" />
                Inclinação Axial
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">
                Por que temos Estações do Ano?
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <p className="text-slate-300 leading-relaxed">
                  O eixo de rotação da Terra não é perpendicular ao plano de sua órbita ao redor do Sol. 
                  Ele está inclinado em <strong className="text-amber-400">23,5°</strong> (ou mais precisamente, 
                  23,44°). Esta inclinação é a responsável pelas estações do ano.
                </p>
                
                <div className="space-y-4">
                  <div className="p-4 bg-slate-800/60 rounded-xl border border-slate-700/40">
                    <h4 className="text-white font-medium mb-2">☀️ Verão</h4>
                    <p className="text-slate-400 text-sm">
                      Quando um hemisfério está inclinado em direção ao Sol, recebe luz mais direta 
                      e dias mais longos, resultando em temperaturas mais altas.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-slate-800/60 rounded-xl border border-slate-700/40">
                    <h4 className="text-white font-medium mb-2">❄️ Inverno</h4>
                    <p className="text-slate-400 text-sm">
                      Quando inclinado para longe do Sol, a luz chega em ângulo mais oblíquo 
                      e os dias são mais curtos, causando temperaturas mais baixas.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-slate-800/60 rounded-xl border border-slate-700/40">
                    <h4 className="text-white font-medium mb-2">🍂🌸 Equinócios</h4>
                    <p className="text-slate-400 text-sm">
                      Nos equinócios (março e setembro), o eixo não aponta para o Sol nem para longe dele, 
                      resultando em dias e noites de igual duração em todo o planeta.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="p-6 bg-gradient-to-br from-amber-500/10 to-orange-500/10 rounded-2xl border border-amber-500/20">
                  <h3 className="text-xl font-bold text-white mb-4">📐 Medidas Importantes</h3>
                  <ul className="space-y-3 text-slate-300 text-sm">
                    <li className="flex justify-between">
                      <span>Inclinação axial atual:</span>
                      <span className="text-amber-400 font-medium">23,44°</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Variação (ciclo de 41.000 anos):</span>
                      <span className="text-amber-400 font-medium">22,1° a 24,5°</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Trópico de Câncer:</span>
                      <span className="text-amber-400 font-medium">23,5° N</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Trópico de Capricórnio:</span>
                      <span className="text-amber-400 font-medium">23,5° S</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Círculo Polar Ártico:</span>
                      <span className="text-amber-400 font-medium">66,5° N</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Círculo Polar Antártico:</span>
                      <span className="text-amber-400 font-medium">66,5° S</span>
                    </li>
                  </ul>
                </div>

                <div className="p-4 bg-slate-800/50 rounded-xl border border-slate-700/50">
                  <p className="text-slate-400 text-sm italic">
                    💡 <strong>Curiosidade:</strong> A Lua ajuda a estabilizar a inclinação axial da Terra. 
                    Sem ela, o eixo poderia variar caoticamente de 0° a 85°, causando climas extremos 
                    e possivelmente impossibilitando a vida complexa.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Evolução Histórica */}
        <section className="container mx-auto px-4 py-12">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
              <FaHistory className="text-emerald-400" />
              Evolução Histórica da Rotação
            </h2>
            <p className="text-slate-400 max-w-3xl">
              A Terra está desacelerando gradualmente devido às forças de maré da Lua e do Sol. 
              Essa desaceleração é extremamente lenta, mas ao longo de bilhões de anos, 
              teve efeitos significativos.
            </p>
          </div>

          <div className="relative">
            {/* Linha do tempo */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-500 via-cyan-500 to-purple-500" />
            
            <div className="space-y-8">
              {evolucaoHistorica.map((item, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Ponto na linha do tempo */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-slate-900 border-2 border-cyan-500 rounded-full transform -translate-x-1/2 z-10" />
                  
                  {/* Card */}
                  <div className={`ml-12 md:ml-0 md:w-[45%] ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                    <div className="bg-slate-800/60 rounded-xl p-5 border border-slate-700/50 hover:border-cyan-500/30 transition-colors">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-cyan-400 text-sm font-medium">{item.era}</span>
                        <span className="text-amber-400 font-bold">{item.duracao}</span>
                      </div>
                      <h4 className="text-white font-semibold mb-2">{item.evento}</h4>
                      <p className="text-slate-400 text-sm">{item.descricao}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Efeito Coriolis Detalhado */}
        <section className="container mx-auto px-4 py-12">
          <div className="bg-gradient-to-br from-blue-900/30 via-slate-800/50 to-cyan-900/30 rounded-2xl p-8 border border-blue-500/20">
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 rounded-full text-blue-400 text-sm mb-4">
                <span className="text-lg">🌀</span>
                Física Aplicada
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">
                O Efeito Coriolis
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <p className="text-slate-300 leading-relaxed">
                  O <strong className="text-blue-400">efeito Coriolis</strong> é uma força fictícia 
                  (ou inercial) que aparece em sistemas de referência em rotação, como a Terra. 
                  Ele causa o desvio de objetos em movimento em relação à superfície.
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="p-4 bg-slate-800/60 rounded-xl border-l-4 border-blue-500">
                    <h4 className="text-white font-medium mb-2">🌐 Hemisfério Norte</h4>
                    <p className="text-slate-400 text-sm">
                      Objetos em movimento são desviados para a <strong className="text-blue-300">direita</strong> 
                      em relação à sua trajetória original.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-slate-800/60 rounded-xl border-l-4 border-cyan-500">
                    <h4 className="text-white font-medium mb-2">🌍 Hemisfério Sul</h4>
                    <p className="text-slate-400 text-sm">
                      Objetos em movimento são desviados para a <strong className="text-cyan-300">esquerda</strong> 
                      em relação à sua trajetória original.
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-slate-800/50 rounded-xl">
                  <h4 className="text-white font-medium mb-3">📊 Fórmula de Coriolis</h4>
                  <p className="text-slate-300 font-mono text-center text-lg py-2 bg-slate-900/50 rounded-lg">
                    F = 2mωv sin(φ)
                  </p>
                  <ul className="mt-3 text-slate-400 text-xs space-y-1">
                    <li><strong>F</strong> = Força de Coriolis</li>
                    <li><strong>m</strong> = Massa do objeto</li>
                    <li><strong>ω</strong> = Velocidade angular da Terra (7,29 × 10⁻⁵ rad/s)</li>
                    <li><strong>v</strong> = Velocidade do objeto</li>
                    <li><strong>φ</strong> = Latitude</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-xl font-bold text-white">Aplicações Práticas</h3>
                
                <div className="space-y-4">
                  <div className="p-4 bg-gradient-to-r from-blue-900/30 to-transparent rounded-xl border-l-4 border-blue-400">
                    <h4 className="text-blue-300 font-medium mb-1">🌪️ Furacões e Ciclones</h4>
                    <p className="text-slate-400 text-sm">
                      Giram no sentido anti-horário no hemisfério norte e horário no sul devido ao Coriolis.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-gradient-to-r from-cyan-900/30 to-transparent rounded-xl border-l-4 border-cyan-400">
                    <h4 className="text-cyan-300 font-medium mb-1">🛫 Aviação</h4>
                    <p className="text-slate-400 text-sm">
                      Pilotos devem compensar o efeito em voos longos, especialmente próximo aos polos.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-gradient-to-r from-teal-900/30 to-transparent rounded-xl border-l-4 border-teal-400">
                    <h4 className="text-teal-300 font-medium mb-1">🎯 Artilharia de Longo Alcance</h4>
                    <p className="text-slate-400 text-sm">
                      Projéteis de artilharia e mísseis balísticos precisam de correção para o Coriolis.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-gradient-to-r from-emerald-900/30 to-transparent rounded-xl border-l-4 border-emerald-400">
                    <h4 className="text-emerald-300 font-medium mb-1">🌊 Oceanografia</h4>
                    <p className="text-slate-400 text-sm">
                      As grandes correntes oceânicas formam giros influenciados pelo Coriolis.
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-red-900/20 rounded-xl border border-red-500/30">
                  <p className="text-red-300 text-sm">
                    ⚠️ <strong>Mito desvendado:</strong> O efeito Coriolis NÃO afeta a direção que a água 
                    gira ao descer pelo ralo. A escala é pequena demais — outros fatores (forma da pia, 
                    movimento inicial da água) são muito mais significativos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Curiosidades */}
        <section className="container mx-auto px-4 py-12">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="text-3xl">💡</span>
              Curiosidades Fascinantes
            </h2>
            <p className="text-slate-400 max-w-3xl">
              Fatos surpreendentes sobre a rotação da Terra que você talvez não saiba.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {curiosidades.map((item, index) => (
              <div 
                key={index}
                className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 hover:border-cyan-500/30 transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{item.icon}</span>
                  <h3 className="text-lg font-bold text-white">{item.titulo}</h3>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {item.descricao}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Vídeo Educativo */}
        <section className="container mx-auto px-4 py-12">
          <div className="bg-gradient-to-br from-red-900/20 via-slate-800/50 to-purple-900/20 rounded-2xl p-8 border border-red-500/20">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/20 rounded-full text-red-400 text-sm mb-4">
                <span className="animate-pulse">🔴</span> Vídeo Educativo
              </div>
              <h2 className="text-3xl font-bold text-white mb-4 flex items-center justify-center gap-3">
                <span className="text-4xl">🎬</span>
                Entenda a Rotação da Terra
              </h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                Assista a este vídeo que explica de forma visual e didática como funciona 
                a rotação terrestre e suas consequências para o nosso dia a dia.
              </p>
            </div>

            {/* Player do YouTube */}
            <div className="relative w-full max-w-4xl mx-auto">
              <div className="aspect-video rounded-xl overflow-hidden shadow-2xl shadow-red-500/10 border border-slate-700/50">
                <iframe
                  src="https://www.youtube.com/embed/ukkaTKdnfw4"
                  title="Rotação da Terra - Vídeo Exclusivo"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>

            {/* Info adicional */}
            <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm">
              <a 
                href="https://youtu.be/ukkaTKdnfw4" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-500 rounded-lg text-white transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                Assistir no YouTube
              </a>
              <span className="flex items-center gap-2 px-4 py-2 bg-slate-700/50 rounded-lg text-slate-300">
                <span>📺</span> Conteúdo educativo complementar
              </span>
            </div>
          </div>
        </section>

        {/* Navegação */}
        <section className="container mx-auto px-4 py-12">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 border-t border-slate-700/50 pt-8">
            <Link
              href="/capitulo/planeta-terra/estrutura-terra"
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-gray-300 hover:text-white transition-all group"
            >
              <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
              Anterior: Estrutura da Terra
            </Link>

            <Link
              href="/capitulo/planeta-terra/continentes"
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white transition-all group"
            >
              Próximo: Continentes
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Rodapé institucional */}
          <footer className="mt-12 text-center text-sm text-gray-500 dark:text-gray-400">
            <p>Enciclopédia da Ciência 2025</p>
            <p>Conteúdo Feito com ❤️ e ☕ por Jhonnatan Luiz</p>
          </footer>
        </section>
      </main>
    </>
  );
}
