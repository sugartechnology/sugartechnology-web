import { ArDetails } from '../../components/ArDetails/ArDetails';
import { ExperienceReports } from '../../components/ExperienceReports/ExperienceReports';
import { ListenToPartner } from '../../components/ListenToPartner/ListenToPartner';
import { ProductsCustomer } from '../../components/ProductsCustomers/ProductsCustomers';
import { ProductStatistics } from '../../components/ProductStatistics/ProductStatistics';
import { ShowAtHome } from '../../components/ShowAtHome/ShowAtHome';
import { SugarBrands } from '../../components/SugarBrands/SugarBrands';

export const ProductAr = props =>{
    return(
        <div className='ProductAr'>
            <ShowAtHome></ShowAtHome>
            <ProductsCustomer></ProductsCustomer>
            <ArDetails></ArDetails>
            <SugarBrands></SugarBrands>
            <ProductStatistics></ProductStatistics>
            <ExperienceReports></ExperienceReports>
            <ListenToPartner></ListenToPartner>
        </div>
    );
}