import React, { useState } from 'react';
import { NewsCard } from '../components/NewsCard';
import { Sidebar } from '../components/Sidebar';
import { useRealTimeNews } from '../hooks/useRealTimeNews';
import { TrendingUp, TrendingDown, Activity, BarChart3 } from 'lucide-react';
import { motion } from 'framer-motion';
export function MarketPage() {
  const {
    news
  } = useRealTimeNews();
  const marketNews = news.filter(n => n.category === 'Market');
  const indices = [{
    name: 'IHSG',
    value: '7,234.56',
    change: '+45.23',
    percent: '+0.63%',
    trend: 'up'
  }, {
    name: 'Dow Jones',
    value: '38,456.78',
    change: '-123.45',
    percent: '-0.32%',
    trend: 'down'
  }, {
    name: 'S&P 500',
    value: '5,123.45',
    change: '+23.12',
    percent: '+0.45%',
    trend: 'up'
  }, {
    name: 'NASDAQ',
    value: '16,234.89',
    change: '+89.34',
    percent: '+0.55%',
    trend: 'up'
  }, {
    name: 'Nikkei 225',
    value: '33,456.12',
    change: '-234.56',
    percent: '-0.70%',
    trend: 'down'
  }, {
    name: 'FTSE 100',
    value: '7,890.34',
    change: '+12.45',
    percent: '+0.16%',
    trend: 'up'
  }];
  const topMovers = [{
    symbol: 'BBCA',
    name: 'Bank Central Asia',
    price: '9,875',
    change: '+3.45%',
    volume: '45.2M'
  }, {
    symbol: 'BBRI',
    name: 'Bank Rakyat Indonesia',
    price: '5,450',
    change: '+2.87%',
    volume: '89.3M'
  }, {
    symbol: 'TLKM',
    name: 'Telkom Indonesia',
    price: '3,890',
    change: '+1.92%',
    volume: '67.8M'
  }, {
    symbol: 'ASII',
    name: 'Astra International',
    price: '6,125',
    change: '-1.23%',
    volume: '34.5M'
  }];
  return <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-black to-gray-900 text-white py-12 border-b-4 border-[#FF6B00]">
        <div className="container mx-auto px-4">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} className="flex items-center gap-4 mb-4">
            <Activity className="w-12 h-12 text-[#FF6B00]" />
            <div>
              <h1 className="text-4xl font-bold mb-2">Pasar Saham</h1>
              <p className="text-gray-300 text-lg">
                Update real-time indeks global dan pergerakan saham
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Market Indices Grid */}
      <div className="bg-white border-b border-gray-200 py-6">
        <div className="container mx-auto px-4">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-[#FF6B00]" />
            Indeks Global
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {indices.map((index, i) => <motion.div key={index.name} initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: i * 0.1
          }} className="bg-gray-50 p-4 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                <div className="text-xs text-gray-500 mb-1">{index.name}</div>
                <div className="text-lg font-bold text-gray-900 mb-1">
                  {index.value}
                </div>
                <div className={`text-sm font-semibold flex items-center gap-1 ${index.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                  {index.trend === 'up' ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                  {index.change} ({index.percent})
                </div>
              </motion.div>)}
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
                Berita Pasar Terkini
              </h2>
              <div className="grid gap-6">
                {marketNews.map(item => <NewsCard key={item.id} news={item} />)}
              </div>
            </div>

            {/* Top Movers */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-green-600" />
                Top Gainers Hari Ini
              </h3>
              <div className="space-y-3">
                {topMovers.map((stock, i) => <motion.div key={stock.symbol} initial={{
                opacity: 0,
                x: -20
              }} animate={{
                opacity: 1,
                x: 0
              }} transition={{
                delay: i * 0.1
              }} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div>
                      <div className="font-bold text-gray-900">
                        {stock.symbol}
                      </div>
                      <div className="text-xs text-gray-500">{stock.name}</div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-gray-900">
                        Rp {stock.price}
                      </div>
                      <div className={`text-sm font-semibold ${stock.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                        {stock.change}
                      </div>
                    </div>
                    <div className="text-xs text-gray-500">
                      Vol: {stock.volume}
                    </div>
                  </motion.div>)}
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