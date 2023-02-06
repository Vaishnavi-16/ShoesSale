import React from 'react';
import Footer from '../common/Footer';
import Navigations from '../components/Navigations';
import ShoesComponent from '../components/Shoes';

const Shoes = () => {
  return (
    <>
      <Navigations />
      <div className='collection_text'>Shoes</div>
      <ShoesComponent />
      <Footer />
    </>
  );
};

export default Shoes;
