import './JointAbout.css';
import { useTranslation} from "react-i18next";

export const JointAbout = props =>{
    const {t} = useTranslation();
    return(
        <div className='jointAboutContainer'>
            <div className='jointAboutElements'>
                <a className='jointAboutHeader'>{t("jointAboutHeader")}</a>
                <a className='jointAboutSpan'>{t("jointAboutSpan")}</a>
                <img className='jointAboutImage' alt='' src={'./assets/img/jointAboutImage.svg'}></img>
                <img className='jointShadow' alt='' src={'./assets/img/goalsShadow.svg'}></img>
            </div>
            <img className='jointAboutBubble' alt='' src={'./assets/img/jointAboutBubble.svg'}></img>
        </div>
    );
}