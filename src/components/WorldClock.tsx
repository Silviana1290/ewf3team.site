import React, { useEffect, useState } from 'react';
import { Clock } from 'lucide-react';
interface ClockData {
  city: string;
  timezone: string;
  time: string;
}
export function WorldClock() {
  const [clocks, setClocks] = useState<ClockData[]>([{
    city: 'Jakarta',
    timezone: 'Asia/Jakarta',
    time: ''
  }, {
    city: 'Tokyo',
    timezone: 'Asia/Tokyo',
    time: ''
  }, {
    city: 'Hongkong',
    timezone: 'Asia/Hong_Kong',
    time: ''
  }, {
    city: 'New York',
    timezone: 'America/New_York',
    time: ''
  }]);
  useEffect(() => {
    const updateTimes = () => {
      setClocks(prevClocks => prevClocks.map(clock => ({
        ...clock,
        time: new Date().toLocaleTimeString('en-US', {
          timeZone: clock.timezone,
          hour: '2-digit',
          minute: '2-digit',
          hour12: false
        })
      })));
    };
    updateTimes();
    const interval = setInterval(updateTimes, 1000);
    return () => clearInterval(interval);
  }, []);
  return <div className="bg-gray-50 border-b border-gray-200 py-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center space-x-8 overflow-x-auto">
          <Clock className="w-4 h-4 text-gray-400 flex-shrink-0" />
          {clocks.map(clock => <div key={clock.city} className="flex items-center space-x-2 flex-shrink-0">
              <span className="text-sm font-medium text-gray-700">
                {clock.city}
              </span>
              <span className="text-sm font-bold text-orange-600">
                {clock.time}
              </span>
            </div>)}
        </div>
      </div>
    </div>;
}