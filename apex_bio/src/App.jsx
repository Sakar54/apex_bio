import Carousel from "./banner/Carousel.jsx";

import React from "react";
import { ReviewSection } from "./testimonal/testimonials.jsx";
import Gallery from "./photo/photo.jsx";
import { AutomationSector1 } from "./solution/Automation.jsx";
import "./App.css";
const App = () => {
  return (
    <>
      <Carousel />
      <AutomationSector1 />

      <Gallery />
      <ReviewSection />
    </>
  );
};
export default App;
