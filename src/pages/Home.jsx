import React, { useEffect } from 'react';
import BannerIntro from '../components/BannerIntro';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import OurServices from '../components/OurServices';
import CustomerReview from '../components/CustomerReview';
import Questions from '../components/Questions';
import Footer from '../components/Footer';

const Home = () => {
    useEffect(() => {
        AOS.init({
          duration: 2000, // Animation duration
          offset: 100,   // Offset (in pixels) from the top of the viewport
        });
      }, []);
      useEffect(() => {
        AOS.refresh();
      });
    return (
        <div>
            <BannerIntro ></BannerIntro>
            <OurServices></OurServices>
            <CustomerReview></CustomerReview>
            <Questions></Questions>
            <Footer></Footer>
          
        </div>
    );
};

export default Home;