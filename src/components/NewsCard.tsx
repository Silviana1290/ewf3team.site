import React from 'react';
import { NewsItem } from '../types/news';
import { Calendar, Tag } from 'lucide-react';
interface NewsCardProps {
  news: NewsItem;
  variant?: 'default' | 'compact' | 'featured';
}
export function NewsCard({
  news,
  variant = 'default'
}: NewsCardProps) {
  const formattedDate = new Date(news.timestamp).toLocaleDateString('id-ID', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
  if (variant === 'featured') {
    return <div className="group cursor-pointer relative overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-shadow bg-white border border-gray-100">
        <div className="relative h-64 md:h-96 overflow-hidden">
          <img src={news.imageUrl} alt={news.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
          <div className="absolute bottom-0 left-0 p-6 text-white">
            <span className="inline-block px-3 py-1 bg-[#FF6B00] text-xs font-bold uppercase tracking-wider mb-3 rounded-sm">
              {news.category}
            </span>
            <h2 className="text-2xl md:text-3xl font-bold mb-2 leading-tight group-hover:text-[#FF6B00] transition-colors">
              {news.title}
            </h2>
            <p className="text-gray-200 line-clamp-2 mb-4 text-sm md:text-base">
              {news.excerpt}
            </p>
            <div className="flex items-center text-xs text-gray-300 gap-4">
              <span className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {formattedDate}
              </span>
              <span className="font-semibold text-[#FF6B00]">
                {news.source}
              </span>
            </div>
          </div>
        </div>
      </div>;
  }
  if (variant === 'compact') {
    return <div className="group cursor-pointer flex gap-4 items-start py-4 border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors p-2 rounded-md">
        <div className="w-24 h-24 flex-shrink-0 overflow-hidden rounded-md">
          <img src={news.imageUrl} alt={news.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[10px] font-bold text-[#FF6B00] uppercase border border-[#FF6B00] px-1 rounded-sm">
              {news.category}
            </span>
            <span className="text-[10px] text-gray-400 flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              {formattedDate}
            </span>
          </div>
          <h3 className="text-sm font-bold text-gray-900 leading-snug mb-1 group-hover:text-[#FF6B00] transition-colors line-clamp-2">
            {news.title}
          </h3>
        </div>
      </div>;
  }
  return <div className="group cursor-pointer bg-white rounded-lg overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300 h-full flex flex-col">
      <div className="h-48 overflow-hidden relative">
        <img src={news.imageUrl} alt={news.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
        <div className="absolute top-3 left-3">
          <span className="px-2 py-1 bg-black/70 text-white text-xs font-bold uppercase rounded-sm backdrop-blur-sm">
            {news.category}
          </span>
        </div>
      </div>
      <div className="p-4 flex-1 flex flex-col">
        <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
          <Calendar className="w-3 h-3" />
          <span>{formattedDate}</span>
        </div>
        <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight group-hover:text-[#FF6B00] transition-colors">
          {news.title}
        </h3>
        <p className="text-gray-600 text-sm line-clamp-3 mb-4 flex-1">
          {news.excerpt}
        </p>
        <div className="mt-auto pt-3 border-t border-gray-100 flex justify-between items-center">
          <span className="text-xs font-semibold text-gray-400 uppercase">
            {news.source}
          </span>
          <span className="text-xs font-bold text-[#FF6B00] group-hover:translate-x-1 transition-transform">
            Read More →
          </span>
        </div>
      </div>
    </div>;
}