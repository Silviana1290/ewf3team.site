import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { GlossaryPage } from './pages/GlossaryPage';
import { MarketPage } from './pages/MarketPage';
import { EconomyPage } from './pages/EconomyPage';
import { CommodityPage } from './pages/CommodityPage';
import { FiscalMonetaryPage } from './pages/FiscalMonetaryPage';
import { CalendarPage } from './pages/CalendarPage';
import { GlobalPage } from './pages/GlobalPage';
import { MarketAnalysisPage } from './pages/MarketAnalysisPage';
import { UtilitiesPage } from './pages/UtilitiesPage';
import { useRealTimeNews } from './hooks/useRealTimeNews';
import { useNewsNotifications } from './hooks/useNewsNotifications';
export function App() {
  const {
    news
  } = useRealTimeNews();
  const {
    newNewsCount,
    refreshNews
  } = useNewsNotifications(news);
  return <Router>
      <div className="flex flex-col min-h-screen bg-white font-sans text-gray-900">
        <Header newNewsCount={newNewsCount} onRefreshNews={refreshNews} />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/glossary" element={<GlossaryPage />} />
            <Route path="/market" element={<MarketPage />} />
            <Route path="/economy" element={<EconomyPage />} />
            <Route path="/commodity" element={<CommodityPage />} />
            <Route path="/fiscal-monetary" element={<FiscalMonetaryPage />} />
            <Route path="/calendar" element={<CalendarPage />} />
            <Route path="/global" element={<GlobalPage />} />
            <Route path="/analysis" element={<MarketAnalysisPage />} />
            <Route path="/utilities" element={<UtilitiesPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>;
}