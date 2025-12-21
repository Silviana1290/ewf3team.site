import React, { useEffect, useState } from 'react';
import { Menu, X, Search, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { User, LogOut } from 'lucide-react';
interface HeaderProps {
  isScrolled: boolean;
  language: 'ID' | 'EN';
  onLanguageChange: (lang: 'ID' | 'EN') => void;
}
export function Header({
  isScrolled,
  language,
  onLanguageChange
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const {
    user,
    logout,
    isAuthenticated
  } = useAuth();
  const navItems = [{
    id: 'market',
    label: language === 'ID' ? 'Pasar' : 'Market'
  }, {
    id: 'economy',
    label: language === 'ID' ? 'Ekonomi' : 'Economy'
  }, {
    id: 'commodity',
    label: language === 'ID' ? 'Komoditas' : 'Commodity'
  }, {
    id: 'fiscal',
    label: language === 'ID' ? 'Fiskal & Moneter' : 'Fiscal & Monetary'
  }, {
    id: 'calendar',
    label: language === 'ID' ? 'Kalender' : 'Calendar'
  }, {
    id: 'global',
    label: 'Global'
  }, {
    id: 'analysis',
    label: language === 'ID' ? 'Analisis Pasar' : 'Market Analysis'
  }, {
    id: 'utilities',
    label: language === 'ID' ? 'Utilitas' : 'Utilities'
  }, {
    id: 'news',
    label: language === 'ID' ? 'Arsip Berita' : 'News Archive'
  }, {
    id: 'glossary',
    label: language === 'ID' ? 'Glosarium' : 'Glossary'
  }];
  return <>
      <motion.header initial={{
      y: 0
    }} animate={{
      height: isScrolled ? '80px' : '120px',
      paddingTop: isScrolled ? '12px' : '20px',
      paddingBottom: isScrolled ? '12px' : '20px'
    }} transition={{
      duration: 0.3,
      ease: 'easeInOut'
    }} className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex items-center justify-between h-full">
            {/* Logo */}
            <motion.div className="flex items-center space-x-3" animate={{
            scale: isScrolled ? 0.9 : 1
          }} transition={{
            duration: 0.3
          }}>
              <div className="flex items-center">
                <span className="text-2xl sm:text-3xl font-bold text-gray-900">
                  EWF
                </span>
                <span className="text-2xl sm:text-3xl font-bold text-orange-600">
                  PRO
                </span>
                <div className="ml-2 w-8 h-8 border-2 border-orange-600 rounded-full flex items-center justify-center">
                  <Globe className="w-4 h-4 text-orange-600" />
                </div>
              </div>
              {!isScrolled && <motion.p initial={{
              opacity: 0
            }} animate={{
              opacity: 1
            }} exit={{
              opacity: 0
            }} className="hidden lg:block text-xs text-gray-600 uppercase tracking-wide">
                  The Investor Understanding News
                </motion.p>}
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navItems.map(item => item.id === 'glossary' ? <a key={item.id} href="https://www.equityworld-futures.com/index.php/id/edukasi/glosarium" target="_blank" rel="noopener noreferrer" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-md transition-colors">
                    {item.label}
                  </a> : <Link key={item.id} to={`/${item.id}`} className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-md transition-colors">
                    {item.label}
                  </Link>)}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center space-x-3">
              {/* Search */}
              <button onClick={() => setSearchOpen(!searchOpen)} className="p-2 text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded-md transition-colors" aria-label="Search">
                <Search className="w-5 h-5" />
              </button>

              {/* Language Switcher */}
              <div className="hidden sm:flex items-center bg-gray-100 rounded-md p-1">
                <button onClick={() => onLanguageChange('ID')} className={`px-3 py-1 text-sm font-medium rounded transition-colors ${language === 'ID' ? 'bg-white text-orange-600 shadow-sm' : 'text-gray-600'}`}>
                  ID
                </button>
                <button onClick={() => onLanguageChange('EN')} className={`px-3 py-1 text-sm font-medium rounded transition-colors ${language === 'EN' ? 'bg-white text-orange-600 shadow-sm' : 'text-gray-600'}`}>
                  EN
                </button>
              </div>

              {/* Auth Buttons */}
              {isAuthenticated ? <div className="hidden md:flex items-center space-x-2 relative">
                  <button onClick={() => setUserMenuOpen(!userMenuOpen)} className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-md transition-colors">
                    <User className="w-4 h-4" />
                    <span>{user?.name}</span>
                  </button>

                  {userMenuOpen && <motion.div initial={{
                opacity: 0,
                y: -10
              }} animate={{
                opacity: 1,
                y: 0
              }} className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                      <div className="px-4 py-2 border-b border-gray-200">
                        <p className="text-sm font-medium text-gray-900">
                          {user?.name}
                        </p>
                        <p className="text-xs text-gray-500">{user?.email}</p>
                      </div>
                      <button onClick={() => {
                  logout();
                  setUserMenuOpen(false);
                }} className="w-full flex items-center space-x-2 px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors">
                        <LogOut className="w-4 h-4" />
                        <span>{language === 'ID' ? 'Keluar' : 'Logout'}</span>
                      </button>
                    </motion.div>}
                </div> : <div className="hidden md:flex items-center space-x-2">
                  <Link to="/login" className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-orange-600 transition-colors">
                    {language === 'ID' ? 'Masuk' : 'Login'}
                  </Link>
                  <Link to="/register" className="px-4 py-2 text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 rounded-md transition-colors">
                    {language === 'ID' ? 'Daftar' : 'Register'}
                  </Link>
                </div>}

              {/* Mobile Menu Button */}
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden p-2 text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded-md transition-colors" aria-label="Menu">
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <AnimatePresence>
          {searchOpen && <motion.div initial={{
          opacity: 0,
          y: -10
        }} animate={{
          opacity: 1,
          y: 0
        }} exit={{
          opacity: 0,
          y: -10
        }} className="absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-lg">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <input type="text" placeholder={language === 'ID' ? 'Cari berita...' : 'Search news...'} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent" autoFocus />
              </div>
            </motion.div>}
        </AnimatePresence>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && <motion.div initial={{
        opacity: 0,
        x: '100%'
      }} animate={{
        opacity: 1,
        x: 0
      }} exit={{
        opacity: 0,
        x: '100%'
      }} transition={{
        type: 'tween',
        duration: 0.3
      }} className="fixed inset-0 z-40 lg:hidden">
            <div className="fixed inset-0 bg-black bg-opacity-50" onClick={() => setMobileMenuOpen(false)} />
            <div className="fixed right-0 top-0 bottom-0 w-80 bg-white shadow-xl overflow-y-auto">
              <div className="p-6">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-xl font-bold text-gray-900">Menu</h2>
                  <button onClick={() => setMobileMenuOpen(false)} className="p-2 text-gray-600 hover:text-orange-600 rounded-md">
                    <X className="w-6 h-6" />
                  </button>
                </div>
                <nav className="space-y-2">
                  {navItems.map(item => item.id === 'glossary' ? <a key={item.id} href="https://www.equityworld-futures.com/index.php/id/edukasi/glosarium" target="_blank" rel="noopener noreferrer" className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-md transition-colors" onClick={() => setMobileMenuOpen(false)}>
                        {item.label}
                      </a> : <Link key={item.id} to={`/${item.id}`} className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-md transition-colors" onClick={() => setMobileMenuOpen(false)}>
                        {item.label}
                      </Link>)}
                </nav>
                <div className="mt-8 pt-8 border-t border-gray-200 space-y-3">
                  {isAuthenticated ? <>
                      <div className="px-4 py-3 bg-gray-50 rounded-md">
                        <p className="text-sm font-medium text-gray-900">
                          {user?.name}
                        </p>
                        <p className="text-xs text-gray-500">{user?.email}</p>
                      </div>
                      <button onClick={() => {
                  logout();
                  setMobileMenuOpen(false);
                }} className="w-full flex items-center justify-center space-x-2 px-4 py-3 text-base font-medium text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
                        <LogOut className="w-4 h-4" />
                        <span>{language === 'ID' ? 'Keluar' : 'Logout'}</span>
                      </button>
                    </> : <>
                      <Link to="/login" className="block w-full px-4 py-3 text-base font-medium text-center text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors" onClick={() => setMobileMenuOpen(false)}>
                        {language === 'ID' ? 'Masuk' : 'Login'}
                      </Link>
                      <Link to="/register" className="block w-full px-4 py-3 text-base font-medium text-center text-white bg-orange-600 hover:bg-orange-700 rounded-md transition-colors" onClick={() => setMobileMenuOpen(false)}>
                        {language === 'ID' ? 'Daftar' : 'Register'}
                      </Link>
                    </>}
                </div>
              </div>
            </div>
          </motion.div>}
      </AnimatePresence>
    </>;
}
