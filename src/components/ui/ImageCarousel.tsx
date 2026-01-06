import { useState, useEffect } from "react";
import { FaPlay, FaPause, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const defaultImages = [
  "/images/estrutura-terra/1.jpg",
  "/images/estrutura-terra/2.jpg",
  "/images/estrutura-terra/3.jpg",
  "/images/estrutura-terra/4.jpg",
  "/images/estrutura-terra/5.jpg",
  "/images/estrutura-terra/6.jpg",
  "/images/estrutura-terra/7.jpg",
  "/images/estrutura-terra/8.jpg",
  "/images/estrutura-terra/9.jpg",
  "/images/estrutura-terra/10.jpg",
  "/images/estrutura-terra/11.jpg",
  "/images/estrutura-terra/12.jpg",
];

type ImageCarouselProps = {
  images?: string[];
  altPrefix?: string;
  getCaption?: (src: string, index: number) => string;
};

export default function ImageCarousel({
  images = defaultImages,
  altPrefix = "O Interior do Nosso Planeta",
  getCaption,
}: ImageCarouselProps) {
  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const caption = getCaption ? getCaption(images[current], current) : undefined;

  useEffect(() => {
    setCurrent(0);
  }, [images]);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPlaying, images.length]);

  const prevImage = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);
  const nextImage = () => setCurrent((prev) => (prev + 1) % images.length);

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Container da imagem */}
      <div className="relative rounded-2xl overflow-hidden bg-white/70 dark:bg-slate-900/50 border border-gray-200 dark:border-slate-700/50 shadow-2xl">
        {/* Imagem principal */}
        <div className="relative aspect-[4/3] md:aspect-video">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={images[current]}
            alt={`${altPrefix} - Página ${current + 1}`}
            className="w-full h-full object-contain bg-gray-100 dark:bg-slate-950"
          />
          
          {/* Overlay com gradiente nas bordas */}
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-white/30 dark:from-slate-900/30 via-transparent to-transparent"></div>
        </div>

        {/* Legenda */}
        {caption ? (
          <div className="px-4 py-3 border-t border-gray-200 dark:border-slate-700/50 bg-white/60 dark:bg-slate-900/30">
            <p className="text-sm text-gray-700 dark:text-slate-300 text-center">{caption}</p>
          </div>
        ) : null}

        {/* Controles sobre a imagem (mobile-friendly) */}
        <div className="absolute inset-y-0 left-0 flex items-center">
          <button
            onClick={prevImage}
            className="p-2 md:p-3 m-2 bg-slate-900/70 hover:bg-slate-800 backdrop-blur-sm rounded-full text-white transition-all hover:scale-110 border border-slate-700/50"
            aria-label="Imagem anterior"
          >
            <FaChevronLeft className="text-sm md:text-base" />
          </button>
        </div>
        
        <div className="absolute inset-y-0 right-0 flex items-center">
          <button
            onClick={nextImage}
            className="p-2 md:p-3 m-2 bg-slate-900/70 hover:bg-slate-800 backdrop-blur-sm rounded-full text-white transition-all hover:scale-110 border border-slate-700/50"
            aria-label="Próxima imagem"
          >
            <FaChevronRight className="text-sm md:text-base" />
          </button>
        </div>

        {/* Indicador de progresso */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-slate-800">
          <div 
            className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-300"
            style={{ width: `${((current + 1) / images.length) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Barra de controles */}
      <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-4 px-2">
        {/* Numeração */}
        <p className="text-sm text-slate-400 order-2 sm:order-1">
          <span className="text-cyan-400 font-semibold">{current + 1}</span>
          <span className="mx-1">/</span>
          <span>{images.length}</span>
          <span className="ml-2 text-slate-500">imagens</span>
        </p>

        {/* Botões de controle */}
        <div className="flex items-center gap-2 order-1 sm:order-2">
          <button
            onClick={prevImage}
            className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded-lg text-slate-300 hover:text-white transition-colors border border-slate-700/50 text-sm"
          >
            <FaChevronLeft className="text-xs" />
            <span className="hidden sm:inline">Anterior</span>
          </button>
          
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors border text-sm ${
              isPlaying 
                ? "bg-cyan-600 hover:bg-cyan-500 text-white border-cyan-500/50" 
                : "bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border-slate-700/50"
            }`}
          >
            {isPlaying ? (
              <>
                <FaPause className="text-xs" />
                <span className="hidden sm:inline">Pausar</span>
              </>
            ) : (
              <>
                <FaPlay className="text-xs" />
                <span className="hidden sm:inline">Reproduzir</span>
              </>
            )}
          </button>
          
          <button
            onClick={nextImage}
            className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded-lg text-slate-300 hover:text-white transition-colors border border-slate-700/50 text-sm"
          >
            <span className="hidden sm:inline">Próxima</span>
            <FaChevronRight className="text-xs" />
          </button>
        </div>

        {/* Indicadores de pontos */}
        <div className="hidden md:flex items-center gap-1 order-3">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === current 
                  ? "bg-cyan-400 w-4" 
                  : "bg-slate-600 hover:bg-slate-500"
              }`}
              aria-label={`Ir para imagem ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
