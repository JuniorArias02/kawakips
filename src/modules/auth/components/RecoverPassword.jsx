import { Mail, ArrowLeft, KeyRound } from 'lucide-react';

export const RecoverPassword = ({ onBack }) => {
    return (
        <div className="w-full max-w-sm mx-auto space-y-8 animate-fade-in">
            <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tight text-slate-900">Recuperación</h2>
                <p className="text-slate-500">
                    Ingresa tu correo para restablecer tu contraseña de acceso
                </p>
            </div>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-2">
                    <label className="text-sm font-medium leading-none text-slate-700" htmlFor="recovery-email">
                        Correo Electrónico
                    </label>
                    <div className="relative">
                        <Mail className="absolute left-3 top-2.5 h-5 w-5 text-slate-400" />
                        <input
                            id="recovery-email"
                            className="flex h-11 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 pl-10 text-sm placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-200"
                            placeholder="nombre@empresa.com"
                            type="email"
                        />
                    </div>
                </div>

                <button
                    className="inline-flex h-11 w-full items-center justify-center rounded-lg bg-blue-600 px-8 py-2 text-sm font-medium text-white shadow-lg shadow-blue-500/30 transition-all hover:bg-blue-700 hover:shadow-blue-500/40 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    type="submit"
                >
                    Enviar Instrucciones
                </button>

                <button
                    type="button"
                    onClick={onBack}
                    className="group flex w-full items-center justify-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-800 transition-colors"
                >
                    <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                    Volver al inicio de sesión
                </button>
            </form>

            {/* Info Box */}
            <div className="rounded-lg bg-blue-50 p-4 border border-blue-100">
                <div className="flex items-start gap-3">
                    <KeyRound className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div className="text-sm text-blue-900">
                        <p className="font-medium">¿Necesitas ayuda?</p>
                        <p className="mt-1 text-blue-700">
                            Si no tienes acceso a tu correo, contacta directamente con el administrador del sistema.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
