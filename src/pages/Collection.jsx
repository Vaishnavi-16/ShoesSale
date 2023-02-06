import React from 'react';
import Footer from '../common/Footer';
import Navigations from '../components/Navigations';
import CollectionComponent from '../components/Collection';

const Collection = () => {
  return (
    <>
      <Navigations />
      <div className='collection_text'>Collection</div>
      <CollectionComponent />
      <Footer />
    </>
  );
};

export default Collection;
