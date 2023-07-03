import { CarpetDetails } from '../../components/ArDetails/CarpetDetails';
import { CarpetPartner } from '../../components/ListenToPartner/CarpetPartner';
import { Carpet } from '../../components/Products/Carpet';
import React, { useState, useEffect } from 'react';

export const ProductCarpet = props =>{
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
        <div className={`${isMobile ? 'mobile' : ''} ${isTablet ? 'tablet' : ''} ProductCarpet`}>
            <Carpet></Carpet>
            <CarpetDetails></CarpetDetails>
            <CarpetPartner></CarpetPartner>
        </div>
    );
}