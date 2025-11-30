import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Clock, ExternalLink } from 'lucide-react';
interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  source: string;
  timestamp: string;
  imageUrl: string;
  category: string;
  originalUrl: string;
}
interface NewsModalProps {
  news: NewsArticle | null;
  onClose: () => void;
  language: 'ID' | 'EN';
}
export function NewsModal({
  news,
  onClose,
  language
}: NewsModalProps) {
  if (!news) return null;
  return <AnimatePresence>
      <motion.div initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} exit={{
      opacity: 0
    }} className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50" onClick={onClose}>
        <motion.div initial={{
        scale: 0.9,
        opacity: 0
      }} animate={{
        scale: 1,
        opacity: 1
      }} exit={{
        scale: 0.9,
        opacity: 0
      }} transition={{
        type: 'spring',
        duration: 0.5
      }} className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden" onClick={e => e.stopPropagation()}>
          <div className="relative h-64 sm:h-80">
            <img src={news.imageUrl} alt={news.title} className="w-full h-full object-cover" />
            <button onClick={onClose} className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors" aria-label="Close">
              <X className="w-6 h-6 text-gray-700" />
            </button>
            <div className="absolute bottom-4 left-4">
              <span className="px-3 py-1 text-sm font-semibold text-white bg-orange-600 rounded-full">
                {news.source}
              </span>
            </div>
          </div>

          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="px-3 py-1 bg-orange-100 text-orange-800 text-xs font-semibold rounded-full">
                {news.source}
              </span>
              <span className="text-sm text-gray-500">{news.timestamp}</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {news.title}
            </h2>
            <div className="prose max-w-none mb-6">
              <p className="text-gray-700 leading-relaxed">{news.content}</p>
            </div>

            {/* Read Original Article Button */}
            <a href={news.originalUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2 px-6 py-3 bg-orange-600 text-white font-medium rounded-lg hover:bg-orange-700 transition-colors">
              <span>
                {language === 'ID' ? 'Baca Artikel Asli' : 'Read Original Article'}
              </span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>;
}