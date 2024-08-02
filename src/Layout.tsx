import React from 'react';
import './Layout.css';
import Section from './components/Section/Section';
import Bubbles from './components/Bubbles/Bubbles';
import { GithubRepositories } from './components/GithubRepositories/GithubRepositories';
import PassionSymbols from './components/PassionSymbols/PassionSymbols';
import TimeLine from './components/TimeLine/TimeLine';
import BentoGrid from './components/BentoGrid/BentoGrid';
import { Footer } from './Footer/Footer';

const Layout: React.FC = () => {
  return (
    <div className="layout">
      <Section content={<Bubbles></Bubbles>} />
      <Section
        title="This is me"
        content={
          <p>
            The development of innovations and constant improvements in various
            areas of life have always excited me. Software development allows me
            to experience this every day. Before studying computer science, I
            started programming websites and setting up servers. During my
            studies, I got to learn the tools and methodologies which allow me
            to develop software of high quality. In my career, I met many
            interesting people with whom I implement great software projects.
            Working in a team inspires me because only the influence of each
            team member makes it possible to create a great product.
          </p>
        }
      />
      <Section title={'Blog Posts'} content={<BentoGrid></BentoGrid>} />
      <Section title="Timeline" content={<TimeLine></TimeLine>} />
      <Section
        title="GithubRepositories"
        content={<GithubRepositories></GithubRepositories>}
      />
      <Section title="Passions" content={<PassionSymbols></PassionSymbols>} />
      <Section content={<Footer></Footer>} />
    </div>
  );
};

export default Layout;
