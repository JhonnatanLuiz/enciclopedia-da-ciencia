export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Logo e Descrição */}
          <div>
            <h3 className="text-xl font-bold mb-3 flex items-center">
              <span className="mr-2">🔬</span>
              Enciclopédia da Ciência
            </h3>
            <p className="text-gray-400 text-sm">
              Uma jornada completa pelo conhecimento científico, com 10 capítulos e mais de 200 subcapítulos.
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="font-semibold mb-3 text-cyan-400">Links Rápidos</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="/sumario" className="hover:text-white transition-colors">📚 Sumário</a>
              </li>
              <li>
                <a href="/buscar" className="hover:text-white transition-colors">🔍 Buscar</a>
              </li>
              <li>
                <a href="/capitulo/planeta-terra" className="hover:text-white transition-colors">🌍 Planeta Terra</a>
              </li>
              <li>
                <a href="/capitulo/espaco-tempo" className="hover:text-white transition-colors">🌌 Espaço e Tempo</a>
              </li>
            </ul>
          </div>

          {/* Informações */}
          <div>
            <h4 className="font-semibold mb-3 text-purple-400">Sobre</h4>
            <p className="text-gray-400 text-sm">
              Projeto educacional desenvolvido com Next.js, TypeScript e Tailwind CSS.
            </p>
            <div className="mt-3 flex space-x-3">
              <span className="text-xs bg-cyan-900/50 text-cyan-300 px-2 py-1 rounded">Next.js</span>
              <span className="text-xs bg-blue-900/50 text-blue-300 px-2 py-1 rounded">TypeScript</span>
              <span className="text-xs bg-purple-900/50 text-purple-300 px-2 py-1 rounded">Tailwind</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            Enciclopédia da Ciência © 2025 - Todos os direitos reservados
          </p>
          <p className="text-gray-400 text-sm mt-1">
            Conteúdo Feito com ❤️ e ☕ por Jhonnatan Luiz
          </p>
        </div>
      </div>
    </footer>
  );
}
