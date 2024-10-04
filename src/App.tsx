import React from "react";
import Header from "./components/Header/Header";
import Feature from "./components/Feature/Feature";
import MainProductDescription from "./components/MainProductDescription/MainProductDescription";
import Stats from "./components/Stats/Stats";
import Partnership from "./components/Partnership/Partnership";
import FeatureList from "./components/FeatureList/FeatureList";
import CallToAction from "./components/CallToAction/CallToAction";

const App: React.FC = () => {
  return (
    <>
      <div>
        <Header />
        <Feature />
        <MainProductDescription />
        <Stats />
        <Partnership />
        <FeatureList />
        <CallToAction />
      </div>
    </>
  );
};

export default App;
