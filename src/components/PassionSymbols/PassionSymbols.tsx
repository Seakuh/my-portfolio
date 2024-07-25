import React from 'react';
import './PassionSymbols.css';
import DigitalArtImage from '../../assets/images/passion_digital_art.webp';
import LightProgrammingImage from '../../assets/images/passion_light_programming.webp';
import CollectiveInitiativesImage from '../../assets/images/passion_collective_initiatives.webp';

interface PassionSymbolProps {
  image: string;
  headline: string;
  description: string;
}

const PassionSymbol = ({
  image,
  headline,
  description,
}: PassionSymbolProps) => {
  return (
    <div className="passion-symbol-background">
      <div className="passion-symbol">
        <img src={image} alt={headline} className="symbol-image" />
        <div className="symbol-headline">{headline}</div>
        <div className="symbol-description">{description}</div>
      </div>
    </div>
  );
};

const PassionSymbols = () => {
  const symbols = [
    {
      image: DigitalArtImage,
      headline: 'Digital Art',
      description:
        'Exploring the limitless possibilities of digital art, using various tools and techniques to bring imaginative visions to life.',
    },
    {
      image: LightProgrammingImage,
      headline: 'Light Programming',
      description:
        'Creating interactive light installations that transform spaces and captivate viewers with dynamic visual displays.',
    },
    {
      image: CollectiveInitiativesImage,
      headline: 'Collective Initiatives',
      description:
        'Working with like-minded individuals on ambitious projects, harnessing diverse talents to make a tangible difference.',
    },
  ];

  return (
    <div className="passion-symbols">
      {symbols.map((symbol, index) => (
        <PassionSymbol
          key={index}
          image={symbol.image}
          headline={symbol.headline}
          description={symbol.description}
        />
      ))}
    </div>
  );
};

export default PassionSymbols;
