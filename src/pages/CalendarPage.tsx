import React, { useState } from 'react';
import { Calendar as CalendarIcon, Clock, AlertCircle, Star } from 'lucide-react';
import { motion } from 'framer-motion';
export function CalendarPage() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const events = [{
    time: '08:30',
    country: 'US',
    flag: '🇺🇸',
    event: 'Non-Farm Payroll',
    importance: 'high',
    forecast: '185K',
    previous: '187K',
    actual: '-'
  }, {
    time: '14:00',
    country: 'US',
    flag: '🇺🇸',
    event: 'FOMC Meeting Minutes',
    importance: 'high',
    forecast: '-',
    previous: '-',
    actual: '-'
  }, {
    time: '15:30',
    country: 'EU',
    flag: '🇪🇺',
    event: 'ECB Interest Rate Decision',
    importance: 'high',
    forecast: '4.50%',
    previous: '4.50%',
    actual: '-'
  }, {
    time: '09:00',
    country: 'JP',
    flag: '🇯🇵',
    event: 'GDP Growth Rate',
    importance: 'medium',
    forecast: '1.2%',
    previous: '1.5%',
    actual: '-'
  }, {
    time: '11:00',
    country: 'UK',
    flag: '🇬🇧',
    event: 'Retail Sales',
    importance: 'medium',
    forecast: '0.3%',
    previous: '0.5%',
    actual: '-'
  }, {
    time: '16:00',
    country: 'ID',
    flag: '🇮🇩',
    event: 'BI Rate Decision',
    importance: 'high',
    forecast: '6.00%',
    previous: '6.00%',
    actual: '-'
  }];
  const getImportanceColor = (importance: string) => {
    switch (importance) {
      case 'high':
        return 'bg-red-100 text-red-800 border-red-300';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800 border-yellow-300';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };
  const getImportanceStars = (importance: string) => {
    const count = importance === 'high' ? 3 : importance === 'medium' ? 2 : 1;
    return Array(count).fill(0).map((_, i) => <Star key={i} className="w-3 h-3 fill-current text-[#FF6B00]" />);
  };
  return <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-900 to-purple-700 text-white py-12 border-b-4 border-[#FF6B00]">
        <div className="container mx-auto px-4">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} className="flex items-center gap-4 mb-4">
            <CalendarIcon className="w-12 h-12 text-[#FF6B00]" />
            <div>
              <h1 className="text-4xl font-bold mb-2">Kalender Ekonomi</h1>
              <p className="text-gray-200 text-lg">
                Jadwal rilis data ekonomi penting dari seluruh dunia
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Date Selector */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <CalendarIcon className="w-6 h-6 text-[#FF6B00]" />
                <div>
                  <h2 className="text-xl font-bold text-gray-900">
                    {selectedDate.toLocaleDateString('id-ID', {
                    weekday: 'long',
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric'
                  })}
                  </h2>
                  <p className="text-sm text-gray-500">
                    Zona Waktu: WIB (GMT+7)
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors text-sm font-medium">
                  Hari Ini
                </button>
                <button className="px-4 py-2 bg-[#FF6B00] hover:bg-[#e66000] text-white rounded-lg transition-colors text-sm font-medium">
                  Minggu Ini
                </button>
                <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors text-sm font-medium">
                  Bulan Ini
                </button>
              </div>
            </div>
          </div>

          {/* Legend */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <div className="text-sm text-blue-900">
              <p className="font-semibold mb-1">Tingkat Kepentingan:</p>
              <div className="flex flex-wrap gap-4">
                <span className="flex items-center gap-1">
                  <Star className="w-3 h-3 fill-current text-[#FF6B00]" />
                  <Star className="w-3 h-3 fill-current text-[#FF6B00]" />
                  <Star className="w-3 h-3 fill-current text-[#FF6B00]" />=
                  Dampak Tinggi
                </span>
                <span className="flex items-center gap-1">
                  <Star className="w-3 h-3 fill-current text-[#FF6B00]" />
                  <Star className="w-3 h-3 fill-current text-[#FF6B00]" />=
                  Dampak Sedang
                </span>
                <span className="flex items-center gap-1">
                  <Star className="w-3 h-3 fill-current text-[#FF6B00]" />=
                  Dampak Rendah
                </span>
              </div>
            </div>
          </div>

          {/* Events Table */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-900 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-bold uppercase">
                      Waktu
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-bold uppercase">
                      Negara
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-bold uppercase">
                      Event
                    </th>
                    <th className="px-6 py-4 text-center text-xs font-bold uppercase">
                      Penting
                    </th>
                    <th className="px-6 py-4 text-center text-xs font-bold uppercase">
                      Forecast
                    </th>
                    <th className="px-6 py-4 text-center text-xs font-bold uppercase">
                      Previous
                    </th>
                    <th className="px-6 py-4 text-center text-xs font-bold uppercase">
                      Actual
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {events.map((event, i) => <motion.tr key={i} initial={{
                  opacity: 0,
                  x: -20
                }} animate={{
                  opacity: 1,
                  x: 0
                }} transition={{
                  delay: i * 0.1
                }} className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2 text-sm font-semibold text-gray-900">
                          <Clock className="w-4 h-4 text-[#FF6B00]" />
                          {event.time}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <span className="text-2xl">{event.flag}</span>
                          <span className="text-sm font-medium text-gray-700">
                            {event.country}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm font-medium text-gray-900">
                          {event.event}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center justify-center gap-0.5">
                          {getImportanceStars(event.importance)}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className="text-sm text-gray-700">
                          {event.forecast}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className="text-sm text-gray-500">
                          {event.previous}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className="text-sm font-semibold text-gray-400">
                          {event.actual}
                        </span>
                      </td>
                    </motion.tr>)}
                </tbody>
              </table>
            </div>
          </div>

          {/* Info Box */}
          <div className="mt-8 bg-gradient-to-r from-[#FF6B00] to-orange-600 text-white rounded-lg p-6">
            <h3 className="text-lg font-bold mb-2">
              💡 Tips Menggunakan Kalender Ekonomi
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                • Data dengan 3 bintang memiliki dampak signifikan terhadap
                pasar
              </li>
              <li>
                • Perhatikan perbedaan antara forecast dan actual untuk menilai
                sentimen pasar
              </li>
              <li>
                • Volatilitas biasanya meningkat 15-30 menit sebelum dan sesudah
                rilis data
              </li>
              <li>
                • Gunakan kalender ini untuk merencanakan strategi trading Anda
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>;
}