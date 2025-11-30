import React from 'react';
import { motion } from 'framer-motion';
export function NewsTicker() {
  const headlines = ['Saham Eropa Berakhir Menguat di Akhir Bulan yang Bergejolak', 'Minyak Anjlok, Fokus Beralih Ke Pertemuan OPEC+', 'Trump Klaim Income Tax Bisa Nol Berkat Pendapatan Tarif', 'IHSG Diprediksi Menguat Terbatas Hari Ini', 'Rupiah Menguat Tipis Terhadap Dolar AS Pagi Ini'];
  return <div className="bg-[#D4AF37] text-black py-2 overflow-hidden flex items-center relative z-10">
      <div className="bg-black text-[#D4AF37] px-4 py-1 font-bold text-sm uppercase tracking-wider absolute left-0 z-20 h-full flex items-center">
        HOT NEWS
      </div>
      <div className="w-full overflow-hidden ml-24">
        <motion.div className="whitespace-nowrap flex gap-8" animate={{
        x: [0, -1000]
      }} transition={{
        repeat: Infinity,
        duration: 20,
        ease: 'linear'
      }}>
          {[...headlines, ...headlines, ...headlines].map((headline, i) => <span key={i} className="text-sm font-medium inline-block">
              {headline} <span className="mx-2 text-black/40">|</span>
            </span>)}
        </motion.div>
      </div>
    </div>;
}