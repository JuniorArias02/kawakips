import { useRef } from 'react';
import { useBoard } from '../hooks/useBoard';
import { ModuleCard } from '../components/ModuleCard';

const Dashboard = () => {
    const { cards, updatePosition } = useBoard();
    const containerRef = useRef(null);

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
                    containerRef={containerRef}
                />
            ))}
        </div>
    );
};

export default Dashboard;
