import ConstructionPage from '../components/ConstructionPage';

const createRoute = (path, title) => ({
    path,
    element: <ConstructionPage title={title} />
});

export const moduleRoutes = [
    // Talento Humano
    createRoute('/talentoHumano/perfiles-cargo', 'Perfiles de Cargo'),
    createRoute('/talentoHumano/hoja-de-vida', 'Hoja de Vida'),
    createRoute('/talentoHumano/organigrama', 'Organigrama'),

    // Calidad
    createRoute('/calidad/tipos-documento', 'Tipos de Documento'),
    createRoute('/calidad/solicitar-documento', 'Solicitar Documento'),
    createRoute('/calidad/revision-documento', 'Revisión por documento'),
    createRoute('/calidad/reportes', 'Reportes de Calidad'),
    createRoute('/calidad/papelera-reciclaje', 'Papelera de Reciclaje'),
    createRoute('/calidad/listado-unico', 'Listado Único'),
    createRoute('/calidad/documentos-externos', 'Documentos Externos'),
    createRoute('/calidad/diligenciar-formato', 'Diligenciar Formato'),
    createRoute('/calidad/definiciones', 'Definiciones'),

    // Configuración
    createRoute('/configuracion/usuarios', 'Gestión de Usuarios'),
    createRoute('/configuracion/procesos', 'Gestión de Procesos'),
    createRoute('/configuracion/macroprocesos', 'Gestión de Macroprocesos'),
    createRoute('/configuracion/grupos-distribucion', 'Grupos de Distribución'),
    createRoute('/configuracion/cargos', 'Gestión de Cargos'),
];