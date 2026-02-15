
import React, { useState, useEffect, useMemo } from 'react';
import { Scene, Choice, Stats } from '../types';

interface GameSceneProps {
  scene: Scene;
  stats: Stats;
  canBack: boolean;
  onChoice: (choice: Choice) => void;
  onNext: () => void;
  onBack: () => void;
  showStatus: () => void;
  assets: Record<string, string>;
}

const GameScene: React.FC<GameSceneProps> = ({ scene, stats, canBack, onChoice, onNext, onBack, showStatus, assets }) => {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isVibrating, setIsVibrating] = useState(false);

  const isSpecialPlot = stats.rationality < 30 || scene.isForced;

  // Programmatically strip the "【第X章：标题】" from the text
  const processedDialogue = useMemo(() => {
    return scene.dialogue.replace(/【第\d+章：[^】]*】\n?/, '').trim();
  }, [scene.dialogue]);

  // Calculate progress based on scene ID (assuming IDs follow a chX or chXX pattern)
  const progressPercentage = useMemo(() => {
    const chapterMatch = scene.id.match(/ch(\d+)/);
    if (scene.id === 'ch20_he' || scene.id === 'game_end') return 100;
    if (chapterMatch) {
      const chapterNum = parseInt(chapterMatch[1], 10);
      return (chapterNum / 20) * 100;
    }
    if (scene.id === 'start') return 5;
    return 0;
  }, [scene.id]);

  useEffect(() => {
    let i = 0;
    setIsTyping(true);
    setDisplayText('');
    
    if (scene.characterImage === 'uncontrolled' || isSpecialPlot) {
      setIsVibrating(true);
      const timer = setTimeout(() => setIsVibrating(false), 500);
      return () => clearTimeout(timer);
    }

    const timer = setInterval(() => {
      setDisplayText((prev) => prev + (processedDialogue[i] || ''));
      i++;
      if (i >= processedDialogue.length) {
        clearInterval(timer);
        setIsTyping(false);
      }
    }, 25);
    return () => clearInterval(timer);
  }, [processedDialogue, scene.characterImage, isSpecialPlot]);

  const handleContainerClick = () => {
    if (isTyping) {
      setDisplayText(processedDialogue);
      setIsTyping(false);
    } else if (!scene.choices) {
      onNext();
    }
  };

  const characterUrl = scene.characterImage ? assets[scene.characterImage] : null;

  return (
    <div 
      className={`relative w-full h-full bg-cover bg-center flex flex-row overflow-hidden transition-all duration-1000 ${isVibrating ? 'animate-[shake_0.2s_ease-in-out_infinite]' : ''}`}
      style={{ backgroundImage: `url(${scene.background})` }}
      onClick={handleContainerClick}
    >
      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-4px); }
          75% { transform: translateX(4px); }
        }
      `}</style>

      {/* Dark & Red Vignette Effect */}
      <div className={`absolute inset-0 pointer-events-none transition-opacity duration-1000 ${isSpecialPlot ? 'bg-red-950/10 shadow-[inset_0_0_200px_rgba(127,29,29,0.4)]' : 'bg-black/20'}`} />

      {/* LEFT SIDE: SIDEBAR DIALOGUE */}
      <div className="relative z-20 w-[40%] sm:w-[35%] h-full side-dialogue p-8 sm:p-12 flex flex-col justify-between">
        <div className="flex flex-col gap-6 mt-12 overflow-y-auto pr-4">
          {scene.characterName && (
            <div className="flex items-center gap-3">
              <div className="w-1 h-6 bg-red-700" />
              <span className="text-sm font-bold tracking-[0.4em] text-red-500 uppercase">{scene.characterName}</span>
            </div>
          )}
          
          <div className="relative">
            <p className="text-gray-100 text-lg leading-[2] tracking-widest font-light whitespace-pre-wrap transition-all duration-300 italic">
              {displayText}
              {!isTyping && !scene.choices && (
                <span className="inline-block ml-3 w-1.5 h-3 bg-red-700 animate-bounce" />
              )}
            </p>
          </div>
        </div>

        {/* Stats & Controls in Sidebar Footer */}
        <div className="mt-8">
          <div className="grid grid-cols-2 gap-3 mb-6 opacity-80">
            <div className="text-[10px] tracking-widest border-b border-zinc-800 pb-1 flex justify-between">
              <span className="text-red-500">LOVE</span> <span>{stats.love}</span>
            </div>
            <div className="text-[10px] tracking-widest border-b border-zinc-800 pb-1 flex justify-between">
              <span className="text-blue-500">DEP</span> <span>{stats.dependence}</span>
            </div>
            <div className="text-[10px] tracking-widest border-b border-zinc-800 pb-1 flex justify-between">
              <span className="text-yellow-500">CTRL</span> <span>{stats.control}</span>
            </div>
            <div className="text-[10px] tracking-widest border-b border-zinc-800 pb-1 flex justify-between">
              <span className="text-green-500">RAT</span> <span>{stats.rationality}</span>
            </div>
          </div>

          <div className="flex gap-2">
            <button onClick={(e) => { e.stopPropagation(); showStatus(); }} className="flex-1 py-2 bg-zinc-900/80 border border-zinc-800 text-[10px] gold-text uppercase hover:bg-zinc-800 transition">
              Archive
            </button>
            <button 
               onClick={(e) => { e.stopPropagation(); if (canBack && !isSpecialPlot) onBack(); }} 
               disabled={!canBack || isSpecialPlot} 
               className={`flex-1 py-2 text-[10px] uppercase border transition ${(!canBack || isSpecialPlot) ? 'bg-zinc-900/40 border-zinc-900 text-zinc-700 opacity-50' : 'bg-zinc-900/80 border-red-900/30 text-red-500 hover:border-red-600'}`}
            >
              {isSpecialPlot ? 'Locked' : 'Back'}
            </button>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE: CHARACTER VIEW */}
      <div className="relative flex-1 h-full flex items-end justify-center pointer-events-none">
        {characterUrl && (
          <img 
            src={characterUrl} 
            className={`h-[110%] w-auto object-contain transition-all duration-1000 filter drop-shadow-[20px_0_50px_rgba(0,0,0,0.9)] translate-x-[10%]
              ${isSpecialPlot ? 'scale-110 brightness-110' : 'scale-100'}`}
            alt="Character"
          />
        )}
        
        {/* Choices Layer */}
        {!isTyping && scene.choices && (
          <div className="absolute inset-0 flex flex-col justify-center items-center gap-6 bg-black/40 z-50 p-20 pointer-events-auto animate-fade-in">
            <h3 className="text-gold-border text-xs tracking-[0.5em] mb-4 uppercase opacity-60 italic">抉择 / The Decisive Moment</h3>
            {scene.choices.map((choice, idx) => (
              <button
                key={idx}
                onClick={(e) => { e.stopPropagation(); onChoice(choice); }}
                className="w-full max-w-sm py-5 px-10 bg-zinc-950/90 border border-red-900/40 hover:border-gold-border hover:bg-black transition-all duration-500 text-left group flex items-center shadow-2xl"
              >
                <div className="w-1.5 h-1.5 bg-red-800 group-hover:bg-gold-border rotate-45 mr-6 transition-all duration-500" />
                <span className="text-gray-400 group-hover:text-white text-sm tracking-widest transition-colors font-light">{choice.text}</span>
              </button>
            ))}
          </div>
        )}

        {/* Music Tip Overlay */}
        {scene.musicTip && (
          <div className="absolute bottom-10 right-10 pointer-events-none opacity-40">
            <div className="text-[9px] text-yellow-500 uppercase tracking-[0.3em] italic">
              ♫ Current track: {scene.musicTip}
            </div>
          </div>
        )}
      </div>

      {/* BOTTOM PROGRESS BAR */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-zinc-900 z-50 overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-red-900 via-gold-border to-red-900 transition-all duration-1000 ease-in-out"
          style={{ width: `${progressPercentage}%` }}
        />
      </div>
    </div>
  );
};

export default GameScene;
