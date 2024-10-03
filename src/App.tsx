import React from "react";
import Header from "./components/Header/Header";
import Feature from "./components/Feature/Feature";
import MainProductDescription from "./components/MainProductDescription/MainProductDescription";
import Stats from "./components/Stats/Stats";
import Partnership from "./components/Partnership/Partnership";

const App: React.FC = () => {
  return (
    <>
      <div>
        <Header />
        <Feature />
        <MainProductDescription />
        <Stats />
        <Partnership />
      </div>
    </>
  );
};

export default App;
