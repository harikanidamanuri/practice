import React from 'react';
import ImageSlider from '../ImageSlider';
import Header1 from '../Header1';
import SingleImg from '../ImageWithTextComponent';
import ImageWithTextComponent from '../ImageWithTextComponent';
import Grid from '../Grid';
import TwoImages from '../TwoImages';
import ImageRowComponent from '../ImageRowComponent';
import Nav from '../Nav';
import Grid2 from '../Grid2';
import Graybg from '../Graybg';
import Footer from '../Footer';
import Section from '../Section';
const App: React.FC = () => {
  return (
    <div>
      <Header1 />
      <div className='pb-44'></div>
      <Nav />
      {/* <div className='pb-40'></div> */}
      <ImageSlider /> 
      {/* <div className='pb-10'></div> */}
      <ImageRowComponent />
      {/* <div className='pb-10'></div> */}
      <ImageWithTextComponent /> *
      {/* <div className='pb-10'></div> */}
      <Grid />
      <TwoImages />
      <Grid2 />
      <Graybg />
      <div className='pb-6'></div>
      <Footer />
      <Section />
    </div>
  );
};

export default App;