import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Language } from '../types/prl';
import { UI_TEXT } from '../data/translations';

interface FooterProps {
  currentSlide: number;
  totalSlides: number;
  language: Language;
  onPrev: () => void;
  onNext: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  currentSlide,
  totalSlides,
  language,
  onPrev,
  onNext,
}) => {
  const t = UI_TEXT[language];

  return (
    <footer className="no-print bg-slate-900/90 backdrop-blur border-t border-slate-800 px-4 py-3 sticky bottom-0 z-40">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Previous Button */}
        <button
          onClick={onPrev}
          disabled={currentSlide === 0}
          className="bg-slate-800 hover:bg-slate-700 disabled:opacity-40 disabled:cursor-not-allowed text-white text-xs md:text-sm px-4 py-2 rounded-xl border border-slate-700 transition flex items-center gap-2 font-medium"
        >
          <ChevronLeft className="w-4 h-4" />
          <span className="hidden sm:inline">{t.prev}</span>
        </button>

        {/* Slide Counter & Keyboard Hint */}
        <div className="text-center">
          <span className="text-xs md:text-sm font-bold text-sky-400 font-mono">
            {currentSlide + 1} / {totalSlides}
          </span>
          <p className="text-[10px] text-slate-500 hidden md:block">
            {t.keyboardHint}
          </p>
        </div>

        {/* Next Button */}
        <button
          onClick={onNext}
          disabled={currentSlide === totalSlides - 1}
          className="bg-sky-600 hover:bg-sky-500 disabled:opacity-40 disabled:cursor-not-allowed text-white text-xs md:text-sm px-4 py-2 rounded-xl transition flex items-center gap-2 font-medium shadow-md shadow-sky-700/20"
        >
          <span className="hidden sm:inline">{t.next}</span>
          <ChevronRight className="w-4 h-4" />
        </button>

      </div>
    </footer>
  );
};
