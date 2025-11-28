export default function HeroAtom() {
  return (
    <div className="relative flex flex-col items-center justify-center py-8 md:py-12 px-4">
      {/* Container do Átomo */}
      <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center mb-6">
        
        {/* Órbita 3 - Externa */}
        <div 
          className="absolute w-64 h-64 md:w-80 md:h-80 border-2 border-purple-300/40 dark:border-purple-400/50 rounded-full animate-spin-slowest"
          style={{ borderStyle: 'dashed' }}
        >
          <div
            className="w-4 h-4 md:w-5 md:h-5 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full absolute -top-2 left-1/2 -translate-x-1/2 shadow-lg shadow-purple-400/50"
            title="Elétron 3 - Camada de valência"
          />
        </div>

        {/* Órbita 2 - Média */}
        <div 
          className="absolute w-44 h-44 md:w-56 md:h-56 border-2 border-pink-300/50 dark:border-pink-400/60 rounded-full animate-spin-reverse"
        >
          <div
            className="w-4 h-4 md:w-5 md:h-5 bg-gradient-to-br from-pink-400 to-rose-600 rounded-full absolute -top-2 left-1/2 -translate-x-1/2 shadow-lg shadow-pink-400/50"
            title="Elétron 2 - Segunda camada"
          />
          <div
            className="w-3 h-3 md:w-4 md:h-4 bg-gradient-to-br from-pink-300 to-rose-500 rounded-full absolute -bottom-1.5 left-1/2 -translate-x-1/2 shadow-lg shadow-pink-300/50"
            title="Elétron 2b"
          />
        </div>

        {/* Órbita 1 - Interna */}
        <div 
          className="absolute w-28 h-28 md:w-36 md:h-36 border-2 border-cyan-300/60 dark:border-cyan-400/70 rounded-full animate-spin-slow"
        >
          <div
            className="w-3 h-3 md:w-4 md:h-4 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full absolute -top-1.5 left-1/2 -translate-x-1/2 shadow-lg shadow-cyan-400/50"
            title="Elétron 1 - Primeira camada"
          />
          <div
            className="w-3 h-3 md:w-4 md:h-4 bg-gradient-to-br from-cyan-300 to-blue-500 rounded-full absolute -bottom-1.5 left-1/2 -translate-x-1/2 shadow-lg shadow-cyan-300/50"
            title="Elétron 1b"
          />
        </div>

        {/* Núcleo Central */}
        <div
          className="relative w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-purple-500 via-indigo-500 to-cyan-500 flex items-center justify-center text-white text-3xl md:text-4xl z-10 shadow-2xl shadow-purple-500/50 animate-pulse-slow"
          title="Núcleo atômico: prótons e nêutrons"
        >
          <span className="drop-shadow-lg">⚛️</span>
          
          {/* Brilho interno */}
          <div className="absolute inset-1 rounded-full bg-gradient-to-tr from-white/30 to-transparent" />
        </div>

        {/* Partículas decorativas */}
        <div className="absolute w-2 h-2 bg-cyan-400/60 rounded-full top-8 right-12 animate-ping" style={{ animationDuration: '2s' }} />
        <div className="absolute w-1.5 h-1.5 bg-purple-400/60 rounded-full bottom-12 left-8 animate-ping" style={{ animationDuration: '3s' }} />
        <div className="absolute w-2 h-2 bg-pink-400/60 rounded-full top-16 left-6 animate-ping" style={{ animationDuration: '2.5s' }} />
      </div>

      {/* Texto do Hero */}
      <div className="text-center max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">
          Explore o Universo da 
          <span className="bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"> Ciência</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg">
          Da estrutura dos átomos às galáxias distantes, descubra os segredos do mundo natural.
        </p>
      </div>

      {/* Badges informativos */}
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <span className="px-4 py-2 bg-cyan-100 dark:bg-cyan-900/40 text-cyan-700 dark:text-cyan-300 rounded-full text-sm font-medium shadow-sm">
          🌍 10 Capítulos
        </span>
        <span className="px-4 py-2 bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium shadow-sm">
          📄 207 Páginas
        </span>
        <span className="px-4 py-2 bg-pink-100 dark:bg-pink-900/40 text-pink-700 dark:text-pink-300 rounded-full text-sm font-medium shadow-sm">
          🔬 100% Gratuito
        </span>
      </div>
    </div>
  );
}
