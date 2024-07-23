import React from 'react';
import Card from './components/card/Card';
import './LinksSection.css';

interface SectionProps {
  title: string;
}

const LinksSection: React.FC<SectionProps> = ({ title }) => {
  return (
    <div className="content">
      <h2>Links</h2>
      <Card
        description="Github Hobby"
        link="https://github.com/Seakuh"
        image=""
        title="Github Seakuh"
      ></Card>
      <Card
        description="Github Hobby"
        link="https://github.com/Seakuh"
        image=""
        title="Github DizzleReply"
      ></Card>
      <Card
        description="Github Semester Abort"
        link="https://github.com/NapierDanel"
        image=""
        title="Github NapierDanel"
      ></Card>
    </div>
  );
};

export default LinksSection;
