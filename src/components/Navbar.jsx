import { UserCircle, Bell, ChevronDown, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';

export const Navbar = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        console.log('Logout');
        navigate('/login');
    };
    return (
        <nav className="h-16 w-full bg-white/80 backdrop-blur-md border-b border-slate-200 px-4 md:px-6 flex items-center justify-between z-50 fixed top-0 left-0">
            {/* Brand / Logo */}
            <div className="flex items-center gap-3 min-w-0">
                <img src={logo} alt="Logo" className="h-16 w-auto object-contain flex-shrink-0" />
                <div className="hidden md:block h-6 w-px bg-slate-200 mx-2 flex-shrink-0" />
                <span className="hidden md:block font-semibold text-slate-700 tracking-tight truncate">
                    Clinova
                </span>
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center gap-2 md:gap-4 flex-shrink-0">
                {/* Notifications */}
                <button className="relative p-2 text-slate-400 hover:text-blue-600 transition-colors rounded-full hover:bg-white/50">
                    <Bell className="w-5 h-5" />
                    <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border border-white" />
                </button>

                {/* User Profile */}
                <div className="flex items-center gap-3 pl-2 md:pl-4 border-l border-slate-200">
                    <div className="text-right hidden sm:block">
                        <p className="text-sm font-semibold text-slate-900 leading-none truncate max-w-[150px] m-0">
                            Junior Arias
                        </p>
                        <p className="text-xs text-blue-600 font-medium mt-0.5">Administrador</p>
                    </div>

                    <button className="flex items-center gap-1 md:gap-2 text-slate-600 hover:text-slate-900 transition-colors p-1 rounded-full hover:bg-white/50">
                        <div className="h-8 w-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 border border-blue-200">
                            <UserCircle className="w-5 h-5" />
                        </div>
                        <ChevronDown className="w-4 h-4 text-slate-400" />
                    </button>
                    <button
                        onClick={handleLogout}
                        className="flex items-center gap-1 md:gap-2 text-slate-600 hover:text-slate-900 transition-colors p-1 rounded-full hover:bg-white/50">
                        <div className="h-8 w-8 bg-red-100 rounded-full flex items-center justify-center text-red-600 border border-red-200 cursor-pointer">
                            <LogOut className="w-5 h-5" />
                        </div>
                    </button>
                </div>
            </div>
        </nav>
    );
};
