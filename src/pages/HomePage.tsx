import React from 'react';
import { NewsFeed } from '../components/NewsFeed';
import { EconomicIndicators } from '../components/EconomicIndicators';
import { motion } from 'framer-motion';
import { TrendingUp, Globe, BarChart3, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
interface HomePageProps {
  language: 'ID' | 'EN';
}
export function HomePage({
  language
}: HomePageProps) {
  const quickLinks = [{
    icon: TrendingUp,
    title: language === 'ID' ? 'Pasar' : 'Market',
    description: language === 'ID' ? 'Indeks global dan data pasar real-time' : 'Global indices and real-time market data',
    link: '/market',
    color: 'orange'
  }, {
    icon: BarChart3,
    title: language === 'ID' ? 'Analisis' : 'Analysis',
    description: language === 'ID' ? 'Analisis mendalam dan wawasan pasar' : 'In-depth analysis and market insights',
    link: '/analysis',
    color: 'blue'
  }, {
    icon: Calendar,
    title: language === 'ID' ? 'Kalender' : 'Calendar',
    description: language === 'ID' ? 'Kalender ekonomi dan acara penting' : 'Economic calendar and key events',
    link: '/calendar',
    color: 'green'
  }, {
    icon: Globe,
    title: 'Global',
    description: language === 'ID' ? 'Berita internasional dan tren global' : 'International news and global trends',
    link: '/global',
    color: 'purple'
  }];
  return <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 to-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {language === 'ID' ? 'Berita Finansial Real-Time' : 'Real-Time Financial News'}
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              {language === 'ID' ? 'Tetap terinformasi dengan berita terkini dari CNBC, Reuters, Investing.com, dan Trading Economics' : 'Stay informed with the latest news from CNBC, Reuters, Investing.com, and Trading Economics'}
            </p>
          </motion.div>

          {/* Quick Links */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {quickLinks.map((link, index) => <motion.div key={link.title} initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: index * 0.1
          }}>
                <Link to={link.link} className="block bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
                  <link.icon className={`w-12 h-12 text-${link.color}-600 mb-4`} />
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {link.title}
                  </h3>
                  <p className="text-sm text-gray-600">{link.description}</p>
                </Link>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* News Feed */}
      <NewsFeed language={language} />

      {/* Economic Indicators */}
      <EconomicIndicators language={language} />
    </div>;
}