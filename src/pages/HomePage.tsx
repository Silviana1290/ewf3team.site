import React from 'react';
import { NewsTicker } from '../components/NewsTicker';
import { NewsCard } from '../components/NewsCard';
import { Sidebar } from '../components/Sidebar';
import { EconomicIndicators } from '../components/EconomicIndicators';
import { useRealTimeNews } from '../hooks/useRealTimeNews';
import { Globe, TrendingUp, DollarSign } from 'lucide-react';
export function HomePage() {
  const {
    news
  } = useRealTimeNews();
  const featuredNews = news[0];
  const globalNews = news.filter(n => n.category === 'Global' || n.category === 'Commodity');
  const marketNews = news.filter(n => n.category === 'Market' || n.category === 'Fiscal');
  const economyNews = news.filter(n => n.category === 'Economy' || n.category === 'Monetary');
  return <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              {featuredNews && <NewsCard news={featuredNews} variant="featured" />}
            </div>
            <div className="lg:col-span-1">
              <Sidebar />
            </div>
          </div>
        </div>
      </div>

      <NewsTicker />

      {/* Main Content Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: Global */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 border-b-2 border-black pb-2 mb-6">
              <Globe className="w-6 h-6" />
              <h2 className="text-xl font-bold uppercase">Global</h2>
            </div>
            <div className="space-y-6">
              {globalNews.map(item => <NewsCard key={item.id} news={item} />)}
            </div>
          </div>

          {/* Column 2: Market Update */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 border-b-2 border-black pb-2 mb-6">
              <TrendingUp className="w-6 h-6" />
              <h2 className="text-xl font-bold uppercase">Market Update</h2>
            </div>
            <div className="space-y-6">
              {marketNews.map(item => <NewsCard key={item.id} news={item} />)}
            </div>
          </div>

          {/* Column 3: Economy */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 border-b-2 border-black pb-2 mb-6">
              <DollarSign className="w-6 h-6" />
              <h2 className="text-xl font-bold uppercase">Economy</h2>
            </div>
            <div className="space-y-6">
              {economyNews.map(item => <NewsCard key={item.id} news={item} />)}
            </div>
          </div>
        </div>

        {/* Economic Indicators Section */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Data Ekonomi Penting
            </h2>
            <p className="text-gray-600">
              Panduan lengkap indikator ekonomi dan dampaknya terhadap pasar
            </p>
          </div>
          <EconomicIndicators />
        </div>
      </div>
    </div>;
}