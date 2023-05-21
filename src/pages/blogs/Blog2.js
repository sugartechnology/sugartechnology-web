import { BlogGraphQL2 } from "../../components/BlogGraphQL/BlogGraphQL2";
import { BlogParagraphs2 } from "../../components/BlogParagraphs/BlogParagraphs2";
import { YouAlsoLike } from "../../components/YouAlsoLike/YouAlsoLike";
import React, { useState, useEffect } from 'react';

export const Blog2 = props =>{
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
        <div className={`${isMobile ? 'mobile' : ''} ${isTablet ? 'tablet' : ''} Blog2`}>
            <BlogGraphQL2></BlogGraphQL2>
            <BlogParagraphs2></BlogParagraphs2>
            <YouAlsoLike></YouAlsoLike>
        </div>
    );
}