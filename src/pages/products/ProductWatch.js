import { ListenToPartner } from "../../components/ListenToPartner/ListenToPartner";
import { ProductsCustomer } from "../../components/ProductsCustomers/ProductsCustomers";
import { TryWatch } from "../../components/TryWatch/TryWatch";
import { Watch } from "../../components/Watch/Watch";

export const ProductWatch = props =>{
    return(
        <div className='ProductWatch'>
            <Watch></Watch>
            <ProductsCustomer></ProductsCustomer>
            <TryWatch></TryWatch>
            <ListenToPartner></ListenToPartner>
        </div>
    );
}