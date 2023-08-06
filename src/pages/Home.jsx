import React from "react";
import Nav from "../components/Nav";
import "../components/Nav.css";
import Intro from "../components/Intro";
import AboutMe from "../components/AboutMe";

const Home = ({data}) => {
  return (
    <section className="data-section" id="home">
      <div className="">
        <Nav data={data}/>
        <Intro/>
      </div>
      <AboutMe/>
    </section>
  );
};

export default Home;
