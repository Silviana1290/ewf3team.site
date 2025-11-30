import React, { useState } from 'react';
import { useMarketData } from '../hooks/useMarketData';
import { useNews } from '../hooks/useNews';
import { NewsCard } from '../components/NewsCard';
import { NewsModal } from '../components/NewsModal';
import { MarketWidgetSkeleton, NewsCardSkeleton } from '../components/LoadingSkeleton';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { NewsArticle } from '../services/api';
interface CommodityPageProps {
  language: 'ID' | 'EN';
}
export function CommodityPage({
  language
}: CommodityPageProps) {
  const {
    data: marketData,
    loading: marketLoading
  } = useMarketData(10000);
  const {
    news,
    loading: newsLoading
  } = useNews('Commodities', 6);
  const [selectedNews, setSelectedNews] = useState<NewsArticle | null>(null);
  const commodities = marketData.filter(item => ['GOLD', 'OIL'].includes(item.symbol));
  return <>
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {language === 'ID' ? 'Komoditas' : 'Commodities'}
            </h1>
            <p className="text-gray-600">
              {language === 'ID' ? 'Harga komoditas dan berita terkait' : 'Commodity prices and related news'}
            </p>
          </motion.div>

          {/* Commodity Prices */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {language === 'ID' ? 'Harga Komoditas' : 'Commodity Prices'}
            </h2>
            {marketLoading ? <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <MarketWidgetSkeleton />
                <MarketWidgetSkeleton />
              </div> : <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {commodities.map((item, index) => <motion.div key={item.symbol} initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: index * 0.1
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

          {/* Commodity News */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {language === 'ID' ? 'Berita Komoditas' : 'Commodity News'}
            </h2>
            {newsLoading ? <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3].map(i => <NewsCardSkeleton key={i} />)}
              </div> : <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {news.map((article, index) => <motion.div key={article.id} initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: index * 0.1
            }}>
                    <NewsCard {...article} onClick={() => setSelectedNews(article)} />
                  </motion.div>)}
              </div>}
          </section>
        </div>
      </div>

      <NewsModal news={selectedNews} onClose={() => setSelectedNews(null)} language={language} />
    </>;
}