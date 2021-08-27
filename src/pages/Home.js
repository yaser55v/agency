import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Products from "../components/Products"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Products />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
