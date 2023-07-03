import { ArDetails } from '../../components/ArDetails/ArDetails';
import { ExperienceReports } from '../../components/ExperienceReports/ExperienceReports';
import { FurniturePartner } from '../../components/ListenToPartner/FurniturePartner';
import { ProductsCustomer } from '../../components/ProductsCustomers/ProductsCustomers';
import { ProductStatistics } from '../../components/ProductStatistics/ProductStatistics';
import { ShowAtHome } from '../../components/ShowAtHome/ShowAtHome';
import { SugarBrands } from '../../components/SugarBrands/SugarBrands';
import React, { useState, useEffect } from 'react';

export const ProductAr = props =>{
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
        <div className={`${isMobile ? 'mobile' : ''} ${isTablet ? 'tablet' : ''} ProductAr`}>
            <ShowAtHome></ShowAtHome>
            <ProductsCustomer></ProductsCustomer>
            <ArDetails></ArDetails>
            <SugarBrands></SugarBrands>
            <ProductStatistics></ProductStatistics>
            <ExperienceReports></ExperienceReports>
            <FurniturePartner></FurniturePartner>
        </div>
    );
}