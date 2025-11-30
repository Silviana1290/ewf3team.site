import { useState, useEffect } from 'react';
import { NewsItem } from '../types/news';
const MOCK_NEWS: NewsItem[] = [{
  id: '1',
  title: 'Minyak Anjlok, Fokus Beralih Ke Pertemuan OPEC+',
  excerpt: 'Harga minyak mentah berjangka turun tipis pada hari Jumat karena investor mempertimbangkan premi risiko geopolitik minyak di tengah perundingan damai Rusia-Ukraina.',
  source: 'CNBC',
  category: 'Commodity',
  timestamp: new Date().toISOString(),
  imageUrl: 'https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?auto=format&fit=crop&q=80&w=800'
}, {
  id: '2',
  title: 'Saham Eropa Berakhir Menguat di Akhir Bulan yang Bergejolak',
  excerpt: 'Saham-saham Eropa berakhir di teritori positif pada hari Jumat karena investor mencerna akhir bulan yang bergejolak.',
  source: 'Reuters',
  category: 'Market',
  timestamp: new Date(Date.now() - 3600000).toISOString(),
  imageUrl: 'https://images.unsplash.com/photo-1611974765270-ca1258634369?auto=format&fit=crop&q=80&w=800'
}, {
  id: '3',
  title: 'Trump Klaim Income Tax Bisa Nol Berkat Pendapatan Tarif',
  excerpt: 'Presiden AS Donald Trump kembali memicu perdebatan ekonomi setelah menyatakan bahwa pemerintahannya dapat menghapus pajak penghasilan sepenuhnya.',
  source: 'Investing.com',
  category: 'Economy',
  timestamp: new Date(Date.now() - 7200000).toISOString(),
  imageUrl: 'https://images.unsplash.com/photo-1580519542036-c47de6196ba5?auto=format&fit=crop&q=80&w=800'
}, {
  id: '4',
  title: 'Inflasi AS Melambat, The Fed Diprediksi Tahan Suku Bunga',
  excerpt: 'Data terbaru menunjukkan inflasi AS mulai melambat sesuai ekspektasi pasar, memberikan sinyal kuat bagi The Fed.',
  source: 'Trading Economics',
  category: 'Fiscal',
  timestamp: new Date(Date.now() - 10800000).toISOString(),
  imageUrl: 'https://images.unsplash.com/photo-1526304640152-d4619684e484?auto=format&fit=crop&q=80&w=800'
}, {
  id: '5',
  title: 'Emas Menguat Menjelang Rilis Data Non-Farm Payroll',
  excerpt: 'Harga emas dunia kembali menguat di tengah ketidakpastian ekonomi global dan menanti data tenaga kerja AS.',
  source: 'EWF Pro',
  category: 'Commodity',
  timestamp: new Date(Date.now() - 14400000).toISOString(),
  imageUrl: 'https://images.unsplash.com/photo-1610375461246-83df859d849d?auto=format&fit=crop&q=80&w=800'
}, {
  id: '6',
  title: 'Bank Sentral Jepang Pertahankan Kebijakan Moneter Longgar',
  excerpt: 'Bank of Japan (BoJ) memutuskan untuk mempertahankan suku bunga rendah guna mendukung pemulihan ekonomi.',
  source: 'Reuters',
  category: 'Global',
  timestamp: new Date(Date.now() - 18000000).toISOString(),
  imageUrl: 'https://images.unsplash.com/photo-1542206395-9feb3edaa68d?auto=format&fit=crop&q=80&w=800'
}];
export function useRealTimeNews() {
  const [news, setNews] = useState<NewsItem[]>(MOCK_NEWS);
  const [loading, setLoading] = useState(false);

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      // In a real app, this would fetch new data
      // For now, we just update timestamps to make it look "live"
      setNews(prev => prev.map(item => ({
        ...item,
        timestamp: new Date(new Date(item.timestamp).getTime() + 1000).toISOString() // Fake update
      })));
    }, 60000);
    return () => clearInterval(interval);
  }, []);
  return {
    news,
    loading
  };
}