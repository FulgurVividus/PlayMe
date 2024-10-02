import React from "react";
import Header from "./components/Header/Header";
import Feature from "./components/Feature/Feature";
import MainProductDescription from "./components/MainProductDescription/MainProductDescription";

const App: React.FC = () => {
  return (
    <>
      <div>
        <Header />
        <Feature />
        <MainProductDescription />
      </div>
    </>
  );
};

export default App;
