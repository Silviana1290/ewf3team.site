import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';
interface Indicator {
  name: string;
  nameId: string;
  definition: string;
  definitionId: string;
  impact: string;
  impactId: string;
  effect: 'up' | 'down' | 'neutral';
}
const indicators: Indicator[] = [{
  name: 'CPI',
  nameId: 'IHK (Indeks Harga Konsumen)',
  definition: 'Indicator of price changes for goods and services purchased by consumers. As a reference indicator of inflation',
  definitionId: 'Indikator perubahan harga barang dan jasa yg dibeli oleh konsumen. Sebagai acuan indikator inflasi',
  impact: 'CPI UP, ECONOMY UP, INFLATION UP, INTEREST RATE UP, USD UP',
  impactId: 'CPI NAIK, EKONOMI NAIK, INFLASI NAIK, SUKU BUNGA NAIK, USD NAIK',
  effect: 'down'
}, {
  name: 'Core CPI',
  nameId: 'IHK Inti',
  definition: 'Indicator of price changes for goods and services purchased by consumers (excluding food and energy). As a reference indicator of inflation',
  definitionId: 'Indikator perubahan harga barang dan jasa yg dibeli oleh konsumen (tidak termasuk bahan pangan dan energi). Sebagai acuan indikator inflasi',
  impact: 'CORE CPI UP, ECONOMY UP, INFLATION UP, INTEREST RATE UP, USD UP',
  impactId: 'CORE CPI NAIK, EKONOMI NAIK, INFLASI NAIK, SUKU BUNGA NAIK, USD NAIK',
  effect: 'down'
}, {
  name: 'PPI',
  nameId: 'IHP (Indeks Harga Produsen)',
  definition: 'Indicator of price changes for raw materials purchased by producers. As a reference indicator of inflation',
  definitionId: 'Indikator perubahan harga bahan baku yg dibeli oleh produsen. Sebagai acuan indikator inflasi',
  impact: 'PPI UP, ECONOMY UP, INFLATION UP, INTEREST RATE UP, USD UP',
  impactId: 'PPI NAIK, EKONOMI NAIK, INFLASI NAIK, SUKU BUNGA NAIK, USD NAIK',
  effect: 'down'
}, {
  name: 'Core PPI',
  nameId: 'IHP Inti',
  definition: 'Indicator of price changes for raw materials purchased by producers (excluding food and energy). As a reference indicator of inflation',
  definitionId: 'Indikator perubahan harga bahan baku yg dibeli oleh produsen (tidak termasuk energi). Sebagai acuan indikator inflasi',
  impact: 'CORE PPI UP, ECONOMY UP, INFLATION UP, INTEREST RATE UP, USD UP',
  impactId: 'CORE PPI NAIK, EKONOMI NAIK, INFLASI NAIK, SUKU BUNGA NAIK, USD NAIK',
  effect: 'down'
}, {
  name: 'Industrial Production',
  nameId: 'Produksi Industri',
  definition: 'Production volume level of all sectors (manufacturing, mining, utilities)',
  definitionId: 'Tingkat volume produksi semua sektor (pabrik, pertambangan, perusahaan energi)',
  impact: 'INDUSTRIAL PRODUCTION UP, ECONOMY UP, INFLATION UP, INTEREST RATE UP, USD UP',
  impactId: 'INDUSTRIAL PRODUCTION NAIK, EKONOMI NAIK, INFLASI NAIK, SUKU BUNGA NAIK, USD NAIK',
  effect: 'down'
}, {
  name: 'Trade Balance',
  nameId: 'Neraca Perdagangan',
  definition: 'Net export size of a country = export volume - import volume',
  definitionId: 'Besar net ekspor suatu negara = volume expor - volume impor',
  impact: 'TRADE BALANCE UP, ECONOMY UP, INFLATION UP, INTEREST RATE UP, USD UP',
  impactId: 'TRADE BALANCE NAIK, EKONOMI NAIK, INFLASI NAIK, SUKU BUNGA NAIK, USD NAIK',
  effect: 'down'
}];
interface EconomicIndicatorsProps {
  language: 'ID' | 'EN';
}
export function EconomicIndicators({
  language
}: EconomicIndicatorsProps) {
  const getEffectIcon = (effect: 'up' | 'down' | 'neutral') => {
    if (effect === 'up') return <TrendingUp className="w-5 h-5 text-green-600" />;
    if (effect === 'down') return <TrendingDown className="w-5 h-5 text-red-600" />;
    return <Minus className="w-5 h-5 text-gray-600" />;
  };
  return <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            {language === 'ID' ? 'Indikator Ekonomi' : 'Economic Indicators'}
          </h2>
          <p className="text-gray-600">
            {language === 'ID' ? 'Panduan lengkap indikator ekonomi dan dampaknya terhadap pasar' : 'Complete guide to economic indicators and their market impact'}
          </p>
        </motion.div>

        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        delay: 0.2
      }} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                    {language === 'ID' ? 'Indikator' : 'Indicator'}
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                    {language === 'ID' ? 'Definisi' : 'Definition'}
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                    {language === 'ID' ? 'Efek ke Ekonomi (USD)' : 'Economic Impact (USD)'}
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">
                    {language === 'ID' ? 'Efek ke Emas' : 'Gold Impact'}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {indicators.map((indicator, index) => <motion.tr key={indicator.name} initial={{
                opacity: 0,
                x: -20
              }} whileInView={{
                opacity: 1,
                x: 0
              }} viewport={{
                once: true
              }} transition={{
                delay: index * 0.05
              }} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="font-semibold text-gray-900">
                        {indicator.name}
                      </div>
                      <div className="text-sm text-gray-500">
                        {indicator.nameId}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-700">
                        {language === 'ID' ? indicator.definitionId : indicator.definition}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm font-medium text-gray-900">
                        {language === 'ID' ? indicator.impactId : indicator.impact}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="inline-flex items-center justify-center px-3 py-1 bg-gray-100 rounded-full">
                        {getEffectIcon(indicator.effect)}
                        <span className="ml-2 text-sm font-semibold text-gray-700">
                          {language === 'ID' ? 'TURUN' : 'DOWN'}
                        </span>
                      </div>
                    </td>
                  </motion.tr>)}
              </tbody>
            </table>
          </div>
        </motion.div>

        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        delay: 0.4
      }} className="mt-6 text-center">
          <a href="https://www.equityworld-futures.com/index.php/id/edukasi/glosarium" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-orange-600 hover:bg-orange-700 rounded-lg transition-colors">
            {language === 'ID' ? 'Lihat Glosarium Lengkap' : 'View Complete Glossary'}
            <TrendingUp className="w-5 h-5 ml-2" />
          </a>
        </motion.div>
      </div>
    </section>;
}