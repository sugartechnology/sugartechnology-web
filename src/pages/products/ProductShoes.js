import { ShoesPartner } from "../../components/ListenToPartner/ShoesPartner";
import { ProductsCustomer } from "../../components/ProductsCustomers/ProductsCustomers";
import { Shoes } from "../../components/Shoes/Shoes";
import { ShoesQr } from "../../components/ShoesQr/ShoesQr";
import { TryShoes } from "../../components/TryShoes/TryShoes";
import React, { useState, useEffect } from 'react';

export const ProductShoes = props =>{
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
        <div className={`${isMobile ? 'mobile' : ''} ${isTablet ? 'tablet' : ''} ProductShoes`}>
            <Shoes></Shoes>
            <ProductsCustomer></ProductsCustomer>
            <TryShoes></TryShoes>
            {
                /**
            <ShoesQr></ShoesQr>
            <ShoesPartner></ShoesPartner>
             */
            }
        </div>
    );
}