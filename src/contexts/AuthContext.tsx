import React, { useEffect, useState, createContext } from 'react';
interface User {
  id: string;
  email: string;
  name: string;
  registeredAt: Date;
}
interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  register: (email: string, password: string, name: string) => Promise<boolean>;
  logout: () => void;
  isAuthenticated: boolean;
}
export const AuthContext = createContext<AuthContextType | undefined>(undefined);
interface AuthProviderProps {
  children: ReactNode;
}
export function AuthProvider({
  children
}: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    // Check for existing session
    const storedUser = localStorage.getItem('ewfpro_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);
  const login = async (email: string, password: string): Promise<boolean> => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 500));
    // Get stored users
    const usersJson = localStorage.getItem('ewfpro_users');
    const users = usersJson ? JSON.parse(usersJson) : [];
    // Find user
    const foundUser = users.find((u: any) => u.email === email && u.password === password);
    if (foundUser) {
      const userData: User = {
        id: foundUser.id,
        email: foundUser.email,
        name: foundUser.name,
        registeredAt: new Date(foundUser.registeredAt)
      };
      setUser(userData);
      localStorage.setItem('ewfpro_user', JSON.stringify(userData));
      return true;
    }
    return false;
  };
  const register = async (email: string, password: string, name: string): Promise<boolean> => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 500));
    // Get stored users
    const usersJson = localStorage.getItem('ewfpro_users');
    const users = usersJson ? JSON.parse(usersJson) : [];
    // Check if user exists
    const existingUser = users.find((u: any) => u.email === email);
    if (existingUser) {
      return false;
    }
    // Create new user
    const newUser = {
      id: `user-${Date.now()}`,
      email,
      password,
      name,
      registeredAt: new Date().toISOString()
    };
    users.push(newUser);
    localStorage.setItem('ewfpro_users', JSON.stringify(users));
    // Auto login
    const userData: User = {
      id: newUser.id,
      email: newUser.email,
      name: newUser.name,
      registeredAt: new Date(newUser.registeredAt)
    };
    setUser(userData);
    localStorage.setItem('ewfpro_user', JSON.stringify(userData));
    return true;
  };
  const logout = () => {
    setUser(null);
    localStorage.removeItem('ewfpro_user');
  };
  return <AuthContext.Provider value={{
    user,
    login,
    register,
    logout,
    isAuthenticated: !!user
  }}>
      {children}
    </AuthContext.Provider>;
}