import React from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import WhoWeAre from '../components/WhoWeAre';
import Services from '../components/Services';
import CaseStudies from '../components/CaseStudies';
import Team from '../components/Team';
import Process from '../components/Process';
import Comparison from '../components/Comparison';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <WhoWeAre />
      <Services />
      <CaseStudies />
      <Comparison />
      <Process />
      <Team />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Home;
