import { TableDetails } from '../../components/ArDetails/TableDetails';
import { ListenToPartner } from '../../components/ListenToPartner/ListenToPartner';
import { Table } from '../../components/Products/Table';
import React, { useState, useEffect } from 'react';

export const ProductTable = props =>{
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
        <div className={`${isMobile ? 'mobile' : ''} ${isTablet ? 'tablet' : ''} ProductTable`}>
            <Table></Table>
            <TableDetails></TableDetails>
            <ListenToPartner></ListenToPartner>
        </div>
    );
}