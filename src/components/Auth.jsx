import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Lock, Mail } from 'lucide-react';

const Input = ({ icon: Icon, type = 'text', placeholder, value, onChange }) => (
  <div className="group relative">
    <div className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-white/50">
      <Icon className="h-4 w-4" />
    </div>
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full rounded-xl border border-white/10 bg-white/5 px-9 py-3 text-sm text-white placeholder-white/40 outline-none backdrop-blur transition focus:border-teal-300/50 focus:bg-white/7.5"
    />
  </div>
);

const Auth = ({ onLoggedIn }) => {
  const [mode, setMode] = useState('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock login for now. In a real app, call backend.
    setTimeout(() => onLoggedIn({ name: name || 'Roomie', email }), 600);
  };

  return (
    <section className="relative w-full bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-md px-6">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-semibold">{mode === 'login' ? 'Welcome back' : 'Create your account'}</h2>
          <p className="mt-2 text-white/70">
            {mode === 'login' ? 'Log in to manage your shared expenses.' : 'Sign up to start splitting with friends and roommates.'}
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
          <form onSubmit={handleSubmit} className="space-y-4">
            <AnimatePresence initial={false} mode="wait">
              {mode === 'signup' && (
                <motion.div
                  key="name"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                >
                  <Input icon={User} placeholder="Full name" value={name} onChange={(e) => setName(e.target.value)} />
                </motion.div>
              )}
            </AnimatePresence>
            <Input icon={Mail} type="email" placeholder="Email address" value={email} onChange={(e) => setEmail(e.target.value)} />
            <Input icon={Lock} type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />

            <button
              type="submit"
              className="mt-2 w-full rounded-xl bg-teal-400 px-4 py-3 font-medium text-slate-900 shadow-lg shadow-teal-400/30 transition hover:brightness-110"
            >
              {mode === 'login' ? 'Log in' : 'Create account'}
            </button>
          </form>

          <div className="mt-4 text-center text-sm text-white/70">
            {mode === 'login' ? (
              <span>
                New here?{' '}
                <button className="text-teal-300 hover:underline" onClick={() => setMode('signup')}>
                  Create an account
                </button>
              </span>
            ) : (
              <span>
                Already have an account?{' '}
                <button className="text-teal-300 hover:underline" onClick={() => setMode('login')}>
                  Log in
                </button>
              </span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Auth;
