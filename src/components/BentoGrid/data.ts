export const items: BentoGridItem[] = [
  {
    imageSrc:
      'https://miro.medium.com/v2/resize:fit:720/format:webp/1*jjTpTXN2cSpUppjqT5TLmw.png',
    link: 'https://medium.com/@danielenderle1996/how-to-enjoy-the-best-sound-in-bed-with-a-custom-delay-script-6644cf660434',
    altText: 'Speaker sound adjustment',
    text: 'Delay Music Programming',
  },
  {
    imageSrc:
      'https://miro.medium.com/v2/resize:fit:720/format:webp/1*Ack-D1CJkgi-V_p0hTIRTA.png',
    link: 'https://medium.com/@daniel.grimm/335cdfece890',
    altText: 'generate code out of unit tests',
    text: 'TDD with AI',
  },
  {
    imageSrc:
      'https://miro.medium.com/v2/resize:fit:720/format:webp/1*v0jHqkNjWE664mx9dDKA8A.png',
    link: 'https://medium.com/@daniel.grimm/optimizing-sensor-efficiency-with-esp8266-esp32-and-nestjs-for-energy-conservation-90467cc9233f',
    altText:
      'Optimizing Sensor Efficiency with ESP8266/ESP32 and NestJS for Energy Conservation',
    text: 'Green Server',
  },
  {
    imageSrc:
      'https://miro.medium.com/v2/resize:fit:720/format:webp/0*fZbIIW5OgiphdNtC',
    link: 'https://medium.com/comsystoreply/how-to-write-a-production-ready-mvp-in-two-weeks-361e932f52d1',
    altText: 'How to write a production Ready MVP in two weeks',
    text: 'MVP in two weeks',
  },
];

type BentoGridItem = {
  imageSrc: string;
  link: string;
  altText: string;
  text?: string;
};
