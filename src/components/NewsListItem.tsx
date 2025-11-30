import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';
interface NewsListItemProps {
  id: string;
  title: string;
  excerpt: string;
  source: string;
  category: string;
  publishedAt: Date;
  language: 'ID' | 'EN';
}
export function NewsListItem({
  id,
  title,
  excerpt,
  source,
  category,
  publishedAt,
  language
}: NewsListItemProps) {
  return <motion.article initial={{
    opacity: 0,
    y: 20
  }} animate={{
    opacity: 1,
    y: 0
  }} className="border-b border-gray-200 pb-6 mb-6 last:border-0">
      <Link to={`/article/${id}`} className="group">
        <h2 className="text-xl md:text-2xl font-bold text-orange-600 hover:text-orange-700 transition-colors mb-3">
          {title}
        </h2>
      </Link>

      <div className="flex flex-wrap items-center gap-3 text-sm mb-3">
        <div className="flex items-center space-x-2 text-gray-600">
          <Clock className="w-4 h-4" />
          <span>
            {publishedAt.toLocaleDateString(language === 'ID' ? 'id-ID' : 'en-US', {
            weekday: 'long',
            day: 'numeric',
            month: 'long',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
          })}{' '}
            WIB
          </span>
        </div>
        <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full font-semibold text-xs">
          {category}
        </span>
      </div>

      <p className="text-gray-700 leading-relaxed mb-4">{excerpt}</p>

      <Link to={`/article/${id}`} className="inline-block px-6 py-2 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded transition-colors">
        {language === 'ID' ? 'Read More' : 'Read More'}
      </Link>
    </motion.article>;
}