import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Layout from "@/components/layout/Layout";

// Tipo para páginas que podem ter configurações de layout
type NextPageWithLayout = AppProps['Component'] & {
  noLayout?: boolean;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  useEffect(() => {
    // Registrar Service Worker para PWA
    if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
      navigator.serviceWorker
        .register('/sw.js')
        .then((registration) => {
          console.log('Service Worker registrado com sucesso:', registration.scope);
        })
        .catch((error) => {
          console.log('Falha ao registrar Service Worker:', error);
        });
    }
  }, []);

  // Verificar se a página quer desabilitar o layout padrão
  const noLayout = Component.noLayout ?? false;

  return (
    <ThemeProvider>
      <Layout noLayout={noLayout}>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
