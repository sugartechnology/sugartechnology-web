import { Joint } from "../../components/Joint/Joint";
import { JointAbout } from "../../components/JointAbout/JointAbout";
import { ListenToPartner } from "../../components/ListenToPartner/ListenToPartner";
import { ProductsCustomer } from "../../components/ProductsCustomers/ProductsCustomers";


export const ProductJoint = props =>{
    return(
        <div className='ProductJoint'>
            <Joint></Joint>
            <ProductsCustomer></ProductsCustomer>
            <JointAbout></JointAbout>
            <ListenToPartner></ListenToPartner>
        </div>
    );
}