import { useState, useEffect, useCallback } from 'react';
import { NewsItem } from '../types/news';
export function useNewsNotifications(news: NewsItem[]) {
  const [newNewsCount, setNewNewsCount] = useState(0);
  const [lastNewsIds, setLastNewsIds] = useState<Set<string>>(new Set());
  const [showNotification, setShowNotification] = useState(false);
  useEffect(() => {
    // Initialize with current news IDs
    if (lastNewsIds.size === 0) {
      setLastNewsIds(new Set(news.map(n => n.id)));
      return;
    }

    // Check for new news
    const currentIds = new Set(news.map(n => n.id));
    const newIds = news.filter(n => !lastNewsIds.has(n.id));
    if (newIds.length > 0) {
      setNewNewsCount(prev => prev + newIds.length);
      setShowNotification(true);
      setLastNewsIds(currentIds);

      // Auto-hide notification after 5 seconds
      const timer = setTimeout(() => {
        setShowNotification(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [news, lastNewsIds]);
  const dismissNotification = useCallback(() => {
    setShowNotification(false);
    setNewNewsCount(0);
  }, []);
  const refreshNews = useCallback(() => {
    setNewNewsCount(0);
    setShowNotification(false);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);
  return {
    newNewsCount,
    showNotification,
    dismissNotification,
    refreshNews
  };
}