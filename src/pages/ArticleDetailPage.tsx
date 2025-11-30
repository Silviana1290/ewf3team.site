import React, { useEffect, useState, Component } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, Tag, Share2, Facebook, Twitter } from 'lucide-react';
import { NewsArticle, fetchNews } from '../services/api';
interface ArticleDetailPageProps {
  language: 'ID' | 'EN';
}
export function ArticleDetailPage({
  language
}: ArticleDetailPageProps) {
  const {
    id
  } = useParams<{
    id: string;
  }>();
  const [article, setArticle] = useState<NewsArticle | null>(null);
  const [relatedNews, setRelatedNews] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const loadArticle = async () => {
      setLoading(true);
      const news = await fetchNews();
      const found = news.find(n => n.id === id);
      if (found) {
        setArticle(found);
        // Get related news from same category
        const related = news.filter(n => n.id !== id && n.category === found.category).slice(0, 3);
        setRelatedNews(related);
      }
      setLoading(false);
    };
    loadArticle();
  }, [id]);
  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600"></div>
      </div>;
  }
  if (!article) {
    return <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            {language === 'ID' ? 'Artikel Tidak Ditemukan' : 'Article Not Found'}
          </h2>
          <Link to="/" className="text-orange-600 hover:text-orange-700">
            {language === 'ID' ? 'Kembali ke Beranda' : 'Back to Home'}
          </Link>
        </div>
      </div>;
  }
  const tags = ['Consumer Confidence', 'manufaktur', 'Mata Uang Jepang', 'perumahan', 'Ekonomi Inggris', 'Saham HongKong', 'Home', 'Brazil', 'BOE', 'Ekonomi Perancis', 'Kanada', 'Minyak jenis Brent', 'PMI U.K.', 'Stocks', 'GDP Jepang', "Standard & Poor's 500"];
  const shareUrl = window.location.href;
  const shareText = article.title;
  function getSourceUrl(source: string): string {
    const sourceUrls: Record<string, string> = {
      CNBC: 'https://www.cnbc.com',
      Reuters: 'https://www.reuters.com',
      'Investing.com': 'https://www.investing.com',
      'Trading Economics': 'https://tradingeconomics.com'
    };
    return sourceUrls[source] || 'https://www.cnbc.com';
  }
  return <div className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <motion.nav initial={{
        opacity: 0,
        y: -10
      }} animate={{
        opacity: 1,
        y: 0
      }} className="mb-6">
          <ol className="flex items-center space-x-2 text-sm">
            <li>
              <Link to="/" className="text-blue-600 hover:text-blue-700">
                Home
              </Link>
            </li>
            <li className="text-gray-400">→</li>
            <li>
              <Link to={`/${article.category.toLowerCase()}`} className="text-blue-600 hover:text-blue-700">
                {article.category}
              </Link>
            </li>
            <li className="text-gray-400">→</li>
            <li className="text-gray-600 truncate max-w-md">{article.title}</li>
          </ol>
        </motion.nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <motion.article initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} className="bg-white rounded-lg shadow-lg overflow-hidden">
              {/* Article Header */}
              <div className="p-6 border-b border-gray-200">
                <h1 className="text-3xl md:text-4xl font-bold text-blue-600 mb-4">
                  {article.title}
                </h1>

                {/* Meta Info */}
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>
                      {article.publishedAt.toLocaleDateString(language === 'ID' ? 'id-ID' : 'en-US', {
                      weekday: 'long',
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit'
                    })}{' '}
                      WIB
                    </span>
                  </div>
                  <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full font-semibold uppercase text-xs">
                    {article.category}
                  </span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full font-semibold text-xs">
                    {article.source}
                  </span>
                </div>

                {/* Social Share */}
                <div className="flex items-center space-x-3">
                  <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
                    <Twitter className="w-4 h-4" />
                    <span>Post</span>
                  </a>
                  <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    <Facebook className="w-4 h-4" />
                    <span>Share</span>
                  </a>
                </div>
              </div>

              {/* Article Image */}
              <div className="relative h-96">
                <img src={article.imageUrl} alt={article.title} className="w-full h-full object-cover" />
              </div>

              {/* Article Content */}
              <div className="p-6">
                <div className="prose max-w-none">
                  <p className="text-lg leading-relaxed text-gray-800 mb-6">
                    {article.excerpt}
                  </p>
                  <div className="text-gray-700 leading-relaxed space-y-4">
                    {article.content.split('\n\n').map((paragraph, index) => <p key={index}>{paragraph}</p>)}
                  </div>
                </div>

                {/* Source - Now Clickable */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <p className="text-sm text-gray-600">
                    {language === 'ID' ? 'Sumber:' : 'Source:'}{' '}
                    <a href={getSourceUrl(article.source)} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-orange-600 font-semibold transition-colors underline">
                      {article.source}
                    </a>
                  </p>
                  <a href={article.originalUrl} target="_blank" rel="noopener noreferrer" className="inline-block mt-3 text-sm text-orange-600 hover:text-orange-700 font-medium transition-colors">
                    {language === 'ID' ? '→ Baca artikel lengkap di ' : '→ Read full article on '}
                    {article.source}
                  </a>
                </div>
              </div>
            </motion.article>

            {/* Related News Section */}
            {relatedNews.length > 0 && <motion.section initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.2
          }} className="mt-8">
                <div className="bg-orange-600 text-white px-6 py-3 rounded-t-lg">
                  <h2 className="text-xl font-bold">
                    {language === 'ID' ? 'BERITA TERKAIT' : 'RELATED NEWS'}
                  </h2>
                </div>
                <div className="bg-white rounded-b-lg shadow-lg p-6 space-y-4">
                  {relatedNews.map(news => <Link key={news.id} to={`/article/${news.id}`} className="block group">
                      <div className="border-b border-gray-200 pb-4 last:border-0">
                        <h3 className="text-blue-600 hover:text-orange-600 font-semibold mb-2 transition-colors">
                          {news.title}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {news.publishedAt.toLocaleDateString(language === 'ID' ? 'id-ID' : 'en-US', {
                      weekday: 'long',
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit'
                    })}{' '}
                          WIB
                        </p>
                      </div>
                    </Link>)}
                </div>
              </motion.section>}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Tag Cloud */}
            <motion.div initial={{
            opacity: 0,
            x: 20
          }} animate={{
            opacity: 1,
            x: 0
          }} className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex flex-wrap gap-2">
                {tags.map((tag, index) => <motion.button key={tag} initial={{
                opacity: 0,
                scale: 0.8
              }} animate={{
                opacity: 1,
                scale: 1
              }} transition={{
                delay: index * 0.05
              }} className="px-3 py-1 border border-orange-600 text-orange-600 rounded hover:bg-orange-600 hover:text-white transition-colors text-sm">
                    {tag}
                  </motion.button>)}
              </div>
            </motion.div>

            {/* Category Section */}
            <motion.div initial={{
            opacity: 0,
            x: 20
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            delay: 0.1
          }} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-black text-white px-6 py-3">
                <h2 className="text-xl font-bold">
                  {article.category.toUpperCase()}
                </h2>
              </div>
              <div className="p-6">
                {relatedNews.slice(0, 2).map(news => <Link key={news.id} to={`/article/${news.id}`} className="block mb-6 last:mb-0 group">
                    <h3 className="text-blue-600 hover:text-orange-600 font-semibold mb-2 transition-colors">
                      {news.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-2">
                      {news.publishedAt.toLocaleDateString(language === 'ID' ? 'id-ID' : 'en-US', {
                    weekday: 'long',
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                  })}{' '}
                      WIB
                    </p>
                    {news.imageUrl && <img src={news.imageUrl} alt={news.title} className="w-full h-32 object-cover rounded" />}
                    <p className="text-sm text-gray-700 mt-2 line-clamp-2">
                      {news.excerpt}
                    </p>
                  </Link>)}
              </div>
            </motion.div>

            {/* Latest News */}
            <motion.div initial={{
            opacity: 0,
            x: 20
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            delay: 0.2
          }} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-black text-white px-6 py-3">
                <h2 className="text-xl font-bold">
                  {language === 'ID' ? 'BERITA TERBARU' : 'LATEST NEWS'}
                </h2>
              </div>
              <div className="p-6 space-y-4">
                {relatedNews.map(news => <Link key={news.id} to={`/article/${news.id}`} className="block group">
                    <h3 className="text-orange-600 hover:text-orange-700 font-semibold mb-1 transition-colors">
                      {news.title}
                    </h3>
                    <p className="text-sm text-gray-700 line-clamp-2">
                      {news.excerpt}
                    </p>
                  </Link>)}
              </div>
            </motion.div>

            {/* Popular News */}
            <motion.div initial={{
            opacity: 0,
            x: 20
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            delay: 0.3
          }} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-black text-white px-6 py-3">
                <h2 className="text-xl font-bold">
                  {language === 'ID' ? 'BERITA POPULER' : 'POPULAR NEWS'}
                </h2>
              </div>
              <div className="p-6 space-y-4">
                {relatedNews.map(news => <Link key={news.id} to={`/article/${news.id}`} className="block group">
                    <div className="flex space-x-3">
                      {news.imageUrl && <img src={news.imageUrl} alt={news.title} className="w-20 h-20 object-cover rounded flex-shrink-0" />}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-semibold text-gray-900 group-hover:text-orange-600 transition-colors line-clamp-2 mb-1">
                          {news.title}
                        </h3>
                        <p className="text-xs text-gray-600">
                          {news.publishedAt.toLocaleDateString(language === 'ID' ? 'id-ID' : 'en-US', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric'
                      })}
                        </p>
                      </div>
                    </div>
                  </Link>)}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>;
}