import { BlogsInfo } from "../../components/BlogsInfo/BlogsInfo";
import { BlogsList } from "../../components/BlogsList/BlogsList";
import { BlogsMain } from "../../components/BlogsMain/BlogsMain";
import { ShareBlog } from "../../components/ShareBlog/ShareBlog";
import React, { useState, useEffect } from 'react';

export const Blogs = props =>{
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
        <div className={`${isMobile ? 'mobile' : ''} ${isTablet ? 'tablet' : ''} Blogs`}>
            <BlogsMain></BlogsMain>
            <BlogsList></BlogsList>
            <BlogsInfo></BlogsInfo>
            <ShareBlog></ShareBlog>
        </div>
    );
}