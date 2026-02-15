
export const INITIAL_STATS = {
  love: 20,
  dependence: 50,
  control: 30,
  rationality: 80,
};

// Prompts for Gemini Image Generation to ensure consistent 2D Otome style
export const CHARACTER_PROMPTS = {
  LU_CHEN: {
    base: "Chinese Otome game style illustration, male lead character 'Lu Chen', 2D anime art style, high-end digital painting, clean lines, elegant and sophisticated. Mature male, black slightly wavy short hair, cold pale skin, sharp but handsome facial features, dark burgundy/red eyes, gold-rimmed glasses. Wearing a tailored deep black luxury business suit, dark red tie, metal cufflinks. Dark aesthetic, moody side lighting with subtle red ambient glow. Half-body portrait, center composition, blurred dark minimalist background.",
    calm: "Gentle and restrained expression, very slight elegant smile, looking at the viewer with calm eyes.",
    angry: "Slight frown, eyebrows pressed down, eyes cold and displeased, looking slightly down with an oppressive aura.",
    uncontrolled: "Intense and sharp gaze, eyes narrow, cold and dangerous expression, edge of losing control, intense psychological pressure, dark red eyes glowing slightly."
  }
};

export const BACKGROUND_IMAGES = {
  AIRPORT: 'https://images.unsplash.com/photo-1490430657723-4d607c1503fc?auto=format&fit=crop&q=80&w=1600',
  OFFICE: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1600',
  MANSION: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1600',
  CAR: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=1600',
};
