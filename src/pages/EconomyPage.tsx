import React from 'react';
import { NewsCard } from '../components/NewsCard';
import { Sidebar } from '../components/Sidebar';
import { EconomicIndicators } from '../components/EconomicIndicators';
import { useRealTimeNews } from '../hooks/useRealTimeNews';
import { useEconomicData } from '../hooks/useMarketData';
import { DollarSign, TrendingUp, TrendingDown, Percent } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
export function EconomyPage() {
  const {
    news
  } = useRealTimeNews();
  const {
    economicData
  } = useEconomicData();
  const economyNews = news.filter(n => n.category === 'Economy');
  const iconMap = {
    'Inflasi (YoY)': Percent,
    'Suku Bunga BI': Percent,
    'Pertumbuhan GDP': TrendingUp,
    'Nilai Tukar USD/IDR': DollarSign
  };
  return <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-12 border-b-4 border-[#FF6B00]">
        <div className="container mx-auto px-4">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} className="flex items-center gap-4 mb-4">
            <DollarSign className="w-12 h-12 text-[#FF6B00]" />
            <div>
              <h1 className="text-4xl font-bold mb-2">Ekonomi</h1>
              <p className="text-gray-200 text-lg">
                Analisis mendalam kondisi ekonomi domestik dan global
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Economic Indicators Summary */}
      <div className="bg-white border-b border-gray-200 py-6">
        <div className="container mx-auto px-4">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            Indikator Ekonomi Utama
            <span className="ml-2 text-xs font-normal text-gray-500 bg-green-100 text-green-700 px-2 py-1 rounded-full animate-pulse">
              LIVE
            </span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <AnimatePresence mode="wait">
              {economicData.map((item, i) => {
              const Icon = iconMap[item.label as keyof typeof iconMap];
              return <motion.div key={item.label} layout initial={{
                opacity: 0,
                scale: 0.9
              }} animate={{
                opacity: 1,
                scale: 1
              }} exit={{
                opacity: 0,
                scale: 0.9
              }} transition={{
                delay: i * 0.1
              }} className="bg-gradient-to-br from-gray-50 to-white p-4 rounded-lg border border-gray-200 hover:shadow-md transition-all cursor-pointer">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon className="w-5 h-5 text-[#FF6B00]" />
                      <div className="text-xs text-gray-500">{item.label}</div>
                    </div>
                    <motion.div key={item.value} initial={{
                  scale: 1.1,
                  color: '#FF6B00'
                }} animate={{
                  scale: 1,
                  color: '#111827'
                }} transition={{
                  duration: 0.3
                }} className="text-2xl font-bold mb-1">
                      {item.value}
                    </motion.div>
                    <motion.div key={item.change} initial={{
                  scale: 1.1
                }} animate={{
                  scale: 1
                }} className={`text-sm font-semibold flex items-center gap-1 ${item.trend === 'up' ? 'text-green-600' : item.trend === 'down' ? 'text-red-600' : 'text-gray-500'}`}>
                      {item.trend === 'up' && <TrendingUp className="w-4 h-4" />}
                      {item.trend === 'down' && <TrendingDown className="w-4 h-4" />}
                      {item.change}
                    </motion.div>
                  </motion.div>;
            })}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* News Section */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-6 border-b-2 border-black pb-2">
                Berita Ekonomi Terkini
              </h2>
              <div className="grid gap-6">
                {economyNews.map(item => <NewsCard key={item.id} news={item} />)}
              </div>
            </div>

            {/* Economic Indicators Table */}
            <EconomicIndicators />
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>;
}