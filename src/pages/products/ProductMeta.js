import { ListenToPartner } from "../../components/ListenToPartner/ListenToPartner";
import { MetaReports } from "../../components/MetaReports/MetaReports";
import { Metaverse } from "../../components/Metaverse/Metaverse";
import { MetaverseProject } from "../../components/MetaverseProject/MetaverseProject";
import { ProductsCustomer } from "../../components/ProductsCustomers/ProductsCustomers";

export const ProductMeta = props =>{
    return(
        <div className='ProductMeta'>
            <Metaverse></Metaverse>
            <ProductsCustomer></ProductsCustomer>
            <MetaverseProject></MetaverseProject>
            <MetaReports></MetaReports>
            <ListenToPartner></ListenToPartner>
        </div>
    );
}