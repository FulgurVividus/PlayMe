import React from "react";

const Header = React.lazy(() => import("./components/Header/Header"));
const MainProductDescription = React.lazy(
  () => import("./components/MainProductDescription/MainProductDescription")
);
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
      <MainProductDescription />
      <Partnership />
      <FeatureList />
      <CallToAction />
      <Footer />
    </>
  );
};

export default App;
