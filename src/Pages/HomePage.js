import React from 'react';
import Header from "../components/Header/Header";
import HomeBanner from "../components/HomeBanner/HomeBanner";
import About from "../components/About/About";
import Services from "../components/Services/Services";
import Projects from "../components/Projects/Projects";
import Summary from "../components/Summary/Summary";
import Blog from "../components/Blog/Blog";
import Contact from "../components/Contact/Contact";

const HomePage = () => {
    return (
      <>
        <Header />
        <HomeBanner />
        <About />
        <Services />
        <Projects />
        <Summary />
        {/* <Blog /> */}
        <Contact />
      </>
    );
};

export default HomePage;