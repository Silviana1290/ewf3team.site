import { useState, useEffect } from 'react';
import { fetchMarketData, MarketData } from '../services/api';
export function useMarketData(refreshInterval: number = 30000) {
  const [data, setData] = useState<MarketData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const marketData = await fetchMarketData();
        setData(marketData);
        setError(null);
      } catch (err) {
        setError('Failed to fetch market data');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    loadData();
    const interval = setInterval(loadData, refreshInterval);
    return () => clearInterval(interval);
  }, [refreshInterval]);
  return {
    data,
    loading,
    error
  };
}