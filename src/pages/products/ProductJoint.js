import { CreateYourProduct } from "../../components/CreateYourProduct/CreateYourProduct";
import { Joint } from "../../components/Joint/Joint";
import { JointAbout } from "../../components/JointAbout/JointAbout";
import { JointPartner } from "../../components/ListenToPartner/JointPartner";
import { ProductsCustomer } from "../../components/ProductsCustomers/ProductsCustomers";
import React, { useState, useEffect } from 'react';

export const ProductJoint = props =>{
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
        <div className={`${isMobile ? 'mobile' : ''} ${isTablet ? 'tablet' : ''} ProductJoint`}>
            <Joint></Joint>
            <ProductsCustomer></ProductsCustomer>
            <JointAbout></JointAbout>
            <CreateYourProduct></CreateYourProduct>
            <JointPartner></JointPartner>
        </div>
    );
}