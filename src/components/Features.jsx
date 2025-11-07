import React from 'react';
import { Users, Wallet, PieChart, Shield } from 'lucide-react';

const features = [
  {
    icon: Users,
    title: 'Made for roommates',
    desc:
      'Create a shared space for your flat. Add members, track shared bills, and settle up without the awkwardness.',
  },
  {
    icon: Wallet,
    title: 'Flexible splits',
    desc:
      'Split evenly or set custom weights and shares per person. Taxes, tips, and fees handled automatically.',
  },
  {
    icon: PieChart,
    title: 'Crystal clear summaries',
    desc:
      'Beautiful balance cards show who owes whom at a glance. Export or share with a tap.',
  },
  {
    icon: Shield,
    title: 'Private and secure',
    desc:
      'Your data stays yours. We use best-practice security and do not sell your information.',
  },
];

const Features = () => {
  return (
    <section id="learn-more" className="relative w-full bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-semibold md:text-4xl">Everything you need to split fairly</h2>
        <p className="mt-3 max-w-2xl text-white/70">
          Built for speed, clarity, and zero-friction settling. Designed to look great on your phone or desktop.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6 shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition hover:border-white/20 hover:from-white/10"
            >
              <div className="mb-4 inline-flex rounded-xl bg-teal-400/15 p-3 text-teal-300 ring-1 ring-inset ring-teal-400/30">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-white/70">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
