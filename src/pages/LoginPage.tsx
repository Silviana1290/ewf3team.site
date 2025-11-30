import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Lock, AlertCircle, LogIn } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';
interface LoginPageProps {
  language: 'ID' | 'EN';
}
export function LoginPage({
  language
}: LoginPageProps) {
  const navigate = useNavigate();
  const {
    login
  } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const success = await login(email, password);
      if (success) {
        navigate('/');
      } else {
        setError(language === 'ID' ? 'Email atau password salah' : 'Invalid email or password');
      }
    } catch (err) {
      setError(language === 'ID' ? 'Terjadi kesalahan. Silakan coba lagi.' : 'An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };
  return <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <motion.div initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} className="max-w-md w-full space-y-8">
        <div>
          <div className="flex justify-center">
            <div className="flex items-center">
              <span className="text-4xl font-bold text-gray-900">EWF</span>
              <span className="text-4xl font-bold text-orange-600">PRO</span>
            </div>
          </div>
          <h2 className="mt-6 text-center text-3xl font-bold text-gray-900">
            {language === 'ID' ? 'Masuk ke Akun Anda' : 'Sign in to your account'}
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            {language === 'ID' ? 'Atau' : 'Or'}{' '}
            <Link to="/register" className="font-medium text-orange-600 hover:text-orange-500">
              {language === 'ID' ? 'daftar akun baru' : 'create a new account'}
            </Link>
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {error && <motion.div initial={{
          opacity: 0,
          y: -10
        }} animate={{
          opacity: 1,
          y: 0
        }} className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start space-x-3">
              <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-red-800">{error}</p>
            </motion.div>}

          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input id="email" name="email" type="email" autoComplete="email" required value={email} onChange={e => setEmail(e.target.value)} className="appearance-none relative block w-full pl-10 pr-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent" placeholder={language === 'ID' ? 'Alamat Email' : 'Email address'} />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input id="password" name="password" type="password" autoComplete="current-password" required value={password} onChange={e => setPassword(e.target.value)} className="appearance-none relative block w-full pl-10 pr-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent" placeholder="Password" />
              </div>
            </div>
          </div>

          <div>
            <motion.button whileHover={{
            scale: 1.02
          }} whileTap={{
            scale: 0.98
          }} type="submit" disabled={loading} className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 disabled:opacity-50 disabled:cursor-not-allowed">
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <LogIn className="h-5 w-5 text-orange-500 group-hover:text-orange-400" />
              </span>
              {loading ? language === 'ID' ? 'Memproses...' : 'Processing...' : language === 'ID' ? 'Masuk' : 'Sign in'}
            </motion.button>
          </div>
        </form>

        <div className="text-center">
          <Link to="/" className="text-sm text-gray-600 hover:text-orange-600 transition-colors">
            {language === 'ID' ? '← Kembali ke Beranda' : '← Back to Home'}
          </Link>
        </div>
      </motion.div>
    </div>;
}