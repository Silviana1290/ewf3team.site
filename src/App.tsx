import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Header from './components/Header'
import { WorldClock } from './components/WorldClock';
import { MarketTicker } from './components/MarketTicker';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { MarketPage } from './pages/MarketPage';
import { EconomyPage } from './pages/EconomyPage';
import { CommodityPage } from './pages/CommodityPage';
import { FiscalMonetaryPage } from './pages/FiscalMonetaryPage';
import { CalendarPage } from './pages/CalendarPage';
import { GlobalPage } from './pages/GlobalPage';
import { AnalysisPage } from './pages/AnalysisPage';
import { UtilitiesPage } from './pages/UtilitiesPage';
import { ArticleDetailPage } from './pages/ArticleDetailPage';
import { NewsArchivePage } from './pages/NewsArchivePage';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import { AnimatePresence, motion } from 'framer-motion';
export function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [language, setLanguage] = useState<'ID' | 'EN'>('ID');
  const [lastScrollY, setLastScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 50);
      setLastScrollY(currentScrollY);
    };
    window.addEventListener('scroll', handleScroll, {
      passive: true
    });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);
  return <AuthProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-gray-50">
          <Routes>
            {/* Auth Routes - No Header/Footer */}
            <Route path="/login" element={<LoginPage language={language} />} />
            <Route path="/register" element={<RegisterPage language={language} />} />

            {/* Main Routes - With Header/Footer */}
            <Route path="/*" element={<>
                  <Header isScrolled={isScrolled} language={language} onLanguageChange={setLanguage} />

                  <div className="pt-[120px]">
                    <WorldClock />
                    <MarketTicker />

                    <AnimatePresence mode="wait">
                      <Routes>
                        <Route path="/" element={<HomePage language={language} />} />
                        <Route path="/market" element={<MarketPage language={language} />} />
                        <Route path="/economy" element={<EconomyPage language={language} />} />
                        <Route path="/commodity" element={<CommodityPage language={language} />} />
                        <Route path="/fiscal" element={<FiscalMonetaryPage language={language} />} />
                        <Route path="/calendar" element={<CalendarPage language={language} />} />
                        <Route path="/global" element={<GlobalPage language={language} />} />
                        <Route path="/analysis" element={<AnalysisPage language={language} />} />
                        <Route path="/utilities" element={<UtilitiesPage language={language} />} />
                        <Route path="/news" element={<NewsArchivePage language={language} />} />
                        <Route path="/article/:id" element={<ArticleDetailPage language={language} />} />
                        <Route path="*" element={<Navigate to="/" replace />} />
                      </Routes>
                    </AnimatePresence>

                    <Footer language={language} />
                  </div>
                </>} />
          </Routes>
        </div>
      </BrowserRouter>
    </AuthProvider>;
}
