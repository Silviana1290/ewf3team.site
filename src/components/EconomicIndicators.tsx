import React from 'react';
import { EconomicIndicator } from '../types/news';
import { Info } from 'lucide-react';
const INDICATORS: EconomicIndicator[] = [{
  name: 'CPI',
  definition: 'Indikator perubahan harga barang dan jasa yg dibeli oleh konsumen. Sebagai acuan indikator inflasi',
  effectUSD: 'CPI NAIK, EKONOMI NAIK, INFLASI NAIK, SUKU BUNGA NAIK, USD NAIK.',
  effectGold: 'TURUN'
}, {
  name: 'CORE CPI',
  definition: 'Indikator perubahan harga barang dan jasa yg dibeli oleh konsumen (tidak termasuk bahan pangan dan energi). Sebagai acuan indikator inflasi',
  effectUSD: 'CORE CPI NAIK, EKONOMI NAIK, INFLASI NAIK, SUKU BUNGA NAIK, USD NAIK.',
  effectGold: 'TURUN'
}, {
  name: 'PPI',
  definition: 'Indikator perubahan harga bahan baku yg dibeli oleh produsen. Sebagai acuan indikator inflasi',
  effectUSD: 'PPI NAIK, EKONOMI NAIK, INFLASI NAIK, SUKU BUNGA NAIK, USD NAIK.',
  effectGold: 'TURUN'
}, {
  name: 'CORE PPI',
  definition: 'Indikator perubahan harga bahan baku yg dibeli oleh produsen (tidak termasuk energi). Sebagai acuan indikator inflasi',
  effectUSD: 'CORE PPI NAIK, EKONOMI NAIK, INFLASI NAIK, SUKU BUNGA NAIK, USD NAIK.',
  effectGold: 'TURUN'
}, {
  name: 'INDUSTRIAL PRODUCTIONS',
  definition: 'Tingkat volume produksi semua sektor (pabrik, pertambangan, perusahaan energi)',
  effectUSD: 'INDUSTRIAL PRODUCTION NAIK, EKONOMI NAIK, INFLASI NAIK, SUKU BUNGA NAIK, USD NAIK.',
  effectGold: 'TURUN'
}, {
  name: 'DURABLE GOODS',
  definition: 'Tingkat penjualan barang yg memiliki masa hidup 10 tahun atau lebih. Menunjukkan keyakinan masyarakat terhadap ekonomi kedepan',
  effectUSD: 'DURABLE GOODS NAIK, EKONOMI NAIK, INFLASI NAIK, SUKU BUNGA NAIK, USD NAIK.',
  effectGold: 'TURUN'
}, {
  name: 'TRADE BALANCE',
  definition: 'Besar net ekspor suatu negara = volume expor - volume impor',
  effectUSD: 'TRADE BALANCE NAIK, EKONOMI NAIK, INFLASI NAIK, SUKU BUNGA NAIK, USD NAIK.',
  effectGold: 'TURUN'
}, {
  name: 'BUILDING PERMITS',
  definition: 'Pertumbuhan perijinan pembangunan tempat tinggal/ perumahan',
  effectUSD: 'BUILDING PERMITS NAIK, EKONOMI NAIK, INFLASI NAIK, SUKU BUNGA NAIK, USD NAIK.',
  effectGold: 'TURUN'
}, {
  name: 'PENDING HOME SALES',
  definition: 'Jumlah pesanan (orderan) pembelian rumah/ apartemen/ tempat tinggal',
  effectUSD: 'PENDING HOME SALES NAIK, EKONOMI NAIK, INFLASI NAIK, SUKU BUNGA NAIK, USD NAIK.',
  effectGold: 'TURUN'
}, {
  name: 'HOUSING STARTS',
  definition: 'Jumlah pembangunan rumah baru',
  effectUSD: 'HOUSING STARTS NAIK, EKONOMI NAIK, INFLASI NAIK, SUKU BUNGA NAIK, USD NAIK.',
  effectGold: 'TURUN'
}, {
  name: 'EXISTING HOME SALES',
  definition: 'Jumlah volume transaksi penjualan rumah',
  effectUSD: 'EXISTING HOME SALES NAIK, EKONOMI NAIK, INFLASI NAIK, SUKU BUNGA NAIK, USD NAIK.',
  effectGold: 'TURUN'
}, {
  name: 'NEW HOME SALES',
  definition: 'Jumlah volume transaksi penjualan rumah BARU',
  effectUSD: 'NEW HOME SALES NAIK, EKONOMI NAIK, INFLASI NAIK, SUKU BUNGA NAIK, USD NAIK.',
  effectGold: 'TURUN'
}, {
  name: 'UNEMPLOYMENT RATE',
  definition: 'Tingkat pertumbuhan pengangguran',
  effectUSD: 'UNEMPLOYMENT RATE NAIK, EKONOMI TURUN, INFLASI TURUN, SUKU BUNGA TURUN, USD TURUN.',
  effectGold: 'NAIK'
}, {
  name: 'INITIAL JOBLESS CLAIMS',
  definition: 'Tunjangan sosial yg dibayarkan kepada pengangguran',
  effectUSD: 'INITIAL JOBLESS CLAIMS NAIK, EKONOMI TURUN, INFLASI TURUN, SUKU BUNGA TURUN, USD TURUN.',
  effectGold: 'NAIK'
}, {
  name: 'NONFARM PAYROLL',
  definition: 'Pertambahan tenaga kerja baru diluar sektor pertanian',
  effectUSD: 'NONFARM PAYROOL NAIK, EKONOMI NAIK, INFLASI NAIK, SUKU BUNGA NAIK, USD NAIK.',
  effectGold: 'TURUN'
}, {
  name: 'RETAIL SALES',
  definition: 'Tingkat penjualan barang retail di negara tersebut',
  effectUSD: 'RETAIL SALES NAIK, EKONOMI NAIK, INFLASI NAIK, SUKU BUNGA NAIK, USD NAIK.',
  effectGold: 'TURUN'
}, {
  name: 'FOMC MEETING',
  definition: 'Pertemuan Perwakilan Bank Sentral dari Negara Bagian di US untuk menyampaikan pandangan ekonomi US',
  effectUSD: 'SUKU BUNGA NAIK, USD NAIK',
  effectGold: 'TURUN'
}];
export function EconomicIndicators() {
  return <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden my-8">
      <div className="bg-gray-900 px-6 py-4 border-b border-gray-800 flex items-center justify-between">
        <h2 className="text-xl font-bold text-white uppercase tracking-wide">
          Indikator Ekonomi
        </h2>
        <Info className="text-gray-400 w-5 h-5" />
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 border-b">
            <tr>
              <th scope="col" className="px-6 py-3 font-bold w-1/6">
                Indikator
              </th>
              <th scope="col" className="px-6 py-3 font-bold w-2/6">
                Definisi
              </th>
              <th scope="col" className="px-6 py-3 font-bold w-2/6 text-blue-700">
                Efek ke Ekonomi (USD)
              </th>
              <th scope="col" className="px-6 py-3 font-bold w-1/6 text-yellow-700">
                Efek ke Emas
              </th>
            </tr>
          </thead>
          <tbody>
            {INDICATORS.map((item, index) => <tr key={index} className="bg-white border-b hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 font-bold text-gray-900">
                  {item.name}
                </td>
                <td className="px-6 py-4 text-gray-600">{item.definition}</td>
                <td className="px-6 py-4 text-blue-800 font-medium">
                  {item.effectUSD}
                </td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 rounded text-xs font-bold ${item.effectGold === 'NAIK' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                    {item.effectGold}
                  </span>
                </td>
              </tr>)}
          </tbody>
        </table>
      </div>
    </div>;
}