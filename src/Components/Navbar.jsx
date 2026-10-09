import { NavLink } from "react-router-dom";
import { CheckSquare, Flame } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-10 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center gap-2">
            <div className="bg-indigo-600 p-2 rounded-lg">
              <CheckSquare className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-xl tracking-tight text-slate-900">GörevYönet</span>
          </div>
          <div className="flex space-x-1 sm:space-x-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive ? "bg-indigo-50 text-indigo-700" : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                }`
              }
            >
              Ana Sayfa
            </NavLink>
            <NavLink
              to="/urgent"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-1 ${
                  isActive ? "bg-red-50 text-red-700" : "text-slate-600 hover:bg-red-50 hover:text-red-600"
                }`
              }
            >
              <Flame className="w-4 h-4" />
              Acil İşler
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}
