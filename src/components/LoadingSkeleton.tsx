import React from 'react';
import { motion } from 'framer-motion';
export function NewsCardSkeleton() {
  return <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <motion.div className="h-48 bg-gray-200" animate={{
      opacity: [0.5, 1, 0.5]
    }} transition={{
      duration: 1.5,
      repeat: Infinity
    }} />
      <div className="p-4 space-y-3">
        <motion.div className="h-4 bg-gray-200 rounded w-3/4" animate={{
        opacity: [0.5, 1, 0.5]
      }} transition={{
        duration: 1.5,
        repeat: Infinity,
        delay: 0.1
      }} />
        <motion.div className="h-4 bg-gray-200 rounded w-full" animate={{
        opacity: [0.5, 1, 0.5]
      }} transition={{
        duration: 1.5,
        repeat: Infinity,
        delay: 0.2
      }} />
        <motion.div className="h-4 bg-gray-200 rounded w-5/6" animate={{
        opacity: [0.5, 1, 0.5]
      }} transition={{
        duration: 1.5,
        repeat: Infinity,
        delay: 0.3
      }} />
      </div>
    </div>;
}
export function MarketWidgetSkeleton() {
  return <div className="bg-white rounded-lg shadow-md p-4">
      <motion.div className="h-6 bg-gray-200 rounded w-1/2 mb-4" animate={{
      opacity: [0.5, 1, 0.5]
    }} transition={{
      duration: 1.5,
      repeat: Infinity
    }} />
      <div className="space-y-2">
        {[1, 2, 3].map(i => <motion.div key={i} className="h-4 bg-gray-200 rounded" animate={{
        opacity: [0.5, 1, 0.5]
      }} transition={{
        duration: 1.5,
        repeat: Infinity,
        delay: i * 0.1
      }} />)}
      </div>
    </div>;
}