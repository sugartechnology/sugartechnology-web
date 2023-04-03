import { ListenToPartner } from "../../components/ListenToPartner/ListenToPartner";
import { ProductsCustomer } from "../../components/ProductsCustomers/ProductsCustomers";
import { Shoes } from "../../components/Shoes/Shoes";
import { ShoesQr } from "../../components/ShoesQr/ShoesQr";
import { TryShoes } from "../../components/TryShoes/TryShoes";


export const ProductShoes = props =>{
    return(
        <div className='ProductShoes'>
            <Shoes></Shoes>
            <ProductsCustomer></ProductsCustomer>
            <TryShoes></TryShoes>
            <ShoesQr></ShoesQr>
            <ListenToPartner></ListenToPartner>
        </div>
    );
}