import React from "react";

const Header = React.lazy(() => import("./components/Header/Header"));
const Feature = React.lazy(() => import("./components/Feature/Feature"));
const MainProductDescription = React.lazy(
  () => import("./components/MainProductDescription/MainProductDescription")
);
const Stats = React.lazy(() => import("./components/Stats/Stats"));
const Partnership = React.lazy(
  () => import("./components/Partnership/Partnership")
);
const FeatureList = React.lazy(
  () => import("./components/FeatureList/FeatureList")
);
const CallToAction = React.lazy(
  () => import("./components/CallToAction/CallToAction")
);
const Footer = React.lazy(() => import("./components/Footer/Footer"));

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Feature />
      <MainProductDescription />
      <Stats />
      <Partnership />
      <FeatureList />
      <CallToAction />
      <Footer />
    </>
  );
};

export default App;
