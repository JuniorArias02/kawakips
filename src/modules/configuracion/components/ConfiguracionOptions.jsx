import { Users, Workflow, Layers, Share2, Briefcase } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../../router/routes.const';
export const CONFIGURACION_OPTIONS = [
    { title: 'Usuarios', icon: Users, color: 'text-indigo-600', bg: 'bg-indigo-50', page: ROUTES.CONFIGURACION.USUARIOS.path },
    { title: 'Procesos', icon: Workflow, color: 'text-orange-600', bg: 'bg-orange-50', page: ROUTES.CONFIGURACION.PROCESOS.path },
    { title: 'Macroprocesos', icon: Layers, color: 'text-purple-600', bg: 'bg-purple-50', page: ROUTES.CONFIGURACION.MACROPROCESOS.path },
    { title: 'Grupos de Distribución', icon: Share2, color: 'text-violet-600', bg: 'bg-violet-50', page: ROUTES.CONFIGURACION.GRUPOS_DISTRIBUCION.path },
    { title: 'Cargos', icon: Briefcase, color: 'text-rose-600', bg: 'bg-rose-50', page: ROUTES.CONFIGURACION.CARGOS.path }
];

export const ConfiguracionOptions = () => {
    const navigate = useNavigate();
    const options = CONFIGURACION_OPTIONS;

    return (
        <div className="grid grid-cols-1 gap-4 p-4">
            {options.map((opt, idx) => (
                <button
                    key={idx}
                    onClick={() => navigate(opt.page)}
                    className="flex items-center gap-4 p-4 bg-white border border-slate-100 rounded-xl shadow-sm hover:shadow-md hover:border-indigo-100 transition-all group text-left"
                >
                    <div className={`p-3 rounded-lg ${opt.bg} ${opt.color} group-hover:scale-110 transition-transform`}>
                        <opt.icon size={20} />
                    </div>
                    <div>
                        <h4 className="font-semibold text-slate-800">{opt.title}</h4>
                        <p className="text-xs text-slate-400">Gestionar {opt.title.toLowerCase()}</p>
                    </div>
                </button>
            ))}
        </div>
    );
};
