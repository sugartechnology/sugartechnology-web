import './JointAbout.css';
import { useTranslation} from "react-i18next";

export const JointAbout = props =>{
    const {t} = useTranslation();
    return(
        <div className='jointAboutContainer'>
            <div className='jointAboutElements'>
                <a className='jointAboutHeader'>{t("jointAboutHeader")}</a>
                <a className='jointAboutSpan'>{t("jointAboutSpan")}</a>
                <iframe className='jointAboutImage' style={{width: "50%", height: "50%"}}  width="804" height="411" src="https://www.youtube.com/embed/2-es8M8AEgQ" frameborder="0" allowfullscreen></iframe>
                <img className='jointShadow' alt='' src={'./assets/img/goalsShadow.svg'}></img>
            </div>
            <img className='jointAboutBubble' alt='' src={'./assets/img/jointAboutBubble.svg'}></img>
        </div>
    );
}