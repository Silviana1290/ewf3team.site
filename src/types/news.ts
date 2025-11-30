export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  source: 'CNBC' | 'Investing.com' | 'Reuters' | 'Trading Economics' | 'EWF Pro';
  category: 'Market' | 'Economy' | 'Commodity' | 'Global' | 'Fiscal' | 'Monetary';
  timestamp: string; // ISO string
  imageUrl: string;
  url?: string;
}
export interface MarketFact {
  id: string;
  title: string;
  date: string;
  url: string;
}
export interface EconomicIndicator {
  name: string;
  definition: string;
  effectUSD: string;
  effectGold: string;
}