import React, { useState } from 'react';
import { NewsCard } from './NewsCard';
import { NewsModal } from './NewsModal';
import { motion } from 'framer-motion';
import { useNews } from '../hooks/useNews';
import { NewsCardSkeleton } from './LoadingSkeleton';
interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  source: string;
  timestamp: string;
  imageUrl: string;
  category: string;
}
const mockNews: NewsArticle[] = [{
  id: '1',
  title: 'Federal Reserve Signals Potential Rate Cuts in 2024',
  excerpt: 'The Federal Reserve indicated it may begin cutting interest rates next year as inflation continues to moderate, marking a significant shift in monetary policy.',
  content: 'Full article content here...',
  source: 'CNBC',
  timestamp: '2 hours ago',
  imageUrl: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=600&fit=crop',
  category: 'Monetary Policy'
}, {
  id: '2',
  title: 'Global Oil Prices Surge Amid Middle East Tensions',
  excerpt: 'Crude oil prices jumped 3% today as geopolitical tensions in the Middle East raised concerns about supply disruptions.',
  content: 'Full article content here...',
  source: 'Reuters',
  timestamp: '4 hours ago',
  imageUrl: 'https://images.unsplash.com/photo-1564514239975-0d0b9e2d1f6f?w=800&h=600&fit=crop',
  category: 'Commodities'
}, {
  id: '3',
  title: 'US Dollar Weakens Against Major Currencies',
  excerpt: 'The dollar index fell to its lowest level in three months as investors reassess the outlook for US interest rates.',
  content: 'Full article content here...',
  source: 'Investing.com',
  timestamp: '5 hours ago',
  imageUrl: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&h=600&fit=crop',
  category: 'Forex'
}, {
  id: '4',
  title: 'China GDP Growth Beats Expectations at 5.2%',
  excerpt: "China's economy grew faster than expected in Q4, driven by strong manufacturing and export performance.",
  content: 'Full article content here...',
  source: 'Trading Economics',
  timestamp: '6 hours ago',
  imageUrl: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&h=600&fit=crop',
  category: 'Economy'
}, {
  id: '5',
  title: 'European Stocks Rally on ECB Rate Decision',
  excerpt: 'European markets surged after the ECB held rates steady and signaled a more dovish stance on future policy.',
  content: 'Full article content here...',
  source: 'CNBC',
  timestamp: '7 hours ago',
  imageUrl: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=600&fit=crop',
  category: 'Markets'
}, {
  id: '6',
  title: 'Gold Reaches New All-Time High Above $2,100',
  excerpt: 'Gold prices hit a record high as investors seek safe-haven assets amid economic uncertainty.',
  content: 'Full article content here...',
  source: 'Reuters',
  timestamp: '8 hours ago',
  imageUrl: 'https://images.unsplash.com/photo-1610375461246-83df859d849d?w=800&h=600&fit=crop',
  category: 'Commodities'
}];
interface NewsFeedProps {
  language: 'ID' | 'EN';
}
export function NewsFeed({
  language
}: NewsFeedProps) {
  const [selectedNews, setSelectedNews] = useState<NewsArticle | null>(null);
  const {
    news,
    loading
  } = useNews(undefined, 6, 60000); // Auto-refresh every 60 seconds
  return <>
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              {language === 'ID' ? 'Berita Terkini' : 'Latest News'}
            </h2>
            <p className="text-gray-600">
              {language === 'ID' ? 'Berita finansial terbaru dari sumber terpercaya' : 'Latest financial news from trusted sources'}
            </p>
          </motion.div>

          {loading ? <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map(i => <NewsCardSkeleton key={i} />)}
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
        </div>
      </section>

      <NewsModal news={selectedNews} onClose={() => setSelectedNews(null)} language={language} />
    </>;
}