import { createBrowserRouter } from 'react-router-dom';
import Layout from './layouts/Layout';
import Login from './modules/auth/pages/Login';
import Dashboard from './modules/dashboard/pages/Dashboard';

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
        ]
    }
]);

export default router;
