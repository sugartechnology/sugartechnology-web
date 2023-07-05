import './TryWatch.css';
import { useTranslation} from "react-i18next";

export const TryWatch = props =>{
    const {t} = useTranslation();
    return(
        <div className='tryWatchContainer'>
            <div className='jointAboutElements'>
                <a className='jointAboutHeader'>{t("tryWatchContainerHeader")}</a>
                <a className='jointAboutSpan'>{t("tryWatchContainerSpan")}</a>
                <iframe className='jointAboutImage' style={{width: "50%"}} width="560" height="315" src="https://www.youtube.com/shorts/hOnLOylBcSM" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                <img className='jointShadow' alt='' src={'./assets/img/goalsShadow.svg'}></img>
            </div>
            <img className='jointAboutBubble' alt='' src={'./assets/img/jointAboutBubble.webp'}></img>
        </div>
    );
}