import { BlogGraphQL3 } from "../../components/BlogGraphQL/BlogGraphQL3";
import { BlogParagraphs3 } from "../../components/BlogParagraphs/BlogParagraphs3";
import { BlogsMain } from "../../components/BlogsMain/BlogsMain";
import React, { useState, useEffect } from 'react';

export const Blog3 = props =>{
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
        <div className={`${isMobile ? 'mobile' : ''} ${isTablet ? 'tablet' : ''} Blog3`}>
            <BlogGraphQL3></BlogGraphQL3>
            <BlogParagraphs3></BlogParagraphs3>
            <BlogsMain></BlogsMain>
        </div>
    );
}