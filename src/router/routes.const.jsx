import ConstructionPage from '../components/ConstructionPage';
import { PerfilesCargos } from '../modules/talentoHumano/pages/PerfilesCargos';

export const ROUTES = {
  TALENTO_HUMANO: {
    PERFIL_CARGO: {
      path: '/talentoHumano/perfiles-cargo',
      title: 'Perfiles de Cargo',
      element: <PerfilesCargos />,
    },
    HOJA_VIDA: {
      path: '/talentoHumano/hoja-de-vida',
      title: 'Hoja de Vida',
      element: <ConstructionPage title="Hoja de Vida" />,
    },
    ORGANIGRAMA: {
      path: '/talentoHumano/organigrama',
      title: 'Organigrama',
      element: <ConstructionPage title="Organigrama" />,
    },
  },

  CALIDAD: {
    TIPOS_DOCUMENTO: {
      path: '/calidad/tipos-documento',
      title: 'Tipos de Documento',
      element: <ConstructionPage title="Tipos de Documento" />,
    },
    SOLICITAR_DOCUMENTO: {
      path: '/calidad/solicitar-documento',
      title: 'Solicitar Documento',
      element: <ConstructionPage title="Solicitar Documento" />,
    },
    REVISION_DOCUMENTO: {
      path: '/calidad/revision-documento',
      title: 'Revisión por documento',
      element: <ConstructionPage title="Revisión por documento" />,
    },
    REPORTES: {
      path: '/calidad/reportes',
      title: 'Reportes de Calidad',
      element: <ConstructionPage title="Reportes de Calidad" />,
    },
    PAPELERA: {
      path: '/calidad/papelera-reciclaje',
      title: 'Papelera de Reciclaje',
      element: <ConstructionPage title="Papelera de Reciclaje" />,
    },
    LISTADO_UNICO: {
      path: '/calidad/listado-unico',
      title: 'Listado Único',
      element: <ConstructionPage title="Listado Único" />,
    },
    DOCUMENTOS_EXTERNOS: {
      path: '/calidad/documentos-externos',
      title: 'Documentos Externos',
      element: <ConstructionPage title="Documentos Externos" />,
    },
    DILIGENCIAR_FORMATO: {
      path: '/calidad/diligenciar-formato',
      title: 'Diligenciar Formato',
      element: <ConstructionPage title="Diligenciar Formato" />,
    },
    DEFINICIONES: {
      path: '/calidad/definiciones',
      title: 'Definiciones',
      element: <ConstructionPage title="Definiciones" />,
    },
  },

  CONFIGURACION: {
    USUARIOS: {
      path: '/configuracion/usuarios',
      title: 'Gestión de Usuarios',
      element: <ConstructionPage title="Gestión de Usuarios" />,
    },
    PROCESOS: {
      path: '/configuracion/procesos',
      title: 'Gestión de Procesos',
      element: <ConstructionPage title="Gestión de Procesos" />,
    },
    MACROPROCESOS: {
      path: '/configuracion/macroprocesos',
      title: 'Gestión de Macroprocesos',
      element: <ConstructionPage title="Gestión de Macroprocesos" />,
    },
    GRUPOS_DISTRIBUCION: {
      path: '/configuracion/grupos-distribucion',
      title: 'Grupos de Distribución',
      element: <ConstructionPage title="Grupos de Distribución" />,
    },
    CARGOS: {
      path: '/configuracion/cargos',
      title: 'Gestión de Cargos',
      element: <ConstructionPage title="Gestión de Cargos" />,
    },
  },
};
