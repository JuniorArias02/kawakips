import { useRef } from 'react';
import { useBoard } from '../hooks/useBoard';
import { ModuleCard } from '../components/ModuleCard';
import { OptionSidebar } from '../components/OptionSidebar';

import { TalentoHumanoOptions, TALENTO_HUMANO_OPTIONS } from '../../talentoHumano/components/TalentoHumanoOptions';
import { CalidadOptions, CALIDAD_OPTIONS } from '../../calidad/components/CalidadOptions';
import { ConfiguracionOptions, CONFIGURACION_OPTIONS } from '../../configuracion/components/ConfiguracionOptions';

const Dashboard = () => {
    const { cards, updatePosition, selectedModule, selectModule, closeSidebar } = useBoard();
    const containerRef = useRef(null);

    const OPTIONS_MAP = {
        '1': TalentoHumanoOptions,
        '2': CalidadOptions,
        '5': ConfiguracionOptions,
    };

    const DATA_MAP = {
        '1': TALENTO_HUMANO_OPTIONS,
        '2': CALIDAD_OPTIONS,
        '5': CONFIGURACION_OPTIONS,
    };

    return (
        <div ref={containerRef} className="w-full h-[calc(100vh-80px)] relative overflow-hidden">
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
                    options={DATA_MAP[card.id]}
                />
            ))}

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
