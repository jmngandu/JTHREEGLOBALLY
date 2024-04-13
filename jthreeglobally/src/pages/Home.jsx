import React from "react";
import { Header } from "../Components/Header";
import { HomeHero } from "../Components/HomeHero";
export const Home = () => {
  return (
    <>
      <Header />
      <div className="home-section">
        <h1>WELCOME TO JTHREEGLOBALLY</h1>
      </div>
      <HomeHero />
    </>
  );
};
