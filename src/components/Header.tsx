import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Menu, X, Globe, TrendingUp, Bell } from 'lucide-react';
import { WorldClocks } from './WorldClocks';
import { useScrollDirection } from '../hooks/useScrollDirection';
import { motion, AnimatePresence } from 'framer-motion';
interface HeaderProps {
  newNewsCount?: number;
  onRefreshNews?: () => void;
}
export function Header({
  newNewsCount = 0,
  onRefreshNews
}: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const scrollDirection = useScrollDirection();
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navItems = [{
    name: 'MARKET',
    path: '/market'
  }, {
    name: 'ECONOMY',
    path: '/economy'
  }, {
    name: 'COMMODITY',
    path: '/commodity'
  }, {
    name: 'FISCAL & MONETARY',
    path: '/fiscal-monetary'
  }, {
    name: 'CALENDAR',
    path: '/calendar'
  }, {
    name: 'GLOBAL',
    path: '/global'
  }, {
    name: 'MARKET ANALYSIS',
    path: '/analysis'
  }, {
    name: 'UTILITIES',
    path: '/utilities'
  }, {
    name: 'GLOSSARY',
    path: '/glossary'
  }];
  const isActive = (path: string) => location.pathname === path;
  // Determine header size based on scroll
  const isCompact = scrollDirection === 'down' && isScrolled;
  return <>
      {/* News Notification */}
      <AnimatePresence>
        {newNewsCount > 0 && <motion.div initial={{
        y: -100,
        opacity: 0
      }} animate={{
        y: 0,
        opacity: 1
      }} exit={{
        y: -100,
        opacity: 0
      }} className="fixed top-0 left-0 right-0 z-[60] bg-gradient-to-r from-[#FF6B00] to-orange-600 text-white py-3 px-4 shadow-lg">
            <div className="container mx-auto flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Bell className="w-5 h-5 animate-bounce" />
                <span className="font-semibold">
                  {newNewsCount} berita baru tersedia!
                </span>
              </div>
              <motion.button whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.95
          }} onClick={onRefreshNews} className="px-4 py-1.5 bg-white text-[#FF6B00] rounded-lg font-bold text-sm hover:bg-gray-100 transition-colors">
                Lihat Sekarang
              </motion.button>
            </div>
          </motion.div>}
      </AnimatePresence>

      <motion.header initial={false} animate={{
      y: scrollDirection === 'down' && isScrolled ? -10 : 0
    }} transition={{
      duration: 0.3,
      ease: 'easeInOut'
    }} className={`w-full bg-black text-white sticky top-0 z-50 shadow-lg transition-all duration-300 ${newNewsCount > 0 ? 'mt-12' : ''}`}>
        {/* Top Bar */}
        <motion.div animate={{
        height: isCompact ? 0 : 'auto',
        opacity: isCompact ? 0 : 1
      }} transition={{
        duration: 0.3
      }} className="overflow-hidden">
          <div className="container mx-auto px-4 h-10 flex items-center justify-between text-xs border-b border-gray-800">
            <div className="flex items-center gap-4">
              <span className="text-gray-400">
                The Investor Understanding News
              </span>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 cursor-pointer hover:text-[#FF6B00] transition-colors">
                <Globe className="w-3 h-3" />
                <span>ID</span>
              </div>
              <span className="text-gray-600">|</span>
              <div className="flex items-center gap-2 cursor-pointer text-gray-500 hover:text-[#FF6B00] transition-colors">
                <span>EN</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Main Header Content */}
        <div className="bg-white text-black">
          <motion.div animate={{
          paddingTop: isCompact ? '0.5rem' : '1rem',
          paddingBottom: isCompact ? '0.5rem' : '1rem'
        }} transition={{
          duration: 0.3
        }} className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
              {/* Logo */}
              <Link to="/" className="flex flex-col items-start group">
                <motion.div animate={{
                scale: isCompact ? 0.8 : 1
              }} transition={{
                duration: 0.3
              }} className="flex items-center gap-1">
                  <span className="text-3xl font-black tracking-tighter">
                    EWF
                  </span>
                  <span className="text-3xl font-black text-[#FF6B00]">
                    PRO
                  </span>
                  <div className="w-8 h-8 rounded-full border-2 border-[#FF6B00] flex items-center justify-center ml-1">
                    <Globe className="w-5 h-5 text-gray-700" />
                  </div>
                </motion.div>
                <motion.span animate={{
                fontSize: isCompact ? '8px' : '10px',
                opacity: isCompact ? 0.7 : 1
              }} className="tracking-[0.2em] font-bold text-gray-500 group-hover:text-[#FF6B00] transition-colors">
                  THE INVESTOR UNDERSTANDING NEWS
                </motion.span>
              </Link>

              {/* Banner Ad Area - Hidden when compact */}
              <AnimatePresence>
                {!isCompact && <motion.div initial={{
                opacity: 0,
                scale: 0.9
              }} animate={{
                opacity: 1,
                scale: 1
              }} exit={{
                opacity: 0,
                scale: 0.9
              }} className="hidden lg:block flex-1 mx-8 h-20 bg-gradient-to-r from-red-600 to-red-800 rounded relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-between px-8 text-white">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                          <TrendingUp className="w-6 h-6" />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-xs opacity-80">
                            LEARN & MAKE A RIGHT DECISION
                          </span>
                          <span className="text-2xl font-bold">
                            MARKET STUDIES
                          </span>
                        </div>
                      </div>
                      <div className="h-full w-1/3 bg-black/20 transform skew-x-12" />
                    </div>
                  </motion.div>}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>

        {/* Clocks & Auth Bar */}
        <AnimatePresence>
          {!isCompact && <motion.div initial={{
          height: 'auto',
          opacity: 1
        }} exit={{
          height: 0,
          opacity: 0
        }} transition={{
          duration: 0.3
        }} className="overflow-hidden">
              <WorldClocks />

              <div className="bg-white border-b border-gray-200 py-3 px-4">
                <div className="container mx-auto flex flex-wrap items-center justify-between gap-4">
                  <div className="flex gap-2">
                    <motion.button whileHover={{
                  scale: 1.05
                }} whileTap={{
                  scale: 0.95
                }} className="px-6 py-1.5 bg-[#D4AF37] hover:bg-[#b5952f] text-white text-sm font-bold rounded transition-colors shadow-sm">
                      Register
                    </motion.button>
                    <motion.button whileHover={{
                  scale: 1.05
                }} whileTap={{
                  scale: 0.95
                }} className="px-6 py-1.5 bg-[#FF6B00] hover:bg-[#e66000] text-white text-sm font-bold rounded transition-colors shadow-sm">
                      Login
                    </motion.button>
                  </div>

                  <div className="relative flex-1 max-w-md">
                    <input type="text" placeholder="Search news..." className="w-full pl-4 pr-10 py-1.5 bg-gray-100 border border-gray-200 rounded text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6B00] text-black" />
                    <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  </div>
                </div>
              </div>
            </motion.div>}
        </AnimatePresence>

        {/* Navigation */}
        <nav className="bg-black border-t border-gray-800">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-12">
              {/* Desktop Nav */}
              <div className="hidden lg:flex items-center gap-1">
                {navItems.map(item => <Link key={item.path} to={item.path} className={`px-3 py-3 text-xs font-bold transition-colors hover:text-[#FF6B00] ${isActive(item.path) ? 'text-[#FF6B00] border-b-2 border-[#FF6B00]' : 'text-gray-300'}`}>
                    {item.name}
                  </Link>)}
              </div>

              {/* Mobile Menu Button */}
              <button className="lg:hidden text-white p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>

          {/* Mobile Nav Dropdown */}
          <AnimatePresence>
            {isMenuOpen && <motion.div initial={{
            height: 0,
            opacity: 0
          }} animate={{
            height: 'auto',
            opacity: 1
          }} exit={{
            height: 0,
            opacity: 0
          }} className="lg:hidden bg-gray-900 border-t border-gray-800 overflow-hidden">
                {navItems.map(item => <Link key={item.path} to={item.path} className="block px-4 py-3 text-sm text-gray-300 hover:bg-gray-800 hover:text-[#FF6B00] border-b border-gray-800 last:border-0" onClick={() => setIsMenuOpen(false)}>
                    {item.name}
                  </Link>)}
              </motion.div>}
          </AnimatePresence>
        </nav>
      </motion.header>
    </>;
}