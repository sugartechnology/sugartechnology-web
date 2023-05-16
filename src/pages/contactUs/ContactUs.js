import { ContactAddress } from "../../components/ContactAddress/ContactAddress";
import { ContactInput } from "../../components/ContactInput/ContactInput";
import React, { useState, useEffect } from 'react';

export const ContactUs = props =>{
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
        <div className={`${isMobile ? 'mobile' : ''} ${isTablet ? 'tablet' : ''} contactUs`}>
            <ContactInput></ContactInput>
            <ContactAddress></ContactAddress>
        </div>
    );
}