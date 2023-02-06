import React from 'react';
import Footer from '../common/Footer';
import Header from '../common/Header';
import Collection from './Collection';
import Contact from './Contact';
import RacingBoots from './RacingBoots';
import Shoes from './Shoes';

const Home = () => {
  return (
    <>
      <Header />

      <Collection />
      <Shoes />
      <RacingBoots />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
