import React from 'react';
import { Globe } from 'lucide-react';
interface FooterProps {
  language: 'ID' | 'EN';
}
export function Footer({
  language
}: FooterProps) {
  return <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-2xl font-bold">EWF</span>
              <span className="text-2xl font-bold text-orange-600">PRO</span>
              <div className="w-8 h-8 border-2 border-orange-600 rounded-full flex items-center justify-center">
                <Globe className="w-4 h-4 text-orange-600" />
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              {language === 'ID' ? 'Platform berita finansial terpercaya dengan update real-time dari sumber global terkemuka.' : 'Trusted financial news platform with real-time updates from leading global sources.'}
            </p>
            <p className="text-gray-500 text-xs">
              © 2025 EWFPRO.{' '}
              {language === 'ID' ? 'Hak Cipta Dilindungi.' : 'All rights reserved.'}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4">
              {language === 'ID' ? 'Navigasi' : 'Navigation'}
            </h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#market" className="hover:text-orange-600 transition-colors">
                  Market
                </a>
              </li>
              <li>
                <a href="#economy" className="hover:text-orange-600 transition-colors">
                  Economy
                </a>
              </li>
              <li>
                <a href="#commodity" className="hover:text-orange-600 transition-colors">
                  Commodity
                </a>
              </li>
              <li>
                <a href="#calendar" className="hover:text-orange-600 transition-colors">
                  Calendar
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4">
              {language === 'ID' ? 'Sumber Berita' : 'News Sources'}
            </h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>CNBC</li>
              <li>Reuters</li>
              <li>Investing.com</li>
              <li>Trading Economics</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>;
}