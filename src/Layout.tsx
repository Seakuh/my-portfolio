// Layout.tsx
import React from "react";
import BigButton from "./BigButton/BigButton";
import BinauralFrequenciesTable from "./BinauralFrequenciesTable/BinauralFrequenciesTable";
import BentoGrid from "./components/BentoGrid/BentoGrid";
import Bubbles from "./components/Bubbles/Bubbles";
import { GithubRepositories } from "./components/GithubRepositories/GithubRepositories";
import PassionSymbols from "./components/PassionSymbols/PassionSymbols";
import Section from "./components/Section/Section";
import TimeLine from "./components/TimeLine/TimeLine";
import { Footer } from "./Footer/Footer";
import "./Layout.css";
import Menu from "./menu/Menu";
import { Shader } from "./shader/shader";

const Layout: React.FC = () => {
  return (
    <div className="layout">
      <Menu />
      <BigButton /> {/* Add the Big Button here */}
      <Section content={<Bubbles />} />
      <Section title="This is me" content={<Shader />} />
      <Section title={"Blog Posts"} content={<BentoGrid />} />
      <Section title="Timeline" content={<TimeLine />} />{" "}
      {/* Timeline section */}
      <Section title="GithubRepositories" content={<GithubRepositories />} />
      <Section title="Beats" content={<BinauralFrequenciesTable />} />
      <Section title="Passions" content={<PassionSymbols />} />
      <Section content={<Footer />} />
    </div>
  );
};

export default Layout;
