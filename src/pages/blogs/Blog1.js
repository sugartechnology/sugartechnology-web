import { BlogGraphQL } from "../../components/BlogGraphQL/BlogGraphQL";
import { BlogParagraphs } from "../../components/BlogParagraphs/BlogParagraphs";
import React, { useState, useEffect } from 'react';
import { BlogsMain } from "../../components/BlogsMain/BlogsMain";

export const Blog1 = props =>{
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
        <div className={`${isMobile ? 'mobile' : ''} ${isTablet ? 'tablet' : ''} Blog1`}>
            <BlogGraphQL></BlogGraphQL>
            <BlogParagraphs></BlogParagraphs>
            <BlogsMain></BlogsMain>
        </div>
    );
}