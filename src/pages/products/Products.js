import { ArDetails } from '../../components/ArDetails/ArDetails';
import { ProductsCustomer } from '../../components/ProductsCustomers/ProductsCustomers';
import { ShowAtHome } from '../../components/ShowAtHome/ShowAtHome';
import './Products.css';

export const Products = props =>{
    return(
        <div className='Products'>
            <ShowAtHome></ShowAtHome>
            <ProductsCustomer></ProductsCustomer>
            <ArDetails></ArDetails>
        </div>
    );
}