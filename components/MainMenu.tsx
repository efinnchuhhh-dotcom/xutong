
import React from 'react';

interface MainMenuProps {
  onStart: () => void;
  onContinue: () => void;
}

const MainMenu: React.FC<MainMenuProps> = ({ onStart, onContinue }) => {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center bg-black overflow-hidden">
      {/* Background with Dark Aesthetics */}
      <div className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-luminosity" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1549416878-b9ca35c2d47b?auto=format&fit=crop&q=80&w=1600)' }} />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />

      {/* Title */}
      <div className="z-10 text-center mb-24 animate-fade-in">
        <h1 className="text-6xl sm:text-8xl font-black gold-text tracking-widest mb-4">陆沉</h1>
        <p className="text-red-900 text-sm tracking-[0.5em] font-light italic">LU CHEN: THE GILDED CAGE</p>
      </div>

      {/* Buttons */}
      <div className="z-10 flex flex-col gap-6 w-64 animate-fade-in" style={{ animationDelay: '0.3s' }}>
        <button 
          onClick={onStart}
          className="group relative py-4 bg-zinc-950 border border-zinc-800 hover:border-red-900 transition-all duration-500 overflow-hidden"
        >
          <div className="absolute inset-0 bg-red-900/10 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
          <span className="relative text-gray-300 tracking-widest group-hover:text-white transition-colors">开始游戏</span>
        </button>

        <button 
          onClick={onContinue}
          className="group relative py-4 bg-zinc-950 border border-zinc-800 hover:border-red-900 transition-all duration-500 overflow-hidden"
        >
          <div className="absolute inset-0 bg-red-900/10 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
          <span className="relative text-gray-300 tracking-widest group-hover:text-white transition-colors">继续游戏</span>
        </button>

        <button 
          className="group relative py-4 bg-zinc-950 border border-zinc-800 hover:border-red-900 transition-all duration-500 overflow-hidden opacity-50 cursor-not-allowed"
        >
          <span className="relative text-gray-500 tracking-widest">设定集</span>
        </button>
      </div>

      {/* Footer Decoration */}
      <div className="absolute bottom-10 z-10 text-xs text-zinc-600 tracking-widest uppercase">
        Ascetic Aesthetics & Power Dynamic Simulator
      </div>
    </div>
  );
};

export default MainMenu;
