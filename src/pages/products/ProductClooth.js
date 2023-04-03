import { Clooth } from "../../components/Clooth/Clooth";
import { CloothPatern } from "../../components/CloothPatern/CloothPatern";
import { ListenToPartner } from "../../components/ListenToPartner/ListenToPartner";
import { ProductsCustomer } from "../../components/ProductsCustomers/ProductsCustomers";
import { TryClooth } from "../../components/TryClooth/TryClooth";

export const ProductClooth = props =>{
    return(
        <div className='ProductClooth'>
            <Clooth></Clooth>
            <ProductsCustomer></ProductsCustomer>
            <TryClooth></TryClooth>
            <CloothPatern></CloothPatern>
            <ListenToPartner></ListenToPartner>
        </div>
    );
}