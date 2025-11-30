import React from 'react';
import { NewsCard } from '../components/NewsCard';
import { Sidebar } from '../components/Sidebar';
import { EconomicIndicators } from '../components/EconomicIndicators';
import { useRealTimeNews } from '../hooks/useRealTimeNews';
import { DollarSign, TrendingUp, TrendingDown, Percent } from 'lucide-react';
import { motion } from 'framer-motion';
export function EconomyPage() {
  const {
    news
  } = useRealTimeNews();
  const economyNews = news.filter(n => n.category === 'Economy');
  const economicData = [{
    label: 'Inflasi (YoY)',
    value: '2.56%',
    change: '+0.12%',
    trend: 'up',
    icon: Percent
  }, {
    label: 'Suku Bunga BI',
    value: '6.00%',
    change: '0.00%',
    trend: 'neutral',
    icon: Percent
  }, {
    label: 'Pertumbuhan GDP',
    value: '5.17%',
    change: '+0.23%',
    trend: 'up',
    icon: TrendingUp
  }, {
    label: 'Nilai Tukar USD/IDR',
    value: '15,845',
    change: '-45',
    trend: 'down',
    icon: DollarSign
  }];
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
          <h2 className="text-xl font-bold mb-4">Indikator Ekonomi Utama</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {economicData.map((item, i) => {
            const Icon = item.icon;
            return <motion.div key={item.label} initial={{
              opacity: 0,
              scale: 0.9
            }} animate={{
              opacity: 1,
              scale: 1
            }} transition={{
              delay: i * 0.1
            }} className="bg-gradient-to-br from-gray-50 to-white p-4 rounded-lg border border-gray-200 hover:shadow-md transition-all">
                  <div className="flex items-center gap-2 mb-2">
                    <Icon className="w-5 h-5 text-[#FF6B00]" />
                    <div className="text-xs text-gray-500">{item.label}</div>
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">
                    {item.value}
                  </div>
                  <div className={`text-sm font-semibold flex items-center gap-1 ${item.trend === 'up' ? 'text-green-600' : item.trend === 'down' ? 'text-red-600' : 'text-gray-500'}`}>
                    {item.trend === 'up' && <TrendingUp className="w-4 h-4" />}
                    {item.trend === 'down' && <TrendingDown className="w-4 h-4" />}
                    {item.change}
                  </div>
                </motion.div>;
          })}
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