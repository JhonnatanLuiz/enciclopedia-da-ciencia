import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
  /** Se true, não renderiza Header/Footer (útil para páginas personalizadas) */
  noLayout?: boolean;
}

/**
 * Layout global da aplicação.
 * Aplica automaticamente:
 * - Classes de dark mode no container principal
 * - Header e Footer padrão
 * - Transições suaves de cores
 * 
 * Todas as páginas herdam este layout automaticamente via _app.tsx
 */
export default function Layout({ children, noLayout = false }: LayoutProps) {
  // Se noLayout for true, renderiza apenas o conteúdo sem wrapper
  if (noLayout) {
    return <>{children}</>;
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}
