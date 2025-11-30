import React from 'react';
import { NewsItem } from '../types/news';
import { Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
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
    return <motion.div initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} whileHover={{
      y: -5
    }} transition={{
      duration: 0.3
    }} className="group cursor-pointer relative overflow-hidden rounded-lg shadow-sm hover:shadow-xl transition-all bg-white border border-gray-100">
        <div className="relative h-64 md:h-96 overflow-hidden">
          <motion.img src={news.imageUrl} alt={news.title} className="w-full h-full object-cover" whileHover={{
          scale: 1.05
        }} transition={{
          duration: 0.5
        }} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
          <div className="absolute bottom-0 left-0 p-6 text-white">
            <motion.span whileHover={{
            scale: 1.05
          }} className="inline-block px-3 py-1 bg-[#FF6B00] text-xs font-bold uppercase tracking-wider mb-3 rounded-sm cursor-pointer">
              {news.category}
            </motion.span>
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
      </motion.div>;
  }
  if (variant === 'compact') {
    return <motion.div initial={{
      opacity: 0,
      x: -20
    }} animate={{
      opacity: 1,
      x: 0
    }} whileHover={{
      x: 5,
      backgroundColor: '#f9fafb'
    }} transition={{
      duration: 0.2
    }} className="group cursor-pointer flex gap-4 items-start py-4 border-b border-gray-100 last:border-0 p-2 rounded-md">
        <div className="w-24 h-24 flex-shrink-0 overflow-hidden rounded-md">
          <motion.img src={news.imageUrl} alt={news.title} className="w-full h-full object-cover" whileHover={{
          scale: 1.1
        }} transition={{
          duration: 0.3
        }} />
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
      </motion.div>;
  }
  return <motion.div initial={{
    opacity: 0,
    y: 20
  }} animate={{
    opacity: 1,
    y: 0
  }} whileHover={{
    y: -5,
    boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)'
  }} transition={{
    duration: 0.3
  }} className="group cursor-pointer bg-white rounded-lg overflow-hidden border border-gray-100 h-full flex flex-col">
      <div className="h-48 overflow-hidden relative">
        <motion.img src={news.imageUrl} alt={news.title} className="w-full h-full object-cover" whileHover={{
        scale: 1.1
      }} transition={{
        duration: 0.5
      }} />
        <div className="absolute top-3 left-3">
          <motion.span whileHover={{
          scale: 1.05
        }} className="px-2 py-1 bg-black/70 text-white text-xs font-bold uppercase rounded-sm backdrop-blur-sm">
            {news.category}
          </motion.span>
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
          <motion.span whileHover={{
          x: 5
        }} className="text-xs font-bold text-[#FF6B00]">
            Read More →
          </motion.span>
        </div>
      </div>
    </motion.div>;
}