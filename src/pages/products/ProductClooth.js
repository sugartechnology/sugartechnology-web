import { Clooth } from "../../components/Clooth/Clooth";
import { CloothPatern } from "../../components/CloothPatern/CloothPatern";
import { ListenToPartner } from "../../components/ListenToPartner/ListenToPartner";
import { ProductsCustomer } from "../../components/ProductsCustomers/ProductsCustomers";
import { TryClooth } from "../../components/TryClooth/TryClooth";
import React, { useState, useEffect } from 'react';

export const ProductClooth = props =>{
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
        <div className={`${isMobile ? 'mobile' : ''} ${isTablet ? 'tablet' : ''} ProductClooth`}>
            <Clooth></Clooth>
            <ProductsCustomer></ProductsCustomer>
            <TryClooth></TryClooth>
            <CloothPatern></CloothPatern>
            <ListenToPartner></ListenToPartner>
        </div>
    );
}