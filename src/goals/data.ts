export interface SmartGoal {
  title: string; // Title of the goal
  description: string; // Detailed explanation
  specific: string; // Specific aspect of the goal
  measurable: string; // Measurable indicator
  achievable: string; // How it's achievable
  relevant: string; // Why it's relevant to you
  timeBound: string; // Deadline for completion
  emoji: string; // Emoji to represent the goal
}

export const smartGoals: SmartGoal[] = [
  {
    title: "Discipline",
    description: "Build routines and work consistently on my projects.",
    specific: "Work 5 focused hours daily on planned tasks.",
    measurable: "Track progress in a daily log.",
    achievable: "Break tasks into Pomodoro sessions.",
    relevant:
      "Achieving discipline will boost my productivity and self-esteem.",
    timeBound: "Master discipline by June 2024.",
    emoji: "⏳",
  },
  {
    title: "Structured Code",
    description: "Improve code quality by focusing on Clean Code principles.",
    specific: "Refactor one project per month for better structure.",
    measurable: "Review improvements with a checklist.",
    achievable: "Focus on small, manageable codebases first.",
    relevant: "Clean code saves time and makes projects scalable.",
    timeBound: "Achieve mastery by August 2024.",
    emoji: "💻",
  },
  {
    title: "Feature Focus",
    description:
      "Concentrate on implementing features with clear goals and understanding.",
    specific: "Define requirements and tasks before starting each feature.",
    measurable:
      "Complete at least one feature per week with full functionality.",
    achievable:
      "Break down features into smaller tasks for better manageability.",
    relevant:
      "Focusing on features ensures progress and satisfaction in projects.",
    timeBound: "Achieve consistent feature delivery by May 2024.",
    emoji: "🚀",
  },
  {
    title: "Monetization",
    description: "Develop a monetization strategy for my projects.",
    specific: "Launch one revenue-generating feature.",
    measurable: "Earn €100 per month by mid-2024.",
    achievable: "Start small with freemium models.",
    relevant: "Monetization ensures financial freedom.",
    timeBound: "Reach revenue goals by December 2024.",
    emoji: "💰",
  },
  {
    title: "Self-Improvement",
    description: "Continue growing emotionally and professionally.",
    specific: "Reflect daily for 10 minutes.",
    measurable: "Keep a journal with weekly reviews.",
    achievable: "Incorporate small daily habits.",
    relevant: "Growth leads to confidence and resilience.",
    timeBound: "Feel significant progress by September 2024.",
    emoji: "🌱",
  },
  {
    title: "Sovereignty",
    description: "Stay calm and grounded in all situations.",
    specific: "Practice mindfulness and learn to say 'no' when needed.",
    measurable: "Track moments where I stay composed.",
    achievable: "Start with daily breathing exercises.",
    relevant: "Being sovereign helps me align with my goals.",
    timeBound: "Be confident and sovereign by December 2024.",
    emoji: "🧘‍♂️",
  },
];
