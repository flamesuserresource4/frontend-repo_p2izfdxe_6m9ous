import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, CreditCard } from 'lucide-react';

const Hero = ({ onGetStarted }) => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/IKzHtP5ThSO83edK/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/50 to-slate-950" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-start gap-8 px-6 pt-28 pb-20 md:pt-36">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs backdrop-blur">
          <CreditCard className="h-4 w-4 text-teal-300" />
          <span className="text-white/80">Smart roommate expense splitter</span>
        </div>
        <h1 className="text-4xl font-semibold leading-tight md:text-6xl">
          Split expenses beautifully.
          <br />
          No spreadsheets. No stress.
        </h1>
        <p className="max-w-2xl text-base text-white/80 md:text-lg">
          Track shared costs with roommates, road trip buddies, or teams. Add purchases, assign split rules, and let the app calculate who owes whom—instantly and fairly.
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <button
            onClick={onGetStarted}
            className="group inline-flex items-center gap-2 rounded-xl bg-teal-400 px-5 py-3 font-medium text-slate-900 shadow-lg shadow-teal-400/30 transition hover:scale-[1.02] hover:bg-teal-300 active:scale-[0.99]"
          >
            <Rocket className="h-5 w-5 transition group-hover:translate-x-0.5" />
            Get started
          </button>
          <a
            href="#learn-more"
            className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 font-medium text-white/90 backdrop-blur transition hover:bg-white/10"
          >
            Learn more
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
