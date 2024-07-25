
export interface Bubble {
  name: string;
  color: string;
  size: number;
}

export type BubbleData = readonly Bubble[];

// size between 50 and 100
export const bubbleData: BubbleData = [
  {
      name: 'Node.JS',
      color: 'green',
      size: 70
  },
  {
      name: 'Architecture',
      color: 'green',
      size: 100
  },
  {
      name: 'Full Stack',
      color: 'green',
      size: 100
  },
  {
      name: 'Spring Boot',
      color: 'green',
      size: 100
  },
  {
      name: 'Express.JS',
      color: 'green',
      size: 100
  },
  {
      name: 'LLM',
      color: 'purple',
      size: 50
  },
  {
      name: 'Open AI',
      color: 'purple',
      size: 70
  },
  {
      name: 'Generative AI',
      color: 'purple',
      size: 100
  },
  {
      name: 'NestJS',
      color: 'red',
      size: 60
  },
  {
      name: 'english-speaking',
      color: 'red',
      size: 100
  },
  {
      name: 'german-speaking',
      color: 'red',
      size: 100
  },
  {
      name: 'TypeScript',
      color: 'red',
      size: 100
  },
  {
      name: 'PostgreSQL',
      color: 'purple',
      size: 100
  },
  {
      name: 'Java / Kotlin / JVM',
      color: 'yellow',
      size: 110
  },
  {
      name: 'JavaScript',
      color: 'red',
      size: 100
  },
  {
      name: 'Java',
      color: 'blue',
      size: 50
  },
  {
      name: 'UX',
      color: 'red',
      size: 50
  },
  {
      name: 'Linux',
      color: 'orange',
      size: 50
  },
  {
      name: 'Frontend',
      color: 'yellow',
      size: 80
  },
  {
      name: 'remote-friendly',
      color: 'yellow',
      size: 100
  },
  {
      name: 'Junior friendly',
      color: 'lime',
      size: 110
  },
  {
      name: 'Microfrontends',
      color: 'red',
      size: 110
  },
  {
      name: 'Docker',
      color: 'orange',
      size: 60
  },
  {
      name: 'websockets',
      color: 'red',
      size: 100
  }
]
