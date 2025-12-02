import Head from "next/head";
import Link from "next/link";
import { FaSun, FaGlobeAmericas, FaMoon, FaArrowLeft, FaArrowRight, FaExternalLinkAlt } from "react-icons/fa";
import { GiMoonOrbit } from "react-icons/gi";

// Dados dos planetas
const planetas = [
  {
    nome: "Mercúrio",
    icon: "☿️",
    imagem: "/api/planeta-img?name=mercurio.png",
    tipo: "Rochoso",
    distancia: "57,9 milhões km",
    diametro: "4.879 km",
    curiosidade: "O planeta mais próximo do Sol completa uma órbita em apenas 88 dias terrestres.",
  },
  {
    nome: "Vênus",
    icon: "♀️",
    imagem: "/api/planeta-img?name=venus.png",
    tipo: "Rochoso",
    distancia: "108,2 milhões km",
    diametro: "12.104 km",
    curiosidade: "O planeta mais quente do Sistema Solar, com temperaturas de até 465°C.",
  },
  {
    nome: "Terra",
    icon: "🌍",
    imagem: "/api/planeta-img?name=terra.png",
    tipo: "Rochoso",
    distancia: "149,6 milhões km",
    diametro: "12.742 km",
    curiosidade: "O único planeta conhecido com vida e água líquida em abundância.",
  },
  {
    nome: "Marte",
    icon: "♂️",
    imagem: "/api/planeta-img?name=marte.png",
    tipo: "Rochoso",
    distancia: "227,9 milhões km",
    diametro: "6.779 km",
    curiosidade: "Possui o maior vulcão do Sistema Solar: Monte Olimpo, com 21 km de altura.",
  },
  {
    nome: "Júpiter",
    icon: "♃",
    imagem: "/api/planeta-img?name=jupiter.png",
    tipo: "Gasoso",
    distancia: "778,5 milhões km",
    diametro: "139.820 km",
    curiosidade: "Sua Grande Mancha Vermelha é uma tempestade maior que a Terra, ativa há mais de 400 anos.",
  },
  {
    nome: "Saturno",
    icon: "♄",
    imagem: "/api/planeta-img?name=saturno.png",
    tipo: "Gasoso",
    distancia: "1,4 bilhões km",
    diametro: "116.460 km",
    curiosidade: "Seus anéis são compostos principalmente de gelo e rocha, com 282.000 km de extensão.",
  },
  {
    nome: "Urano",
    icon: "⛢",
    imagem: "/api/planeta-img?name=urano.png",
    tipo: "Gigante de Gelo",
    distancia: "2,9 bilhões km",
    diametro: "50.724 km",
    curiosidade: "O único planeta que rotaciona 'deitado', com inclinação axial de 98°.",
  },
  {
    nome: "Netuno",
    icon: "♆",
    imagem: "/api/planeta-img?name=netuno.png",
    tipo: "Gigante de Gelo",
    distancia: "4,5 bilhões km",
    diametro: "49.244 km",
    curiosidade: "Possui os ventos mais fortes do Sistema Solar, atingindo 2.100 km/h.",
  },
];

// Dados dos Planetas Anões
const planetasAnoes = [
  {
    nome: "Plutão",
    icon: "🔮",
    imagem: "/api/planeta-img?name=plutao.png",
    localizacao: "Cinturão de Kuiper",
    distancia: "5,9 bilhões km",
    diametro: "2.377 km",
    curiosidade: "Foi considerado o 9º planeta até 2006. Possui 5 luas, sendo Caronte quase metade do seu tamanho.",
  },
  {
    nome: "Éris",
    icon: "⚫",
    imagem: "/api/planeta-img?name=eris.png",
    localizacao: "Disco Disperso",
    distancia: "10 bilhões km",
    diametro: "2.326 km",
    curiosidade: "Sua descoberta em 2005 causou a reclassificação de Plutão. É o objeto mais massivo além de Netuno.",
  },
  {
    nome: "Haumea",
    icon: "🥚",
    imagem: "/api/planeta-img?name=haumea.jpg",
    localizacao: "Cinturão de Kuiper",
    distancia: "6,5 bilhões km",
    diametro: "1.632 km",
    curiosidade: "Tem formato alongado como uma bola de rugby devido à sua rotação extremamente rápida (4 horas).",
  },
  {
    nome: "Makemake",
    icon: "🟤",
    imagem: "/api/planeta-img?name=makemake.png",
    localizacao: "Cinturão de Kuiper",
    distancia: "6,8 bilhões km",
    diametro: "1.430 km",
    curiosidade: "Nomeado em homenagem ao deus da fertilidade da Ilha de Páscoa. Não possui atmosfera significativa.",
  },
  {
    nome: "Ceres",
    icon: "🌑",
    imagem: "/api/planeta-img?name=ceres.png",
    localizacao: "Cinturão de Asteroides",
    distancia: "414 milhões km",
    diametro: "940 km",
    curiosidade: "O único planeta anão no Sistema Solar interior. Contém mais água doce que a Terra em seu manto gelado.",
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

// Dados dos Cometas Famosos
const cometasFamosos = [
  {
    nome: "Cometa Halley",
    icon: "☄️",
    imagem: "/api/planeta-img?name=cometa-halley.png",
    periodo: "~76 anos",
    tipo: "Curto Período",
    ultimaPassagem: "1986",
    proximaPassagem: "2061",
    curiosidade: "O cometa mais famoso da história! Visível da Terra a olho nu, foi observado desde 240 a.C. Nomeado em homenagem a Edmond Halley, que previu seu retorno em 1758.",
  },
  {
    nome: "Cometa Hale-Bopp",
    icon: "💫",
    imagem: "/api/planeta-img?name=cometa-hale-bopp.png",
    periodo: "~2.533 anos",
    tipo: "Longo Período",
    ultimaPassagem: "1997",
    proximaPassagem: "~4530",
    curiosidade: "Foi um dos cometas mais brilhantes do século XX, visível por 18 meses! Descoberto independentemente por Alan Hale e Thomas Bopp em 1995.",
  },
  {
    nome: "67P/Churyumov-Gerasimenko",
    icon: "🛸",
    imagem: "/api/planeta-img?name=cometa-67p-churyumov–gerasimenko-visitado-pela-sonda-rosetta.png",
    periodo: "~6,5 anos",
    tipo: "Curto Período",
    ultimaPassagem: "2021",
    proximaPassagem: "2028",
    curiosidade: "Famoso por receber a sonda Rosetta da ESA em 2014, que pousou o módulo Philae em sua superfície - a primeira aterrissagem em um cometa da história!",
  },
];

// Dados dos Satélites Naturais (Luas)
const satelitesNaturais = [
  {
    nome: "Lua",
    planeta: "Terra",
    icon: "🌙",
    imagem: "/api/planeta-img?name=satelite-lua-terra.png",
    diametro: "3.474 km",
    curiosidade: "O único satélite natural da Terra e o 5º maior do Sistema Solar. Influencia as marés e foi visitada por 12 astronautas.",
  },
  {
    nome: "Ganimedes",
    planeta: "Júpiter",
    icon: "🔵",
    imagem: "/api/planeta-img?name=satelite-ganimedes-jupiter.png",
    diametro: "5.268 km",
    curiosidade: "A maior lua do Sistema Solar! Maior que Mercúrio e possui campo magnético próprio.",
  },
  {
    nome: "Europa",
    planeta: "Júpiter",
    icon: "🧊",
    imagem: "/api/planeta-img?name=satelite-europa-jupiter.png",
    diametro: "3.122 km",
    curiosidade: "Possui um oceano de água líquida sob sua crosta de gelo - um dos melhores candidatos para vida extraterrestre!",
  },
  {
    nome: "Io",
    planeta: "Júpiter",
    icon: "🌋",
    imagem: "/api/planeta-img?name=satelite-lo-jupiter.png",
    diametro: "3.643 km",
    curiosidade: "O corpo mais vulcanicamente ativo do Sistema Solar, com centenas de vulcões em erupção constante.",
  },
  {
    nome: "Calisto",
    planeta: "Júpiter",
    icon: "⚫",
    imagem: "/api/planeta-img?name=satelite-calisto-jupiter.png",
    diametro: "4.821 km",
    curiosidade: "A superfície mais antiga e cheia de crateras do Sistema Solar. Pode ter um oceano subterrâneo.",
  },
  {
    nome: "Titã",
    planeta: "Saturno",
    icon: "🟠",
    imagem: "/api/planeta-img?name=satelite-tita-saturno.png",
    diametro: "5.150 km",
    curiosidade: "A única lua com atmosfera densa! Possui lagos de metano líquido e chuvas de hidrocarbonetos.",
  },
  {
    nome: "Reia",
    planeta: "Saturno",
    icon: "⚪",
    imagem: "/api/planeta-img?name=satelite-reia-saturno.png",
    diametro: "1.528 km",
    curiosidade: "A segunda maior lua de Saturno. Pode ter um sistema de anéis próprio - seria a primeira lua com anéis!",
  },
  {
    nome: "Titânia",
    planeta: "Urano",
    icon: "❄️",
    imagem: "/api/planeta-img?name=satelite-titania-urano.png",
    diametro: "1.578 km",
    curiosidade: "A maior lua de Urano, nomeada em homenagem à rainha das fadas de Shakespeare.",
  },
  {
    nome: "Oberon",
    planeta: "Urano",
    icon: "🪨",
    imagem: "/api/planeta-img?name=satelite-oberon-urano.png",
    diametro: "1.523 km",
    curiosidade: "A segunda maior lua de Urano, com superfície coberta de crateras e gelo escuro.",
  },
  {
    nome: "Tritão",
    planeta: "Netuno",
    icon: "💨",
    imagem: "/api/planeta-img?name=satelite-tritao-netuno.png",
    diametro: "2.707 km",
    curiosidade: "A maior lua de Netuno, orbita em direção retrógrada - provavelmente um objeto capturado do Cinturão de Kuiper!",
  },
];

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
          
          {/* Sketchfab Embed */}
          <div className="relative rounded-2xl overflow-hidden bg-slate-900/50 border border-slate-700/50">
            <iframe
              title="Sistema Solar 3D - Modelo Interativo"
              src="https://sketchfab.com/models/f7896d085f474ef28631d88129268411/embed?autostart=1&ui_theme=dark&ui_infos=0&ui_watermark=0"
              allow="autoplay; fullscreen; xr-spatial-tracking"
              allowFullScreen
              className="w-full h-[400px] md:h-[550px] rounded-2xl"
            />
            
            {/* Link externo para Sketchfab */}
            <div className="absolute bottom-4 right-4">
              <a
                href="https://sketchfab.com/3d-models/solar-system-f7896d085f474ef28631d88129268411"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 bg-slate-900/80 hover:bg-slate-800 backdrop-blur-sm rounded-lg text-sm text-gray-300 hover:text-cyan-400 transition-all border border-slate-700/50"
              >
                <FaExternalLinkAlt className="text-xs" />
                Ver no Sketchfab
              </a>
            </div>
          </div>
          
          {/* Instruções de interação */}
          <div className="mt-4 flex flex-wrap justify-center gap-4 text-sm text-slate-400">
            <span className="flex items-center gap-2">
              <span className="text-cyan-400">🖱️</span> Arraste para rotacionar
            </span>
            <span className="flex items-center gap-2">
              <span className="text-yellow-400">🔍</span> Scroll para zoom
            </span>
            <span className="flex items-center gap-2">
              <span className="text-purple-400">👆</span> Clique para explorar
            </span>
          </div>
        </section>

        {/* O Sol */}
        <section className="container mx-auto px-4 py-12">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="text-4xl">☀️</span> O Sol: Nossa Estrela
            </h2>
          </div>

          {/* Imagem principal do Sol - estilo introdução */}
          <div className="mb-8">
            <div className="relative rounded-2xl overflow-hidden group">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="/api/planeta-img?name=sol.png"
                alt="O Sol - Nossa Estrela" 
                className="w-full h-[400px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-bold text-white mb-2">A Estrela Central</h3>
                <p className="text-slate-300 max-w-2xl">
                  O <span className="text-yellow-400 font-semibold">Sol</span> é responsável por 99,86% de toda 
                  a massa do Sistema Solar. É uma esfera quase perfeita de plasma quente, gerando energia através 
                  da <span className="text-orange-400">fusão nuclear</span> de hidrogênio em hélio. A luz solar leva 
                  aproximadamente <span className="text-cyan-400">8 minutos e 20 segundos</span> para chegar à Terra.
                </p>
              </div>
            </div>
          </div>

          {/* Grid de dados do Sol */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="relative rounded-2xl overflow-hidden group bg-gradient-to-br from-yellow-900/30 to-orange-900/30 p-6 border border-yellow-500/20">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2 py-1 bg-yellow-500/30 text-yellow-300 text-xs rounded-full">Tamanho</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-1">Diâmetro</h3>
              <p className="text-yellow-400 text-2xl font-bold">{dadosSol.diametro}</p>
              <p className="text-slate-400 text-sm mt-2">109× maior que a Terra</p>
            </div>

            <div className="relative rounded-2xl overflow-hidden group bg-gradient-to-br from-orange-900/30 to-red-900/30 p-6 border border-orange-500/20">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2 py-1 bg-orange-500/30 text-orange-300 text-xs rounded-full">Calor</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-1">Temperatura</h3>
              <p className="text-orange-400 text-lg font-bold">{dadosSol.temperatura}</p>
            </div>

            <div className="relative rounded-2xl overflow-hidden group bg-gradient-to-br from-amber-900/30 to-yellow-900/30 p-6 border border-amber-500/20">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2 py-1 bg-amber-500/30 text-amber-300 text-xs rounded-full">História</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-1">Idade</h3>
              <p className="text-amber-400 text-2xl font-bold">{dadosSol.idade}</p>
              <p className="text-slate-400 text-sm mt-2">Metade de sua vida</p>
            </div>
          </div>
        </section>

        {/* Os 8 Planetas */}
        <section className="container mx-auto px-4 py-12">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
              <FaGlobeAmericas className="text-blue-400" />
              Os 8 Planetas
            </h2>
            <p className="text-slate-400 max-w-3xl">
              Conheça os oito planetas do nosso Sistema Solar, desde os rochosos mais próximos 
              do Sol até os gigantes gasosos e de gelo nas regiões mais distantes.
            </p>
          </div>

          {/* Grid estilo introdução - 2 colunas */}
          <div className="grid md:grid-cols-2 gap-6">
            {planetas.map((planeta, index) => (
              <div 
                key={planeta.nome}
                className="relative rounded-2xl overflow-hidden group"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={planeta.imagem}
                  alt={`Planeta ${planeta.nome}`}
                  className="w-full h-[280px] object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      planeta.tipo === "Rochoso" 
                        ? "bg-amber-500/30 text-amber-300" 
                        : planeta.tipo === "Gasoso"
                          ? "bg-purple-500/30 text-purple-300"
                          : "bg-cyan-500/30 text-cyan-300"
                    }`}>
                      {planeta.tipo}
                    </span>
                    <span className="px-2 py-1 bg-slate-500/30 text-slate-300 text-xs rounded-full">
                      {index + 1}º planeta
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1 flex items-center gap-2">
                    <span>{planeta.icon}</span>
                    {planeta.nome}
                  </h3>
                  <p className="text-slate-300 text-sm mb-3">
                    {planeta.curiosidade}
                  </p>
                  <div className="flex gap-4 text-xs text-slate-400">
                    <span>📏 {planeta.diametro}</span>
                    <span>🌞 {planeta.distancia}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Planetas Anões */}
        <section className="container mx-auto px-4 py-12">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
              <FaMoon className="text-purple-400" />
              Os 5 Planetas Anões
            </h2>
            <p className="text-slate-400 max-w-3xl">
              Desde 2006, a União Astronômica Internacional reconhece cinco planetas anões no Sistema Solar. 
              São corpos que orbitam o Sol e têm massa suficiente para forma esférica, mas não "limparam" 
              sua órbita de outros objetos.
            </p>
          </div>

          {/* Imagem destaque - Plutão */}
          <div className="mb-8">
            <div className="relative rounded-2xl overflow-hidden group">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="/api/planeta-img?name=plutao.png"
                alt="Plutão - O mais famoso planeta anão" 
                className="w-full h-[350px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-1 bg-purple-500/30 text-purple-300 text-xs rounded-full">Cinturão de Kuiper</span>
                  <span className="px-2 py-1 bg-pink-500/30 text-pink-300 text-xs rounded-full">Ex-Planeta</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">🔮 Plutão</h3>
                <p className="text-slate-300 max-w-2xl">
                  O mais famoso planeta anão foi considerado o 9º planeta até 2006. Possui 5 luas, 
                  sendo <span className="text-purple-400 font-semibold">Caronte</span> quase metade do seu tamanho. 
                  A sonda New Horizons revelou montanhas de gelo e uma atmosfera tênue em 2015.
                </p>
                <div className="flex gap-4 text-sm text-slate-400 mt-3">
                  <span>📏 2.377 km</span>
                  <span>🌞 5,9 bilhões km do Sol</span>
                </div>
              </div>
            </div>
          </div>

          {/* Grid dos outros 4 planetas anões */}
          <div className="grid md:grid-cols-2 gap-6">
            {planetasAnoes.filter(p => p.nome !== "Plutão").map((planeta) => (
              <div 
                key={planeta.nome}
                className="relative rounded-2xl overflow-hidden group"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={planeta.imagem}
                  alt={`Planeta anão ${planeta.nome}`}
                  className="w-full h-[250px] object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-1 bg-indigo-500/30 text-indigo-300 text-xs rounded-full">
                      {planeta.localizacao}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1 flex items-center gap-2">
                    <span>{planeta.icon}</span>
                    {planeta.nome}
                  </h3>
                  <p className="text-slate-300 text-sm mb-3">
                    {planeta.curiosidade}
                  </p>
                  <div className="flex gap-4 text-xs text-slate-400">
                    <span>📏 {planeta.diametro}</span>
                    <span>🌞 {planeta.distancia}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Cometas Famosos */}
        <section className="container mx-auto px-4 py-12">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="text-4xl">☄️</span>
              Cometas Famosos
            </h2>
            <p className="text-slate-400 max-w-3xl">
              Cometas são corpos compostos de gelo, poeira e rochas que desenvolvem caudas espetaculares 
              ao se aproximarem do Sol. A cauda sempre aponta para longe do Sol, 
              impulsionada pelo vento solar.
            </p>
          </div>

          {/* Comparação Halley vs Hale-Bopp */}
          <div className="mb-10 bg-gradient-to-r from-indigo-900/30 to-purple-900/30 rounded-2xl p-6 border border-indigo-500/20">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <span>⚖️</span> Halley vs Hale-Bopp: Qual a diferença?
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-800/50 rounded-xl p-4">
                <h4 className="text-lg font-semibold text-cyan-400 mb-2">☄️ Cometa Halley</h4>
                <ul className="text-slate-300 text-sm space-y-2">
                  <li>• <span className="text-yellow-400 font-semibold">Período curto:</span> retorna a cada ~76 anos</li>
                  <li>• <span className="text-yellow-400 font-semibold">Tamanho:</span> núcleo de ~15 km × 8 km</li>
                  <li>• <span className="text-yellow-400 font-semibold">Órbita:</span> vai até além de Netuno</li>
                  <li>• <span className="text-yellow-400 font-semibold">Histórico:</span> documentado há mais de 2.000 anos</li>
                  <li>• <span className="text-yellow-400 font-semibold">Próxima visita:</span> 2061</li>
                </ul>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-4">
                <h4 className="text-lg font-semibold text-purple-400 mb-2">💫 Cometa Hale-Bopp</h4>
                <ul className="text-slate-300 text-sm space-y-2">
                  <li>• <span className="text-pink-400 font-semibold">Período longo:</span> retorna a cada ~2.533 anos</li>
                  <li>• <span className="text-pink-400 font-semibold">Tamanho:</span> núcleo de ~40 km (muito maior!)</li>
                  <li>• <span className="text-pink-400 font-semibold">Órbita:</span> vai até quase 400 UA do Sol</li>
                  <li>• <span className="text-pink-400 font-semibold">Histórico:</span> descoberto em 1995</li>
                  <li>• <span className="text-pink-400 font-semibold">Próxima visita:</span> por volta de 4530</li>
                </ul>
              </div>
            </div>
            <p className="text-slate-400 text-sm mt-4 italic">
              💡 Hale-Bopp é quase 3× maior que Halley e foi um dos cometas mais brilhantes do século XX, 
              visível a olho nu por 18 meses! Já Halley é o mais famoso por seu retorno "frequente", 
              permitindo que várias gerações o observem.
            </p>
          </div>

          {/* Grid dos 3 cometas */}
          <div className="grid md:grid-cols-3 gap-6">
            {cometasFamosos.map((cometa) => (
              <div 
                key={cometa.nome}
                className="relative rounded-2xl overflow-hidden group"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={cometa.imagem}
                  alt={cometa.nome}
                  className="w-full h-[280px] object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      cometa.tipo === "Curto Período" 
                        ? "bg-cyan-500/30 text-cyan-300" 
                        : "bg-purple-500/30 text-purple-300"
                    }`}>
                      {cometa.tipo}
                    </span>
                    <span className="px-2 py-1 bg-yellow-500/30 text-yellow-300 text-xs rounded-full">
                      Período: {cometa.periodo}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1 flex items-center gap-2">
                    <span>{cometa.icon}</span>
                    {cometa.nome}
                  </h3>
                  <p className="text-slate-300 text-sm mb-3 line-clamp-3">
                    {cometa.curiosidade}
                  </p>
                  <div className="flex gap-3 text-xs text-slate-400 flex-wrap">
                    <span>📅 Última: {cometa.ultimaPassagem}</span>
                    <span>🔮 Próxima: {cometa.proximaPassagem}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Satélites Naturais (Luas) */}
        <section className="container mx-auto px-4 py-12">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
              <FaMoon className="text-gray-300" />
              Satélites Naturais
            </h2>
            <p className="text-slate-400 max-w-3xl">
              O Sistema Solar possui mais de <span className="text-cyan-400 font-semibold">200 luas</span> conhecidas! 
              Estes satélites naturais orbitam planetas e até alguns asteroides. Conheça as 10 luas 
              mais fascinantes, organizadas por seus planetas.
            </p>
          </div>

          {/* Grid compacto de 5 colunas */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {satelitesNaturais.map((satelite) => (
              <div 
                key={satelite.nome}
                className="relative rounded-xl overflow-hidden group bg-slate-800/50 border border-slate-700/50 hover:border-cyan-500/50 transition-all"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={satelite.imagem}
                  alt={`Satélite ${satelite.nome}`}
                  className="w-full h-[120px] object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <span className={`px-2 py-0.5 text-[10px] rounded-full mb-1 inline-block ${
                    satelite.planeta === "Terra" ? "bg-blue-500/30 text-blue-300" :
                    satelite.planeta === "Júpiter" ? "bg-orange-500/30 text-orange-300" :
                    satelite.planeta === "Saturno" ? "bg-yellow-500/30 text-yellow-300" :
                    satelite.planeta === "Urano" ? "bg-cyan-500/30 text-cyan-300" :
                    "bg-indigo-500/30 text-indigo-300"
                  }`}>
                    {satelite.planeta}
                  </span>
                  <h3 className="text-sm font-bold text-white flex items-center gap-1">
                    <span className="text-xs">{satelite.icon}</span>
                    {satelite.nome}
                  </h3>
                  <p className="text-[10px] text-slate-400">⌀ {satelite.diametro}</p>
                </div>
                
                {/* Tooltip no hover */}
                <div className="absolute inset-0 bg-slate-900/95 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-3 flex flex-col justify-center">
                  <h4 className="text-sm font-bold text-white mb-1 flex items-center gap-1">
                    <span>{satelite.icon}</span> {satelite.nome}
                  </h4>
                  <p className="text-[10px] text-cyan-400 mb-2">{satelite.planeta} • {satelite.diametro}</p>
                  <p className="text-[11px] text-slate-300 leading-relaxed">
                    {satelite.curiosidade}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Vídeo Exclusivo */}
        <section className="container mx-auto px-4 py-12">
          <div className="bg-gradient-to-br from-red-900/20 via-slate-800/50 to-purple-900/20 rounded-2xl p-8 border border-red-500/20">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/20 rounded-full text-red-400 text-sm mb-4">
                <span className="animate-pulse">🔴</span> Vídeo Exclusivo
              </div>
              <h2 className="text-3xl font-bold text-white mb-4 flex items-center justify-center gap-3">
                <span className="text-4xl">🎬</span>
                Explore o Sistema Solar em Vídeo
              </h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                Preparamos um vídeo especial para complementar seu aprendizado! 
                Uma jornada visual pelos planetas, luas e outros objetos do nosso Sistema Solar.
              </p>
            </div>

            {/* Player do YouTube */}
            <div className="relative w-full max-w-4xl mx-auto">
              <div className="aspect-video rounded-xl overflow-hidden shadow-2xl shadow-red-500/10 border border-slate-700/50">
                <iframe
                  src="https://www.youtube.com/embed/4IjuCKPdwKA"
                  title="Sistema Solar - Enciclopédia da Ciência"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>

            {/* Info adicional */}
            <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm">
              <a 
                href="https://youtu.be/4IjuCKPdwKA" 
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
                <span>📺</span> Feito especialmente para a Enciclopédia da Ciência
              </span>
            </div>
          </div>
        </section>

        {/* Dados Científicos Expandidos */}
        <section className="container mx-auto px-4 py-12">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="text-4xl">📊</span>
              Dados Científicos & Curiosidades
            </h2>
            <p className="text-slate-400 max-w-3xl">
              Números impressionantes e fatos fascinantes sobre nossa vizinhança cósmica. 
              O Sistema Solar é um lugar cheio de extremos e surpresas!
            </p>
          </div>

          {/* Estatísticas principais */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-gradient-to-br from-cyan-900/30 to-blue-900/30 rounded-2xl p-6 border border-cyan-500/20 text-center">
              <p className="text-4xl font-bold text-cyan-400">4,6</p>
              <p className="text-gray-400 text-sm">Bilhões de anos</p>
              <p className="text-cyan-300 text-xs mt-1">Idade do Sistema Solar</p>
            </div>
            <div className="bg-gradient-to-br from-yellow-900/30 to-orange-900/30 rounded-2xl p-6 border border-yellow-500/20 text-center">
              <p className="text-4xl font-bold text-yellow-400">99,86%</p>
              <p className="text-gray-400 text-sm">Massa no Sol</p>
              <p className="text-yellow-300 text-xs mt-1">O Sol domina tudo!</p>
            </div>
            <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-2xl p-6 border border-purple-500/20 text-center">
              <p className="text-4xl font-bold text-purple-400">200+</p>
              <p className="text-gray-400 text-sm">Luas conhecidas</p>
              <p className="text-purple-300 text-xs mt-1">E descobrindo mais!</p>
            </div>
            <div className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 rounded-2xl p-6 border border-green-500/20 text-center">
              <p className="text-4xl font-bold text-green-400">1M+</p>
              <p className="text-gray-400 text-sm">Asteroides catalogados</p>
              <p className="text-green-300 text-xs mt-1">No cinturão principal</p>
            </div>
          </div>

          {/* Curiosidades em cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 hover:border-cyan-500/30 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">🚀</span>
                <h3 className="text-lg font-bold text-white">Velocidade Orbital</h3>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">
                A Terra viaja a <span className="text-cyan-400 font-semibold">107.000 km/h</span> ao redor do Sol! 
                Completamos uma órbita de <span className="text-yellow-400">940 milhões de km</span> a cada ano.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 hover:border-yellow-500/30 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">☀️</span>
                <h3 className="text-lg font-bold text-white">Energia do Sol</h3>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">
                O Sol converte <span className="text-yellow-400 font-semibold">600 milhões de toneladas</span> de 
                hidrogênio em hélio por segundo! A energia liberada equivale a 
                <span className="text-orange-400"> bilhões de bombas nucleares</span>.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 hover:border-purple-500/30 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">🌌</span>
                <h3 className="text-lg font-bold text-white">Nuvem de Oort</h3>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">
                O Sistema Solar se estende até a <span className="text-purple-400 font-semibold">Nuvem de Oort</span>, 
                a quase <span className="text-cyan-400">2 anos-luz</span> do Sol - 
                quase metade do caminho até a estrela mais próxima!
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 hover:border-orange-500/30 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">🪐</span>
                <h3 className="text-lg font-bold text-white">Júpiter Protetor</h3>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">
                Júpiter age como um <span className="text-orange-400 font-semibold">"aspirador cósmico"</span>, 
                sua gravidade atrai asteroides e cometas que poderiam atingir a Terra. 
                Ele nos protege há bilhões de anos!
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 hover:border-blue-500/30 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">💧</span>
                <h3 className="text-lg font-bold text-white">Água no Espaço</h3>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">
                <span className="text-blue-400 font-semibold">Europa (lua de Júpiter)</span> tem mais água que 
                todos os oceanos da Terra juntos! O Sistema Solar contém mais água do que imaginávamos.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 hover:border-red-500/30 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">🌡️</span>
                <h3 className="text-lg font-bold text-white">Extremos de Temperatura</h3>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">
                De <span className="text-red-400 font-semibold">+465°C</span> em Vênus a 
                <span className="text-blue-400 font-semibold"> -224°C</span> em Netuno! 
                Uma diferença de quase <span className="text-yellow-400">700 graus</span> entre os extremos.
              </p>
            </div>
          </div>

          {/* Comparações de escala */}
          <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700/50">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <span>📏</span> Comparações de Escala
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-yellow-500/20 flex items-center justify-center text-2xl">☀️</div>
                  <div>
                    <p className="text-white font-semibold">Se o Sol fosse uma bola de basquete...</p>
                    <p className="text-slate-400 text-sm">A Terra seria do tamanho de uma cabeça de alfinete a 26 metros de distância!</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-orange-500/20 flex items-center justify-center text-2xl">🪐</div>
                  <div>
                    <p className="text-white font-semibold">Júpiter é tão grande...</p>
                    <p className="text-slate-400 text-sm">Que <span className="text-orange-400">1.300 Terras</span> caberiam dentro dele!</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-cyan-500/20 flex items-center justify-center text-2xl">🌊</div>
                  <div>
                    <p className="text-white font-semibold">Se você pudesse dirigir até o Sol...</p>
                    <p className="text-slate-400 text-sm">A 100 km/h, levaria <span className="text-cyan-400">170 anos</span> para chegar!</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-purple-500/20 flex items-center justify-center text-2xl">✨</div>
                  <div>
                    <p className="text-white font-semibold">A luz do Sol...</p>
                    <p className="text-slate-400 text-sm">Leva <span className="text-purple-400">8 min 20 seg</span> para chegar à Terra, mas <span className="text-pink-400">4 horas</span> até Netuno!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Recordes do Sistema Solar */}
          <div className="mt-8 grid md:grid-cols-4 gap-4">
            <div className="bg-slate-800/30 rounded-xl p-4 text-center border border-slate-700/30">
              <span className="text-2xl">🏆</span>
              <p className="text-yellow-400 font-bold mt-2">Maior Vulcão</p>
              <p className="text-white text-lg">Monte Olimpo</p>
              <p className="text-slate-400 text-xs">Marte - 21 km de altura</p>
            </div>
            <div className="bg-slate-800/30 rounded-xl p-4 text-center border border-slate-700/30">
              <span className="text-2xl">🌪️</span>
              <p className="text-red-400 font-bold mt-2">Maior Tempestade</p>
              <p className="text-white text-lg">Grande Mancha</p>
              <p className="text-slate-400 text-xs">Júpiter - maior que a Terra</p>
            </div>
            <div className="bg-slate-800/30 rounded-xl p-4 text-center border border-slate-700/30">
              <span className="text-2xl">💨</span>
              <p className="text-cyan-400 font-bold mt-2">Ventos Mais Fortes</p>
              <p className="text-white text-lg">2.100 km/h</p>
              <p className="text-slate-400 text-xs">Netuno</p>
            </div>
            <div className="bg-slate-800/30 rounded-xl p-4 text-center border border-slate-700/30">
              <span className="text-2xl">💎</span>
              <p className="text-purple-400 font-bold mt-2">Chuva de Diamantes</p>
              <p className="text-white text-lg">Urano e Netuno</p>
              <p className="text-slate-400 text-xs">Diamantes reais!</p>
            </div>
          </div>
        </section>

        {/* Navegação */}
        <section className="container mx-auto px-4 py-12">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 border-t border-slate-700/50 pt-8">
            <Link
              href="/capitulo/planeta-terra/introducao"
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-gray-300 hover:text-white transition-all group"
            >
              <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
              Anterior: Introdução
            </Link>

            <Link
              href="/capitulo/planeta-terra/estrutura-terra"
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white transition-all group"
            >
              Próximo: Estrutura da Terra
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
