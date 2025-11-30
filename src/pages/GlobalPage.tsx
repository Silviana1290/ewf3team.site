import React from 'react';
import { NewsCard } from '../components/NewsCard';
import { Sidebar } from '../components/Sidebar';
import { useRealTimeNews } from '../hooks/useRealTimeNews';
import { Globe, MapPin, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
export function GlobalPage() {
  const {
    news
  } = useRealTimeNews();
  const globalNews = news.filter(n => n.category === 'Global');
  const regions = [{
    name: 'Amerika',
    icon: '🌎',
    color: 'from-blue-500 to-blue-700',
    newsCount: 12
  }, {
    name: 'Eropa',
    icon: '🇪🇺',
    color: 'from-green-500 to-green-700',
    newsCount: 8
  }, {
    name: 'Asia',
    icon: '🌏',
    color: 'from-red-500 to-red-700',
    newsCount: 15
  }, {
    name: 'Timur Tengah',
    icon: '🕌',
    color: 'from-yellow-500 to-yellow-700',
    newsCount: 6
  }];
  return <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-900 to-green-700 text-white py-12 border-b-4 border-[#FF6B00]">
        <div className="container mx-auto px-4">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} className="flex items-center gap-4 mb-4">
            <Globe className="w-12 h-12 text-[#FF6B00]" />
            <div>
              <h1 className="text-4xl font-bold mb-2">Berita Global</h1>
              <p className="text-gray-200 text-lg">
                Update terkini dari pasar dan ekonomi internasional
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Regional Overview */}
      <div className="bg-white border-b border-gray-200 py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
            <MapPin className="w-5 h-5 text-[#FF6B00]" />
            Berita Berdasarkan Wilayah
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {regions.map((region, i) => <motion.div key={region.name} initial={{
            opacity: 0,
            scale: 0.9
          }} animate={{
            opacity: 1,
            scale: 1
          }} transition={{
            delay: i * 0.1
          }} className={`bg-gradient-to-br ${region.color} text-white p-6 rounded-lg cursor-pointer hover:shadow-xl transition-all group`}>
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                  {region.icon}
                </div>
                <h3 className="text-lg font-bold mb-1">{region.name}</h3>
                <p className="text-sm opacity-90">
                  {region.newsCount} berita terbaru
                </p>
              </motion.div>)}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* News Section */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-6 border-b-2 border-black pb-2">
              Berita Internasional Terkini
            </h2>
            <div className="grid gap-6">
              {globalNews.map(item => <NewsCard key={item.id} news={item} />)}
            </div>

            {/* Featured Analysis */}
            <div className="mt-8 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-[#FF6B00]" />
                Analisis Geopolitik
              </h3>
              <div className="space-y-4 text-gray-700">
                <p className="leading-relaxed">
                  Ketegangan geopolitik di berbagai belahan dunia terus
                  mempengaruhi sentimen pasar global. Konflik Rusia-Ukraina yang
                  berkepanjangan, ketegangan AS-China, dan dinamika Timur Tengah
                  menjadi faktor utama yang mempengaruhi harga komoditas dan
                  aliran modal internasional.
                </p>
                <p className="leading-relaxed">
                  Bank sentral di negara-negara maju mulai menunjukkan sikap
                  yang lebih dovish, mengindikasikan kemungkinan penurunan suku
                  bunga di paruh kedua tahun ini. Hal ini memberikan angin segar
                  bagi pasar emerging markets, termasuk Indonesia.
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