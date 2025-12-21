// steps.ts
export const STEPS = [
  "Basic Info",
  "Contact Info",
  "Education",
  "Skills",
  "Work Experience",
] as const;

export type Step = (typeof STEPS)[number];
