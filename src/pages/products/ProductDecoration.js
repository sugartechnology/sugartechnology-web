import { DecorationDetails } from '../../components/ArDetails/DecorationDetails';
import { DecorationPartner } from '../../components/ListenToPartner/DecorationPartner';
import { Decoration } from '../../components/Products/Decoration';
import React, { useState, useEffect } from 'react';

export const ProductDecoration = props =>{
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
        <div className={`${isMobile ? 'mobile' : ''} ${isTablet ? 'tablet' : ''} ProductDecoration`}>
            <Decoration></Decoration>
            <DecorationDetails></DecorationDetails>
            <DecorationPartner></DecorationPartner>
        </div>
    );
}