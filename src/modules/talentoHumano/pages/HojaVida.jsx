import React, { useState } from 'react';
import { Search, FileText, Download, ChevronDown, FileBarChart, BookOpen, GraduationCap, ArrowLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export const HojaVida = () => {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');
    const [showReportsMenu, setShowReportsMenu] = useState(false);

    const handleSearch = (e) => {
        e.preventDefault();
        console.log('Buscando colaborador:', searchTerm);
    };

    const handleGapReport = () => {
        console.log('Descargando reporte de brechas...');
    };

    const reports = [
        { id: 'R2', label: 'Reporte de competencias', icon: FileBarChart },
        { id: 'R3', label: 'Reporte consolidado de formación', icon: BookOpen },
        { id: 'R4', label: 'Reporte detallado de formación', icon: FileText },
        { id: 'R5', label: 'Reporte consolidado de educación', icon: GraduationCap },
        { id: 'R6', label: 'Reporte detallado de educación', icon: FileText },
    ];

    return (
        <div className="min-h-screen bg-gray-50/50 p-6 md:p-8">
            <div className="max-w-7xl mx-auto space-y-8">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <button
                        onClick={() => navigate(-1)}
                        className="p-2 bg-white text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full border border-slate-200 shadow-sm transition-all"
                    >
                        <ArrowLeft className="w-5 h-5" />
                    </button>
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
                            Hoja de Vida
                        </h1>
                        <p className="text-gray-500 mt-1 text-sm md:text-base">
                            Gestión y consulta de información de colaboradores
                        </p>
                    </div>
                </div>

                {/* Control Bar */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 sticky top-0 z-10 backdrop-blur-3xl bg-white/80">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">

                        {/* Search Bar */}
                        <form onSubmit={handleSearch} className="relative flex-1 max-w-2xl group">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400 group-focus-within:text-blue-500 transition-colors">
                                <Search className="h-5 w-5" />
                            </div>
                            <input
                                type="text"
                                className="block w-full pl-10 pr-3 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm outline-none bg-gray-50 focus:bg-white placeholder:text-gray-400"
                                placeholder="Buscar colaborador por nombre o cédula..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </form>

                        {/* Actions */}
                        <div className="flex flex-wrap items-center gap-3">
                            {/* Gap Report Button */}
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={handleGapReport}
                                className="flex items-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-sm shadow-blue-200 transition-all text-sm font-medium"
                            >
                                <Download className="h-4 w-4" />
                                <span>Reporte de brechas</span>
                            </motion.button>

                            {/* Reports Dropdown */}
                            <div className="relative">
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={() => setShowReportsMenu(!showReportsMenu)}
                                    onBlur={() => setTimeout(() => setShowReportsMenu(false), 200)}
                                    className="flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300 rounded-lg shadow-sm transition-all text-sm font-medium"
                                >
                                    <FileText className="h-4 w-4 text-gray-500" />
                                    <span>Reportes</span>
                                    <ChevronDown className={`h-4 w-4 text-gray-400 transition-transform duration-200 ${showReportsMenu ? 'rotate-180' : ''}`} />
                                </motion.button>

                                <AnimatePresence>
                                    {showReportsMenu && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                            transition={{ duration: 0.15 }}
                                            className="absolute right-0 mt-2 w-72 bg-white rounded-xl shadow-xl border border-gray-100 ring-1 ring-black/5 overflow-hidden z-50 origin-top-right"
                                        >
                                            <div className="py-2">
                                                <div className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider bg-gray-50/50">
                                                    Disponibles
                                                </div>
                                                {reports.map((report) => (
                                                    <button
                                                        key={report.id}
                                                        className="w-full flex items-center gap-3 px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors text-left group"
                                                        onClick={() => console.log(`Generando ${report.label}...`)}
                                                    >
                                                        <div className="p-2 bg-gray-50 rounded-lg group-hover:bg-white group-hover:shadow-sm transition-all">
                                                            <report.icon className="h-4 w-4 text-gray-500 group-hover:text-blue-600" />
                                                        </div>
                                                        <div className="flex flex-col">
                                                            <span className="font-medium">{report.id}</span>
                                                            <span className="text-xs text-gray-500 group-hover:text-blue-600/80 line-clamp-1">{report.label}</span>
                                                        </div>
                                                    </button>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content Area Placeholder */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="md:col-span-3 border-2 border-dashed border-gray-200 rounded-xl h-96 flex flex-col items-center justify-center text-gray-400 bg-white">
                        <Search className="h-12 w-12 mb-4 opacity-20" />
                        <p className="text-sm font-medium">Realiza una búsqueda para ver la información del colaborador</p>
                    </div>
                </div>
            </div>
        </div>
    );
};