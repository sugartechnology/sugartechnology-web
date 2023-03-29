import { ArDetails } from '../../components/ArDetails/ArDetails';
import { Header } from '../../components/Header/Header';
import { ProductsCustomer } from '../../components/ProductsCustomers/ProductsCustomers';
import { ShowAtHome } from '../../components/ShowAtHome/ShowAtHome';
import { Contact } from './components/Contact/Contact';
import { Footer } from './components/Footer/Footer';
import './Products.css';

export const AboutUs = props =>{
    return(
        <div className='AboutUs'>
            <Header></Header>
            <ShowAtHome></ShowAtHome>
            <ProductsCustomer></ProductsCustomer>
            <ArDetails></ArDetails>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
}