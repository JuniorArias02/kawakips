import { createBrowserRouter } from 'react-router-dom';
import Layout from './layouts/Layout';
import Login from './modules/auth/pages/Login';
import Dashboard from './modules/dashboard/pages/Dashboard';
import { moduleRoutes } from './router/maps';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Login />,
    },
    {
        path: '/login',
        element: <Login />,
    },
    {
        element: <Layout />,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard />,
            },
            ...moduleRoutes
        ]
    }
]);

export default router;
