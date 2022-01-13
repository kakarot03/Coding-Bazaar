import React from "react";
import Announcement from "../components/Announcement";
import Categories from "../components/Categories";
import Navbar from "../components/Navbar";
import Sliders from "../components/Sliders";
import Products from "../components/Products";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";

export const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Sliders />
      <Categories />
      <Products />
      <NewsLetter />
      <Footer />
    </div>
  );
};
