import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, LogOut } from 'lucide-react'

const NAV_ITEMS = [
  { id: '', label: { id: 'Beranda', en: 'Home' } },
  { id: 'about', label: { id: 'Tentang', en: 'About' } },
  { id: 'services', label: { id: 'Layanan', en: 'Services' } },
  { id: 'news', label: { id: 'Berita', en: 'News' } },
  { id: 'contact', label: { id: 'Kontak', en: 'Contact' } },
  { id: 'glossary', label: { id: 'Glosarium', en: 'Glossary' } }
]

const UI_TEXT = {
  login: { id: 'Masuk', en: 'Login' },
  register: { id: 'Daftar', en: 'Register' },
  logout: { id: 'Keluar', en: 'Logout' }
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [language] = useState<'id' | 'en'>('id')

  // SIMULASI AUTH (ganti dengan context / redux / auth asli)
  const isAuthenticated = false
  const logout = () => console.log('logout')

  const navigate = useNavigate()

  return (
    <>
      {/* ================= HEADER ================= */}
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="sticky top-0 z-50 bg-white border-b"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="h-16 flex items-center justify-between">
            
            {/* LOGO */}
            <Link
              to="/"
              className="flex items-center gap-2 font-bold text-lg text-gray-900"
            >
              <img
                src="/logo-ewf.png"
                alt="EWF"
                className="h-8 w-auto"
              />
              <span className="hidden sm:block">Equity World Futures</span>
            </Link>

            {/* NAV DESKTOP */}
            <nav className="hidden lg:flex items-center gap-6">
              {NAV_ITEMS.map(item =>
                item.id === 'glossary' ? (
                  <a
                    key={item.id}
                    href="https://www.equityworld-futures.com/index.php/id/edukasi/glosarium"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-gray-700 hover:text-orange-600"
                  >
                    {item.label[language]}
                  </a>
                ) : (
                  <Link
                    key={item.id}
                    to={`/${item.id}`}
                    className="text-sm font-medium text-gray-700 hover:text-orange-600"
                  >
                    {item.label[language]}
                  </Link>
                )
              )}
            </nav>

            {/* CTA DESKTOP */}
            <div className="hidden lg:flex items-center gap-3">
              {!isAuthenticated ? (
                <>
                  <Link
                    to="/login"
                    className="px-4 py-2 text-sm font-medium border rounded-lg hover:bg-gray-100"
                  >
                    {UI_TEXT.login[language]}
                  </Link>
                  <Link
                    to="/register"
                    className="px-4 py-2 text-sm font-semibold text-white bg-orange-600 rounded-lg hover:bg-orange-700"
                  >
                    {UI_TEXT.register[language]}
                  </Link>
                </>
              ) : (
                <button
                  onClick={logout}
                  className="flex items-center gap-2 px-4 py-2 border rounded-lg"
                >
                  <LogOut className="w-4 h-4" />
                  {UI_TEXT.logout[language]}
                </button>
              )}
            </div>

            {/* HAMBURGER */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2 rounded-md hover:bg-gray-100"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </motion.header>

      {/* ================= MOBILE SIDEBAR ================= */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            {/* OVERLAY */}
            <div
              className="absolute inset-0 bg-black/50"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* SIDEBAR */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3 }}
              className="absolute right-0 top-0 h-full w-80 bg-white shadow-xl flex flex-col"
            >
              {/* HEADER */}
              <div className="flex items-center justify-between px-6 py-4 border-b">
                <span className="font-bold text-lg">Menu</span>
                <button onClick={() => setMobileMenuOpen(false)}>
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* MENU */}
              <nav className="flex-1 px-4 py-4 space-y-1">
                {NAV_ITEMS.map(item =>
                  item.id === 'glossary' ? (
                    <a
                      key={item.id}
                      href="https://www.equityworld-futures.com/index.php/id/edukasi/glosarium"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-4 py-3 rounded-lg text-gray-700 hover:bg-orange-50"
                    >
                      {item.label[language]}
                    </a>
                  ) : (
                    <Link
                      key={item.id}
                      to={`/${item.id}`}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-4 py-3 rounded-lg text-gray-700 hover:bg-orange-50"
                    >
                      {item.label[language]}
                    </Link>
                  )
                )}
              </nav>

              {/* CTA MOBILE */}
              <div className="border-t px-4 py-4 space-y-3">
                {!isAuthenticated ? (
                  <>
                    <Link
                      to="/login"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block w-full text-center px-4 py-3 border rounded-lg"
                    >
                      {UI_TEXT.login[language]}
                    </Link>
                    <Link
                      to="/register"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block w-full text-center px-4 py-3 bg-orange-600 text-white rounded-lg"
                    >
                      {UI_TEXT.register[language]}
                    </Link>
                  </>
                ) : (
                  <button
                    onClick={() => {
                      logout()
                      setMobileMenuOpen(false)
                    }}
                    className="w-full flex items-center justify-center gap-2 px-4 py-3 border rounded-lg"
                  >
                    <LogOut className="w-4 h-4" />
                    {UI_TEXT.logout[language]}
                  </button>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
