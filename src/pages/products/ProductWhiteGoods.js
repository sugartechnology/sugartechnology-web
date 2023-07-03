import { WhiteGoodsDetails } from '../../components/ArDetails/WhiteGoodsDetails';
import { WhiteGoodsPartner } from '../../components/ListenToPartner/WhiteGoodsPartner';
import { WhiteGoods } from '../../components/Products/WhiteGoods';
import React, { useState, useEffect } from 'react';

export const ProductWhiteGoods = props =>{
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
        <div className={`${isMobile ? 'mobile' : ''} ${isTablet ? 'tablet' : ''} ProductWhiteGoods`}>
            <WhiteGoods></WhiteGoods>
            <WhiteGoodsDetails></WhiteGoodsDetails>
            <WhiteGoodsPartner></WhiteGoodsPartner>
        </div>
    );
}