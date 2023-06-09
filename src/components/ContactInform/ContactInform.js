import './ContactInform.css';
import { useTranslation } from "react-i18next";

export const ContactInform = props =>{
    const { t } = useTranslation();
    return(
        <div className="contactInformContainer" style={{backgroundImage: 'URL("./assets/img/contactInformBackground.svg")'}}>
            <div class="contactInformOverlay" style={{zIndex: "1"}}></div>
            <div className='contactInform'>
                <a className='contactInformHeader'>{t("")}Lorem ipsum sit amet consectetur.</a>
                <a className='contactInformSpan'>{t("")}Lorem ipsum dolor sit amet consectetur. Leo massa tincidunt senectus etiam nulla quisque in egestas. Scelerisque dictumst vulputate cras mi tortor placerat quis. Adipiscing enim placerat faucibus suscipit consequat dictumst sapien mauris. </a>
            </div>
        </div>
    );
}