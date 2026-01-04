import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login({ setIsLoggedIn }) {
    const navigate = useNavigate();
    const [credentials, setCredentials] = useState({
        email: '',
        password: '',
        role: 'user', // user, admin-water, admin-infra
    });
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();
        setIsLoading(true);

        // Simulate network delay
        setTimeout(() => {
            setIsLoggedIn(true);
            if (credentials.role === 'admin-water') {
                navigate('/department/water');
            } else if (credentials.role === 'admin-infra') {
                navigate('/department/infrastructure');
            } else {
                navigate('/dashboard');
            }
            setIsLoading(false);
        }, 1500);
    };

    return (
        <div className="min-h-[90vh] flex items-center justify-center p-4 bg-gradient-to-br from-gray-50 to-blue-50">
            <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 animate-in fade-in zoom-in duration-500">
                {/* Header Decoration */}
                <div className="h-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"></div>

                <div className="p-8 md:p-10">
                    <div className="text-center mb-10">
                        <h1 className="text-3xl font-black text-gray-900 tracking-tighter mb-2">Welcome Back</h1>
                        <p className="text-gray-500 font-medium">Please enter your details to sign in</p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-6">
                        {/* Email Field */}
                        <div>
                            <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 ml-1">Email Address</label>
                            <input
                                required
                                type="email"
                                placeholder="name@company.com"
                                className="w-full px-5 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-500/20 outline-none transition-all font-medium text-gray-700"
                                value={credentials.email}
                                onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
                            />
                        </div>

                        {/* Password Field */}
                        <div>
                            <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 ml-1">Password</label>
                            <input
                                required
                                type="password"
                                placeholder="••••••••"
                                className="w-full px-5 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-500/20 outline-none transition-all font-medium text-gray-700"
                                value={credentials.password}
                                onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                            />
                        </div>

                        {/* Role Selection (For Demo Redirection) */}
                        <div>
                            <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 ml-1">Sign in as</label>
                            <div className="grid grid-cols-1 gap-3">
                                <select
                                    value={credentials.role}
                                    onChange={(e) => setCredentials({ ...credentials, role: e.target.value })}
                                    className="w-full px-5 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-500/20 outline-none transition-all font-bold text-gray-700 appearance-none cursor-pointer"
                                >
                                    <option value="user">👤 General User</option>
                                    <option value="admin-water">💧 Admin - Water Dept</option>
                                    <option value="admin-infra">🏗️ Admin - Infrastructure Dept</option>
                                </select>
                            </div>
                        </div>

                        {/* Forgot Password */}
                        <div className="flex justify-end">
                            <button type="button" className="text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors">
                                Forgot password?
                            </button>
                        </div>

                        {/* Login Button */}
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full py-4 bg-black text-white font-bold rounded-2xl hover:bg-gray-800 transition-all shadow-xl active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                        >
                            {isLoading ? (
                                <>
                                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Validating...
                                </>
                            ) : (
                                'Sign In'
                            )}
                        </button>
                    </form>

                    {/* Social Login Divider */}
                    <div className="mt-8 flex items-center justify-center gap-4">
                        <div className="h-px bg-gray-100 flex-1"></div>
                        <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">or continue with</span>
                        <div className="h-px bg-gray-100 flex-1"></div>
                    </div>

                    {/* Social Buttons */}
                    <div className="grid grid-cols-2 gap-4 mt-6">
                        <button className="flex items-center justify-center gap-2 px-4 py-3 border border-gray-100 rounded-2xl hover:bg-gray-50 transition-all font-bold text-sm text-gray-700">
                            <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="h-5 w-5" alt="Google" />
                            Google
                        </button>
                        <button className="flex items-center justify-center gap-2 px-4 py-3 border border-gray-100 rounded-2xl hover:bg-gray-50 transition-all font-bold text-sm text-gray-700">
                            <img src="https://www.svgrepo.com/show/448234/libc-apple.svg" className="h-5 w-5" alt="Apple" />
                            Apple
                        </button>
                    </div>

                    {/* Sign Up Link */}
                    <p className="mt-10 text-center text-sm font-medium text-gray-500">
                        Don't have an account?{' '}
                        <button className="text-blue-600 font-bold hover:underline decoration-2 underline-offset-4">
                            Create free account
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Login;
