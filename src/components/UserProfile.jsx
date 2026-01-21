import { useState, useEffect, useRef } from 'react';
import { UserCircle, ChevronDown } from 'lucide-react';

export const UserProfile = ({ name = "Junior Arias", role = "Administrador", onClick }) => {
    const [showInfo, setShowInfo] = useState(false);
    const timeoutRef = useRef(null);

    const handleMouseEnter = () => {
        // Clear any existing timeout to reset the timer if user hovers again
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }

        setShowInfo(true);

        // Set timer to hide after 3 seconds
        timeoutRef.current = setTimeout(() => {
            setShowInfo(false);
        }, 3000);
    };

    // Cleanup on unmount
    useEffect(() => {
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, []);

    return (
        <div
            className="flex items-center gap-2 group cursor-pointer"
            onMouseEnter={handleMouseEnter}
            onClick={onClick}
        >
            {/* Avatar Circle - Always visible */}
            <div className="relative z-10 h-10 w-10 bg-gradient-to-tr from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white shadow-blue-200 shadow-lg ring-2 ring-white transition-transform duration-300 group-hover:scale-105">
                <UserCircle className="w-6 h-6" />
            </div>

            {/* Expandable Info Section */}
            <div
                className={`
                    flex items-center  rounded-r-full pl-3 pr-4 py-1.5 -ml-4
                    transition-all duration-500 ease-out overflow-hidden
                    ${showInfo ? 'w-auto opacity-100 translate-x-0' : 'w-0 opacity-0 -translate-x-4 border-transparent'}
                `}
            >
                <div className="flex flex-col min-w-[max-content] ml-2">
                    <p className="text-sm font-bold text-slate-800 leading-none">
                        {name}
                    </p>
                    <p className="text-[10px] text-blue-600 font-semibold mt-0.5 uppercase tracking-wider">
                        {role}
                    </p>
                </div>
            </div>
        </div>
    );
};
