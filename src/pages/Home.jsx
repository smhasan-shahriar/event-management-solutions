import React, { useEffect } from 'react';
import BannerIntro from '../components/BannerIntro';
import Banner from '../components/Banner';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import OurServices from '../components/OurServices';
import Footer from '../components/Footer';
import CustomerReview from '../components/CustomerReview';
import Questions from '../components/Questions';

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