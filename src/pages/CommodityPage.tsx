import React from 'react';
import { NewsCard } from '../components/NewsCard';
import { Sidebar } from '../components/Sidebar';
import { useRealTimeNews } from '../hooks/useRealTimeNews';
import { Droplet, Wheat, Zap, TrendingUp, TrendingDown } from 'lucide-react';
import { motion } from 'framer-motion';
export function CommodityPage() {
  const {
    news
  } = useRealTimeNews();
  const commodityNews = news.filter(n => n.category === 'Commodity');
  const commodities = [{
    name: 'Minyak Mentah WTI',
    price: '$78.45',
    change: '-$1.23',
    percent: '-1.54%',
    trend: 'down',
    icon: Droplet,
    color: 'text-blue-600'
  }, {
    name: 'Emas',
    price: '$2,045.30',
    change: '+$12.50',
    percent: '+0.61%',
    trend: 'up',
    icon: TrendingUp,
    color: 'text-yellow-600'
  }, {
    name: 'Perak',
    price: '$24.67',
    change: '+$0.34',
    percent: '+1.40%',
    trend: 'up',
    icon: TrendingUp,
    color: 'text-gray-500'
  }, {
    name: 'Gas Alam',
    price: '$2.89',
    change: '-$0.05',
    percent: '-1.70%',
    trend: 'down',
    icon: Zap,
    color: 'text-orange-600'
  }, {
    name: 'Gandum',
    price: '$645.25',
    change: '+$8.75',
    percent: '+1.38%',
    trend: 'up',
    icon: Wheat,
    color: 'text-amber-700'
  }, {
    name: 'Kopi',
    price: '$185.40',
    change: '-$2.10',
    percent: '-1.12%',
    trend: 'down',
    icon: Droplet,
    color: 'text-brown-600'
  }];
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
          <h2 className="text-xl font-bold mb-4">Harga Komoditas Real-Time</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {commodities.map((commodity, i) => {
            const Icon = commodity.icon;
            return <motion.div key={commodity.name} initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: i * 0.1
            }} className="bg-gradient-to-br from-gray-50 to-white p-4 rounded-lg border border-gray-200 hover:shadow-lg transition-all cursor-pointer group">
                  <div className="flex items-center gap-2 mb-2">
                    <Icon className={`w-5 h-5 ${commodity.color} group-hover:scale-110 transition-transform`} />
                  </div>
                  <div className="text-xs text-gray-500 mb-1">
                    {commodity.name}
                  </div>
                  <div className="text-lg font-bold text-gray-900 mb-1">
                    {commodity.price}
                  </div>
                  <div className={`text-sm font-semibold flex items-center gap-1 ${commodity.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                    {commodity.trend === 'up' ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                    {commodity.change}
                  </div>
                  <div className={`text-xs ${commodity.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                    {commodity.percent}
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