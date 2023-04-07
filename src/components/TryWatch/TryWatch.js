import './TryWatch.css';
import { useTranslation} from "react-i18next";

export const TryWatch = props =>{
    const {t} = useTranslation();
    return(
        <div className='tryWatchContainer'>
            <div className='jointAboutElements'>
                <a className='jointAboutHeader'>{t("tryWatchContainerHeader")}</a>
                <a className='jointAboutSpan'>{t("tryWatchContainerSpan")}</a>
                <img className='jointAboutImage' alt='' src={'./assets/img/tryWatchImage.svg'}></img>
                <img className='watchShadow' alt='' src={'./assets/img/arDetailsShadow.svg'}></img>
            </div>
            <img className='jointAboutBubble' alt='' src={'./assets/img/jointAboutBubble.svg'}></img>
        </div>
    );
}