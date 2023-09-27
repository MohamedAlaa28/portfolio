import React from "react";
import Header from "./components/Header";
import Products from "./components/Products";
import Footer from "./components/Footer";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Menu from "./components/Menu";

const HomePage = () => {
  return (
    <div>
      <Header />
      <Products />
      <Menu/>
      <Testimonials />
      <About />
      <Footer />
    </div>
  );
};

export default HomePage;
