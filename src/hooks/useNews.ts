import { useState, useEffect } from 'react';
import { fetchNews, NewsArticle } from '../services/api';
export function useNews(category?: string, limit?: number, refreshInterval: number = 60000) {
  const [news, setNews] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const loadNews = async () => {
      try {
        setLoading(true);
        const articles = await fetchNews(category, limit);
        setNews(articles);
        setError(null);
      } catch (err) {
        setError('Failed to fetch news');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    loadNews();
    const interval = setInterval(loadNews, refreshInterval);
    return () => clearInterval(interval);
  }, [category, limit, refreshInterval]);
  return {
    news,
    loading,
    error
  };
}