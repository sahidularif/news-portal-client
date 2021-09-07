import React from "react";
import Header from "./Header";
import HeroSection from "./HeroSection";
import Navbar from './Navbar';
const Home = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <HeroSection/>
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
