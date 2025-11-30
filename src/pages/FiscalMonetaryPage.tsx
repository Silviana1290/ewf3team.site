import React from 'react';
import { NewsCard } from '../components/NewsCard';
import { Sidebar } from '../components/Sidebar';
import { useRealTimeNews } from '../hooks/useRealTimeNews';
import { Building2, Percent, TrendingUp, TrendingDown } from 'lucide-react';
import { motion } from 'framer-motion';
export function FiscalMonetaryPage() {
  const {
    news
  } = useRealTimeNews();
  const fiscalNews = news.filter(n => n.category === 'Fiscal' || n.category === 'Monetary');
  const centralBanks = [{
    name: 'The Fed (AS)',
    rate: '5.50%',
    change: '0.00%',
    trend: 'neutral',
    nextMeeting: '20 Des 2024'
  }, {
    name: 'ECB (Eropa)',
    rate: '4.50%',
    change: '0.00%',
    trend: 'neutral',
    nextMeeting: '14 Des 2024'
  }, {
    name: 'BoJ (Jepang)',
    rate: '-0.10%',
    change: '0.00%',
    trend: 'neutral',
    nextMeeting: '19 Des 2024'
  }, {
    name: 'BoE (Inggris)',
    rate: '5.25%',
    change: '0.00%',
    trend: 'neutral',
    nextMeeting: '19 Des 2024'
  }, {
    name: 'BI (Indonesia)',
    rate: '6.00%',
    change: '0.00%',
    trend: 'neutral',
    nextMeeting: '18 Des 2024'
  }, {
    name: 'PBOC (China)',
    rate: '3.45%',
    change: '0.00%',
    trend: 'neutral',
    nextMeeting: '20 Des 2024'
  }];
  return <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-900 to-indigo-700 text-white py-12 border-b-4 border-[#FF6B00]">
        <div className="container mx-auto px-4">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} className="flex items-center gap-4 mb-4">
            <Building2 className="w-12 h-12 text-[#FF6B00]" />
            <div>
              <h1 className="text-4xl font-bold mb-2">Fiskal & Moneter</h1>
              <p className="text-gray-200 text-lg">
                Kebijakan bank sentral dan perkembangan fiskal global
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Central Banks Overview */}
      <div className="bg-white border-b border-gray-200 py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
            <Percent className="w-5 h-5 text-[#FF6B00]" />
            Suku Bunga Bank Sentral Global
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {centralBanks.map((bank, i) => <motion.div key={bank.name} initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: i * 0.1
          }} className="bg-gradient-to-br from-gray-50 to-white p-4 rounded-lg border border-gray-200 hover:shadow-lg transition-all">
                <div className="text-xs text-gray-500 mb-2 font-semibold">
                  {bank.name}
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">
                  {bank.rate}
                </div>
                <div className={`text-sm font-semibold flex items-center gap-1 mb-2 ${bank.trend === 'up' ? 'text-green-600' : bank.trend === 'down' ? 'text-red-600' : 'text-gray-500'}`}>
                  {bank.trend === 'up' && <TrendingUp className="w-4 h-4" />}
                  {bank.trend === 'down' && <TrendingDown className="w-4 h-4" />}
                  {bank.change}
                </div>
                <div className="text-xs text-gray-400">
                  Rapat: {bank.nextMeeting}
                </div>
              </motion.div>)}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* News Section */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-6 border-b-2 border-black pb-2">
                Berita Fiskal & Moneter
              </h2>
              <div className="grid gap-6">
                {fiscalNews.map(item => <NewsCard key={item.id} news={item} />)}
              </div>
            </div>

            {/* Policy Analysis */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Building2 className="w-5 h-5 text-[#FF6B00]" />
                Analisis Kebijakan Moneter
              </h3>
              <div className="space-y-4 text-gray-700">
                <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
                  <h4 className="font-bold text-blue-900 mb-2">
                    The Federal Reserve (AS)
                  </h4>
                  <p className="text-sm">
                    The Fed diperkirakan akan mempertahankan suku bunga di level
                    5.50% hingga akhir tahun. Inflasi yang mulai mereda
                    memberikan ruang untuk kebijakan yang lebih akomodatif di
                    2025.
                  </p>
                </div>
                <div className="bg-green-50 border-l-4 border-green-600 p-4 rounded">
                  <h4 className="font-bold text-green-900 mb-2">
                    Bank Indonesia
                  </h4>
                  <p className="text-sm">
                    BI mempertahankan suku bunga acuan di 6.00% untuk menjaga
                    stabilitas nilai tukar rupiah dan mengendalikan inflasi.
                    Kebijakan ini sejalan dengan upaya menjaga daya beli
                    masyarakat.
                  </p>
                </div>
                <div className="bg-purple-50 border-l-4 border-purple-600 p-4 rounded">
                  <h4 className="font-bold text-purple-900 mb-2">
                    European Central Bank
                  </h4>
                  <p className="text-sm">
                    ECB menghadapi dilema antara inflasi yang masih tinggi dan
                    pertumbuhan ekonomi yang melambat. Pasar memperkirakan
                    penurunan suku bunga bertahap mulai Q2 2025.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>;
}