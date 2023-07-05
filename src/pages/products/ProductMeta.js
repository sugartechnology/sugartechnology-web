import { MetaPartner } from "../../components/ListenToPartner/MetaPartner";
import { MetaReports } from "../../components/MetaReports/MetaReports";
import { Metaverse } from "../../components/Metaverse/Metaverse";
import { MetaverseProject } from "../../components/MetaverseProject/MetaverseProject";
import { ProductsCustomer } from "../../components/ProductsCustomers/ProductsCustomers";
import React, { useState, useEffect } from 'react';

export const ProductMeta = props =>{
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
        <div className={`${isMobile ? 'mobile' : ''} ${isTablet ? 'tablet' : ''} ProductMeta`}>
            <Metaverse></Metaverse>
            <ProductsCustomer></ProductsCustomer>
            <MetaverseProject></MetaverseProject>

            {/**
            <MetaReports></MetaReports>
            <MetaPartner></MetaPartner>
             */
            }
        </div>
    );
}