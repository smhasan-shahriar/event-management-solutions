import React, { useEffect } from 'react';
import BannerIntro from '../components/BannerIntro';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import OurServices from '../components/OurServices';
import CustomerReview from '../components/CustomerReview';
import Questions from '../components/Questions';
import Footer from '../components/Footer';
import { ToastContainer } from 'react-toastify';

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
          <ToastContainer/>
            <BannerIntro ></BannerIntro>
            <OurServices></OurServices>
            <CustomerReview></CustomerReview>
            <Questions></Questions>
          
        </div>
    );
};

export default Home;