import { Html, Head, Main, NextScript } from "next/document";

// Script inline para aplicar tema antes da renderização (evita flash)
const themeInitScript = `
  (function() {
    try {
      var theme = localStorage.getItem('theme');
      if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
      }
    } catch (e) {}
  })();
`;

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
        {/* PWA Meta Tags */}
        <meta name="application-name" content="Enciclopédia da Ciência" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Enciclopédia" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#0f172a" />
        
        {/* Manifest */}
        <link rel="manifest" href="/manifest.json" />
        
        {/* Icons */}
        <link rel="icon" type="image/svg+xml" href="/icons/icon.svg" />
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
        
        {/* Splash screens for iOS */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
      </Head>
      <body className="antialiased">
        {/* Script para aplicar tema ANTES da hidratação - evita flash de cor */}
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
