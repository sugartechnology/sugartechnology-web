import { WatchPartner } from "../../components/ListenToPartner/WatchPartner";
import { ProductsCustomer } from "../../components/ProductsCustomers/ProductsCustomers";
import { TryWatch } from "../../components/TryWatch/TryWatch";
import { Watch } from "../../components/Watch/Watch";
import React, { useState, useEffect } from 'react';

export const ProductWatch = props =>{
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
        <div className={`${isMobile ? 'mobile' : ''} ${isTablet ? 'tablet' : ''} ProductWatch`}>
            <Watch></Watch>
            <ProductsCustomer></ProductsCustomer>
            <TryWatch></TryWatch>
            <WatchPartner></WatchPartner>
        </div>
    );
}