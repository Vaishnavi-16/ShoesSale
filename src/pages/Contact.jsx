import React from 'react';
import Footer from '../common/Footer';
import Navigations from '../components/Navigations';
import ContactComponent from '../components/Contact';

const Contact = () => {
  return (
    <>
      <Navigations />
      <div className='collection_text'>Contact</div>
      <ContactComponent />
      <Footer />
    </>
  );
};

export default Contact;
