import { useState, useEffect } from 'react';
export interface MarketIndex {
  name: string;
  value: string;
  change: string;
  percent: string;
  trend: 'up' | 'down';
}
export interface CommodityPrice {
  name: string;
  price: string;
  change: string;
  percent: string;
  trend: 'up' | 'down';
  icon: string;
  color: string;
}
export function useMarketData() {
  const [indices, setIndices] = useState<MarketIndex[]>([{
    name: 'IHSG',
    value: '7,234.56',
    change: '+45.23',
    percent: '+0.63%',
    trend: 'up'
  }, {
    name: 'Dow Jones',
    value: '38,456.78',
    change: '-123.45',
    percent: '-0.32%',
    trend: 'down'
  }, {
    name: 'S&P 500',
    value: '5,123.45',
    change: '+23.12',
    percent: '+0.45%',
    trend: 'up'
  }, {
    name: 'NASDAQ',
    value: '16,234.89',
    change: '+89.34',
    percent: '+0.55%',
    trend: 'up'
  }, {
    name: 'Nikkei 225',
    value: '33,456.12',
    change: '-234.56',
    percent: '-0.70%',
    trend: 'down'
  }, {
    name: 'FTSE 100',
    value: '7,890.34',
    change: '+12.45',
    percent: '+0.16%',
    trend: 'up'
  }]);

  // Simulate real-time market updates
  useEffect(() => {
    const interval = setInterval(() => {
      setIndices(prev => prev.map(index => {
        const randomChange = (Math.random() - 0.5) * 100;
        const currentValue = parseFloat(index.value.replace(/,/g, ''));
        const newValue = currentValue + randomChange;
        const changeValue = randomChange;
        const percentChange = randomChange / currentValue * 100;
        return {
          ...index,
          value: newValue.toLocaleString('en-US', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
          }),
          change: `${changeValue >= 0 ? '+' : ''}${changeValue.toFixed(2)}`,
          percent: `${percentChange >= 0 ? '+' : ''}${percentChange.toFixed(2)}%`,
          trend: changeValue >= 0 ? 'up' : 'down'
        };
      }));
    }, 5000); // Update every 5 seconds

    return () => clearInterval(interval);
  }, []);
  return {
    indices
  };
}
export function useCommodityData() {
  const [commodities, setCommodities] = useState<CommodityPrice[]>([{
    name: 'Minyak Mentah WTI',
    price: '$78.45',
    change: '-$1.23',
    percent: '-1.54%',
    trend: 'down',
    icon: 'Droplet',
    color: 'text-blue-600'
  }, {
    name: 'Emas',
    price: '$2,045.30',
    change: '+$12.50',
    percent: '+0.61%',
    trend: 'up',
    icon: 'TrendingUp',
    color: 'text-yellow-600'
  }, {
    name: 'Perak',
    price: '$24.67',
    change: '+$0.34',
    percent: '+1.40%',
    trend: 'up',
    icon: 'TrendingUp',
    color: 'text-gray-500'
  }, {
    name: 'Gas Alam',
    price: '$2.89',
    change: '-$0.05',
    percent: '-1.70%',
    trend: 'down',
    icon: 'Zap',
    color: 'text-orange-600'
  }, {
    name: 'Gandum',
    price: '$645.25',
    change: '+$8.75',
    percent: '+1.38%',
    trend: 'up',
    icon: 'Wheat',
    color: 'text-amber-700'
  }, {
    name: 'Kopi',
    price: '$185.40',
    change: '-$2.10',
    percent: '-1.12%',
    trend: 'down',
    icon: 'Droplet',
    color: 'text-brown-600'
  }]);

  // Simulate real-time commodity updates
  useEffect(() => {
    const interval = setInterval(() => {
      setCommodities(prev => prev.map(commodity => {
        const randomChange = (Math.random() - 0.5) * 5;
        const currentPrice = parseFloat(commodity.price.replace(/[$,]/g, ''));
        const newPrice = currentPrice + randomChange;
        const percentChange = randomChange / currentPrice * 100;
        return {
          ...commodity,
          price: `$${newPrice.toFixed(2)}`,
          change: `${randomChange >= 0 ? '+$' : '-$'}${Math.abs(randomChange).toFixed(2)}`,
          percent: `${percentChange >= 0 ? '+' : ''}${percentChange.toFixed(2)}%`,
          trend: randomChange >= 0 ? 'up' : 'down'
        };
      }));
    }, 6000); // Update every 6 seconds

    return () => clearInterval(interval);
  }, []);
  return {
    commodities
  };
}
export function useEconomicData() {
  const [economicData, setEconomicData] = useState([{
    label: 'Inflasi (YoY)',
    value: '2.56%',
    change: '+0.12%',
    trend: 'up' as const
  }, {
    label: 'Suku Bunga BI',
    value: '6.00%',
    change: '0.00%',
    trend: 'neutral' as const
  }, {
    label: 'Pertumbuhan GDP',
    value: '5.17%',
    change: '+0.23%',
    trend: 'up' as const
  }, {
    label: 'Nilai Tukar USD/IDR',
    value: '15,845',
    change: '-45',
    trend: 'down' as const
  }]);

  // Simulate real-time economic data updates
  useEffect(() => {
    const interval = setInterval(() => {
      setEconomicData(prev => prev.map(item => {
        if (item.label === 'Suku Bunga BI') return item; // Keep interest rate stable

        const randomChange = (Math.random() - 0.5) * 0.1;
        const isPercentage = item.value.includes('%');
        const currentValue = parseFloat(item.value.replace(/[%,]/g, ''));
        const newValue = currentValue + randomChange;
        return {
          ...item,
          value: isPercentage ? `${newValue.toFixed(2)}%` : newValue.toLocaleString('en-US', {
            maximumFractionDigits: 0
          }),
          change: `${randomChange >= 0 ? '+' : ''}${isPercentage ? randomChange.toFixed(2) + '%' : randomChange.toFixed(0)}`,
          trend: randomChange > 0 ? 'up' : randomChange < 0 ? 'down' : 'neutral'
        };
      }));
    }, 8000); // Update every 8 seconds

    return () => clearInterval(interval);
  }, []);
  return {
    economicData
  };
}