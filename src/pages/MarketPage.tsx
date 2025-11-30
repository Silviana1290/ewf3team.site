import React from 'react';
import { useMarketData } from '../hooks/useMarketData';
import { MarketWidgetSkeleton } from '../components/LoadingSkeleton';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, RefreshCw } from 'lucide-react';
interface MarketPageProps {
  language: 'ID' | 'EN';
}
export function MarketPage({
  language
}: MarketPageProps) {
  const {
    data: marketData,
    loading
  } = useMarketData(10000); // Update every 10 seconds
  const categories = {
    indices: ['DJI', 'SPX', 'IXIC', 'FTSE', 'N225', 'HSI'],
    commodities: ['GOLD', 'OIL']
  };
  const indices = marketData.filter(item => categories.indices.includes(item.symbol));
  const commodities = marketData.filter(item => categories.commodities.includes(item.symbol));
  return <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {language === 'ID' ? 'Data Pasar' : 'Market Data'}
              </h1>
              <p className="text-gray-600">
                {language === 'ID' ? 'Data pasar real-time dari bursa global' : 'Real-time market data from global exchanges'}
              </p>
            </div>
            <motion.div animate={{
            rotate: 360
          }} transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'linear'
          }}>
              <RefreshCw className="w-5 h-5 text-orange-600" />
            </motion.div>
          </div>
        </motion.div>

        {/* Indices Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            {language === 'ID' ? 'Indeks Global' : 'Global Indices'}
          </h2>
          {loading ? <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map(i => <MarketWidgetSkeleton key={i} />)}
            </div> : <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {indices.map((item, index) => <motion.div key={item.symbol} initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: index * 0.05
          }} className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">
                        {item.name}
                      </h3>
                      <p className="text-sm text-gray-500">{item.symbol}</p>
                    </div>
                    <div className={`flex items-center space-x-1 ${item.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                      {item.change >= 0 ? <TrendingUp className="w-5 h-5" /> : <TrendingDown className="w-5 h-5" />}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-baseline space-x-2">
                      <span className="text-3xl font-bold text-gray-900">
                        {item.price.toFixed(2)}
                      </span>
                      <span className={`text-lg font-semibold ${item.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                        {item.change >= 0 ? '+' : ''}
                        {item.changePercent.toFixed(2)}%
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100">
                      <div>
                        <p className="text-xs text-gray-500">
                          {language === 'ID' ? 'Tinggi' : 'High'}
                        </p>
                        <p className="text-sm font-semibold text-gray-900">
                          {item.high.toFixed(2)}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">
                          {language === 'ID' ? 'Rendah' : 'Low'}
                        </p>
                        <p className="text-sm font-semibold text-gray-900">
                          {item.low.toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>)}
            </div>}
        </section>

        {/* Commodities Section */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            {language === 'ID' ? 'Komoditas' : 'Commodities'}
          </h2>
          {loading ? <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[1, 2].map(i => <MarketWidgetSkeleton key={i} />)}
            </div> : <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {commodities.map((item, index) => <motion.div key={item.symbol} initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: index * 0.05
          }} className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">
                        {item.name}
                      </h3>
                      <p className="text-sm text-gray-500">{item.symbol}</p>
                    </div>
                    <div className={`flex items-center space-x-1 ${item.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                      {item.change >= 0 ? <TrendingUp className="w-5 h-5" /> : <TrendingDown className="w-5 h-5" />}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-baseline space-x-2">
                      <span className="text-3xl font-bold text-gray-900">
                        ${item.price.toFixed(2)}
                      </span>
                      <span className={`text-lg font-semibold ${item.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                        {item.change >= 0 ? '+' : ''}
                        {item.changePercent.toFixed(2)}%
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100">
                      <div>
                        <p className="text-xs text-gray-500">
                          {language === 'ID' ? 'Tinggi' : 'High'}
                        </p>
                        <p className="text-sm font-semibold text-gray-900">
                          ${item.high.toFixed(2)}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">
                          {language === 'ID' ? 'Rendah' : 'Low'}
                        </p>
                        <p className="text-sm font-semibold text-gray-900">
                          ${item.low.toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>)}
            </div>}
        </section>
      </div>
    </div>;
}