import React from 'react';
import { SplitSquareHorizontal, Home, User } from 'lucide-react';

const Navbar = ({ onLoginClick, isAuthed }) => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3 text-white">
        <a href="#" className="inline-flex items-center gap-2 font-semibold">
          <SplitSquareHorizontal className="h-6 w-6 text-teal-300" />
          SplitMate
        </a>
        <nav className="hidden items-center gap-6 md:flex">
          <a href="#" className="text-white/80 hover:text-white">
            <Home className="mr-1 inline-block h-4 w-4" /> Home
          </a>
          <a href="#learn-more" className="text-white/80 hover:text-white">Features</a>
        </nav>
        <div className="flex items-center gap-3">
          <button
            onClick={onLoginClick}
            className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-white/90 backdrop-blur transition hover:bg-white/10"
          >
            <User className="h-5 w-5" /> {isAuthed ? 'Account' : 'Log in'}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
