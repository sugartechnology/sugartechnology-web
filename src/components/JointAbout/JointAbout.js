import './JointAbout.css';
import { useTranslation} from "react-i18next";

export const JointAbout = props =>{
    const {t} = useTranslation();
    return(
        <div className='jointAboutContainer'>
            <div className='jointAboutElements'>
                <a className='jointAboutHeader'>{t("jointAboutHeader")}</a>
                <a className='jointAboutSpan'>{t("jointAboutSpan")}</a>
                <iframe className='jointAboutImage' src="https://www.youtube.com/embed/2-es8M8AEgQ" frameBorder="0" allowFullScreen></iframe>
                <img className='jointShadow' alt='' src={'./assets/img/goalsShadow.svg'}></img>
            </div>
            <img className='jointAboutBubble' alt='' src={'./assets/img/jointAboutBubble.webp'}></img>
        </div>
    );
}