import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { useMarketData } from '../hooks/useMarketData';
interface MarketData {
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
}
const mockMarketData: MarketData[] = [{
  symbol: 'DJI',
  name: 'Dow Jones',
  price: 34567.89,
  change: 234.56,
  changePercent: 0.68
}, {
  symbol: 'SPX',
  name: 'S&P 500',
  price: 4456.78,
  change: -12.34,
  changePercent: -0.28
}, {
  symbol: 'IXIC',
  name: 'Nasdaq',
  price: 13789.45,
  change: 89.23,
  changePercent: 0.65
}, {
  symbol: 'FTSE',
  name: 'FTSE 100',
  price: 7654.32,
  change: 45.67,
  changePercent: 0.6
}, {
  symbol: 'N225',
  name: 'Nikkei 225',
  price: 28456.78,
  change: -123.45,
  changePercent: -0.43
}, {
  symbol: 'HSI',
  name: 'Hang Seng',
  price: 19876.54,
  change: 234.56,
  changePercent: 1.19
}, {
  symbol: 'GOLD',
  name: 'Gold',
  price: 1987.65,
  change: 12.34,
  changePercent: 0.62
}, {
  symbol: 'OIL',
  name: 'Crude Oil',
  price: 78.45,
  change: -1.23,
  changePercent: -1.54
}];
export function MarketTicker() {
  const {
    data: marketData
  } = useMarketData(10000); // Update every 10 seconds
  const duplicatedData = [...marketData, ...marketData];
  return <div className="bg-white border-b border-gray-200 py-4 overflow-hidden">
      <div className="relative">
        <motion.div className="flex space-x-8" animate={{
        x: [0, -50 * marketData.length]
      }} transition={{
        x: {
          repeat: Infinity,
          repeatType: 'loop',
          duration: 30,
          ease: 'linear'
        }
      }}>
          {duplicatedData.map((item, index) => <div key={`${item.symbol}-${index}`} className="flex items-center space-x-3 px-4 py-2 bg-gray-50 rounded-lg flex-shrink-0">
              <div>
                <div className="text-xs font-medium text-gray-500">
                  {item.symbol}
                </div>
                <div className="text-sm font-bold text-gray-900">
                  {item.price.toFixed(2)}
                </div>
              </div>
              <div className={`flex items-center space-x-1 ${item.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                {item.change >= 0 ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                <div className="text-sm font-semibold">
                  {item.changePercent >= 0 ? '+' : ''}
                  {item.changePercent.toFixed(2)}%
                </div>
              </div>
            </div>)}
        </motion.div>
      </div>
    </div>;
}