
export type Stats = {
  love: number;        // 好感度
  dependence: number;  // 依赖值
  control: number;     // 掌控值
  rationality: number; // 理智值
};

export type Choice = {
  text: string;
  type: 'submissive' | 'tentative' | 'rebellious';
  nextSceneId: string;
  effect: Partial<Stats>;
};

export type Scene = {
  id: string;
  background: string;
  characterImage?: string;
  characterName?: string;
  emotion?: 'calm' | 'angry' | 'uncontrolled';
  dialogue: string;
  choices?: Choice[];
  musicTip?: string;
  nextSceneId?: string;
  isForced?: boolean; // 是否强制剧情，禁止回退
};

export type GameState = {
  stats: Stats;
  currentSceneId: string;
  history: string[]; // 选项文本历史
  stateStack: Omit<GameState, 'stateStack'>[]; // 用于实现完美回退的快照栈
};
