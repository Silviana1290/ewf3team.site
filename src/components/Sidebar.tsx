import React from 'react';
import { useRealTimeNews } from '../hooks/useRealTimeNews';
import { NewsCard } from './NewsCard';
import { FileText, TrendingUp } from 'lucide-react';
export function Sidebar() {
  const {
    news
  } = useRealTimeNews();
  const popularNews = news.slice(0, 5);
  const marketFacts = [{
    title: 'UJ1010_BBJ & UJ10F_BBJ Overview (23-Juli-2024)',
    url: '#'
  }, {
    title: 'UC1010_BBJ & UC10F_BBJ Overview (23-Juli-2024)',
    url: '#'
  }, {
    title: 'GU1010_BBJ & GU10F_BBJ Overview (23-Juli-2024)',
    url: '#'
  }, {
    title: 'EU1010_BBJ & EU10F_BBJ Overview (23-Juli-2024)',
    url: '#'
  }, {
    title: 'A1010_BBJ & AU10F_BBUJ Overview (23-Juli-2024)',
    url: '#'
  }, {
    title: 'JPK50_BBJ & JPK5U_BBJ Overview (23-Juli-2024)',
    url: '#'
  }, {
    title: 'HKK50_BBJ & HKK5U_BBJ Overview (23-Juli-2024)',
    url: '#'
  }, {
    title: 'XAG & XAGF Overview (23-Juli-2024)',
    url: '#'
  }];
  return <div className="space-y-8">
      {/* Popular News Widget */}
      <div className="bg-black text-white rounded-t-lg overflow-hidden">
        <div className="bg-black p-4 border-b border-gray-800">
          <h3 className="font-bold text-lg uppercase tracking-wider border-l-4 border-[#FF6B00] pl-3">
            Popular News
          </h3>
        </div>
        <div className="bg-white text-black p-2 rounded-b-lg border border-gray-200 border-t-0">
          {popularNews.map(item => <NewsCard key={item.id} news={item} variant="compact" />)}
        </div>
      </div>

      {/* Market Facts Widget */}
      <div className="bg-black text-white rounded-t-lg overflow-hidden">
        <div className="bg-black p-4 border-b border-gray-800">
          <h3 className="font-bold text-lg uppercase tracking-wider border-l-4 border-[#FF6B00] pl-3">
            Market Facts
          </h3>
        </div>
        <div className="bg-white text-black p-4 rounded-b-lg border border-gray-200 border-t-0 bg-gradient-to-br from-gray-50 to-gray-100">
          <ul className="space-y-3">
            {marketFacts.map((fact, idx) => <li key={idx}>
                <a href={fact.url} className="flex items-start gap-2 group text-sm text-blue-600 hover:text-[#FF6B00] transition-colors">
                  <FileText className="w-4 h-4 mt-0.5 flex-shrink-0 text-gray-400 group-hover:text-[#FF6B00]" />
                  <span className="leading-snug">{fact.title}</span>
                </a>
              </li>)}
          </ul>
        </div>
      </div>

      {/* Ad Placeholder */}
      <div className="bg-gray-100 h-64 rounded-lg flex items-center justify-center border border-gray-200">
        <div className="text-center text-gray-400">
          <TrendingUp className="w-12 h-12 mx-auto mb-2 opacity-50" />
          <span className="text-sm font-medium">Advertisement Space</span>
        </div>
      </div>
    </div>;
}