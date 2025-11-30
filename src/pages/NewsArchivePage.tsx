import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { NewsListItem } from '../components/NewsListItem';
import { Pagination } from '../components/Pagination';
import { fetchNews, NewsArticle } from '../services/api';
import { Filter } from 'lucide-react';
interface NewsArchivePageProps {
  language: 'ID' | 'EN';
}
export function NewsArchivePage({
  language
}: NewsArchivePageProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [allNews, setAllNews] = useState<NewsArticle[]>([]);
  const [filteredNews, setFilteredNews] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const currentPage = parseInt(searchParams.get('page') || '1', 10);
  const itemsPerPage = 10;
  const categories = ['all', 'Market', 'Economy', 'Commodity', 'Fiscal & Monetary', 'Global'];
  useEffect(() => {
    const loadNews = async () => {
      setLoading(true);
      const news = await fetchNews(undefined, 100); // Fetch all news
      setAllNews(news);
      setFilteredNews(news);
      setLoading(false);
    };
    loadNews();
  }, []);
  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredNews(allNews);
    } else {
      setFilteredNews(allNews.filter(article => article.category === selectedCategory));
    }
    setSearchParams({
      page: '1'
    });
  }, [selectedCategory, allNews]);
  const totalPages = Math.ceil(filteredNews.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentNews = filteredNews.slice(startIndex, endIndex);
  const handlePageChange = (page: number) => {
    setSearchParams({
      page: page.toString()
    });
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };
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
            {language === 'ID' ? 'Arsip Berita' : 'News Archive'}
          </h1>
          <p className="text-gray-600">
            {language === 'ID' ? 'Semua berita finansial dari berbagai sumber' : 'All financial news from various sources'}
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.1
      }} className="mb-8">
          <div className="flex items-center space-x-2 mb-4">
            <Filter className="w-5 h-5 text-gray-600" />
            <span className="text-sm font-medium text-gray-700">
              {language === 'ID' ? 'Filter Kategori:' : 'Filter by Category:'}
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map(category => <button key={category} onClick={() => handleCategoryChange(category)} className={`px-4 py-2 rounded-lg font-medium transition-colors ${selectedCategory === category ? 'bg-orange-600 text-white' : 'bg-white text-gray-700 hover:bg-orange-50 hover:text-orange-600 border border-gray-300'}`}>
                {category === 'all' ? language === 'ID' ? 'Semua' : 'All' : category}
              </button>)}
          </div>
        </motion.div>

        {/* News List */}
        {loading ? <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600 mx-auto"></div>
          </div> : <>
            <motion.div initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          delay: 0.2
        }} className="bg-white rounded-lg shadow-lg p-6 md:p-8">
              {currentNews.length > 0 ? currentNews.map(article => <NewsListItem key={article.id} {...article} language={language} />) : <div className="text-center py-12">
                  <p className="text-gray-600">
                    {language === 'ID' ? 'Tidak ada berita ditemukan' : 'No news found'}
                  </p>
                </div>}
            </motion.div>

            {/* Pagination */}
            {totalPages > 1 && <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} language={language} />}

            {/* Results Info */}
            <div className="text-center text-sm text-gray-600 mt-4">
              {language === 'ID' ? `Menampilkan ${startIndex + 1}-${Math.min(endIndex, filteredNews.length)} dari ${filteredNews.length} berita` : `Showing ${startIndex + 1}-${Math.min(endIndex, filteredNews.length)} of ${filteredNews.length} news`}
            </div>
          </>}
      </div>
    </div>;
}