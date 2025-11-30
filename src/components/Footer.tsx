import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
export function Footer() {
  return <footer className="bg-black text-white pt-16 pb-8 border-t-4 border-[#FF6B00]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-1 mb-4">
              <span className="text-3xl font-black tracking-tighter">EWF</span>
              <span className="text-3xl font-black text-[#FF6B00]">PRO</span>
            </div>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Platform berita finansial terdepan yang menyajikan update pasar
              terkini, analisis mendalam, dan data ekonomi real-time untuk
              membantu keputusan investasi Anda.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-8 h-8 rounded bg-gray-800 flex items-center justify-center hover:bg-[#FF6B00] transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded bg-gray-800 flex items-center justify-center hover:bg-[#FF6B00] transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded bg-gray-800 flex items-center justify-center hover:bg-[#FF6B00] transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded bg-gray-800 flex items-center justify-center hover:bg-[#FF6B00] transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-b border-gray-800 pb-2 inline-block">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link to="/market" className="hover:text-[#FF6B00] transition-colors">
                  Market News
                </Link>
              </li>
              <li>
                <Link to="/economy" className="hover:text-[#FF6B00] transition-colors">
                  Economy Updates
                </Link>
              </li>
              <li>
                <Link to="/commodity" className="hover:text-[#FF6B00] transition-colors">
                  Commodities
                </Link>
              </li>
              <li>
                <Link to="/calendar" className="hover:text-[#FF6B00] transition-colors">
                  Economic Calendar
                </Link>
              </li>
              <li>
                <Link to="/glossary" className="hover:text-[#FF6B00] transition-colors">
                  Glossary
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-b border-gray-800 pb-2 inline-block">
              Contact Us
            </h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#FF6B00] flex-shrink-0" />
                <span>
                  Equity Tower Level 35,
                  <br />
                  SCBD Lot 9, Jl. Jend. Sudirman Kav. 52-53,
                  <br />
                  Jakarta 12190
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#FF6B00] flex-shrink-0" />
                <span>+62 21 2903 5555</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#FF6B00] flex-shrink-0" />
                <span>support@ewfpro.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-b border-gray-800 pb-2 inline-block">
              Newsletter
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              Dapatkan update berita pasar terbaru langsung di inbox Anda setiap
              pagi.
            </p>
            <form className="flex flex-col gap-2">
              <input type="email" placeholder="Email address" className="bg-gray-800 border border-gray-700 text-white px-4 py-2 rounded focus:outline-none focus:border-[#FF6B00]" />
              <button className="bg-[#FF6B00] hover:bg-[#e66000] text-white font-bold py-2 rounded transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; 2025 EWF Pro. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white">
              Disclaimer
            </a>
          </div>
        </div>
      </div>
    </footer>;
}