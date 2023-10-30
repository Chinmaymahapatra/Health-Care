import React from "react";
import Faq from "./Faq";
import Hospitalloc from "./Hospitalloc";
import Stepca from "./Stepcards";
import Carousel from "./Carousel";

function Home() {
  return (
    <>
    <Carousel/>
      <Stepca />
      <Hospitalloc />
      <Faq />
    </>
  );
}

export default Home;
