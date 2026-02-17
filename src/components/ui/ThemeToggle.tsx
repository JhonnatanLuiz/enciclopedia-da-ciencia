'use client';

import { useLayoutEffect, useState } from 'react';

interface ThemeToggleProps {
  className?: string;
}

export default function ThemeToggle({ className = '' }: ThemeToggleProps) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [mounted, setMounted] = useState(false);

  // Sincroniza com o estado real do documento
  useLayoutEffect(() => {
    setMounted(true);
    
    // Verifica o tema atual do localStorage ou documento
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const isDark = document.documentElement.classList.contains('dark');
    
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      setTheme(isDark ? 'dark' : 'light');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    
    // Aplica a classe no documento
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    // Salva no localStorage
    localStorage.setItem('theme', newTheme);
    setTheme(newTheme);
  };

  // Evita hydration mismatch - mostra placeholder até montar
  if (!mounted) {
    return (
      <div className={`p-2 w-10 h-10 rounded-full bg-white/20 ${className}`} />
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className={`
        relative p-2 rounded-full transition-all duration-300 
        bg-white/20 hover:bg-white/30 
        focus:outline-none focus:ring-2 focus:ring-cyan-400/50
        ${className}
      `}
      aria-label={theme === 'light' ? 'Ativar modo escuro' : 'Ativar modo claro'}
      title={theme === 'light' ? 'Ativar modo escuro' : 'Ativar modo claro'}
    >
      {/* Container dos ícones com animação */}
      <div className="relative w-6 h-6 flex items-center justify-center">
        {/* Sol - visível no modo escuro */}
        <span 
          className={`
            absolute transition-all duration-300 text-lg
            ${theme === 'dark' 
              ? 'opacity-100 rotate-0 scale-100' 
              : 'opacity-0 rotate-90 scale-50'
            }
          `}
        >
          ☀️
        </span>
        
        {/* Lua - visível no modo claro */}
        <span 
          className={`
            absolute transition-all duration-300 text-lg
            ${theme === 'light' 
              ? 'opacity-100 rotate-0 scale-100' 
              : 'opacity-0 -rotate-90 scale-50'
            }
          `}
        >
          🌙
        </span>
      </div>
    </button>
  );
}
