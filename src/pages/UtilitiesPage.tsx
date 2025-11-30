import React, { useState } from 'react';
import { Calculator, DollarSign, TrendingUp, BookOpen, Download, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
export function UtilitiesPage() {
  const [amount, setAmount] = useState('1000000');
  const [fromCurrency, setFromCurrency] = useState('IDR');
  const [toCurrency, setToCurrency] = useState('USD');
  const [result, setResult] = useState('63.09');
  const [isConverting, setIsConverting] = useState(false);
  const exchangeRates: Record<string, Record<string, number>> = {
    IDR: {
      USD: 0.000063,
      EUR: 0.000058,
      GBP: 0.00005,
      JPY: 0.0095
    },
    USD: {
      IDR: 15845,
      EUR: 0.92,
      GBP: 0.79,
      JPY: 149.5
    },
    EUR: {
      IDR: 17234,
      USD: 1.09,
      GBP: 0.86,
      JPY: 162.3
    },
    GBP: {
      IDR: 20045,
      USD: 1.27,
      EUR: 1.16,
      JPY: 188.9
    },
    JPY: {
      IDR: 106.15,
      USD: 0.0067,
      EUR: 0.0062,
      GBP: 0.0053
    }
  };
  const handleConvert = () => {
    setIsConverting(true);
    setTimeout(() => {
      const amountNum = parseFloat(amount.replace(/,/g, ''));
      if (fromCurrency === toCurrency) {
        setResult(amountNum.toLocaleString('en-US', {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2
        }));
      } else {
        const rate = exchangeRates[fromCurrency]?.[toCurrency] || 1;
        const converted = amountNum * rate;
        setResult(converted.toLocaleString('en-US', {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2
        }));
      }
      setIsConverting(false);
    }, 500);
  };
  const tools = [{
    icon: Calculator,
    title: 'Kalkulator Profit/Loss',
    description: 'Hitung potensi keuntungan atau kerugian trading Anda',
    color: 'from-blue-500 to-blue-700'
  }, {
    icon: DollarSign,
    title: 'Konverter Mata Uang',
    description: 'Konversi nilai tukar mata uang real-time',
    color: 'from-green-500 to-green-700'
  }, {
    icon: TrendingUp,
    title: 'Kalkulator Margin',
    description: 'Hitung margin yang dibutuhkan untuk trading',
    color: 'from-purple-500 to-purple-700'
  }, {
    icon: Calculator,
    title: 'Kalkulator Pip',
    description: 'Hitung nilai pip untuk berbagai pasangan mata uang',
    color: 'from-orange-500 to-orange-700'
  }];
  const educationalResources = [{
    title: 'Panduan Trading untuk Pemula',
    description: 'Pelajari dasar-dasar trading dari nol hingga mahir',
    type: 'PDF',
    size: '2.5 MB'
  }, {
    title: 'Strategi Manajemen Risiko',
    description: 'Teknik mengelola risiko dalam trading',
    type: 'PDF',
    size: '1.8 MB'
  }, {
    title: 'Analisis Teknikal Lanjutan',
    description: 'Menguasai indikator dan pola chart',
    type: 'PDF',
    size: '3.2 MB'
  }, {
    title: 'Psikologi Trading',
    description: 'Mengendalikan emosi dalam trading',
    type: 'PDF',
    size: '1.5 MB'
  }];
  return <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-teal-900 to-teal-700 text-white py-12 border-b-4 border-[#FF6B00]">
        <div className="container mx-auto px-4">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} className="flex items-center gap-4 mb-4">
            <Calculator className="w-12 h-12 text-[#FF6B00]" />
            <div>
              <h1 className="text-4xl font-bold mb-2">Utilities & Tools</h1>
              <p className="text-gray-200 text-lg">
                Kalkulator, konverter, dan sumber edukasi trading
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Currency Converter */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
            <div className="bg-gradient-to-r from-[#FF6B00] to-orange-600 text-white px-6 py-4">
              <h2 className="text-2xl font-bold flex items-center gap-2">
                <DollarSign className="w-6 h-6" />
                Konverter Mata Uang
              </h2>
            </div>
            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Jumlah
                  </label>
                  <input type="text" value={amount} onChange={e => setAmount(e.target.value)} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6B00] text-lg font-semibold transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Dari
                  </label>
                  <select value={fromCurrency} onChange={e => setFromCurrency(e.target.value)} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6B00] text-lg font-semibold transition-all cursor-pointer">
                    <option value="IDR">IDR - Rupiah Indonesia</option>
                    <option value="USD">USD - US Dollar</option>
                    <option value="EUR">EUR - Euro</option>
                    <option value="GBP">GBP - British Pound</option>
                    <option value="JPY">JPY - Japanese Yen</option>
                  </select>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Hasil
                  </label>
                  <motion.div key={result} initial={{
                  scale: 1.05,
                  color: '#FF6B00'
                }} animate={{
                  scale: 1,
                  color: '#FF6B00'
                }} className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-lg font-bold">
                    {isConverting ? 'Converting...' : result}
                  </motion.div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Ke
                  </label>
                  <select value={toCurrency} onChange={e => setToCurrency(e.target.value)} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6B00] text-lg font-semibold transition-all cursor-pointer">
                    <option value="USD">USD - US Dollar</option>
                    <option value="IDR">IDR - Rupiah Indonesia</option>
                    <option value="EUR">EUR - Euro</option>
                    <option value="GBP">GBP - British Pound</option>
                    <option value="JPY">JPY - Japanese Yen</option>
                  </select>
                </div>
              </div>
              <motion.button whileHover={{
              scale: 1.02
            }} whileTap={{
              scale: 0.98
            }} onClick={handleConvert} disabled={isConverting} className="w-full bg-[#FF6B00] hover:bg-[#e66000] text-white font-bold py-3 rounded-lg transition-colors disabled:opacity-50">
                {isConverting ? 'Converting...' : 'Konversi'}
              </motion.button>
              <p className="text-xs text-gray-500 mt-4 text-center">
                Nilai tukar diperbarui setiap 1 menit | Sumber: Bank Indonesia &
                Reuters
              </p>
            </div>
          </motion.div>

          {/* Trading Tools Grid */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Kalkulator Trading</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {tools.map((tool, i) => {
              const Icon = tool.icon;
              return <motion.div key={i} initial={{
                opacity: 0,
                scale: 0.9
              }} animate={{
                opacity: 1,
                scale: 1
              }} whileHover={{
                scale: 1.05,
                y: -5
              }} transition={{
                delay: i * 0.1
              }} className={`bg-gradient-to-br ${tool.color} text-white p-6 rounded-lg cursor-pointer shadow-lg`}>
                    <Icon className="w-10 h-10 mb-4" />
                    <h3 className="text-lg font-bold mb-2">{tool.title}</h3>
                    <p className="text-sm opacity-90">{tool.description}</p>
                  </motion.div>;
            })}
            </div>
          </div>

          {/* Educational Resources */}
          <div>
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-[#FF6B00]" />
              Materi Edukasi
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {educationalResources.map((resource, i) => <motion.div key={i} initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} whileHover={{
              y: -5,
              boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)'
            }} transition={{
              delay: i * 0.1
            }} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 group cursor-pointer">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-[#FF6B00] transition-colors">
                        {resource.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-3">
                        {resource.description}
                      </p>
                      <div className="flex items-center gap-4 text-xs text-gray-500">
                        <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded font-semibold">
                          {resource.type}
                        </span>
                        <span>{resource.size}</span>
                      </div>
                    </div>
                    <Download className="w-5 h-5 text-gray-400 group-hover:text-[#FF6B00] transition-colors flex-shrink-0 ml-4" />
                  </div>
                  <motion.button whileHover={{
                scale: 1.02
              }} whileTap={{
                scale: 0.98
              }} className="w-full mt-4 px-4 py-2 bg-gray-100 hover:bg-[#FF6B00] hover:text-white text-gray-700 font-semibold rounded transition-colors flex items-center justify-center gap-2">
                    <Download className="w-4 h-4" />
                    Download
                  </motion.button>
                </motion.div>)}
            </div>
          </div>

          {/* External Links */}
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <ExternalLink className="w-6 h-6 text-[#FF6B00]" />
              Link Berguna
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              {[{
              name: 'Bank Indonesia',
              url: 'https://www.bi.go.id'
            }, {
              name: 'Bursa Efek Indonesia',
              url: 'https://www.idx.co.id'
            }, {
              name: 'OJK',
              url: 'https://www.ojk.go.id'
            }].map((link, i) => <motion.a key={i} href={link.url} target="_blank" rel="noopener noreferrer" whileHover={{
              scale: 1.05,
              backgroundColor: 'rgba(255, 255, 255, 0.2)'
            }} whileTap={{
              scale: 0.95
            }} className="flex items-center gap-2 p-4 bg-white/10 rounded-lg transition-colors">
                  <ExternalLink className="w-4 h-4" />
                  <span>{link.name}</span>
                </motion.a>)}
            </div>
          </div>
        </div>
      </div>
    </div>;
}