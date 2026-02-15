
import React from 'react';
import { Stats } from '../types';

interface StatusPanelProps {
  stats: Stats;
  isVisible: boolean;
  onClose: () => void;
}

const StatusPanel: React.FC<StatusPanelProps> = ({ stats, isVisible, onClose }) => {
  if (!isVisible) return null;

  const StatRow = ({ label, value, color }: { label: string; value: number; color: string }) => (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-gray-400">{label}</span>
        <span className="text-sm font-bold" style={{ color }}>{value}</span>
      </div>
      <div className="w-full bg-gray-800 rounded-full h-1.5 overflow-hidden">
        <div 
          className="h-full transition-all duration-700 ease-out" 
          style={{ width: `${Math.min(100, Math.max(0, value))}%`, backgroundColor: color }}
        />
      </div>
    </div>
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="w-full max-w-sm bg-zinc-900 border border-red-900 p-6 rounded-lg shadow-2xl">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl gold-text font-bold">角色档案 - 栩桐</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-white">✕</button>
        </div>
        
        <StatRow label="好感度 (Love)" value={stats.love} color="#ef4444" />
        <StatRow label="依赖值 (Dependence)" value={stats.dependence} color="#3b82f6" />
        <StatRow label="掌控值 (Control)" value={stats.control} color="#fbbf24" />
        <StatRow label="理智值 (Rationality)" value={stats.rationality} color="#10b981" />

        <div className="mt-8 text-xs text-gray-500 space-y-2 border-t border-zinc-800 pt-4">
          <p>• 理智值 &lt; 30：将触发“失控”特殊情节</p>
          <p>• 掌控值过高：陆沉的占有欲将进入危险等级</p>
          <p>• 依赖值高：偏向温馨宠溺线</p>
        </div>
      </div>
    </div>
  );
};

export default StatusPanel;
