import React from 'react';
import { Eye, FileDown, Maximize2, Minimize2, Languages } from 'lucide-react';
import { Language } from '../types/prl';
import { UI_TEXT, SLIDE_TITLES } from '../data/translations';

interface HeaderProps {
  currentSlide: number;
  totalSlides: number;
  language: Language;
  onLanguageChange: (lang: Language) => void;
  onSlideChange: (index: number) => void;
  onToggleSolutions: () => void;
  allSolutionsOpen: boolean;
  isFullscreen: boolean;
  onToggleFullscreen: () => void;
  onDownloadPdf: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentSlide,
  totalSlides,
  language,
  onLanguageChange,
  onSlideChange,
  onToggleSolutions,
  allSolutionsOpen,
  isFullscreen,
  onToggleFullscreen,
  onDownloadPdf,
}) => {
  const t = UI_TEXT[language];
  const titles = SLIDE_TITLES[language];
  const progressPercent = Math.round(((currentSlide + 1) / totalSlides) * 100);

  return (
    <header className="no-print bg-slate-900/95 backdrop-blur border-b border-slate-800 sticky top-0 z-50 px-4 py-2.5">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2 md:gap-4">
        
        {/* Brand & Title */}
        <div className="flex items-center gap-3">
          <div className="bg-gradient-to-br from-sky-500 to-sky-700 text-white font-bold text-sm md:text-base flex items-center justify-center w-9 h-9 rounded-xl shadow-md shadow-sky-600/30">
            UT1
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-xs md:text-sm font-bold text-white tracking-wide">
                {t.unitTitle}
              </h1>
              <span className="text-[10px] font-semibold text-sky-400 bg-sky-950/80 border border-sky-800/60 px-1.5 py-0.5 rounded">
                FOL & Naval
              </span>
            </div>
            <p className="text-[11px] text-slate-400 font-medium hidden sm:block">
              {t.unitSubtitle}
            </p>
          </div>
        </div>

        {/* Center / Navigation dropdown */}
        <div className="flex items-center gap-2">
          <label htmlFor="slide-selector" className="text-xs font-medium text-slate-400 hidden lg:inline">
            {t.slideLabel}
          </label>
          <select
            id="slide-selector"
            value={currentSlide}
            onChange={(e) => onSlideChange(Number(e.target.value))}
            className="bg-slate-800/90 border border-slate-700 text-slate-200 text-xs rounded-lg px-2.5 py-1.5 focus:ring-2 focus:ring-sky-500 focus:outline-none max-w-[200px] sm:max-w-[260px] md:max-w-[320px] truncate"
          >
            {titles.map((title, idx) => (
              <option key={idx} value={idx}>
                {title}
              </option>
            ))}
          </select>
        </div>

        {/* Action Controls: Language, Solutions, PDF, Fullscreen */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          
          {/* Bilingual Language Switcher */}
          <div className="flex items-center bg-slate-800 border border-slate-700 rounded-lg p-0.5">
            <button
              onClick={() => onLanguageChange('ca')}
              className={`px-2 py-1 text-xs font-semibold rounded-md transition-colors ${
                language === 'ca'
                  ? 'bg-sky-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
              title="Canviar idioma a Català"
            >
              CAT
            </button>
            <button
              onClick={() => onLanguageChange('es')}
              className={`px-2 py-1 text-xs font-semibold rounded-md transition-colors ${
                language === 'es'
                  ? 'bg-sky-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
              title="Cambiar idioma a Español"
            >
              ESP
            </button>
          </div>

          {/* Solutions Toggle */}
          <button
            onClick={onToggleSolutions}
            className={`text-xs px-2.5 py-1.5 rounded-lg border transition flex items-center gap-1.5 ${
              allSolutionsOpen
                ? 'bg-amber-600/20 border-amber-500/50 text-amber-300'
                : 'bg-slate-800 hover:bg-slate-700 border-slate-700 text-slate-200'
            }`}
            title={allSolutionsOpen ? t.solutionsHideAll : t.solutionsShowAll}
          >
            <Eye className="w-3.5 h-3.5" />
            <span className="hidden md:inline">{t.solutionsBtn}</span>
          </button>

          {/* PDF Download Button */}
          <button
            onClick={onDownloadPdf}
            className="bg-emerald-600 hover:bg-emerald-500 text-white text-xs px-2.5 py-1.5 rounded-lg font-medium transition shadow-sm flex items-center gap-1.5"
            title={t.downloadPdf}
          >
            <FileDown className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">{t.downloadPdf}</span>
          </button>

          {/* Fullscreen Button */}
          <button
            onClick={onToggleFullscreen}
            className="bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs p-1.5 rounded-lg border border-slate-700 transition"
            title={t.fullscreen}
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-slate-800 h-1 mt-2.5 rounded-full overflow-hidden">
        <div
          className="bg-gradient-to-r from-sky-500 to-emerald-400 h-full transition-all duration-300"
          style={{ width: `${progressPercent}%` }}
        />
      </div>
    </header>
  );
};
