import { useRef } from 'react';
import { useBoard } from '../hooks/useBoard';
import { ModuleCard } from '../components/ModuleCard';
import { OptionSidebar } from '../components/OptionSidebar';

// Import Specific Module Options
import { TalentoHumanoOptions } from '../../talentoHumano/components/TalentoHumanoOptions';
import { CalidadOptions } from '../../calidad/components/CalidadOptions';
import { ConfiguracionOptions } from '../../configuracion/components/ConfiguracionOptions';

const Dashboard = () => {
    const { cards, updatePosition, selectedModule, selectModule, closeSidebar } = useBoard();
    const containerRef = useRef(null);

    // Map Module IDs to their Option Components
    const OPTIONS_MAP = {
        '1': TalentoHumanoOptions,
        '2': CalidadOptions,
        '5': ConfiguracionOptions,
    };

    return (
        <div ref={containerRef} className="w-full h-full relative overflow-hidden">
            <div className="absolute inset-0 w-full h-full opacity-[0.4]"
                style={{
                    backgroundImage: 'radial-gradient(#94a3b8 1px, transparent 1px)',
                    backgroundSize: '24px 24px'
                }}
            />

            {cards.map(card => (
                <ModuleCard
                    key={card.id}
                    card={card}
                    onDragEnd={updatePosition}
                    onClick={selectModule}
                    containerRef={containerRef}
                />
            ))}

            {/* Sidebar Overlay */}
            <OptionSidebar
                isOpen={!!selectedModule}
                onClose={closeSidebar}
                selectedModule={selectedModule}
                OptionsComponent={selectedModule ? OPTIONS_MAP[selectedModule.id] : null}
            />
        </div>
    );
};

export default Dashboard;
