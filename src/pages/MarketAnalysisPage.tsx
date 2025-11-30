import React from 'react';
import { LineChart, TrendingUp, Target, BarChart3, AlertTriangle } from 'lucide-react';
import { motion } from 'framer-motion';
export function MarketAnalysisPage() {
  const technicalAnalysis = [{
    asset: 'IHSG',
    current: '7,234.56',
    support: '7,150',
    resistance: '7,350',
    trend: 'Bullish',
    recommendation: 'Buy',
    target: '7,450'
  }, {
    asset: 'USD/IDR',
    current: '15,845',
    support: '15,750',
    resistance: '15,950',
    trend: 'Sideways',
    recommendation: 'Hold',
    target: '15,900'
  }, {
    asset: 'Gold',
    current: '$2,045',
    support: '$2,020',
    resistance: '$2,070',
    trend: 'Bullish',
    recommendation: 'Buy',
    target: '$2,100'
  }];
  const expertOpinions = [{
    expert: 'Dr. Ahmad Wijaya',
    title: 'Chief Economist, XYZ Securities',
    opinion: 'IHSG berpotensi melanjutkan penguatan hingga level 7,500 didukung oleh sentimen positif dari data ekonomi domestik yang solid.',
    date: '30 Nov 2024'
  }, {
    expert: 'Sarah Chen',
    title: 'Senior Analyst, Global Markets',
    opinion: 'Rupiah diprediksi akan menguat terhadap dolar AS seiring ekspektasi penurunan suku bunga The Fed di 2025.',
    date: '29 Nov 2024'
  }, {
    expert: 'Michael Johnson',
    title: 'Commodity Strategist',
    opinion: 'Emas masih menjadi pilihan safe haven yang menarik di tengah ketidakpastian geopolitik global.',
    date: '28 Nov 2024'
  }];
  return <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-cyan-900 to-cyan-700 text-white py-12 border-b-4 border-[#FF6B00]">
        <div className="container mx-auto px-4">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} className="flex items-center gap-4 mb-4">
            <LineChart className="w-12 h-12 text-[#FF6B00]" />
            <div>
              <h1 className="text-4xl font-bold mb-2">Analisis Pasar</h1>
              <p className="text-gray-200 text-lg">
                Analisis teknikal dan fundamental dari para ahli
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Technical Analysis Section */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="bg-gray-900 text-white px-6 py-4 flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-[#FF6B00]" />
              <h2 className="text-xl font-bold">Analisis Teknikal</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase">
                      Asset
                    </th>
                    <th className="px-6 py-3 text-center text-xs font-bold text-gray-700 uppercase">
                      Current
                    </th>
                    <th className="px-6 py-3 text-center text-xs font-bold text-gray-700 uppercase">
                      Support
                    </th>
                    <th className="px-6 py-3 text-center text-xs font-bold text-gray-700 uppercase">
                      Resistance
                    </th>
                    <th className="px-6 py-3 text-center text-xs font-bold text-gray-700 uppercase">
                      Trend
                    </th>
                    <th className="px-6 py-3 text-center text-xs font-bold text-gray-700 uppercase">
                      Rekomendasi
                    </th>
                    <th className="px-6 py-3 text-center text-xs font-bold text-gray-700 uppercase">
                      Target
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {technicalAnalysis.map((item, i) => <motion.tr key={item.asset} initial={{
                  opacity: 0,
                  x: -20
                }} animate={{
                  opacity: 1,
                  x: 0
                }} transition={{
                  delay: i * 0.1
                }} className="border-b hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 font-bold text-gray-900">
                        {item.asset}
                      </td>
                      <td className="px-6 py-4 text-center font-semibold text-gray-900">
                        {item.current}
                      </td>
                      <td className="px-6 py-4 text-center text-gray-700">
                        {item.support}
                      </td>
                      <td className="px-6 py-4 text-center text-gray-700">
                        {item.resistance}
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className={`px-2 py-1 rounded text-xs font-bold ${item.trend === 'Bullish' ? 'bg-green-100 text-green-800' : item.trend === 'Bearish' ? 'bg-red-100 text-red-800' : 'bg-gray-100 text-gray-800'}`}>
                          {item.trend}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className={`px-3 py-1 rounded text-xs font-bold ${item.recommendation === 'Buy' ? 'bg-green-600 text-white' : item.recommendation === 'Sell' ? 'bg-red-600 text-white' : 'bg-gray-600 text-white'}`}>
                          {item.recommendation}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center font-semibold text-[#FF6B00]">
                        {item.target}
                      </td>
                    </motion.tr>)}
                </tbody>
              </table>
            </div>
          </div>

          {/* Expert Opinions */}
          <div>
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Target className="w-6 h-6 text-[#FF6B00]" />
              Opini Para Ahli
            </h2>
            <div className="grid gap-6">
              {expertOpinions.map((expert, i) => <motion.div key={i} initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: i * 0.15
            }} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FF6B00] to-orange-600 flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                      {expert.expert.charAt(0)}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg text-gray-900 mb-1">
                        {expert.expert}
                      </h3>
                      <p className="text-sm text-gray-500 mb-3">
                        {expert.title}
                      </p>
                      <p className="text-gray-700 leading-relaxed mb-3">
                        {expert.opinion}
                      </p>
                      <div className="text-xs text-gray-400">{expert.date}</div>
                    </div>
                  </div>
                </motion.div>)}
            </div>
          </div>

          {/* Market Outlook */}
          <div className="bg-gradient-to-r from-[#FF6B00] to-orange-600 text-white rounded-lg p-8">
            <div className="flex items-start gap-4 mb-4">
              <TrendingUp className="w-8 h-8 flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-bold mb-2">
                  Outlook Pasar Minggu Ini
                </h2>
                <p className="text-gray-100 leading-relaxed mb-4">
                  Pasar diperkirakan akan bergerak volatile minggu ini dengan
                  fokus pada rilis data Non-Farm Payroll dari AS dan keputusan
                  suku bunga dari beberapa bank sentral. Investor disarankan
                  untuk tetap waspada dan menerapkan strategi risk management
                  yang ketat.
                </p>
                <div className="flex items-start gap-2 bg-white/10 rounded-lg p-4">
                  <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <p className="text-sm">
                    <strong>Disclaimer:</strong> Analisis ini bersifat
                    informatif dan bukan merupakan rekomendasi investasi.
                    Investor disarankan untuk melakukan riset sendiri sebelum
                    mengambil keputusan.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
}