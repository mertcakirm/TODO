import { NavLink } from "react-router-dom";
import { CheckSquare, Flame, Sun, Moon } from "lucide-react";
import logo from '../assets/logo.png';
import useDarkMode from '../helpers/useDarkMode';

export default function Navbar() {
  const [theme, toggleTheme] = useDarkMode();

  return (
    <nav className="sticky top-0 z-10 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo & Başlık */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <div className="p-2 rounded-lg">
              <img src={logo} alt="Logo" className="w-8 h-8" />
            </div>
            <span className="font-bold text-xl tracking-tight text-slate-900 dark:text-white">
              GörevYönet
            </span>
          </div>

          {/* Navigasyon Linkleri ve Theme Toggle Button */}
          <div className="flex items-center space-x-1 sm:space-x-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-indigo-50 text-indigo-700 dark:bg-indigo-950/60 dark:text-indigo-400"
                    : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white"
                }`
              }
            >
              Ana Sayfa
            </NavLink>

            <NavLink
              to="/urgent"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-1 ${
                  isActive
                    ? "bg-red-50 text-red-700 dark:bg-red-950/60 dark:text-red-400"
                    : "text-slate-600 dark:text-slate-300 hover:bg-red-50 dark:hover:bg-red-950/40 hover:text-red-600 dark:hover:text-red-400"
                }`
              }
            >
              <Flame className="w-4 h-4" />
              Acil İşler
            </NavLink>

            {/* Dark Mode Değiştirici Buton */}
            <button
              onClick={toggleTheme}
              aria-label="Karanlık Mod Değiştir"
              className="p-2 rounded-md text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5 text-amber-400" />
              ) : (
                <Moon className="w-5 h-5 text-slate-600" />
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
