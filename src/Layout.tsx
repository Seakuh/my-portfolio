import React from "react";
import BinauralFrequenciesTable from "./BinauralFrequenciesTable/BinauralFrequenciesTable";
import BentoGrid from "./components/BentoGrid/BentoGrid";
import Bubbles from "./components/Bubbles/Bubbles";
import { GithubRepositories } from "./components/GithubRepositories/GithubRepositories";
import PassionSymbols from "./components/PassionSymbols/PassionSymbols";
import Section from "./components/Section/Section";
import TimeLine from "./components/TimeLine/TimeLine";
import { Footer } from "./Footer/Footer";
import "./Layout.css";
import { Shader } from "./shader/shader";

const Layout: React.FC = () => {
  return (
    <div className="layout">
      <Section content={<Bubbles></Bubbles>} />
      <Section title="This is me" content={<Shader></Shader>} />
      <Section title={"Blog Posts"} content={<BentoGrid></BentoGrid>} />
      <Section title="Timeline" content={<TimeLine></TimeLine>} />
      <Section
        title="GithubRepositories"
        content={<GithubRepositories></GithubRepositories>}
      />
      <Section
        title="Beats"
        content={<BinauralFrequenciesTable></BinauralFrequenciesTable>}
      ></Section>
      <Section title="Passions" content={<PassionSymbols></PassionSymbols>} />
      <Section content={<Footer></Footer>} />
    </div>
  );
};

export default Layout;
