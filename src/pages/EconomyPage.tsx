import React from 'react';
import { NewsFeed } from '../components/NewsFeed';
import { EconomicIndicators } from '../components/EconomicIndicators';
import { motion } from 'framer-motion';
interface EconomyPageProps {
  language: 'ID' | 'EN';
}
export function EconomyPage({
  language
}: EconomyPageProps) {
  return <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {language === 'ID' ? 'Berita Ekonomi' : 'Economic News'}
          </h1>
          <p className="text-gray-600">
            {language === 'ID' ? 'Berita dan analisis ekonomi terkini' : 'Latest economic news and analysis'}
          </p>
        </motion.div>

        <EconomicIndicators language={language} />
        <div className="mt-12">
          <NewsFeed language={language} />
        </div>
      </div>
    </div>;
}