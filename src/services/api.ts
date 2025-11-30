// API Service Layer for fetching real-time financial data
// In production, replace mock data with actual API calls to CNBC, Reuters, Investing.com, Trading Economics

export interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  source: 'CNBC' | 'Reuters' | 'Investing.com' | 'Trading Economics';
  timestamp: string;
  imageUrl: string;
  category: string;
  originalUrl: string;
  publishedAt: Date;
}
export interface MarketData {
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
  high: number;
  low: number;
  volume: number;
}
export interface EconomicEvent {
  id: string;
  date: Date;
  time: string;
  country: string;
  event: string;
  actual: string;
  forecast: string;
  previous: string;
  impact: 'high' | 'medium' | 'low';
}

// Simulate real-time updates by adding random fluctuations
const simulateMarketUpdate = (basePrice: number): number => {
  const fluctuation = (Math.random() - 0.5) * (basePrice * 0.002);
  return basePrice + fluctuation;
};

// Expanded mock news database with 50+ articles
const generateMockNews = (): NewsArticle[] => {
  const now = new Date();
  const sources: Array<'CNBC' | 'Reuters' | 'Investing.com' | 'Trading Economics'> = ['CNBC', 'Reuters', 'Investing.com', 'Trading Economics'];
  const newsDatabase: NewsArticle[] = [];

  // Generate 60 articles with varied dates
  for (let i = 0; i < 60; i++) {
    const hoursAgo = i * 2; // 2 hours apart
    const publishDate = new Date(now.getTime() - hoursAgo * 60 * 60 * 1000);
    const source = sources[i % sources.length];
    const categories = ['Market', 'Economy', 'Commodity', 'Fiscal & Monetary', 'Global'];
    const category = categories[i % categories.length];
    newsDatabase.push({
      id: `news-${i + 1}`,
      title: getArticleTitle(i, category),
      excerpt: getArticleExcerpt(i, category),
      content: getArticleContent(i, category),
      source,
      timestamp: formatTimestamp(hoursAgo),
      imageUrl: getImageUrl(category, i),
      category,
      originalUrl: getRealArticleUrl(source, category, i),
      publishedAt: publishDate
    });
  }
  return newsDatabase;
};
function getArticleTitle(index: number, category: string): string {
  const titles: Record<string, string[]> = {
    Market: ['Stock Markets Rally on Strong Economic Data', 'Tech Stocks Lead Market Gains Amid AI Boom', 'Wall Street Closes Higher on Fed Rate Hopes', 'Asian Markets Rise Following US Rally', 'European Stocks Gain on Corporate Earnings', 'Dow Jones Hits New Record High', 'S&P 500 Extends Winning Streak to Fifth Day', 'Nasdaq Surges on Tech Sector Strength', 'Global Markets React to Central Bank Decisions', 'Emerging Markets Attract Record Inflows'],
    Economy: ['US GDP Growth Exceeds Expectations at 3.2%', 'Unemployment Rate Falls to 3.5% in Latest Report', 'Consumer Confidence Index Reaches 5-Year High', 'Retail Sales Show Strong Holiday Season', 'Manufacturing PMI Indicates Expansion', 'Housing Starts Increase 8% Month-Over-Month', 'Trade Deficit Narrows as Exports Surge', 'Inflation Rate Moderates to 2.8%', 'Industrial Production Rises for Third Month', 'Consumer Spending Drives Economic Growth'],
    Commodity: ['Gold Prices Surge to New All-Time High', 'Oil Prices Rise on Supply Concerns', 'Copper Demand Increases Amid Infrastructure Boom', 'Natural Gas Prices Spike on Cold Weather', 'Silver Rallies Following Gold Gains', 'Agricultural Commodities Rise on Weather Concerns', 'Platinum Prices Reach 6-Month High', 'Coffee Prices Surge on Brazil Frost', 'Wheat Futures Jump on Export Demand', 'Crude Oil Inventory Decline Supports Prices'],
    'Fiscal & Monetary': ['Federal Reserve Holds Interest Rates Steady', 'ECB Signals End to Rate Hike Cycle', 'Bank of Japan Maintains Ultra-Loose Policy', 'Fed Chair Powell Discusses Inflation Outlook', 'Central Banks Coordinate on Currency Stability', 'Treasury Yields Fall on Rate Cut Expectations', 'Fed Minutes Reveal Dovish Sentiment', 'ECB President Lagarde Addresses Inflation', 'Bank of England Pauses Rate Increases', 'Fed Officials Signal Patience on Policy'],
    Global: ['China Economy Shows Signs of Recovery', 'European Union Announces New Trade Deal', 'India GDP Growth Leads Major Economies', 'Brazil Central Bank Cuts Interest Rates', 'UK Economy Avoids Recession', 'Japan Exports Rise for Fourth Month', 'Germany Manufacturing Output Increases', 'South Korea Tech Exports Surge', 'Australia Employment Data Beats Forecast', 'Canada Housing Market Stabilizes']
  };
  const categoryTitles = titles[category] || titles.Market;
  return categoryTitles[index % categoryTitles.length];
}
function getArticleExcerpt(index: number, category: string): string {
  const excerpts: Record<string, string[]> = {
    Market: ['Stock markets rallied today as investors digested positive economic data and corporate earnings reports.', 'Technology stocks led market gains as artificial intelligence developments continue to drive investor enthusiasm.', 'Major indices closed higher as Federal Reserve officials hinted at potential rate cuts in the coming months.', 'Asian equity markets rose following strong performance on Wall Street and positive regional economic data.', 'European stocks advanced as corporate earnings exceeded expectations and economic indicators improved.'],
    Economy: ['The US economy expanded at a faster pace than anticipated, driven by strong consumer spending and business investment.', 'The unemployment rate declined to its lowest level in decades as employers added more jobs than expected.', 'Consumer confidence reached a five-year high as Americans expressed optimism about the economic outlook.', 'Retail sales data showed robust consumer spending during the holiday season, exceeding analyst forecasts.', 'Manufacturing activity expanded for the third consecutive month, indicating continued economic strength.'],
    Commodity: ['Gold prices reached a new record high as investors sought safe-haven assets amid economic uncertainty.', 'Oil prices climbed on concerns about supply disruptions and strong demand from major economies.', 'Copper prices rose as infrastructure spending and electric vehicle production boosted demand.', 'Natural gas prices spiked as cold weather increased heating demand across major consuming regions.', 'Silver prices rallied in tandem with gold as precious metals attracted strong investment flows.'],
    'Fiscal & Monetary': ['The Federal Reserve maintained its benchmark interest rate as officials assessed the economic outlook.', 'The European Central Bank signaled that its rate hiking cycle may be coming to an end.', 'The Bank of Japan kept its ultra-loose monetary policy unchanged despite rising inflation pressures.', "Fed Chair Jerome Powell discussed the central bank's approach to managing inflation and supporting growth.", 'Major central banks coordinated efforts to maintain currency stability in global markets.'],
    Global: ["China's economy showed signs of recovery as government stimulus measures began to take effect.", 'The European Union announced a comprehensive trade agreement with major Asian economies.', "India's GDP growth outpaced other major economies, driven by strong domestic demand.", "Brazil's central bank reduced interest rates as inflation pressures eased.", 'The UK economy avoided a technical recession with positive growth in the latest quarter.']
  };
  const categoryExcerpts = excerpts[category] || excerpts.Market;
  return categoryExcerpts[index % categoryExcerpts.length];
}
function getArticleContent(index: number, category: string): string {
  return `This is a comprehensive article about ${category.toLowerCase()} developments. The situation continues to evolve as market participants assess the implications of recent events.\n\nExperts suggest that multiple factors are contributing to the current market dynamics, including monetary policy decisions, economic data releases, and geopolitical developments. Investors are closely monitoring these trends to adjust their strategies accordingly.\n\nAnalysts recommend maintaining a diversified portfolio and staying informed about market developments. The outlook remains cautiously optimistic as economic indicators suggest continued growth, though risks remain.\n\nMarket participants should continue to monitor official announcements and economic data releases for further guidance on market direction and investment opportunities.`;
}
function getImageUrl(category: string, index: number): string {
  // Use real news-related images from Unsplash
  const images: Record<string, string[]> = {
    Market: ['https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=600&fit=crop',
    // Stock market
    'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800&h=600&fit=crop',
    // Trading floor
    'https://images.unsplash.com/photo-1535320903710-d993d3d77d29?w=800&h=600&fit=crop',
    // Charts
    'https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=800&h=600&fit=crop',
    // Bull market
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop' // Analytics
    ],
    Economy: ['https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&h=600&fit=crop',
    // Currency
    'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&h=600&fit=crop',
    // Economy
    'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop',
    // Business
    'https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?w=800&h=600&fit=crop',
    // Growth
    'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&h=600&fit=crop' // Data
    ],
    Commodity: ['https://images.unsplash.com/photo-1610375461246-83df859d849d?w=800&h=600&fit=crop',
    // Gold
    'https://images.unsplash.com/photo-1564514239975-0d0b9e2d1f6f?w=800&h=600&fit=crop',
    // Oil
    'https://images.unsplash.com/photo-1569025690938-a00729c9e1f9?w=800&h=600&fit=crop',
    // Copper
    'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&h=600&fit=crop',
    // Silver
    'https://images.unsplash.com/photo-1560493676-04071c5f467b?w=800&h=600&fit=crop' // Agriculture
    ],
    'Fiscal & Monetary': ['https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=600&fit=crop',
    // Federal Reserve
    'https://images.unsplash.com/photo-1541354329998-f4d9a9f9297f?w=800&h=600&fit=crop',
    // Central Bank
    'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop',
    // Policy
    'https://images.unsplash.com/photo-1434626881859-194d67b2b86f?w=800&h=600&fit=crop',
    // Finance
    'https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?w=800&h=600&fit=crop' // Banking
    ],
    Global: ['https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&h=600&fit=crop',
    // Global economy
    'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop',
    // World
    'https://images.unsplash.com/photo-1569025690938-a00729c9e1f9?w=800&h=600&fit=crop',
    // International
    'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop',
    // Technology
    'https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?w=800&h=600&fit=crop' // Flags
    ]
  };
  const categoryImages = images[category] || images.Market;
  return categoryImages[index % categoryImages.length];
}
function getRealArticleUrl(source: string, category: string, index: number): string {
  // Generate realistic article URLs for each source
  const baseUrls: Record<string, string> = {
    CNBC: 'https://www.cnbc.com',
    Reuters: 'https://www.reuters.com',
    'Investing.com': 'https://www.investing.com',
    'Trading Economics': 'https://tradingeconomics.com'
  };
  const slugs: Record<string, string[]> = {
    Market: ['stock-markets', 'equities', 'trading', 'market-update', 'indices'],
    Economy: ['economy', 'gdp', 'employment', 'economic-data', 'growth'],
    Commodity: ['commodities', 'gold', 'oil', 'metals', 'energy'],
    'Fiscal & Monetary': ['federal-reserve', 'central-bank', 'monetary-policy', 'interest-rates', 'fed'],
    Global: ['global-markets', 'international', 'world-economy', 'asia', 'europe']
  };
  const baseUrl = baseUrls[source] || baseUrls['CNBC'];
  const categorySlug = slugs[category] || slugs.Market;
  const slug = categorySlug[index % categorySlug.length];
  return `${baseUrl}/${slug}-${Date.now() - index * 3600000}`;
}
function formatTimestamp(hoursAgo: number): string {
  if (hoursAgo < 1) return 'Just now';
  if (hoursAgo < 24) return `${Math.floor(hoursAgo)} hours ago`;
  const daysAgo = Math.floor(hoursAgo / 24);
  if (daysAgo === 1) return '1 day ago';
  return `${daysAgo} days ago`;
}

// Cache for news data
let newsCache: NewsArticle[] = [];
let lastFetchTime = 0;
const CACHE_DURATION = 60000; // 1 minute

// Mock market data with live updates
let marketDataCache: MarketData[] = [{
  symbol: 'DJI',
  name: 'Dow Jones',
  price: 47716.42,
  change: 289.30,
  changePercent: 0.61,
  high: 47750.77,
  low: 47475.61,
  volume: 345678900
}, {
  symbol: 'SPX',
  name: 'S&P 500',
  price: 4456.78,
  change: -12.34,
  changePercent: -0.28,
  high: 4478.9,
  low: 4445.67,
  volume: 234567800
}, {
  symbol: 'IXIC',
  name: 'Nasdaq',
  price: 23365.69,
  change: 151.00,
  changePercent: 0.65,
  high: 23365.79,
  low: 23250.51,
  volume: 456789000
}, {
  symbol: 'FTSE',
  name: 'FTSE 100',
  price: 9720.51,
  change: 26.58,
  changePercent: 0.27,
  high: 9740.24,
  low: 9693.95,
  volume: 123456700
}, {
  symbol: 'N225',
  name: 'Nikkei 225',
  price: 50253.91,
  change: 86.81,
  changePercent: 0.17,
  high: 50258.25,
  low: 49989.54,
  volume: 234567800
}, {
  symbol: 'HSI',
  name: 'Hang Seng',
  price: 25858.89,
  change: -87.04,
  changePercent: -0.34,
  high: 26001.06,
  low: 25807.55,
  volume: 345678900
}, {
  symbol: 'GOLD',
  name: 'Gold',
  price: 4170.41,
  change: 0.45,
  changePercent: 0.01,
  high: 4171.60,
  low: 4168.96,
  volume: 123456
}];

// API Functions
export const fetchNews = async (category?: string, limit?: number): Promise<NewsArticle[]> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 300));

  // Use cache if available and fresh
  const now = Date.now();
  if (newsCache.length === 0 || now - lastFetchTime > CACHE_DURATION) {
    newsCache = generateMockNews();
    lastFetchTime = now;
  }
  let news = [...newsCache];
  if (category) {
    news = news.filter(article => article.category.toLowerCase().includes(category.toLowerCase()));
  }

  // Sort by date (newest first)
  news.sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime());
  if (limit) {
    news = news.slice(0, limit);
  }
  return news;
};
export const fetchMarketData = async (): Promise<MarketData[]> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 300));

  // Update prices with small fluctuations
  marketDataCache = marketDataCache.map(item => {
    const newPrice = simulateMarketUpdate(item.price);
    const change = newPrice - item.price;
    const changePercent = change / item.price * 100;
    return {
      ...item,
      price: newPrice,
      change: item.change + change,
      changePercent: item.changePercent + changePercent
    };
  });
  return marketDataCache;
};
export const fetchEconomicCalendar = async (): Promise<EconomicEvent[]> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 400));
  const now = new Date();
  return [{
    id: '1',
    date: now,
    time: '08:30',
    country: 'US',
    event: 'Non-Farm Payrolls',
    actual: '216K',
    forecast: '170K',
    previous: '150K',
    impact: 'high'
  }, {
    id: '2',
    date: new Date(now.getTime() + 24 * 60 * 60 * 1000),
    time: '14:00',
    country: 'US',
    event: 'FOMC Meeting',
    actual: '-',
    forecast: '-',
    previous: '-',
    impact: 'high'
  }, {
    id: '3',
    date: new Date(now.getTime() + 2 * 24 * 60 * 60 * 1000),
    time: '10:00',
    country: 'EU',
    event: 'ECB Interest Rate Decision',
    actual: '-',
    forecast: '4.50%',
    previous: '4.50%',
    impact: 'high'
  }];
};
export const searchNews = async (query: string): Promise<NewsArticle[]> => {
  await new Promise(resolve => setTimeout(resolve, 300));
  const allNews = generateMockNews();
  return allNews.filter(article => article.title.toLowerCase().includes(query.toLowerCase()) || article.excerpt.toLowerCase().includes(query.toLowerCase()));
};
