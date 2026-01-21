import { useState } from 'react';
import { User, Lock, Eye, EyeOff } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import { login as loginService } from '../services/auth.service';
import { useAlert } from '../../../providers/AlertProvider';
import { useAuth } from '../../../providers/AuthProvider';

export const LoginForm = ({ onForgotPassword }) => {
    const navigate = useNavigate();
    const { showAlert } = useAlert();
    const { login } = useAuth();
    const [showPassword, setShowPassword] = useState(false);

    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setCredentials(prev => ({
            ...prev,
            [id]: value
        }));
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await loginService(credentials);

            showAlert(response);

            if (response.status === 'success' || response.status === 200) {
                const token = response.object?.token || response.token;
                if (token) {
                    login(token);
                }
                setTimeout(() => {
                    navigate('/dashboard');
                }, 1500);
            }

        } catch (error) {
            console.error("Login error:", error);
            if (error.response && error.response.data) {
                showAlert(error.response.data);
            } else {
                showAlert({
                    message: "Error al iniciar sesión. Intente nuevamente.",
                    status: "error"
                });
            }
        }
    };

    return (
        <div className="w-full max-w-sm mx-auto space-y-8 animate-fade-in">
            <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tight text-slate-900">Bienvenido de nuevo</h2>
                <p className="text-slate-500">
                    Ingresa tus credenciales para acceder a la plataforma
                </p>
            </div>

            <form className="space-y-6" onSubmit={handleLogin}>
                <div className="space-y-2">
                    <label className="text-sm font-medium leading-none text-slate-700" htmlFor="username">
                        Usuario
                    </label>
                    <div className="relative">
                        <User className="absolute left-3 top-2.5 h-5 w-5 text-slate-400" />
                        <input
                            id="username"
                            value={credentials.username}
                            onChange={handleChange}
                            className="flex h-11 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 pl-10 text-sm placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-200"
                            placeholder="usuario"
                            type="text"
                            required
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium leading-none text-slate-700" htmlFor="password">
                        Contraseña
                    </label>
                    <div className="relative">
                        <Lock className="absolute left-3 top-2.5 h-5 w-5 text-slate-400" />
                        <input
                            id="password"
                            value={credentials.password}
                            onChange={handleChange}
                            className="flex h-11 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 pl-10 text-sm placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-200"
                            type={showPassword ? "text" : "password"}
                            placeholder="••••••••"
                            required
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-2.5 text-slate-400 hover:text-slate-600 transition-colors"
                        >
                            {showPassword ? (
                                <EyeOff className="h-5 w-5" />
                            ) : (
                                <Eye className="h-5 w-5" />
                            )}
                        </button>
                    </div>
                </div>

                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <input
                            type="checkbox"
                            id="remember"
                            className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                        />
                        <label
                            htmlFor="remember"
                            className="text-sm font-medium leading-none text-slate-600 cursor-pointer"
                        >
                            Recordarme
                        </label>
                    </div>
                    <button
                        type="button"
                        onClick={onForgotPassword}
                        className="text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
                    >
                        ¿Olvidaste tu contraseña?
                    </button>
                </div>

                <button
                    type="submit"
                    className="inline-flex h-11 w-full items-center justify-center rounded-lg bg-blue-600 px-8 py-2 text-sm font-medium text-white shadow-lg shadow-blue-500/30 transition-all hover:bg-blue-700 hover:shadow-blue-500/40 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                    Iniciar Sesión
                </button>
            </form>
        </div>
    );
};
