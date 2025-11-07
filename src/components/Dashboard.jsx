import React, { useState } from 'react';
import { Plus, Settings, Users, Wallet } from 'lucide-react';
import { motion } from 'framer-motion';

const Card = ({ title, amount, people, color = 'from-teal-400 to-cyan-400' }) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
    className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 p-5 shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
  >
    <div className={`absolute inset-0 -z-[0] bg-gradient-to-br ${color} opacity-10`} />
    <div className="flex items-center justify-between">
      <div>
        <h3 className="text-white/90">{title}</h3>
        <p className="mt-1 text-2xl font-semibold text-white">${amount}</p>
      </div>
      <div className="inline-flex items-center gap-2 rounded-xl bg-white/5 px-3 py-1 text-xs text-white/70">
        <Users className="h-4 w-4" />
        <span>{people} people</span>
      </div>
    </div>
  </motion.div>
);

const Dashboard = ({ user }) => {
  const [cards, setCards] = useState([
    { id: 1, title: 'Groceries', amount: 124.5, people: 3, color: 'from-teal-400 to-emerald-400' },
    { id: 2, title: 'Utilities', amount: 89.9, people: 2, color: 'from-cyan-400 to-blue-400' },
    { id: 3, title: 'Internet', amount: 45.0, people: 4, color: 'from-fuchsia-400 to-pink-400' },
  ]);

  const addCard = () => {
    const id = Date.now();
    setCards((c) => [
      ...c,
      { id, title: `New expense ${c.length + 1}`, amount: 0, people: 2, color: 'from-amber-400 to-orange-400' },
    ]);
  };

  return (
    <section className="w-full bg-slate-950 pb-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-start justify-between gap-4 pt-10 md:flex-row md:items-center">
          <div>
            <h2 className="text-2xl font-semibold md:text-3xl">Welcome, {user?.name || 'Roomie'} 👋</h2>
            <p className="mt-1 text-white/70">Here’s a snapshot of your shared expenses.</p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={addCard}
              className="inline-flex items-center gap-2 rounded-xl bg-teal-400 px-4 py-2 font-medium text-slate-900 shadow-lg shadow-teal-400/30 transition hover:brightness-110"
            >
              <Plus className="h-5 w-5" /> Add card
            </button>
            <button className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-white/90 backdrop-blur transition hover:bg-white/10">
              <Settings className="h-5 w-5" /> Settings
            </button>
          </div>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <Card key={card.id} {...card} />
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <div className="flex items-center gap-3 text-teal-300">
            <Wallet className="h-5 w-5" />
            <h3 className="font-medium">Tip</h3>
          </div>
          <p className="mt-2 text-sm text-white/70">
            You can rename cards, adjust amounts, or change the number of people to reflect your real-life split. In the
            next iteration we can connect these to your account and a backend for real persistence.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
