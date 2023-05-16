import { About } from "../../components/About/About";
import { CustomerComments } from "../../components/CustomerComments/CustomerComments";
import { Customers } from "../../components/Customers/Customers";
import { MainPageSlider, MainPageSliderItem } from "../../components/MainPagSlider/MainPageSlider";
import { Statistics } from "../../components/Statistics/Statistics";
import React, { useState, useEffect } from 'react';

export const MainPage = ()=>{
    const [isTablet, setIsTablet] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 800);
            setIsTablet(window.innerWidth > 800 && window.innerWidth <= 1100);
            
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
        window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (<div className={`${isMobile ? 'mobile' : ''} ${isTablet ? 'tablet' : ''}  MainPage`}>
         <MainPageSlider>
            <MainPageSliderItem src={process.env.PUBLIC_URL + '/home.svg'} ssrc={process.env.PUBLIC_URL + '/home_selected.svg'}></MainPageSliderItem>
            <MainPageSliderItem src={process.env.PUBLIC_URL + '/metaverse.svg'} ssrc={process.env.PUBLIC_URL + '/metaverse_selected.svg'}></MainPageSliderItem>
            <MainPageSliderItem src={process.env.PUBLIC_URL + '/cloth.svg'} ssrc={process.env.PUBLIC_URL + '/cloth_selected.svg'}></MainPageSliderItem>
            <MainPageSliderItem src={process.env.PUBLIC_URL + '/watch.svg'} ssrc={process.env.PUBLIC_URL + '/watch_selected.svg'}></MainPageSliderItem>
            <MainPageSliderItem src={process.env.PUBLIC_URL + '/shoe.svg'} ssrc={process.env.PUBLIC_URL + '/shoe_selected.svg'}></MainPageSliderItem>
            <MainPageSliderItem src={process.env.PUBLIC_URL + '/joint.svg'} ssrc={process.env.PUBLIC_URL + '/joint_selected.svg'}></MainPageSliderItem>
          </MainPageSlider>
          <About></About>
          <Customers></Customers>
          <CustomerComments></CustomerComments>
    </div>);
}