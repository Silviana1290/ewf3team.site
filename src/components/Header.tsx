import React, { useState } from 'react';
import { Menu, X, Search, Globe, User, LogOut } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

/* =====================
   TYPES
===================== */
interface HeaderProps {
  isScrolled: boolean;
  language: 'ID' | 'EN';
  onLanguageChange: (lang: 'ID' | 'EN') => void;
}

/* =====================
   CONSTANTS
===================== */
const NAV_ITEMS = [
  { id: 'market', label: { ID: 'Pasar', EN: 'Market' } },
  { id: 'economy', label: { ID: 'Ekonomi', EN: 'Economy' } },
  { id: 'commodity', label: { ID: 'Komoditas', EN: 'Commodity' } },
  { id: 'fiscal', label: { ID: 'Fiskal', EN: 'Fiscal' } },
  { id: 'calendar', label: { ID: 'Kalender', EN: 'Calendar' } },
  { id: 'global', label: { ID: 'Global', EN: 'Global' } },
  { id: 'analysis', label: { ID: 'Analisis', EN: 'Analysis' } },
  { id: 'utilities', label: { ID: 'Utilitas', EN: 'Utilities' } },
  { id: 'news', label: { ID: 'Arsip Berita', EN: 'News' } },
  { id: 'glossary', label: { ID: 'Glosarium', EN: 'Glossary' } }
];

const UI_TEXT = {
  tagline: {
    ID: 'Memahami Pasar Secara Global',
    EN: 'Global Market Intelligence'
  },
  search: {
    ID: 'Cari berita dan analisis...',
    EN: 'Search news & analysis...'
  },
  login: { ID: 'Masuk', EN: 'Login' },
  register: { ID: 'Daftar', EN: 'Register' },
  logout: { ID: 'Keluar', EN: 'Logout' }
};

const navBaseClass =
  'px-3 py-2 text-sm font-medium whitespace-nowrap rounded-md transition-colors';

/* =====================
   COMPONENT
===================== */
export function Header({
  isScrolled,
  language,
  onLanguageChange
}: HeaderProps) {
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
          height: isScrolled ? 80 : 120,
          paddingTop: isScrolled ? 12 : 20,
          paddingBottom: isScrolled ? 12 : 20
        }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 inset-x-0 bg-white border-b border-gray-200 z-50 shadow-sm"
      >
        <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
          {/* ================= LOGO (CLICKABLE) ================= */}
          <Link to="/" className="block">
            <motion.div
              animate={{ scale: isScrolled ? 0.9 : 1 }}
              className="flex items-center gap-3 cursor-pointer hover:opacity-90 transition-opacity"
            >
              <div className="flex items-center">
                <span className="text-3xl font-bold text-gray-900">
                  EWF
                </span>
                <span className="text-3xl font-bold text-orange-600">
                  PRO
                </span>
                <div className="ml-2 w-8 h-8 border-2 border-orange-600 rounded-full flex items-center justify-center">
                  <Globe className="w-4 h-4 text-orange-600" />
                </div>
              </div>

              {!isScrolled && (
                <p className="hidden lg:block text-xs uppercase tracking-wide text-gray-600">
                  {UI_TEXT.tagline[language]}
                </p>
              )}
            </motion.div>
          </Link>

          {/* ================= DESKTOP NAV ================= */}
          <nav className="hidden lg:flex items-center gap-2 whitespace-nowrap">
            {NAV_ITEMS.map(item => {
              const isActive = location.pathname === `/${item.id}`;
              const navClass = `${navBaseClass} ${
                isActive
                  ? 'text-orange-600 bg-orange-50'
                  : 'text-gray-700 hover:text-orange-600 hover:bg-orange-50'
              }`;

              return item.id === 'glossary' ? (
                <a
                  key={item.id}
                  href="https://www.equityworld-futures.com/index.php/id/edukasi/glosarium"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={navClass}
                >
                  {item.label[language]}
                </a>
              ) : (
                <Link
                  key={item.id}
                  to={`/${item.id}`}
                  className={navClass}
                >
                  {item.label[language]}
                </Link>
              );
            })}
          </nav>

          {/* ================= ACTIONS ================= */}
          <div className="flex items-center gap-3">
            {/* Search */}
            <button
              onClick={() => setSearchOpen(v => !v)}
              className="p-2 rounded-md text-gray-600 hover:text-orange-600 hover:bg-orange-50"
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
                      ? 'bg-white text-orange-600 shadow'
                      : 'text-gray-600'
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
                  className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-orange-50"
                >
                  <User className="w-4 h-4" />
                  <span className="text-sm">{user?.name}</span>
                </button>

                <AnimatePresence>
                  {userMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow"
                    >
                      <div className="px-4 py-3 border-b">
                        <p className="text-sm font-medium">{user?.name}</p>
                        <p className="text-xs text-gray-500">
                          {user?.email}
                        </p>
                      </div>
                      <button
                        onClick={logout}
                        className="w-full px-4 py-2 flex items-center gap-2 text-sm hover:bg-orange-50"
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
                <Link to="/login" className="px-4 py-2 text-sm">
                  {UI_TEXT.login[language]}
                </Link>
                <Link
                  to="/register"
                  className="px-4 py-2 text-sm bg-orange-600 text-white rounded-md hover:bg-orange-700"
                >
                  {UI_TEXT.register[language]}
                </Link>
              </div>
            )}

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileMenuOpen(v => !v)}
              className="lg:hidden p-2"
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* ================= SEARCH BAR ================= */}
        <AnimatePresence>
          {searchOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="border-t bg-white"
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
