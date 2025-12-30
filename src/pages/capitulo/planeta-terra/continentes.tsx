import Head from "next/head";
import Link from "next/link";
import { FaArrowLeft, FaArrowRight, FaGlobeAfrica, FaGlobeAmericas, FaGlobeAsia, FaGlobeEurope, FaWater, FaSnowflake, FaMountain, FaTree, FaUsers, FaIndustry } from "react-icons/fa";
import { GiAfrica, GiSouthAmerica, GiEarthAsiaOceania, GiEuropeanFlag, GiIsland, GiIceberg, GiDesert, GiForest, GiMountainCave, GiCoral, GiPenguin, GiElephant, GiKangaroo } from "react-icons/gi";
import { MdPublic, MdTerrain, MdNaturePeople } from "react-icons/md";
import ImageCarousel from "@/components/ui/ImageCarousel";
import ThemeToggle from "@/components/ui/ThemeToggle";

const africaImagens = [
  "/images/continentes/africa/Cairo_e_as_Piramides_de_Gize.png",
  "/images/continentes/africa/Rio_Nilo_e_Esfinge.png",
  "/images/continentes/africa/Deserto_do_Saara.png",
  "/images/continentes/africa/Monte_Kilimanjaro.png",
  "/images/continentes/africa/Cataratas_Vitoria.png",
  "/images/continentes/africa/Delta_do_Okavango.png",
  "/images/continentes/africa/Parque_Nacional_do_Serengeti_e_Maasai_Mara.png",
  "/images/continentes/africa/Parque_Nacional_Kruger.png",
  "/images/continentes/africa/Cidade_do_Cabo_Africa_do_sul.png",
  "/images/continentes/africa/Marraquexe_Marrocos.png",
  "/images/continentes/africa/Djenne_Mali.png",
  "/images/continentes/africa/Lalibela_Etiopia.png",
  "/images/continentes/africa/Ilha_de_Zanzibar_Tanzania.png",
];

const africaInfograficoSrc = "/images/infograficos/africa-infografico.png";


// Dados dos continentes
const continentes = [
  {
    nome: "África",
    icon: "🌍",
    iconComponent: FaGlobeAfrica,
    cor: "from-amber-600 to-orange-700",
    borderCor: "border-amber-400/50 dark:border-amber-500/30",
    textCor: "text-amber-600 dark:text-amber-400",
    bgCor: "from-amber-200/50 to-orange-200/50 dark:from-amber-900/30 dark:to-orange-900/30",
    area: "30,37 milhões km²",
    populacao: "1,4 bilhão",
    paises: 54,
    maiorPais: "Argélia",
    pontoMaisAlto: "Monte Kilimanjaro (5.895 m)",
    descricao: "Berço da humanidade e segundo maior continente do mundo, a África abriga uma diversidade extraordinária de paisagens, culturas e ecossistemas que moldaram a história da civilização.",
    curiosidades: [
      {
        icon: "🏜️",
        titulo: "Deserto do Saara",
        texto: "O maior deserto quente do mundo, com 9,2 milhões de km², é tão grande quanto os Estados Unidos. Curiosamente, há 6.000 anos era uma savana verde com lagos e rios.",
      },
      {
        icon: "🌊",
        titulo: "Rio Nilo",
        texto: "Com 6.650 km, disputa o título de rio mais longo do mundo. Suas cheias anuais fertilizaram o solo por milênios, permitindo o surgimento da civilização egípcia.",
      },
      {
        icon: "🦁",
        titulo: "Megafauna Única",
        texto: "Único continente com os 'Big Five' (leão, leopardo, rinoceronte, elefante e búfalo) vivendo em estado selvagem. Abriga 1/4 de todas as espécies de mamíferos.",
      },
      {
        icon: "💎",
        titulo: "Riquezas Minerais",
        texto: "Produz 75% dos diamantes do mundo, 50% do ouro e 90% da platina. O Congo possui 70% das reservas mundiais de coltan, essencial para smartphones.",
      },
    ],
    geografia: {
      clima: ["Tropical", "Desértico", "Mediterrâneo", "Equatorial"],
      biomas: ["Savana", "Deserto", "Floresta Tropical", "Estepe"],
      caracteristicas: [
        "Grande Rift Valley - berço geológico da humanidade",
        "Delta do Okavango - maior delta interior do mundo",
        "Floresta do Congo - segunda maior floresta tropical",
        "Lago Vitória - maior lago tropical do mundo",
      ],
    },
  },
  {
    nome: "América",
    icon: "🌎",
    iconComponent: FaGlobeAmericas,
    cor: "from-emerald-600 to-teal-700",
    borderCor: "border-emerald-400/50 dark:border-emerald-500/30",
    textCor: "text-emerald-600 dark:text-emerald-400",
    bgCor: "from-emerald-200/50 to-teal-200/50 dark:from-emerald-900/30 dark:to-teal-900/30",
    area: "42,55 milhões km²",
    populacao: "1,02 bilhão",
    paises: 35,
    maiorPais: "Canadá",
    pontoMaisAlto: "Aconcágua (6.962 m)",
    descricao: "Estendendo-se do Ártico à Antártida, as Américas compreendem uma diversidade geográfica sem paralelos, desde as tundras geladas do norte até as florestas tropicais do sul.",
    curiosidades: [
      {
        icon: "🌳",
        titulo: "Floresta Amazônica",
        texto: "Com 6,7 milhões de km², é a maior floresta tropical do mundo. Produz 20% do oxigênio da Terra e abriga 10% de todas as espécies conhecidas.",
      },
      {
        icon: "🏔️",
        titulo: "Cordilheira dos Andes",
        texto: "A maior cadeia de montanhas do mundo (7.000 km). Contém o ponto mais alto das Américas (Aconcágua) e o lago navegável mais alto (Titicaca, 3.812 m).",
      },
      {
        icon: "🏜️",
        titulo: "Grand Canyon",
        texto: "Esculpido pelo Rio Colorado ao longo de 6 milhões de anos, expõe 2 bilhões de anos de história geológica em suas camadas rochosas de 1.800 m de profundidade.",
      },
      {
        icon: "🦜",
        titulo: "Biodiversidade Recorde",
        texto: "Brasil e Colômbia estão entre os países mais biodiversos. A Amazônia possui mais de 400 bilhões de árvores de 16.000 espécies diferentes.",
      },
    ],
    geografia: {
      clima: ["Polar", "Temperado", "Tropical", "Equatorial", "Desértico"],
      biomas: ["Tundra", "Taiga", "Pradaria", "Floresta Tropical", "Deserto"],
      caracteristicas: [
        "Rio Amazonas - maior volume de água doce",
        "Grandes Lagos - 21% da água doce superficial mundial",
        "Deserto do Atacama - mais seco do planeta",
        "Pantanal - maior planície alagável do mundo",
      ],
    },
  },
  {
    nome: "Ásia",
    icon: "🌏",
    iconComponent: FaGlobeAsia,
    cor: "from-red-600 to-rose-700",
    borderCor: "border-red-400/50 dark:border-red-500/30",
    textCor: "text-red-600 dark:text-red-400",
    bgCor: "from-red-200/50 to-orange-200/50 dark:from-red-900/30 dark:to-orange-900/30",
    area: "44,58 milhões km²",
    populacao: "4,7 bilhões",
    paises: 49,
    maiorPais: "Rússia (parte asiática)",
    pontoMaisAlto: "Monte Everest (8.849 m)",
    descricao: "O maior e mais populoso continente, berço das primeiras civilizações e das grandes religiões mundiais. A Ásia é um mosaico de culturas milenares e economias em rápida transformação.",
    curiosidades: [
      {
        icon: "🏔️",
        titulo: "Himalaia",
        texto: "Lar das 14 montanhas acima de 8.000 m do planeta, incluindo o Everest. Formou-se há 50 milhões de anos pela colisão das placas indiana e euroasiática.",
      },
      {
        icon: "🏜️",
        titulo: "Deserto de Gobi",
        texto: "Quinto maior deserto do mundo, com temperaturas de -40°C a +50°C. Foi rota da Seda e guarda fósseis de dinossauros, incluindo ovos preservados.",
      },
      {
        icon: "👥",
        titulo: "Diversidade Populacional",
        texto: "Abriga 60% da população mundial. China e Índia, juntas, têm mais habitantes que todos os outros continentes combinados.",
      },
      {
        icon: "🏛️",
        titulo: "Berço das Civilizações",
        texto: "Mesopotâmia, Vale do Indo e China antiga nasceram aqui. Origem da escrita, agricultura, roda e das principais religiões (hinduísmo, budismo, islamismo).",
      },
    ],
    geografia: {
      clima: ["Polar", "Temperado", "Tropical", "Desértico", "Monçônico"],
      biomas: ["Taiga", "Estepe", "Deserto", "Floresta Tropical", "Tundra"],
      caracteristicas: [
        "Planalto do Tibete - 'teto do mundo' (4.500 m médios)",
        "Mar Morto - ponto mais baixo da Terra (-430 m)",
        "Lago Baikal - lago mais antigo e profundo",
        "Indonésia - maior arquipélago (17.000 ilhas)",
      ],
    },
  },
  {
    nome: "Europa",
    icon: "🇪🇺",
    iconComponent: FaGlobeEurope,
    cor: "from-blue-600 to-indigo-700",
    borderCor: "border-blue-400/50 dark:border-blue-500/30",
    textCor: "text-blue-600 dark:text-blue-400",
    bgCor: "from-blue-200/50 to-indigo-200/50 dark:from-blue-900/30 dark:to-indigo-900/30",
    area: "10,18 milhões km²",
    populacao: "750 milhões",
    paises: 44,
    maiorPais: "Rússia (parte europeia)",
    pontoMaisAlto: "Monte Elbrus (5.642 m)",
    descricao: "Berço da filosofia, ciência moderna e revoluções que transformaram o mundo. Apesar de ser o segundo menor continente, a Europa exerceu influência desproporcional na história global.",
    curiosidades: [
      {
        icon: "🏔️",
        titulo: "Alpes",
        texto: "Maior cadeia montanhosa da Europa, com 1.200 km. O Mont Blanc (4.809 m) é seu pico mais alto. Formados há 65 milhões de anos pela colisão África-Europa.",
      },
      {
        icon: "🌊",
        titulo: "Fiordes Escandinavos",
        texto: "Vales glaciais inundados pelo mar, alguns com mais de 200 km de extensão e 1.300 m de profundidade. Sognefjord na Noruega é o maior.",
      },
      {
        icon: "🏛️",
        titulo: "Patrimônio Cultural",
        texto: "Possui mais de 400 sítios do Patrimônio Mundial da UNESCO. Itália lidera com 58 sítios, seguida por Espanha, Alemanha e França.",
      },
      {
        icon: "🌍",
        titulo: "União Europeia",
        texto: "27 países compartilham mercado comum e 20 usam a mesma moeda (Euro). Maior economia do mundo se considerada como bloco único.",
      },
    ],
    geografia: {
      clima: ["Oceânico", "Continental", "Mediterrâneo", "Subártico"],
      biomas: ["Floresta Temperada", "Taiga", "Estepe", "Mediterrâneo"],
      caracteristicas: [
        "Planície Europeia - maior área plana do continente",
        "Mar Mediterrâneo - 'mare nostrum' da antiguidade",
        "Rios navegáveis - Danúbio, Reno, Volga",
        "Islândia - terra de gêiseres e vulcões ativos",
      ],
    },
  },
  {
    nome: "Oceania",
    icon: "🏝️",
    iconComponent: GiIsland,
    cor: "from-cyan-600 to-sky-700",
    borderCor: "border-cyan-400/50 dark:border-cyan-500/30",
    textCor: "text-cyan-600 dark:text-cyan-400",
    bgCor: "from-cyan-200/50 to-teal-200/50 dark:from-cyan-900/30 dark:to-teal-900/30",
    area: "8,53 milhões km²",
    populacao: "45 milhões",
    paises: 14,
    maiorPais: "Austrália",
    pontoMaisAlto: "Puncak Jaya (4.884 m)",
    descricao: "O menor continente, dominado pela Austrália e espalhado por milhares de ilhas no Pacífico. Isolamento geográfico resultou em flora e fauna únicas no planeta.",
    curiosidades: [
      {
        icon: "🪸",
        titulo: "Grande Barreira de Corais",
        texto: "Maior estrutura viva do planeta, com 2.300 km e visível do espaço. Abriga 1.500 espécies de peixes, 400 de corais e 4.000 de moluscos.",
      },
      {
        icon: "🦘",
        titulo: "Fauna Endêmica",
        texto: "80% das espécies australianas não existem em nenhum outro lugar. Marsupiais (cangurus, coalas) e monotremados (ornitorrinco, équidna) são exclusivos.",
      },
      {
        icon: "🗿",
        titulo: "Culturas Ancestrais",
        texto: "Aborígenes australianos têm a cultura contínua mais antiga (65.000 anos). Maoris da Nova Zelândia chegaram há 800 anos em canoas oceânicas.",
      },
      {
        icon: "🌋",
        titulo: "Anel de Fogo",
        texto: "Ilhas do Pacífico estão no Anel de Fogo, zona de intensa atividade vulcânica e sísmica. Papua Nova Guiné tem vulcões ativos e frequentes terremotos.",
      },
    ],
    geografia: {
      clima: ["Tropical", "Desértico", "Temperado", "Equatorial"],
      biomas: ["Outback", "Floresta Tropical", "Recifes de Coral", "Pradaria"],
      caracteristicas: [
        "Outback Australiano - deserto vermelho interior",
        "Nova Zelândia - paisagens de 'Terra Média'",
        "Melanésia, Micronésia, Polinésia - regiões insulares",
        "Uluru (Ayers Rock) - monolito sagrado de 348 m",
      ],
    },
  },
  {
    nome: "Antártida",
    icon: "🧊",
    iconComponent: FaSnowflake,
    cor: "from-slate-500 to-zinc-600",
    borderCor: "border-slate-400/50 dark:border-slate-400/30",
    textCor: "text-slate-600 dark:text-slate-300",
    bgCor: "from-slate-300/50 to-zinc-300/50 dark:from-slate-800/30 dark:to-zinc-800/30",
    area: "14,2 milhões km²",
    populacao: "1.000-5.000 (cientistas)",
    paises: "Sem soberania (Tratado Antártico)",
    maiorPais: "N/A",
    pontoMaisAlto: "Maciço Vinson (4.892 m)",
    descricao: "O continente mais frio, seco e ventoso da Terra. Coberto por 98% de gelo, a Antártida é um laboratório natural único para estudos climáticos e científicos.",
    curiosidades: [
      {
        icon: "🥶",
        titulo: "Recordes de Frio",
        texto: "Temperatura mais baixa registrada: -89,2°C na Estação Vostok (1983). Média anual de -57°C no interior. Ventos chegam a 320 km/h.",
      },
      {
        icon: "🧊",
        titulo: "Reservatório de Gelo",
        texto: "Contém 70% da água doce do planeta em forma de gelo (26,5 milhões de km³). Se derretesse, o nível do mar subiria 60 metros.",
      },
      {
        icon: "🐧",
        titulo: "Fauna Adaptada",
        texto: "Pinguins-imperadores sobrevivem a -60°C incubando ovos. Focas-de-weddell mergulham a 600 m. Krill antártico sustenta toda a cadeia alimentar.",
      },
      {
        icon: "📜",
        titulo: "Tratado Antártico",
        texto: "Desde 1959, 54 países concordam em usar o continente apenas para fins pacíficos e científicos. Proibida mineração e atividade militar.",
      },
    ],
    geografia: {
      clima: ["Polar extremo", "Deserto gelado"],
      biomas: ["Gelo permanente", "Tundra costeira"],
      caracteristicas: [
        "Plataforma de gelo Ross - tamanho da França",
        "Lago Vostok - lago subglacial de 15.000 km²",
        "Montes Transantárticos - dividem o continente",
        "Península Antártica - área mais 'quente' (-2°C verão)",
      ],
    },
  },
];

// Dados científicos globais
const dadosGlobais = [
  {
    valor: "7",
    label: "Continentes",
    cor: "text-cyan-600 dark:text-cyan-400",
    bgCor: "from-cyan-200/50 to-blue-200/50 dark:from-cyan-900/30 dark:to-blue-900/30",
    borderCor: "border-cyan-400/30 dark:border-cyan-500/20",
    descricao: "Grandes massas terrestres do planeta",
  },
  {
    valor: "510",
    unidade: "mi km²",
    label: "Superfície Terrestre",
    cor: "text-emerald-600 dark:text-emerald-400",
    bgCor: "from-emerald-200/50 to-teal-200/50 dark:from-emerald-900/30 dark:to-teal-900/30",
    borderCor: "border-emerald-400/30 dark:border-emerald-500/20",
    descricao: "29% terra, 71% oceanos",
  },
  {
    valor: "8",
    unidade: "bi",
    label: "População Mundial",
    cor: "text-purple-600 dark:text-purple-400",
    bgCor: "from-purple-200/50 to-pink-200/50 dark:from-purple-900/30 dark:to-pink-900/30",
    borderCor: "border-purple-400/30 dark:border-purple-500/20",
    descricao: "Habitantes do planeta em 2024",
  },
  {
    valor: "195",
    label: "Países",
    cor: "text-orange-600 dark:text-orange-400",
    bgCor: "from-orange-200/50 to-red-200/50 dark:from-orange-900/30 dark:to-red-900/30",
    borderCor: "border-orange-400/30 dark:border-orange-500/20",
    descricao: "Reconhecidos pela ONU",
  },
];

// Curiosidades sobre a deriva continental
const derivaContinental = [
  {
    era: "300 milhões de anos atrás",
    evento: "Pangeia",
    descricao: "Todos os continentes formavam um único supercontinente chamado Pangeia, cercado pelo oceano Pantalassa.",
  },
  {
    era: "200 milhões de anos atrás",
    evento: "Separação Inicial",
    descricao: "Pangeia começou a se dividir em Laurásia (norte) e Gondwana (sul), formando o mar de Tétis entre eles.",
  },
  {
    era: "130 milhões de anos atrás",
    evento: "Atlântico Sul",
    descricao: "América do Sul e África começaram a se separar, formando o Oceano Atlântico Sul. Índia iniciou migração para norte.",
  },
  {
    era: "50 milhões de anos atrás",
    evento: "Colisão Índia-Ásia",
    descricao: "Índia colidiu com a Ásia, erguendo o Himalaia. Austrália separou-se da Antártida.",
  },
  {
    era: "Presente",
    evento: "Movimento Contínuo",
    descricao: "Placas tectônicas movem-se 2-10 cm/ano. Atlântico expande, Pacífico contrai. África dividirá-se em 10 milhões de anos.",
  },
];

export default function Continentes() {
  return (
    <>
      <Head>
        <title>Continentes | Enciclopédia da Ciência</title>
        <meta
          name="description"
          content="Explore os 6 continentes da Terra: África, América, Ásia, Europa, Oceania e Antártida. Geografia, cultura, fauna e curiosidades científicas."
        />
      </Head>

      <main className="min-h-screen bg-gradient-to-b from-gray-50 via-gray-100 to-gray-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/textures/stars-bg.jpg')] opacity-5 dark:opacity-20"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-100/50 to-gray-50 dark:via-slate-900/50 dark:to-slate-900"></div>

          <div className="relative container mx-auto px-4 py-12">
            {/* Breadcrumb */}
            <nav className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400 mb-6">
              <div className="flex items-center gap-2">
                <Link href="/" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Início</Link>
                <span>/</span>
                <Link href="/capitulo/planeta-terra" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Planeta Terra</Link>
                <span>/</span>
                <span className="text-cyan-600 dark:text-cyan-400">Continentes</span>
              </div>
              <ThemeToggle />
            </nav>

            {/* Título */}
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border border-emerald-500/30">
                <MdPublic className="text-4xl text-emerald-600 dark:text-emerald-400" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                  Continentes
                </h1>
                <p className="text-gray-600 dark:text-gray-400 mt-1">Capítulo: Planeta Terra • Subcapítulo 5</p>
              </div>
            </div>

            {/* Introdução */}
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl leading-relaxed">
              Os <span className="text-emerald-600 dark:text-emerald-400 font-semibold">continentes</span> são as grandes 
              massas de terra que abrigam toda a <span className="text-amber-600 dark:text-amber-400">diversidade geográfica, 
              cultural e biológica</span> do nosso planeta. Cada continente possui características 
              únicas que influenciaram profundamente a história e o desenvolvimento da humanidade.
            </p>
          </div>
        </section>

        {/* Dados Globais */}
        <section className="container mx-auto px-4 py-12">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
              <MdPublic className="text-cyan-600 dark:text-cyan-400" />
              Visão Global
            </h2>
            <p className="text-gray-600 dark:text-slate-400 max-w-3xl">
              Números que definem a distribuição das terras emersas do nosso planeta.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {dadosGlobais.map((dado, index) => (
              <div 
                key={index}
                className={`bg-gradient-to-br ${dado.bgCor} rounded-2xl p-6 border ${dado.borderCor}`}
              >
                <p className={`text-3xl md:text-4xl font-bold ${dado.cor}`}>
                  {dado.valor}
                  {dado.unidade && <span className="text-lg md:text-xl ml-1">{dado.unidade}</span>}
                </p>
                <p className="text-gray-900 dark:text-white font-medium mt-1">{dado.label}</p>
                <p className="text-gray-600 dark:text-gray-400 text-xs mt-2">{dado.descricao}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Cards de Navegação Rápida */}
        <section className="container mx-auto px-4 py-8">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
              <MdTerrain className="text-emerald-600 dark:text-emerald-400" />
              Navegue pelos Continentes
            </h2>
            <p className="text-gray-600 dark:text-slate-400 text-sm mt-2">
              Clique para ir diretamente à seção de cada continente.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {continentes.map((continente) => (
              <a
                key={continente.nome}
                href={`#${continente.nome.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')}`}
                className={`bg-gradient-to-br ${continente.bgCor} rounded-xl p-4 border ${continente.borderCor} hover:scale-105 transition-all text-center group`}
              >
                <span className="text-4xl block mb-2">{continente.icon}</span>
                <span className={`font-semibold ${continente.textCor} group-hover:text-white transition-colors`}>
                  {continente.nome}
                </span>
              </a>
            ))}
          </div>
        </section>

        {/* Seções dos Continentes */}
        {continentes.map((continente, index) => (
          <section 
            key={continente.nome}
            id={continente.nome.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')}
            className="container mx-auto px-4 py-12"
          >
            {/* Card Principal do Continente */}
            <div className={`bg-gradient-to-br ${continente.bgCor} rounded-3xl p-8 border ${continente.borderCor} mb-8`}>
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-center gap-6 mb-8">
                <div className={`p-6 rounded-2xl bg-gradient-to-br ${continente.cor} inline-flex`}>
                  <span className="text-6xl">{continente.icon}</span>
                </div>
                <div className="flex-1">
                  <h2 className={`text-4xl font-bold text-gray-900 dark:text-white mb-2`}>
                    {continente.nome}
                  </h2>
                  <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                    {continente.descricao}
                  </p>
                </div>
              </div>

              {/* Dados do Continente */}
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
                <div className="bg-gray-200/50 dark:bg-slate-800/50 rounded-xl p-4 text-center">
                  <p className={`text-2xl font-bold ${continente.textCor}`}>{continente.area}</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Área</p>
                </div>
                <div className="bg-gray-200/50 dark:bg-slate-800/50 rounded-xl p-4 text-center">
                  <p className={`text-2xl font-bold ${continente.textCor}`}>{continente.populacao}</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">População</p>
                </div>
                <div className="bg-gray-200/50 dark:bg-slate-800/50 rounded-xl p-4 text-center">
                  <p className={`text-2xl font-bold ${continente.textCor}`}>{continente.paises}</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Países</p>
                </div>
                <div className="bg-gray-200/50 dark:bg-slate-800/50 rounded-xl p-4 text-center">
                  <p className={`text-lg font-bold ${continente.textCor}`}>{continente.maiorPais}</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Maior País</p>
                </div>
                <div className="bg-gray-200/50 dark:bg-slate-800/50 rounded-xl p-4 text-center col-span-2 md:col-span-1">
                  <p className={`text-sm font-bold ${continente.textCor}`}>{continente.pontoMaisAlto}</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Ponto Mais Alto</p>
                </div>
              </div>

              {/* Climas e Biomas */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-200/40 dark:bg-slate-800/40 rounded-xl p-5">
                  <h4 className="text-gray-900 dark:text-white font-semibold mb-3 flex items-center gap-2">
                    <span>🌡️</span> Climas
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {continente.geografia.clima.map((clima) => (
                      <span 
                        key={clima}
                        className={`px-3 py-1 rounded-full text-sm bg-gray-300/50 dark:bg-slate-700/50 ${continente.textCor}`}
                      >
                        {clima}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="bg-gray-200/40 dark:bg-slate-800/40 rounded-xl p-5">
                  <h4 className="text-gray-900 dark:text-white font-semibold mb-3 flex items-center gap-2">
                    <span>🌿</span> Biomas
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {continente.geografia.biomas.map((bioma) => (
                      <span 
                        key={bioma}
                        className={`px-3 py-1 rounded-full text-sm bg-gray-300/50 dark:bg-slate-700/50 ${continente.textCor}`}
                      >
                        {bioma}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Características Geográficas */}
              <div className="bg-gray-200/40 dark:bg-slate-800/40 rounded-xl p-5 mb-8">
                <h4 className="text-gray-900 dark:text-white font-semibold mb-4 flex items-center gap-2">
                  <MdTerrain className={continente.textCor} />
                  Características Geográficas
                </h4>
                <ul className="grid md:grid-cols-2 gap-3">
                  {continente.geografia.caracteristicas.map((caracteristica, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-700 dark:text-gray-300 text-sm">
                      <span className={`${continente.textCor} mt-1`}>▸</span>
                      {caracteristica}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Curiosidades */}
              <div>
                <h4 className="text-gray-900 dark:text-white font-semibold mb-4 flex items-center gap-2 text-xl">
                  <span>💡</span> Curiosidades Fascinantes
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  {continente.curiosidades.map((curiosidade, i) => (
                    <div 
                      key={i}
                      className="bg-gray-200/60 dark:bg-slate-800/60 rounded-xl p-5 border border-gray-300/50 dark:border-slate-700/50 hover:border-gray-400/50 dark:hover:border-slate-600/50 transition-colors"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-3xl">{curiosidade.icon}</span>
                        <h5 className="text-gray-900 dark:text-white font-medium">{curiosidade.titulo}</h5>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                        {curiosidade.texto}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Mídias (inicialmente: África) */}
            {continente.nome === "África" ? (
              <div className="bg-gray-200/30 dark:bg-slate-800/30 rounded-xl p-6 border border-gray-300/50 dark:border-slate-700/50">
                <div className="flex items-center justify-between gap-4 mb-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                    <span>🎬</span>
                    Mídias da África
                  </h3>
                  <span className={`text-sm ${continente.textCor}`}>{africaImagens.length} fotos</span>
                </div>

                <p className="text-gray-600 dark:text-slate-400 text-sm mb-6">
                  Uma amostra de paisagens naturais e marcos culturais do continente.
                </p>

                <div className="space-y-8">
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">🎥 Vídeo: África</h4>
                    <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-gray-200 dark:border-slate-700/50 bg-gray-100 dark:bg-slate-900">
                      <iframe
                        className="absolute inset-0 w-full h-full"
                        src="https://www.youtube.com/embed/QpiSthmUjk8"
                        title="África - Enciclopédia da Ciência"
                        loading="lazy"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      />
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">🧾 Infográfico: Retrato da África</h4>
                    <figure className="rounded-xl overflow-hidden border border-gray-200 dark:border-slate-700/50 bg-white dark:bg-slate-900/40">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={africaInfograficoSrc}
                        alt="Infográfico: Retrato da África"
                        loading="lazy"
                        className="w-full h-auto"
                      />
                    </figure>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">🖼️ Galeria em carousel</h4>
                    <ImageCarousel images={africaImagens} altPrefix="África - Galeria" />
                    <p className="text-sm text-center mt-6 text-gray-500 dark:text-slate-500">
                      💡 Use os controles para navegar manualmente ou deixe em reprodução automática.
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-gray-200/30 dark:bg-slate-800/30 rounded-xl p-6 border border-dashed border-gray-400/50 dark:border-slate-700/50 text-center">
                <p className="text-gray-500 dark:text-slate-500 text-sm">
                  📷 Espaço reservado para galeria de imagens, infográficos e vídeos do continente {continente.nome}
                </p>
              </div>
            )}
          </section>
        ))}

        {/* Deriva Continental - Timeline */}
        <section className="container mx-auto px-4 py-12">
          <div className="bg-gradient-to-br from-purple-100/20 via-gray-200/50 to-indigo-100/20 dark:from-purple-900/20 dark:via-slate-800/50 dark:to-indigo-900/20 rounded-2xl p-8 border border-purple-500/20">
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/20 rounded-full text-purple-600 dark:text-purple-400 text-sm mb-4">
                <span>🌍</span> Tectônica de Placas
              </div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                A Deriva Continental
              </h2>
              <p className="text-gray-600 dark:text-slate-400 max-w-3xl">
                Os continentes não são fixos — eles se movem lentamente sobre o manto terrestre.
                Esta teoria, proposta por Alfred Wegener em 1912, revolucionou nossa compreensão da Terra.
              </p>
            </div>

            <div className="relative">
              {/* Linha do tempo */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-indigo-500 to-blue-500" />
              
              <div className="space-y-8">
                {derivaContinental.map((item, index) => (
                  <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    {/* Ponto na linha do tempo */}
                    <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-gray-100 dark:bg-slate-900 border-2 border-purple-500 rounded-full transform -translate-x-1/2 z-10" />
                    
                    {/* Card */}
                    <div className={`ml-12 md:ml-0 md:w-[45%] ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                      <div className="bg-gray-200/60 dark:bg-slate-800/60 rounded-xl p-5 border border-gray-300/50 dark:border-slate-700/50 hover:border-purple-500/30 transition-colors">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-purple-600 dark:text-purple-400 text-sm font-medium">{item.era}</span>
                        </div>
                        <h4 className="text-gray-900 dark:text-white font-semibold mb-2">{item.evento}</h4>
                        <p className="text-gray-600 dark:text-slate-400 text-sm">{item.descricao}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Comparação entre Continentes */}
        <section className="container mx-auto px-4 py-12">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
              <span className="text-3xl">📊</span>
              Comparação entre Continentes
            </h2>
            <p className="text-gray-600 dark:text-slate-400 max-w-3xl">
              Veja como os continentes se comparam em termos de área e população.
            </p>
          </div>

          <div className="bg-gradient-to-r from-gray-200 to-gray-300 dark:from-slate-800 dark:to-slate-900 rounded-2xl p-8 border border-gray-300/50 dark:border-slate-700/50">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Área por Continente</h3>
            <div className="space-y-4">
              {[
                { nome: "Ásia", area: 44.58, cor: "from-red-500 to-rose-500" },
                { nome: "América", area: 42.55, cor: "from-emerald-500 to-teal-500" },
                { nome: "África", area: 30.37, cor: "from-amber-500 to-orange-500" },
                { nome: "Antártida", area: 14.2, cor: "from-slate-400 to-zinc-400" },
                { nome: "Europa", area: 10.18, cor: "from-blue-500 to-indigo-500" },
                { nome: "Oceania", area: 8.53, cor: "from-cyan-500 to-sky-500" },
              ].map((item) => (
                <div key={item.nome} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-900 dark:text-white">{item.nome}</span>
                    <span className="text-cyan-600 dark:text-cyan-400 font-medium">{item.area} milhões km²</span>
                  </div>
                  <div className="h-4 bg-gray-400 dark:bg-slate-700 rounded-full overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r ${item.cor} rounded-full transition-all duration-1000`}
                      style={{ width: `${(item.area / 44.58) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Navegação */}
        <section className="container mx-auto px-4 py-12">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 border-t border-gray-300/50 dark:border-slate-700/50 pt-8">
            <Link
              href="/capitulo/planeta-terra/rotacao-terra"
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gray-200 dark:bg-slate-800 hover:bg-gray-300 dark:hover:bg-slate-700 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-all group"
            >
              <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
              Anterior: Rotação da Terra
            </Link>

            <Link
              href="/capitulo/planeta-terra/vulcoes"
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white transition-all group"
            >
              Próximo: Vulcões
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
Continentes.noLayout = true;
