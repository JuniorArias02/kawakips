import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LoginForm } from '../components/LoginForm';
import { RecoverPassword } from '../components/RecoverPassword';
import logo from '../../../assets/logo.png';

import { AuthFooter } from '../../../components/Footer';

const Login = () => {
    const [view, setView] = useState('login'); // 'login' | 'recover'

    const CLINIC_IMAGE = "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2653&auto=format&fit=crop";

    return (
        <div className="min-h-screen w-full flex bg-white overflow-hidden relative">

            {/* 
                We use LayoutGroup or just simple Layout props. 
                Since we are physically changing the order (visual order via flex-row-reverse logic), 
                wrapping them in motion.div with the 'layout' prop should handle the swap animation.
            */}

            {/* FORM SIDE (Left on Login, Right on Recover) */}
            <motion.div
                layout
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
                className={`flex-1 flex flex-col justify-center items-center p-8 sm:p-12 lg:p-24 bg-white z-10 ${view === 'login' ? 'lg:order-1' : 'lg:order-2'}`}
            >
                <div className="w-full max-w-sm mx-auto mb-10 flex justify-start">
                    <img src={logo} alt="Logo" className="h-12 w-auto object-contain" />
                </div>

                <div className="w-full">
                    <AnimatePresence mode="wait">
                        {view === 'login' ? (
                            <motion.div
                                key="login-form"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                transition={{ duration: 0.3 }}
                            >
                                <LoginForm onForgotPassword={() => setView('recover')} />
                            </motion.div>
                        ) : (
                            <motion.div
                                key="recover-form"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                            >
                                <RecoverPassword onBack={() => setView('login')} />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                <AuthFooter />
            </motion.div>

            {/* IMAGE SIDE (Right on Login, Left on Recover) */}
            <motion.div
                layout
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
                className={`hidden lg:flex flex-1 relative bg-slate-100 overflow-hidden ${view === 'login' ? 'lg:order-2' : 'lg:order-1'}`}
            >
                {/* Background Image Container */}
                <div className="absolute inset-0">
                    <motion.img
                        key={view}
                        src={CLINIC_IMAGE}
                        alt="Clinical Background"
                        initial={{ scale: 1.1, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1.5 }}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-blue-900/30 mix-blend-multiply" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                </div>

                {/* Overlay Text */}
                <div className="relative z-10 w-full flex flex-col justify-end p-16 text-white">
                    <AnimatePresence mode="wait">
                        {view === 'login' ? (
                            <motion.div
                                key="login-text"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ delay: 0.2 }}
                            >
                                <h2 className="text-4xl font-bold mb-4 leading-tight">Gestión Inteligente para tu Clínica</h2>
                                <p className="text-lg text-blue-100 max-w-md">
                                    Optimiza el flujo de trabajo y asegura la integridad de la información personal.
                                </p>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="recover-text"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ delay: 0.2 }}
                            >
                                <h2 className="text-3xl font-bold mb-4">Seguridad y Soporte</h2>
                                <ul className="space-y-4 text-blue-50">
                                    {['Verifica tu bandeja de entrada', 'Sigue el enlace seguro', 'Crea una nueva contraseña'].map((text, i) => (
                                        <motion.li
                                            key={i}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.3 + (i * 0.1) }}
                                            className="flex items-center gap-3"
                                        >
                                            <div className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center font-bold">{i + 1}</div>
                                            <span>{text}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </motion.div>
        </div>
    );
};

export default Login;

