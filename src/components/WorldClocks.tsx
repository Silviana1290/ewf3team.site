import React, { useEffect, useState } from 'react';
import { Clock } from 'lucide-react';
export function WorldClocks() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);
  const formatTime = (offset: number) => {
    const utc = time.getTime() + time.getTimezoneOffset() * 60000;
    const newTime = new Date(utc + 3600000 * offset);
    return newTime.toLocaleTimeString('id-ID', {
      hour: '2-digit',
      minute: '2-digit'
    });
  };
  const formatDate = () => {
    return time.toLocaleDateString('en-GB', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };
  return <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-gray-600 bg-white py-2 px-4 border-b">
      <div className="flex items-center gap-2 font-medium text-gray-800">
        <Clock className="w-5 h-5 text-gray-500" />
        <span>{formatDate()}</span>
      </div>

      <div className="flex flex-wrap justify-center gap-6 md:ml-auto">
        <div className="flex flex-col items-center">
          <span className="text-xs text-gray-500 uppercase font-semibold">
            Jakarta
          </span>
          <span className="text-orange-600 font-bold text-lg">
            {formatTime(7)}
          </span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-xs text-gray-500 uppercase font-semibold">
            Tokyo
          </span>
          <span className="text-orange-600 font-bold text-lg">
            {formatTime(9)}
          </span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-xs text-gray-500 uppercase font-semibold">
            Hongkong
          </span>
          <span className="text-orange-600 font-bold text-lg">
            {formatTime(8)}
          </span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-xs text-gray-500 uppercase font-semibold">
            New York
          </span>
          <span className="text-orange-600 font-bold text-lg">
            {formatTime(-5)}
          </span>
        </div>
      </div>
    </div>;
}