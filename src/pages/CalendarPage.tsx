import React, { useEffect, useState } from 'react';
import { fetchEconomicCalendar, EconomicEvent } from '../services/api';
import { motion } from 'framer-motion';
import { Calendar, Clock, TrendingUp, AlertCircle } from 'lucide-react';
interface CalendarPageProps {
  language: 'ID' | 'EN';
}
export function CalendarPage({
  language
}: CalendarPageProps) {
  const [events, setEvents] = useState<EconomicEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<'all' | 'high' | 'medium' | 'low'>('all');
  useEffect(() => {
    const loadEvents = async () => {
      setLoading(true);
      const data = await fetchEconomicCalendar();
      setEvents(data);
      setLoading(false);
    };
    loadEvents();
    const interval = setInterval(loadEvents, 60000); // Refresh every minute
    return () => clearInterval(interval);
  }, []);
  const filteredEvents = filter === 'all' ? events : events.filter(e => e.impact === filter);
  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'high':
        return 'text-red-600 bg-red-50';
      case 'medium':
        return 'text-yellow-600 bg-yellow-50';
      case 'low':
        return 'text-green-600 bg-green-50';
      default:
        return 'text-gray-600 bg-gray-50';
    }
  };
  const getImpactLabel = (impact: string) => {
    if (language === 'ID') {
      switch (impact) {
        case 'high':
          return 'Tinggi';
        case 'medium':
          return 'Sedang';
        case 'low':
          return 'Rendah';
        default:
          return impact;
      }
    }
    return impact.charAt(0).toUpperCase() + impact.slice(1);
  };
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
            {language === 'ID' ? 'Kalender Ekonomi' : 'Economic Calendar'}
          </h1>
          <p className="text-gray-600">
            {language === 'ID' ? 'Acara ekonomi penting dan rilis data' : 'Important economic events and data releases'}
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-2 mb-8">
          {['all', 'high', 'medium', 'low'].map(f => <button key={f} onClick={() => setFilter(f as any)} className={`px-4 py-2 rounded-lg font-medium transition-colors ${filter === f ? 'bg-orange-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
              {f === 'all' ? language === 'ID' ? 'Semua' : 'All' : getImpactLabel(f)}
            </button>)}
        </div>

        {/* Events List */}
        {loading ? <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600 mx-auto"></div>
          </div> : <div className="space-y-4">
            {filteredEvents.map((event, index) => <motion.div key={event.id} initial={{
          opacity: 0,
          x: -20
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          delay: index * 0.05
        }} className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getImpactColor(event.impact)}`}>
                        {getImpactLabel(event.impact)}
                      </span>
                      <span className="text-sm font-medium text-gray-500">
                        {event.country}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {event.event}
                    </h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>
                          {event.date.toLocaleDateString(language === 'ID' ? 'id-ID' : 'en-US')}
                        </span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{event.time}</span>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 md:w-96">
                    <div className="text-center">
                      <p className="text-xs text-gray-500 mb-1">
                        {language === 'ID' ? 'Aktual' : 'Actual'}
                      </p>
                      <p className="text-sm font-bold text-gray-900">
                        {event.actual}
                      </p>
                    </div>
                    <div className="text-center">
                      <p className="text-xs text-gray-500 mb-1">
                        {language === 'ID' ? 'Prakiraan' : 'Forecast'}
                      </p>
                      <p className="text-sm font-bold text-gray-900">
                        {event.forecast}
                      </p>
                    </div>
                    <div className="text-center">
                      <p className="text-xs text-gray-500 mb-1">
                        {language === 'ID' ? 'Sebelumnya' : 'Previous'}
                      </p>
                      <p className="text-sm font-bold text-gray-900">
                        {event.previous}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>)}
          </div>}

        {/* Info Box */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.3
      }} className="mt-12 bg-orange-50 border border-orange-200 rounded-lg p-6">
          <div className="flex items-start space-x-3">
            <AlertCircle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {language === 'ID' ? 'Tentang Kalender Ekonomi' : 'About Economic Calendar'}
              </h3>
              <p className="text-gray-700">
                {language === 'ID' ? 'Kalender ekonomi menampilkan acara dan rilis data ekonomi penting yang dapat mempengaruhi pasar keuangan. Data diperbarui secara real-time dari Trading Economics dan sumber terpercaya lainnya.' : 'The economic calendar shows important economic events and data releases that can affect financial markets. Data is updated in real-time from Trading Economics and other trusted sources.'}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>;
}