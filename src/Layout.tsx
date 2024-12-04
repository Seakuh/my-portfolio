import React from "react";
import BinauralFrequenciesTable from "./BinauralFrequenciesTable/BinauralFrequenciesTable";
import FrequencyOverview from "./BinauralFrequenciesTable/FrequencyOverview/FrequencyOverview";
import BentoGrid from "./components/BentoGrid/BentoGrid";
import Bubbles from "./components/Bubbles/Bubbles";
import { GithubRepositories } from "./components/GithubRepositories/GithubRepositories";
import PassionSymbols from "./components/PassionSymbols/PassionSymbols";
import { PhilosophySection } from "./components/PhilosophySection/PhilosophySection";
import { Projects } from "./components/Projects/Projects";
import Section from "./components/Section/Section";
import TimeLine from "./components/TimeLine/TimeLine";
import { Footer } from "./Footer/Footer";
import "./Layout.css";
const Layout: React.FC = () => {
  return (
    <div className="layout">
      <Section id="bubbles" content={<Bubbles />} />
      <Section
        id="thats-me"
        // title={"Thats me"}
        content={<PhilosophySection />}
      />
      <Section id="Projects" title={"Projects"} content={<Projects />} />
      {/* <Section id="Projects" title={"Blog"} content={<Blog />} /> */}

      <Section
        id="github-repositories"
        title="Github Repositories"
        content={<GithubRepositories />}
      />
      <Section id="blog-posts" title={"Blog Posts"} content={<BentoGrid />} />
      <Section id="passions" title="Passions" content={<PassionSymbols />} />
      <Section
        id="frequency-overview"
        title={"Frequencies"}
        content={<FrequencyOverview />}
      />
      <Section id="beats" content={<BinauralFrequenciesTable />} />
      <Section id="timeline" title="Timeline" content={<TimeLine />} />
      <Section content={<Footer />} />
    </div>
  );
};

export default Layout;
