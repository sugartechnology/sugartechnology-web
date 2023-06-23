import { BlogGraphQL4 } from "../../components/BlogGraphQL/BlogGraphQL4";
import { BlogParagraphs4 } from "../../components/BlogParagraphs/BlogParagraphs4";
import { BlogsMain } from "../../components/BlogsMain/BlogsMain";
import React, { useState, useEffect } from 'react';

export const Blog4 = props =>{
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
        <div className={`${isMobile ? 'mobile' : ''} ${isTablet ? 'tablet' : ''} Blog4`}>
            <BlogGraphQL4></BlogGraphQL4>
            <BlogParagraphs4></BlogParagraphs4>
            <BlogsMain></BlogsMain>
        </div>
    );
}