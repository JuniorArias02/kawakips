import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/Navbar';

const Layout = () => {
    return (
        <div className="h-screen w-screen bg-slate-50 font-sans flex flex-col overflow-hidden">
            <Navbar />

            {/* Main Content Area */}
            {/* Flex-1 takes remaining space. pt-16 is NOT needed if Navbar is fixed, BUT 
                if we use flex-col with h-screen, we can just let Navbar take its space 
                and Main take the rest. However, since Navbar is `fixed` in its own code,
                we need the padding.
            */}
            <main className="flex-1 w-full relative pt-16">
                <div className="w-full h-full overflow-hidden">
                    <Outlet />
                </div>
            </main>
        </div>
    );
};

export default Layout;
