/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useCallback } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { SlideContent } from './components/SlideContent';
import { Language } from './types/prl';

export default function App() {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [language, setLanguage] = useState<Language>('ca');
  const [allSolutionsOpen, setAllSolutionsOpen] = useState<boolean>(false);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

  const totalSlides = 17; // 16 theory/practice slides + 1 final 7-errors interactive game

  const handleNextSlide = useCallback(() => {
    setCurrentSlide((prev) => {
      if (prev < totalSlides - 1) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return prev + 1;
      }
      return prev;
    });
  }, [totalSlides]);

  const handlePrevSlide = useCallback(() => {
    setCurrentSlide((prev) => {
      if (prev > 0) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return prev - 1;
      }
      return prev;
    });
  }, []);

  const handleSlideChange = (index: number) => {
    if (index >= 0 && index < totalSlides) {
      setCurrentSlide(index);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleToggleSolutions = () => {
    setAllSolutionsOpen((prev) => !prev);
  };

  const handleToggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
        setIsFullscreen(false);
      }
    }
  };

  const handleDownloadPdf = () => {
    setAllSolutionsOpen(true);
    setTimeout(() => {
      window.print();
    }, 150);
  };

  // Keyboard navigation support
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore if typing in input or select
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLSelectElement) {
        return;
      }
      if (e.key === 'ArrowRight' || e.key === 'PageDown') {
        handleNextSlide();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        handlePrevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNextSlide, handlePrevSlide]);

  return (
    <div className="min-h-screen flex flex-col justify-between bg-slate-950 text-slate-100 overflow-x-hidden">
      
      {/* Top Header */}
      <Header
        currentSlide={currentSlide}
        totalSlides={totalSlides}
        language={language}
        onLanguageChange={setLanguage}
        onSlideChange={handleSlideChange}
        onToggleSolutions={handleToggleSolutions}
        allSolutionsOpen={allSolutionsOpen}
        isFullscreen={isFullscreen}
        onToggleFullscreen={handleToggleFullscreen}
        onDownloadPdf={handleDownloadPdf}
      />

      {/* Main Viewport Container */}
      <main className="flex-grow flex items-center justify-center p-3 sm:p-5 md:p-8 max-w-7xl mx-auto w-full">
        <SlideContent
          currentSlide={currentSlide}
          language={language}
          allSolutionsOpen={allSolutionsOpen}
        />
      </main>

      {/* Bottom Footer Control Bar */}
      <Footer
        currentSlide={currentSlide}
        totalSlides={totalSlides}
        language={language}
        onPrev={handlePrevSlide}
        onNext={handleNextSlide}
      />

    </div>
  );
}
