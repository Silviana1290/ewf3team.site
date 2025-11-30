import React, { useState } from 'react';
import { Search, ExternalLink, BookOpen } from 'lucide-react';
const GLOSSARY_TERMS = [{
  term: 'CPI',
  definition: 'Consumer Price Index - Indikator inflasi utama.'
}, {
  term: 'PPI',
  definition: 'Producer Price Index - Indikator harga di tingkat produsen.'
}, {
  term: 'FOMC',
  definition: 'Federal Open Market Committee - Komite kebijakan The Fed.'
}, {
  term: 'GDP',
  definition: 'Gross Domestic Product - Produk Domestik Bruto.'
}, {
  term: 'NFP',
  definition: 'Non-Farm Payroll - Data tenaga kerja AS di luar pertanian.'
}, {
  term: 'Hawkish',
  definition: 'Sikap bank sentral yang cenderung menaikkan suku bunga.'
}, {
  term: 'Dovish',
  definition: 'Sikap bank sentral yang cenderung menurunkan suku bunga.'
}, {
  term: 'Bullish',
  definition: 'Kondisi pasar yang sedang menguat.'
}, {
  term: 'Bearish',
  definition: 'Kondisi pasar yang sedang melemah.'
}, {
  term: 'Volatility',
  definition: 'Ukuran fluktuasi harga di pasar.'
}];
export function GlossaryPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const filteredTerms = GLOSSARY_TERMS.filter(item => item.term.toLowerCase().includes(searchTerm.toLowerCase()) || item.definition.toLowerCase().includes(searchTerm.toLowerCase()));
  return <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#FF6B00] rounded-full mb-6 shadow-lg">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Kamus Istilah Ekonomi
            </h1>
            <p className="text-xl text-gray-600">
              Pelajari istilah-istilah penting dalam dunia trading dan ekonomi
              global.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 mb-8">
            <div className="relative">
              <input type="text" placeholder="Cari istilah..." className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-[#FF6B00] transition-all" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-6 h-6" />
            </div>
          </div>

          <div className="grid gap-4">
            {filteredTerms.map((item, index) => <a key={index} href="https://www.equityworld-futures.com/index.php/id/edukasi/glosarium" target="_blank" rel="noopener noreferrer" className="group block bg-white p-6 rounded-lg border border-gray-200 hover:border-[#FF6B00] hover:shadow-lg transition-all duration-300">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#FF6B00] transition-colors flex items-center gap-2">
                      {item.term}
                      <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h3>
                    <p className="text-gray-600">{item.definition}</p>
                  </div>
                  <span className="text-xs font-semibold text-gray-400 bg-gray-100 px-2 py-1 rounded group-hover:bg-[#FF6B00] group-hover:text-white transition-colors">
                    Lihat Detail
                  </span>
                </div>
              </a>)}
          </div>

          <div className="mt-8 text-center">
            <a href="https://www.equityworld-futures.com/index.php/id/edukasi/glosarium" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[#FF6B00] font-bold hover:underline">
              Lihat Glosarium Lengkap di Equity World Futures{' '}
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>;
}