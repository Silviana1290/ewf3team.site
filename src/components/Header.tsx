import React, { useState } from 'react';
import { Menu, X, Search, Globe, User, LogOut } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

/* ======================
   Types
====================== */
interface HeaderProps {
  isScrolled: boolean;
  language: 'ID' | 'EN';
  onLanguageChange: (lang: 'ID' | 'EN') => void;
}

/* ======================
   Constants
====================== */
const NAV_ITEMS = [
  { id: 'market', label: { ID: 'Pasar', EN: 'Market' } },
  { id: 'economy', label: { ID: 'Ekonomi', EN: 'Economy' } },
  { id: 'commodity', label: { ID: 'Komoditas', EN: 'Commodity' } },
  { id: 'fiscal', label: { ID: 'Fiskal', EN: 'Fiscal' } },      // dipendekkan
  { id: 'calendar', label: { ID: 'Kalender', EN: 'Calendar' } },
  { id: 'global', label: { ID: 'Global', EN: 'Global' } },
  { id: 'analysis', label: { ID: 'Analisis', EN: 'Analysis' } }, // dipendekkan
  { id: 'utilities', label: { ID: 'Utilitas', EN: 'Utilities' } },
  { id: 'news', label: { ID: 'Arsip', EN: 'Archive' } },
  { id: 'glossary', label: { ID: 'Glosarium', EN: 'Glossary' } }
];

const UI_TEXT = {
  tagline: {
    ID: 'Memahami Pasar Secara Global',
    EN: 'Global Market Intelligence'
  },
  search: {
    ID: 'Cari berita & analisis...',
    EN: 'Search news & analysis...'
  },
  login: { ID: 'Masuk', EN: 'Login' },
  register: { ID: 'Daftar', EN: 'Register' },
  logout: { ID: 'Keluar', EN: 'Logout' }
};

const navBase =
  'relative px-3 py-2 text-sm font-medium whitespace-nowrap rounded-md transition-colors';
const navIdle = 'text-gray-700 hover:text-orange-600 hover:bg-orange-50';
const navActive = 'text-orange-600';

/* ======================
   Component
====================== */
export function Header({ isScrolled, language, onLanguageChange }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  const { user, logout, isAuthenticated } = useAuth();
  const location = useLocation();

  return (
    <>
      {/* ================= HEADER ================= */}
      <motion.header
        animate={{
          height: isScrolled ? 76 : 112,
          backdropFilter: isScrolled ? 'blur(8px)' : 'blur(0px)',
          backgroundColor: isScrolled ? 'rgba(255,255,255,0.9)' : '#ffffff'
        }}
        transition={{ duration: 0.25, ease: 'easeInOut' }}
        className="fixed top-0 inset-x-0 z-50 border-b border-gray-200"
      >
        <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
          {/* Logo (Clickable to Home) */}
          <Link to="/" className="group">
            <motion.div
              animate={{ scale: isScrolled ? 0.92 : 1 }}
              className="flex items-center gap-3 cursor-pointer"
            >
              <div className="flex items-center">
                <span className="text-3xl font-extrabold tracking-tight text-gray-900">
                  EWF
                </span>
                <span className="text-3xl font-extrabold tracking-tight text-orange-600">
                  PRO
                </span>
                <div className="ml-2 w-8 h-8 border-2 border-orange-600 rounded-full flex items-center justify-center">
                  <Globe className="w-4 h-4 text-orange-600" />
                </div>
              </div>

              {!isScrolled && (
                <p className="hidden lg:block text-xs uppercase tracking-wider text-gray-600 group-hover:text-gray-800 transition">
                  {UI_TEXT.tagline[language]}
                </p>
              )}
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-2 whitespace-nowrap">
            {NAV_ITEMS.map(item => {
              const isActive =
                location.pathname === `/${item.id}` ||
                (item.id === 'market' && location.pathname === '/');

              const content = (
                <span className="relative">
                  {item.label[language]}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-orange-600 rounded-full" />
                  )}
                </span>
              );

              return item.id === 'glossary' ? (
                <a
                  key={item.id}
                  href="https://www.equityworld-futures.com/index.php/id/edukasi/glosarium"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${navBase} ${navIdle}`}
                >
                  {content}
                </a>
              ) : (
                <Link
                  key={item.id}
                  to={`/${item.id}`}
                  className={`${navBase} ${isActive ? navActive : navIdle}`}
                >
                  {content}
                </Link>
              );
            })}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            {/* Search */}
            <button
              onClick={() => setSearchOpen(v => !v)}
              className="p-2 rounded-md text-gray-600 hover:text-orange-600 hover:bg-orange-50 transition"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Language */}
            <div className="hidden sm:flex bg-gray-100 p-1 rounded-md">
              {(['ID', 'EN'] as const).map(lang => (
                <button
                  key={lang}
                  onClick={() => onLanguageChange(lang)}
                  className={`px-3 py-1 text-sm rounded transition ${
                    language === lang
                      ? 'bg-white text-orange-600 shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>

            {/* Auth */}
            {isAuthenticated ? (
              <div className="relative hidden md:block">
                <button
                  onClick={() => setUserMenuOpen(v => !v)}
                  className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-orange-50 transition"
                >
                  <User className="w-4 h-4" />
                  <span className="text-sm font-medium">{user?.name}</span>
                </button>

                <AnimatePresence>
                  {userMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      className="absolute right-0 mt-2 w-52 bg-white border rounded-xl shadow-lg overflow-hidden"
                    >
                      <div className="px-4 py-3 border-b">
                        <p className="text-sm font-semibold">{user?.name}</p>
                        <p className="text-xs text-gray-500">{user?.email}</p>
                      </div>
                      <button
                        onClick={logout}
                        className="w-full px-4 py-3 flex items-center gap-2 text-sm hover:bg-orange-50 transition"
                      >
                        <LogOut className="w-4 h-4" />
                        {UI_TEXT.logout[language]}
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <div className="hidden md:flex gap-2">
                <Link
                  to="/login"
                  className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-orange-600 transition"
                >
                  {UI_TEXT.login[language]}
                </Link>
                <Link
                  to="/register"
                  className="px-4 py-2 text-sm font-semibold text-white bg-orange-600 hover:bg-orange-700 rounded-md transition"
                >
                  {UI_TEXT.register[language]}
                </Link>
              </div>
            )}

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileMenuOpen(v => !v)}
              className="lg:hidden p-2 rounded-md hover:bg-orange-50 transition"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <AnimatePresence>
          {searchOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="border-t bg-white/95 backdrop-blur"
            >
              <div className="max-w-7xl mx-auto px-4 py-4">
                <input
                  autoFocus
                  placeholder={UI_TEXT.search[language]}
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
