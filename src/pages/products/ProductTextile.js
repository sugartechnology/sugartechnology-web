import { TextileDetails } from '../../components/ArDetails/TextileDetails';
import { TextilePartner } from '../../components/ListenToPartner/TextilePartner';
import { Textile } from '../../components/Products/Textile';
import React, { useState, useEffect } from 'react';

export const ProductTextile = props =>{
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
        <div className={`${isMobile ? 'mobile' : ''} ${isTablet ? 'tablet' : ''} ProductTextile`}>
            <Textile></Textile>
            <TextileDetails></TextileDetails>

            {/**
            <TextilePartner></TextilePartner>
             */
            }
        </div>
    );
}