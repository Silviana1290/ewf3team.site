import React from 'react';
import { motion } from 'framer-motion';
import { Clock, ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
interface NewsCardProps {
  id: string;
  title: string;
  excerpt: string;
  source: string;
  timestamp: string;
  imageUrl: string;
  category: string;
  onClick?: () => void;
}
export function NewsCard({
  id,
  title,
  excerpt,
  source,
  timestamp,
  imageUrl,
  category,
  onClick
}: NewsCardProps) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/article/${id}`);
  };
  return <motion.div whileHover={{
    y: -4
  }} transition={{
    duration: 0.2
  }} onClick={handleClick} className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer group">
      <div className="relative h-48 overflow-hidden">
        <motion.img whileHover={{
        scale: 1.05
      }} transition={{
        duration: 0.3
      }} src={imageUrl} alt={title} className="w-full h-full object-cover" />
        <div className="absolute top-3 left-3">
          <span className="px-3 py-1 bg-orange-600 text-white text-xs font-semibold rounded-full">
            {source}
          </span>
        </div>
      </div>
      <div className="p-4">
        <div className="mb-2">
          <span className="text-xs text-gray-500 uppercase font-medium">
            {category}
          </span>
        </div>
        <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-orange-600 transition-colors">
          {title}
        </h3>
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">{excerpt}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1 text-xs text-gray-500">
            <Clock className="w-3 h-3" />
            <span>{timestamp}</span>
          </div>
          <ExternalLink className="w-4 h-4 text-orange-600 opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      </div>
    </motion.div>;
}