import React, { Fragment } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react';
interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  language: 'ID' | 'EN';
}
export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  language
}: PaginationProps) {
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const maxVisible = 10;
    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 6) {
        for (let i = 1; i <= 8; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 5) {
        pages.push(1);
        pages.push('...');
        for (let i = totalPages - 7; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1);
        pages.push('...');
        for (let i = currentPage - 2; i <= currentPage + 2; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(totalPages);
      }
    }
    return pages;
  };
  return <div className="flex items-center justify-center space-x-2 py-8">
      {/* First Page */}
      <motion.button whileHover={{
      scale: 1.05
    }} whileTap={{
      scale: 0.95
    }} onClick={() => onPageChange(1)} disabled={currentPage === 1} className={`px-4 py-2 rounded-lg font-medium transition-colors ${currentPage === 1 ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-white text-gray-700 hover:bg-orange-50 hover:text-orange-600 border border-gray-300'}`}>
        {language === 'ID' ? 'Awal' : 'First'}
      </motion.button>

      {/* Previous Page */}
      <motion.button whileHover={{
      scale: 1.05
    }} whileTap={{
      scale: 0.95
    }} onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1} className={`p-2 rounded-lg transition-colors ${currentPage === 1 ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-white text-gray-700 hover:bg-orange-50 hover:text-orange-600 border border-gray-300'}`}>
        <ChevronLeft className="w-5 h-5" />
      </motion.button>

      {/* Page Numbers */}
      <div className="flex items-center space-x-2">
        {getPageNumbers().map((page, index) => <Fragment key={index}>
            {page === '...' ? <span className="px-3 py-2 text-gray-400">...</span> : <motion.button whileHover={{
          scale: 1.05
        }} whileTap={{
          scale: 0.95
        }} onClick={() => onPageChange(page as number)} className={`px-4 py-2 rounded-lg font-medium transition-colors ${currentPage === page ? 'bg-orange-600 text-white' : 'bg-white text-gray-700 hover:bg-orange-50 hover:text-orange-600 border border-gray-300'}`}>
                {page}
              </motion.button>}
          </Fragment>)}
      </div>

      {/* Next Page */}
      <motion.button whileHover={{
      scale: 1.05
    }} whileTap={{
      scale: 0.95
    }} onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages} className={`p-2 rounded-lg transition-colors ${currentPage === totalPages ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-white text-gray-700 hover:bg-orange-50 hover:text-orange-600 border border-gray-300'}`}>
        <ChevronRight className="w-5 h-5" />
      </motion.button>

      {/* Last Page */}
      <motion.button whileHover={{
      scale: 1.05
    }} whileTap={{
      scale: 0.95
    }} onClick={() => onPageChange(totalPages)} disabled={currentPage === totalPages} className={`px-4 py-2 rounded-lg font-medium transition-colors ${currentPage === totalPages ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-white text-gray-700 hover:bg-orange-50 hover:text-orange-600 border border-gray-300'}`}>
        {language === 'ID' ? 'Akhir' : 'Last'}
      </motion.button>
    </div>;
}