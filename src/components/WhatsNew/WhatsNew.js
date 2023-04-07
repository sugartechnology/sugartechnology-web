import './WhatsNew.css';
import { useTranslation} from "react-i18next";

export const WhatsNew = props =>{
    const {t} = useTranslation();
    return(
        <div className='WhatsNewContainer'>
            <div className='whatsNewSpans'>
                <a className='whatsNewHeader'>{t("whatsNew")}</a>
                <a className='whatsNewSpan'>{t("whatsNewContainerSpan")}</a>
            </div>
            <div className='whatsNewElements'>
                <img className='whatsNewElement' alt='' src={'./assets/img/whatsNewElement1.svg'}></img>
                
            </div>
        </div>
    );
}