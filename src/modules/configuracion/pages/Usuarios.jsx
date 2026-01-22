import { useState, useMemo, useEffect } from 'react';
import { ArrowLeft, Search, Settings, ChevronLeft, ChevronRight, IdCard, Filter, Plus, FileText, User as UserIcon, Briefcase, Eye, BarChart2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { CreateUsuario } from '../components/CreateUsuario';
import { UserDetailModal } from '../components/UserDetailModal';
import { UserDocumentStatsModal } from '../components/UserDocumentStatsModal';
import { UsuariosService } from '../services/usuarios.service';

const MOCK_USERS = Array.from({ length: 8 }, (_, i) => ({
    id: i + 1,
    cedula: `USER${i + 1}`,
    role: ['Administrador', 'Funcionario', 'Contratista'][i % 3],
    persona: {
        tipo_documento: 1, // CC
        numero_documento: 1000000 + i,
        primer_nombre: ['Juan', 'Maria', 'Pedro', 'Ana', 'Luis', 'Sofia', 'Carlos', 'Laura'][i],
        segundo_nombre: i % 2 === 0 ? 'Antonio' : '',
        primer_apellido: ['Perez', 'Gomez', 'Rodriguez', 'Martinez', 'Lopez', 'Diaz', 'Garcia', 'Torres'][i],
        segundo_apellido: i % 2 === 0 ? 'Silva' : 'Ruiz',
        fecha_creacion: '2024-01-15',
        direccion_residencia: 'Av. Siempre Viva 123',
        numero_telefono: 3001234567,
        lugar_nacimiento: 'Bogotá D.C.',
        correo_electronico: `usuario${i + 1}@kawak.com.co`
    }
}));

const TIPO_DOC_MAP = {
    1: 'CC',
    2: 'TI',
    3: 'CE',
    4: 'PA'
};

export const Usuarios = () => {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

    // New Modals State
    const [selectedUser, setSelectedUser] = useState(null);
    const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
    const [isStatsModalOpen, setIsStatsModalOpen] = useState(false);

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchUsers = async () => {
        setLoading(true);
        try {
            await new Promise(resolve => setTimeout(resolve, 800));
            setUsers(MOCK_USERS);
        } catch (error) {
            console.error("Failed to fetch users", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    // Filter and Pagination
    const filteredData = useMemo(() => {
        if (!users) return [];
        return users.filter(user => {
            if (!user.persona) return false;
            const fullName = `${user.persona.primer_nombre} ${user.persona.segundo_nombre || ''} ${user.persona.primer_apellido} ${user.persona.segundo_apellido || ''}`.toLowerCase();
            const docNum = user.persona.numero_documento.toString();
            const role = user.role?.toLowerCase() || '';
            const search = searchTerm.toLowerCase();

            return fullName.includes(search) || docNum.includes(search) || role.includes(search);
        });
    }, [searchTerm, users]);

    const totalPages = Math.ceil(filteredData.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentItems = filteredData.slice(startIndex, startIndex + itemsPerPage);

    const handlePageChange = (newPage) => {
        if (newPage >= 1 && newPage <= totalPages) {
            setCurrentPage(newPage);
        }
    };

    const handleViewDetails = (user) => {
        setSelectedUser(user);
        setIsDetailModalOpen(true);
    };

    const handleViewStats = (user) => {
        setSelectedUser(user);
        setIsStatsModalOpen(true);
    };

    return (
        <div className="min-h-screen bg-slate-50/50 p-6 md:p-8 animate-fade-in">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                <div className="flex items-center gap-4">
                    <button
                        onClick={() => navigate(-1)}
                        className="p-2 bg-white text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full border border-slate-200 shadow-sm transition-all"
                    >
                        <ArrowLeft className="w-5 h-5" />
                    </button>
                    <div>
                        <h1 className="text-2xl font-bold text-slate-800 tracking-tight">Usuarios</h1>
                        <p className="text-sm text-slate-500 font-medium">Gestión de usuarios y personal</p>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <button className="flex items-center gap-2 px-4 py-2 bg-white text-slate-600 border border-slate-200 rounded-lg shadow-sm hover:bg-slate-50 hover:text-slate-900 transition-all font-medium text-sm">
                        <Settings className="w-4 h-4" />
                        <span>Configuración</span>
                    </button>
                    <button
                        onClick={() => setIsCreateModalOpen(true)}
                        className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-all font-medium text-sm"
                    >
                        <Plus className="w-4 h-4" />
                        <span>Crear Persona</span>
                    </button>
                </div>
            </div>

            {/* Table Container */}
            <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/60 border border-slate-100 overflow-hidden">

                {/* Controls Bar */}
                <div className="p-5 border-b border-slate-100 flex flex-col sm:flex-row gap-4 justify-between items-center bg-white">
                    <div className="relative w-full sm:w-96">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input
                            type="text"
                            placeholder="Buscar por nombre, documento o rol..."
                            value={searchTerm}
                            onChange={(e) => {
                                setSearchTerm(e.target.value);
                                setCurrentPage(1);
                            }}
                            className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-slate-400"
                        />
                    </div>

                    <div className="flex items-center gap-3 w-full sm:w-auto">
                        <div className="flex items-center gap-2 text-sm text-slate-500">
                            <span>Mostrar:</span>
                            <select
                                value={itemsPerPage}
                                onChange={(e) => {
                                    setItemsPerPage(Number(e.target.value));
                                    setCurrentPage(1);
                                }}
                                className="bg-slate-50 border border-slate-200 rounded-md py-1.5 px-3 text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-sm font-medium cursor-pointer"
                            >
                                <option value={10}>10</option>
                                <option value={20}>20</option>
                                <option value={50}>50</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Table */}
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="bg-slate-50/80 border-b border-slate-100">
                                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Tipo Doc</th>
                                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">No. Documento</th>
                                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Nombres</th>
                                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Apellidos</th>
                                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Rol / Cargo</th>
                                <th className="px-6 py-4 text-right text-xs font-semibold text-slate-500 uppercase tracking-wider">Acciones</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {loading ? (
                                <tr>
                                    <td colSpan="6" className="px-6 py-12 text-center text-slate-400">
                                        Cargando usuarios...
                                    </td>
                                </tr>
                            ) : currentItems.map((user) => (
                                <tr key={user.id} className="hover:bg-blue-50/30 transition-colors group">
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className="text-sm font-bold text-slate-700 bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200">
                                            {TIPO_DOC_MAP[user.persona?.tipo_documento] || user.persona?.tipo_documento}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center gap-2 text-slate-700">
                                            <IdCard className="w-4 h-4 text-slate-400" />
                                            <span className="text-sm font-medium">{user.persona?.numero_documento}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center gap-3">
                                            <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xs uppercase">
                                                {user.persona?.primer_nombre?.[0]}{user.persona?.segundo_nombre?.[0]}
                                            </div>
                                            <span className="text-sm font-medium text-slate-700">
                                                {user.persona?.primer_nombre} {user.persona?.segundo_nombre}
                                            </span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className="text-sm font-medium text-slate-700">
                                            {user.persona?.primer_apellido} {user.persona?.segundo_apellido}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center gap-2">
                                            <Briefcase className="w-3.5 h-3.5 text-slate-400" />
                                            <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${user.role === 'Administrador' ? 'bg-purple-100 text-purple-700 border-purple-200' :
                                                user.role === 'Funcionario' ? 'bg-emerald-100 text-emerald-700 border-emerald-200' :
                                                    'bg-amber-100 text-amber-700 border-amber-200'
                                                }`}>
                                                {user.role || 'Sin Rol'}
                                            </span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                        <div className="flex items-center justify-end gap-2">
                                            <button
                                                onClick={() => handleViewDetails(user)}
                                                className="p-1.5 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all"
                                                title="Ver detalle completo"
                                            >
                                                <Eye className="w-4 h-4" />
                                            </button>
                                            <button
                                                onClick={() => handleViewStats(user)}
                                                className="p-1.5 text-slate-400 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-all"
                                                title="Estadísticas documentales"
                                            >
                                                <BarChart2 className="w-4 h-4" />
                                            </button>
                                            <button className="p-1.5 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all text-xs font-semibold px-2">
                                                Editar
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                            {!loading && currentItems.length === 0 && (
                                <tr>
                                    <td colSpan="6" className="px-6 py-12 text-center text-slate-400">
                                        <div className="flex flex-col items-center justify-center gap-2">
                                            <Filter className="w-8 h-8 opacity-20" />
                                            <p>No se encontraron usuarios.</p>
                                        </div>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                <div className="bg-white px-6 py-4 border-t border-slate-100 flex items-center justify-between">
                    <p className="text-sm text-slate-500">
                        Mostrando <span className="font-medium text-slate-900">{filteredData.length > 0 ? startIndex + 1 : 0}</span> a <span className="font-medium text-slate-900">{Math.min(startIndex + itemsPerPage, filteredData.length)}</span> de <span className="font-medium text-slate-900">{filteredData.length}</span> resultados
                    </p>
                    <div className="flex items-center gap-1">
                        <button
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                            className="p-2 rounded-md hover:bg-slate-100 text-slate-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>
                        <div className="flex items-center px-2">
                            {Array.from({ length: totalPages }, (_, i) => i + 1)
                                .filter(page => page === 1 || page === totalPages || Math.abs(page - currentPage) <= 1)
                                .map((page, index, array) => (
                                    <div key={page} className="flex items-center">
                                        {index > 0 && array[index - 1] !== page - 1 && <span className="px-2 text-slate-400">...</span>}
                                        <button
                                            onClick={() => handlePageChange(page)}
                                            className={`
                                                min-w-[32px] h-8 flex items-center justify-center rounded-md text-sm font-medium transition-all mx-0.5
                                                ${currentPage === page
                                                    ? 'bg-blue-600 text-white shadow-md shadow-blue-200'
                                                    : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'}
                                            `}
                                        >
                                            {page}
                                        </button>
                                    </div>
                                ))
                            }
                        </div>
                        <button
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                            className="p-2 rounded-md hover:bg-slate-100 text-slate-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>

            <CreateUsuario
                isOpen={isCreateModalOpen}
                onClose={() => setIsCreateModalOpen(false)}
                onSaved={fetchUsers}
            />

            <UserDetailModal
                isOpen={isDetailModalOpen}
                onClose={() => setIsDetailModalOpen(false)}
                user={selectedUser}
            />

            <UserDocumentStatsModal
                isOpen={isStatsModalOpen}
                onClose={() => setIsStatsModalOpen(false)}
                user={selectedUser}
            />
        </div>
    );
};
