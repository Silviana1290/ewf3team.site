import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, TrendingUp, DollarSign, Percent } from 'lucide-react';
interface UtilitiesPageProps {
  language: 'ID' | 'EN';
}
export function UtilitiesPage({
  language
}: UtilitiesPageProps) {
  const [pipValue, setPipValue] = useState({
    lotSize: 1,
    result: 0
  });
  const [positionSize, setPositionSize] = useState({
    accountSize: 10000,
    riskPercent: 2,
    stopLoss: 50,
    result: 0
  });
  const calculatePipValue = () => {
    const value = pipValue.lotSize * 10;
    setPipValue({
      ...pipValue,
      result: value
    });
  };
  const calculatePositionSize = () => {
    const riskAmount = positionSize.accountSize * positionSize.riskPercent / 100;
    const size = riskAmount / positionSize.stopLoss;
    setPositionSize({
      ...positionSize,
      result: size
    });
  };
  const utilities = [{
    icon: Calculator,
    title: language === 'ID' ? 'Kalkulator Pip' : 'Pip Calculator',
    description: language === 'ID' ? 'Hitung nilai pip untuk trading forex' : 'Calculate pip value for forex trading'
  }, {
    icon: TrendingUp,
    title: language === 'ID' ? 'Kalkulator Posisi' : 'Position Size Calculator',
    description: language === 'ID' ? 'Tentukan ukuran posisi optimal' : 'Determine optimal position size'
  }, {
    icon: DollarSign,
    title: language === 'ID' ? 'Konverter Mata Uang' : 'Currency Converter',
    description: language === 'ID' ? 'Konversi antar mata uang' : 'Convert between currencies'
  }, {
    icon: Percent,
    title: language === 'ID' ? 'Kalkulator Profit/Loss' : 'Profit/Loss Calculator',
    description: language === 'ID' ? 'Hitung profit dan loss trading' : 'Calculate trading profit and loss'
  }];
  return <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {language === 'ID' ? 'Utilitas Trading' : 'Trading Utilities'}
          </h1>
          <p className="text-gray-600">
            {language === 'ID' ? 'Alat bantu untuk analisis dan perhitungan trading' : 'Tools for trading analysis and calculations'}
          </p>
        </motion.div>

        {/* Utility Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {utilities.map((utility, index) => <motion.div key={utility.title} initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: index * 0.1
        }} className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
              <utility.icon className="w-12 h-12 text-orange-600 mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {utility.title}
              </h3>
              <p className="text-sm text-gray-600">{utility.description}</p>
            </motion.div>)}
        </div>

        {/* Calculators */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Pip Calculator */}
          <motion.div initial={{
          opacity: 0,
          x: -20
        }} animate={{
          opacity: 1,
          x: 0
        }} className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              {language === 'ID' ? 'Kalkulator Pip' : 'Pip Calculator'}
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {language === 'ID' ? 'Ukuran Lot' : 'Lot Size'}
                </label>
                <input type="number" value={pipValue.lotSize} onChange={e => setPipValue({
                ...pipValue,
                lotSize: Number(e.target.value)
              })} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500" step="0.01" />
              </div>
              <button onClick={calculatePipValue} className="w-full px-4 py-2 bg-orange-600 text-white font-medium rounded-lg hover:bg-orange-700 transition-colors">
                {language === 'ID' ? 'Hitung' : 'Calculate'}
              </button>
              {pipValue.result > 0 && <div className="p-4 bg-orange-50 rounded-lg">
                  <p className="text-sm text-gray-600 mb-1">
                    {language === 'ID' ? 'Nilai per Pip:' : 'Value per Pip:'}
                  </p>
                  <p className="text-2xl font-bold text-gray-900">
                    ${pipValue.result.toFixed(2)}
                  </p>
                </div>}
            </div>
          </motion.div>

          {/* Position Size Calculator */}
          <motion.div initial={{
          opacity: 0,
          x: 20
        }} animate={{
          opacity: 1,
          x: 0
        }} className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              {language === 'ID' ? 'Kalkulator Ukuran Posisi' : 'Position Size Calculator'}
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {language === 'ID' ? 'Ukuran Akun ($)' : 'Account Size ($)'}
                </label>
                <input type="number" value={positionSize.accountSize} onChange={e => setPositionSize({
                ...positionSize,
                accountSize: Number(e.target.value)
              })} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {language === 'ID' ? 'Risiko (%)' : 'Risk (%)'}
                </label>
                <input type="number" value={positionSize.riskPercent} onChange={e => setPositionSize({
                ...positionSize,
                riskPercent: Number(e.target.value)
              })} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500" step="0.1" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {language === 'ID' ? 'Stop Loss (pips)' : 'Stop Loss (pips)'}
                </label>
                <input type="number" value={positionSize.stopLoss} onChange={e => setPositionSize({
                ...positionSize,
                stopLoss: Number(e.target.value)
              })} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500" />
              </div>
              <button onClick={calculatePositionSize} className="w-full px-4 py-2 bg-orange-600 text-white font-medium rounded-lg hover:bg-orange-700 transition-colors">
                {language === 'ID' ? 'Hitung' : 'Calculate'}
              </button>
              {positionSize.result > 0 && <div className="p-4 bg-orange-50 rounded-lg">
                  <p className="text-sm text-gray-600 mb-1">
                    {language === 'ID' ? 'Ukuran Posisi:' : 'Position Size:'}
                  </p>
                  <p className="text-2xl font-bold text-gray-900">
                    {positionSize.result.toFixed(2)}{' '}
                    {language === 'ID' ? 'lot' : 'lots'}
                  </p>
                </div>}
            </div>
          </motion.div>
        </div>
      </div>
    </div>;
}