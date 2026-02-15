
import React, { useState, useCallback } from 'react';
import { GameState, Choice, Stats } from './types';
import { INITIAL_STATS, CHARACTER_PROMPTS } from './constants';
import { storyData } from './services/storyData';
import MainMenu from './components/MainMenu';
import GameScene from './components/GameScene';
import StatusPanel from './components/StatusPanel';
import { GoogleGenAI } from "@google/genai";

const App: React.FC = () => {
  const [view, setView] = useState<'menu' | 'loading' | 'game'>('menu');
  const [loadingProgress, setLoadingProgress] = useState('');
  const [characterImages, setCharacterImages] = useState<Record<string, string>>({});
  const [gameState, setGameState] = useState<GameState>({
    stats: { ...INITIAL_STATS },
    currentSceneId: 'start',
    history: [],
    stateStack: []
  });
  const [showStatus, setShowStatus] = useState(false);

  const generateCharacterAssets = async () => {
    setView('loading');
    setLoadingProgress('正在构建陆沉的2D立绘...');
    
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const emotions = ['calm', 'angry', 'uncontrolled'] as const;
      const images: Record<string, string> = {};

      for (const emotion of emotions) {
        setLoadingProgress(`正在绘制：陆沉 - ${emotion === 'calm' ? '克制' : emotion === 'angry' ? '轻怒' : '失控'}...`);
        const prompt = `${CHARACTER_PROMPTS.LU_CHEN.base} ${CHARACTER_PROMPTS.LU_CHEN[emotion]}`;
        
        const response = await ai.models.generateContent({
          model: 'gemini-2.5-flash-image',
          contents: { parts: [{ text: prompt }] },
          config: { imageConfig: { aspectRatio: "3:4" } },
        });

        const part = response.candidates?.[0]?.content?.parts.find(p => p.inlineData);
        if (part?.inlineData) {
          images[emotion] = `data:${part.inlineData.mimeType};base64,${part.inlineData.data}`;
        }
      }

      setCharacterImages(images);
      localStorage.setItem('luchen_assets', JSON.stringify(images));
      setView('game');
    } catch (error) {
      console.error("Image generation failed:", error);
      alert("立绘生成失败，请检查网络或API Key状态。");
      setView('menu');
    }
  };

  const startGame = () => {
    const savedAssets = localStorage.getItem('luchen_assets');
    if (savedAssets) {
      setCharacterImages(JSON.parse(savedAssets));
      setGameState({
        stats: { ...INITIAL_STATS },
        currentSceneId: 'start',
        history: [],
        stateStack: []
      });
      setView('game');
    } else {
      generateCharacterAssets();
    }
  };

  const loadGame = () => {
    const saved = localStorage.getItem('luchensave');
    const savedAssets = localStorage.getItem('luchen_assets');
    if (saved && savedAssets) {
      setGameState(JSON.parse(saved));
      setCharacterImages(JSON.parse(savedAssets));
      setView('game');
    } else {
      alert('没有找到存档或立绘资源');
    }
  };

  const saveGame = (state: GameState) => {
    localStorage.setItem('luchensave', JSON.stringify(state));
  };

  const handleChoice = useCallback((choice: Choice) => {
    setGameState(prev => {
      const snapshot = {
        stats: { ...prev.stats },
        currentSceneId: prev.currentSceneId,
        history: [...prev.history]
      };

      const newStats = { ...prev.stats };
      Object.keys(choice.effect).forEach((key) => {
        const k = key as keyof Stats;
        newStats[k] = Math.min(100, Math.max(0, newStats[k] + (choice.effect[k] || 0)));
      });

      const newState = {
        ...prev,
        stats: newStats,
        currentSceneId: choice.nextSceneId,
        history: [...prev.history, choice.text],
        stateStack: [...prev.stateStack, snapshot]
      };
      saveGame(newState);
      return newState;
    });
  }, []);

  const handleNext = useCallback(() => {
    const currentScene = storyData[gameState.currentSceneId];
    if (currentScene?.nextSceneId) {
      setGameState(prev => {
        const snapshot = {
          stats: { ...prev.stats },
          currentSceneId: prev.currentSceneId,
          history: [...prev.history]
        };
        return {
          ...prev,
          currentSceneId: currentScene.nextSceneId!,
          stateStack: [...prev.stateStack, snapshot]
        };
      });
    }
  }, [gameState.currentSceneId]);

  const handleBack = useCallback(() => {
    setGameState(prev => {
      if (prev.stateStack.length === 0) return prev;
      const lastState = prev.stateStack[prev.stateStack.length - 1];
      const newStack = prev.stateStack.slice(0, -1);
      const newState = { ...prev, ...lastState, stateStack: newStack };
      saveGame(newState);
      return newState;
    });
  }, []);

  const getModifiedScene = () => {
    const originalScene = storyData[gameState.currentSceneId];
    if (!originalScene) return null;
    if (gameState.stats.rationality < 30 && originalScene.characterImage) {
      return { ...originalScene, characterImage: 'uncontrolled' };
    }
    return originalScene;
  };

  const currentSceneData = getModifiedScene();

  return (
    <div className="w-full h-full bg-black text-gray-200 overflow-hidden">
      {view === 'menu' && (
        <MainMenu onStart={startGame} onContinue={loadGame} />
      )}

      {view === 'loading' && (
        <div className="w-full h-full flex flex-col items-center justify-center bg-black p-8 text-center">
          <div className="w-16 h-16 border-4 border-red-900 border-t-gold-border rounded-full animate-spin mb-8" />
          <h2 className="text-2xl gold-text mb-4 font-bold tracking-widest">角色生成中</h2>
          <p className="text-gray-500 italic animate-pulse">{loadingProgress}</p>
        </div>
      )}

      {view === 'game' && currentSceneData && (
        <div className="w-full h-full max-w-[1920px] aspect-video mx-auto overflow-hidden relative shadow-2xl">
          <GameScene 
            scene={currentSceneData} 
            stats={gameState.stats}
            canBack={gameState.stateStack.length > 0}
            onChoice={handleChoice}
            onNext={handleNext}
            onBack={handleBack}
            showStatus={() => setShowStatus(true)}
            assets={characterImages}
          />
          <StatusPanel 
            stats={gameState.stats} 
            isVisible={showStatus} 
            onClose={() => setShowStatus(false)} 
          />
        </div>
      )}
    </div>
  );
};

export default App;
