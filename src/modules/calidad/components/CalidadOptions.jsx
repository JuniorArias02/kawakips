import { ClipboardCheck, AlertTriangle, BarChart3, FileText, FilePlus, FileCheck, Trash2, List, Globe, PenTool, BookOpen } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const CalidadOptions = () => {
    const navigate = useNavigate();
    const options = [
        { title: 'Tipos de Documento', icon: FileText, color: 'text-indigo-600', bg: 'bg-indigo-50', page: 'tipos-documento' },
        { title: 'Solicitar Documento', icon: FilePlus, color: 'text-blue-600', bg: 'bg-blue-50', page: 'solicitar-documento' },
        { title: 'Revisión por documento', icon: FileCheck, color: 'text-emerald-600', bg: 'bg-emerald-50', page: 'revision-documento' },
        { title: 'Reportes', icon: BarChart3, color: 'text-violet-600', bg: 'bg-violet-50', page: 'reportes' },
        { title: 'Papelera de Reciclaje', icon: Trash2, color: 'text-red-600', bg: 'bg-red-50', page: 'papelera-reciclaje' },
        { title: 'Listado único', icon: List, color: 'text-slate-600', bg: 'bg-slate-50', page: 'listado-unico' },
        { title: 'Documentos Externos', icon: Globe, color: 'text-cyan-600', bg: 'bg-cyan-50', page: 'documentos-externos' },
        { title: 'Diligenciar Formato', icon: PenTool, color: 'text-amber-600', bg: 'bg-amber-50', page: 'diligenciar-formato' },
        { title: 'Definiciones', icon: BookOpen, color: 'text-fuchsia-600', bg: 'bg-fuchsia-50', page: 'definiciones' },
    ];

    return (
        <div className="grid grid-cols-1 gap-4 p-4">
            {options.map((opt, idx) => (
                <button
                    key={idx}
                    onClick={() => navigate(`/calidad/${opt.page}`)}
                    className="flex items-center gap-4 p-4 bg-white border border-slate-100 rounded-xl shadow-sm hover:shadow-md hover:border-emerald-100 transition-all group text-left"
                >
                    <div className={`p-3 rounded-lg ${opt.bg} ${opt.color} group-hover:scale-110 transition-transform`}>
                        <opt.icon size={20} />
                    </div>
                    <div>
                        <h4 className="font-semibold text-slate-800">{opt.title}</h4>
                        <p className="text-xs text-slate-400">Ver panel de {opt.title.toLowerCase()}</p>
                    </div>
                </button>
            ))}
        </div>
    );
};
