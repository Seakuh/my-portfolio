interface FrequencyData {
  hz: number;
  tuning: string;
  effect: string;
  bestTime: string;
  audio?: string;
}

export const frequencyData: FrequencyData[] = [
  {
    hz: 396,
    tuning: "Liberation from Fear",
    effect: "Helps to release guilt and fear.",
    bestTime: "Morning",
    audio: "30-100-hz", // path to the audio file
  },
  {
    hz: 417,
    tuning: "Facilitation of Change",
    effect: "Aids in removing negative energy.",
    bestTime: "Afternoon",
  },
  {
    hz: 528,
    tuning: "DNA Repair",
    effect: "Promotes healing and repair of DNA.",
    bestTime: "Evening",
  },
  {
    hz: 639,
    tuning: "Harmonious relationships, connection",
    effect: "During social interactions or personal reflection",
    bestTime: "During social interactions or personal reflection",
  },
  {
    hz: 741,
    tuning: "Awakening intuition, consciousness expansion",
    effect: "Before making decisions or when seeking clarity",
    bestTime: "Before making decisions or when seeking clarity",
  },
  {
    hz: 852,
    tuning: "Spiritual awareness, higher self-connection",
    effect: "During meditation or spiritual practices",
    bestTime: "During meditation or spiritual practices",
  },
  {
    hz: 963,
    tuning: "Enlightenment, unity, oneness",
    effect: "Before or during deep meditation",
    bestTime: "Before or during deep meditation",
  },
  {
    hz: 100,
    tuning: "Peak mental performance, cognitive functioning",
    effect: "When tackling complex tasks",
    bestTime: "When tackling complex tasks",
  },
  {
    hz: 174,
    tuning: "Pain relief, relaxation",
    effect: "When experiencing physical pain",
    bestTime: "When experiencing physical pain",
  },
  {
    hz: 285,
    tuning: "Tissue healing, regeneration",
    effect: "During healing processes",
    bestTime: "During healing processes",
  },
];
