import { ContactAddress } from "../../components/ContactAddress/ContactAddress";
import { ContactInput } from "../../components/ContactInput/ContactInput";

export const ContactUs = props =>{
    return(
        <div className='contactUs'>
            <ContactInput></ContactInput>
            <ContactAddress></ContactAddress>
        </div>
    );
}