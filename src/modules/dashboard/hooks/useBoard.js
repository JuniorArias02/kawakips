import { useState } from 'react';
import { Users, ClipboardCheck, Settings, FileText, BarChart3, ShieldCheck } from 'lucide-react';


export const
    useBoard = () => {
        const [cards, setCards] = useState([
            {
                id: '1',
                title: 'Talento Humano',
                description: 'Gestión de personal y contratos',
                icon: Users,
                color: 'bg-indigo-500',
                position: { x: 100, y: 100 }
            },
            {
                id: '2',
                title: 'Gestión de Calidad',
                description: 'Auditorías y normativas ISO',
                icon: ClipboardCheck,
                color: 'bg-emerald-500',
                position: { x: 450, y: 100 }
            },
            {
                id: '3',
                title: 'Procesos',
                description: 'Mapa de procesos y flujos',
                icon: Settings,
                color: 'bg-blue-500',
                position: { x: 100, y: 350 }
            },
            {
                id: '4',
                title: 'Documentación',
                description: 'Control de versiones y archivos',
                icon: FileText,
                color: 'bg-orange-500',
                position: { x: 450, y: 350 }
            }
        ]);

        const updatePosition = (id, newPosition) => {
            setCards(prevCards =>
                prevCards.map(card =>
                    card.id === id ? { ...card, position: newPosition } : card
                )
            );
            // Here you would typically save to backend
            console.log(`Card ${id} moved to:`, newPosition);
        };

        return {
            cards,
            updatePosition
        };
    };
