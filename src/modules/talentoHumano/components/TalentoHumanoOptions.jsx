import { FilePlus, Users, FileSignature } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const TalentoHumanoOptions = () => {
    const navigate = useNavigate();
    const options = [
        { title: 'Perfiles de Cargo', icon: FilePlus, color: 'text-indigo-600', bg: 'bg-indigo-50', page: 'perfiles-cargo' },
        { title: 'Hoja de Vida', icon: Users, color: 'text-blue-600', bg: 'bg-blue-50', page: 'hoja-de-vida' },
        { title: 'Organigrama', icon: FileSignature, color: 'text-orange-600', bg: 'bg-orange-50', page: 'organigrama' },
    ];

    return (
        <div className="grid grid-cols-1 gap-4 p-4">
            {options.map((opt, idx) => (
                <button
                    key={idx}
                    onClick={() => navigate(`/talentoHumano/${opt.page}`)}
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
