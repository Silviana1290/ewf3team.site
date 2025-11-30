import React from 'react';
import { NewsCard } from '../components/NewsCard';
import { Sidebar } from '../components/Sidebar';
import { useRealTimeNews } from '../hooks/useRealTimeNews';
import { useCommodityData } from '../hooks/useMarketData';
import { Droplet, Wheat, Zap, TrendingUp, TrendingDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
export function CommodityPage() {
  const {
    news
  } = useRealTimeNews();
  const {
    commodities
  } = useCommodityData();
  const commodityNews = news.filter(n => n.category === 'Commodity');
  const iconMap: Record<string, any> = {
    Droplet: Droplet,
    TrendingUp: TrendingUp,
    Zap: Zap,
    Wheat: Wheat
  };
  return <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-amber-900 to-amber-700 text-white py-12 border-b-4 border-[#FF6B00]">
        <div className="container mx-auto px-4">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} className="flex items-center gap-4 mb-4">
            <Droplet className="w-12 h-12 text-[#FF6B00]" />
            <div>
              <h1 className="text-4xl font-bold mb-2">Komoditas</h1>
              <p className="text-gray-200 text-lg">
                Harga komoditas global: Energi, Logam Mulia, dan Pertanian
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Commodity Prices Grid */}
      <div className="bg-white border-b border-gray-200 py-6">
        <div className="container mx-auto px-4">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            Harga Komoditas Real-Time
            <span className="ml-2 text-xs font-normal text-gray-500 bg-green-100 text-green-700 px-2 py-1 rounded-full animate-pulse">
              LIVE
            </span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <AnimatePresence mode="wait">
              {commodities.map((commodity, i) => {
              const Icon = iconMap[commodity.icon];
              return <motion.div key={commodity.name} layout initial={{
                opacity: 0,
                y: 20
              }} animate={{
                opacity: 1,
                y: 0
              }} exit={{
                opacity: 0,
                scale: 0.9
              }} transition={{
                delay: i * 0.1
              }} whileHover={{
                scale: 1.05,
                y: -5
              }} className="bg-gradient-to-br from-gray-50 to-white p-4 rounded-lg border border-gray-200 hover:shadow-lg transition-all cursor-pointer group">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon className={`w-5 h-5 ${commodity.color} group-hover:scale-110 transition-transform`} />
                    </div>
                    <div className="text-xs text-gray-500 mb-1">
                      {commodity.name}
                    </div>
                    <motion.div key={commodity.price} initial={{
                  scale: 1.1,
                  color: '#FF6B00'
                }} animate={{
                  scale: 1,
                  color: '#111827'
                }} transition={{
                  duration: 0.3
                }} className="text-lg font-bold mb-1">
                      {commodity.price}
                    </motion.div>
                    <motion.div key={commodity.change} initial={{
                  scale: 1.1
                }} animate={{
                  scale: 1
                }} className={`text-sm font-semibold flex items-center gap-1 ${commodity.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                      {commodity.trend === 'up' ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                      {commodity.change}
                    </motion.div>
                    <div className={`text-xs ${commodity.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                      {commodity.percent}
                    </div>
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
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-6 border-b-2 border-black pb-2">
              Berita Komoditas Terkini
            </h2>
            <div className="grid gap-6">
              {commodityNews.map(item => <NewsCard key={item.id} news={item} />)}
            </div>

            {/* Commodity Analysis */}
            <div className="mt-8 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-[#FF6B00]" />
                Analisis Pasar Komoditas
              </h3>
              <div className="space-y-4 text-gray-700">
                <p className="leading-relaxed">
                  Pasar komoditas global menunjukkan volatilitas tinggi minggu
                  ini, dengan harga minyak mentah terkoreksi akibat kekhawatiran
                  permintaan dari China, sementara logam mulia terus menguat
                  seiring ketidakpastian geopolitik.
                </p>
                <p className="leading-relaxed">
                  Emas mencapai level tertinggi dalam 3 bulan terakhir, didorong
                  oleh ekspektasi penurunan suku bunga The Fed dan meningkatnya
                  permintaan safe haven. Sementara itu, komoditas pertanian
                  menunjukkan tren positif dengan gandum dan kopi mengalami
                  kenaikan harga.
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>;
}