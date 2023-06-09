import { SectoralSolution } from '../../components/SectoralSolution/SectoralSolution';
import { SugarGoals } from '../../components/SugarGoals/SugarGoals';
import { SugarSquad } from '../../components/SugarSquad/SugarSquad';
import { SugarTeam } from '../../components/SugarTeam/SugarTeam';
import { WhoSugar } from '../../components/WhoSugar/WhoSugar';
import React, { useState, useEffect } from 'react';

export const AboutUs = props =>{
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
        <div className={`${isMobile ? 'mobile' : ''} ${isTablet ? 'tablet' : ''} AboutUs`}>
            <WhoSugar></WhoSugar>
            <SugarTeam></SugarTeam>
            <SugarSquad></SugarSquad>
            <SugarGoals></SugarGoals>
            <SectoralSolution></SectoralSolution>
        </div>
    );
}