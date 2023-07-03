import { BathroomDetails } from '../../components/ArDetails/BathroomDetails';
import { BathroomPartner } from '../../components/ListenToPartner/BathroomPartner';
import { Bathroom } from '../../components/Products/Bathroom';
import React, { useState, useEffect } from 'react';

export const ProductBathroom = props =>{
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
    return(
        <div className={`${isMobile ? 'mobile' : ''} ${isTablet ? 'tablet' : ''} ProductBathroom`}>
            <Bathroom></Bathroom>
            <BathroomDetails></BathroomDetails>
            <BathroomPartner></BathroomPartner>
        </div>
    );
}