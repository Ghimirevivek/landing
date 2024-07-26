import React from 'react';
import Header from '../../globalcomponent/Header/Header';
import Hero from '../../components/Homepage/Hero';
import Banner from '../../components/Homepage/Banner';
import Footer from '../../components/Homepage/Footer';
import TabsElement from '../../components/Homepage/TabsElement';

const Homepage = () => {
  return (
    <div className='max-w-[150rem] flex flex-col items-center justify-center mx-auto'>
      <div className='w-full'>
        <Header />
        <Hero />
        <Banner />
        <TabsElement />
        <Footer />
      </div>
    </div>
  );
};

export default Homepage;
