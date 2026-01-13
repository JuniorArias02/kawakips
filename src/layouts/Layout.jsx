import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/Navbar';

const Layout = () => {
    return (
        <div className="h-screen w-screen bg-slate-50 font-sans flex flex-col overflow-hidden">
            <Navbar />
            <main className="flex-1 w-full relative pt-16">
                <div className="w-full h-full overflow-hidden">
                    <Outlet />
                </div>
            </main>
        </div>
    );
};

export default Layout;
