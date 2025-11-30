import React, { useState } from 'react';
import { useNews } from '../hooks/useNews';
import { NewsCard } from '../components/NewsCard';
import { NewsModal } from '../components/NewsModal';
import { NewsCardSkeleton } from '../components/LoadingSkeleton';
import { motion } from 'framer-motion';
import { NewsArticle } from '../services/api';
interface GlobalPageProps {
  language: 'ID' | 'EN';
}
export function GlobalPage({
  language
}: GlobalPageProps) {
  const {
    news,
    loading
  } = useNews(undefined, 12);
  const [selectedNews, setSelectedNews] = useState<NewsArticle | null>(null);
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
              {language === 'ID' ? 'Berita Global' : 'Global News'}
            </h1>
            <p className="text-gray-600">
              {language === 'ID' ? 'Berita finansial internasional dari seluruh dunia' : 'International financial news from around the world'}
            </p>
          </motion.div>

          {loading ? <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(i => <NewsCardSkeleton key={i} />)}
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
      </div>

      <NewsModal news={selectedNews} onClose={() => setSelectedNews(null)} language={language} />
    </>;
}