import React from 'react';
import Footer from '../common/Footer';
import Navigations from '../components/Navigations';
import RacingBootsComponent from '../components/RacingBoots';

const RacingBoots = () => {
  return (
    <>
      <Navigations />
      <div className='collection_text'>Racing Boots</div>
      <RacingBootsComponent />
      <Footer />
    </>
  );
};

export default RacingBoots;
