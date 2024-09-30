import React from "react";
import BinauralFrequenciesTable from "./BinauralFrequenciesTable/BinauralFrequenciesTable";
import FrequencyOverview from "./BinauralFrequenciesTable/FrequencyOverview/FrequencyOverview";
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
      <Section id="bubbles" content={<Bubbles />} />
      <Section id="shader" title="This is me" content={<Shader />} />
      <Section id="blog-posts" title={"Blog Posts"} content={<BentoGrid />} />
      <Section
        id="frequency-overview"
        title={"Frequencies"}
        content={<FrequencyOverview />}
      />
      <Section id="timeline" title="Timeline" content={<TimeLine />} />
      <Section
        id="github-repositories"
        title="Github Repositories"
        content={<GithubRepositories />}
      />
      <Section
        id="beats"
        title="Beats"
        content={<BinauralFrequenciesTable />}
      />
      <Section id="passions" title="Passions" content={<PassionSymbols />} />
      <Section content={<Footer />} />
    </div>
  );
};

export default Layout;
