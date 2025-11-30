import React, { useState } from 'react';
import { useNews } from '../hooks/useNews';
import { NewsCard } from '../components/NewsCard';
import { NewsModal } from '../components/NewsModal';
import { NewsCardSkeleton } from '../components/LoadingSkeleton';
import { motion } from 'framer-motion';
import { TrendingUp, BarChart3, PieChart } from 'lucide-react';
import { NewsArticle } from '../services/api';
interface AnalysisPageProps {
  language: 'ID' | 'EN';
}
export function AnalysisPage({
  language
}: AnalysisPageProps) {
  const {
    news,
    loading
  } = useNews(undefined, 9);
  const [selectedNews, setSelectedNews] = useState<NewsArticle | null>(null);
  const analysisCategories = [{
    icon: TrendingUp,
    title: language === 'ID' ? 'Analisis Teknikal' : 'Technical Analysis',
    description: language === 'ID' ? 'Analisis chart dan indikator teknikal' : 'Chart analysis and technical indicators'
  }, {
    icon: BarChart3,
    title: language === 'ID' ? 'Analisis Fundamental' : 'Fundamental Analysis',
    description: language === 'ID' ? 'Analisis data ekonomi dan keuangan' : 'Economic and financial data analysis'
  }, {
    icon: PieChart,
    title: language === 'ID' ? 'Sentimen Pasar' : 'Market Sentiment',
    description: language === 'ID' ? 'Analisis sentimen dan psikologi pasar' : 'Sentiment and market psychology analysis'
  }];
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
              {language === 'ID' ? 'Analisis Pasar' : 'Market Analysis'}
            </h1>
            <p className="text-gray-600">
              {language === 'ID' ? 'Analisis mendalam dan wawasan pasar dari para ahli' : 'In-depth analysis and market insights from experts'}
            </p>
          </motion.div>

          {/* Analysis Categories */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {analysisCategories.map((category, index) => <motion.div key={category.title} initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: index * 0.1
          }} className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
                <category.icon className="w-12 h-12 text-orange-600 mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {category.title}
                </h3>
                <p className="text-sm text-gray-600">{category.description}</p>
              </motion.div>)}
          </div>

          {/* Analysis Articles */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {language === 'ID' ? 'Artikel Analisis Terbaru' : 'Latest Analysis Articles'}
            </h2>
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
          </section>
        </div>
      </div>

      <NewsModal news={selectedNews} onClose={() => setSelectedNews(null)} language={language} />
    </>;
}