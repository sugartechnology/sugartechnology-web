import './TryWatch.css';
import { useTranslation} from "react-i18next";

export const TryWatch = props =>{
    const {t} = useTranslation();
    return(
        <div className='tryWatchContainer'>
            <div className='jointAboutElements'>
                <a className='jointAboutHeader'>{t("tryWatchContainerHeader")}</a>
                <a className='jointAboutSpan'>{t("tryWatchContainerSpan")}</a>
                <img className='jointShadow' alt='' src={'./assets/img/goalsShadow.svg'}></img>

           
           
                <iframe className='jointAboutImage'  src="https://www.youtube.com/embed/OS8WDifCz54" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

                
            </div>

        

            <img className='jointAboutBubble' alt='' src={'./assets/img/jointAboutBubble.webp'}></img>
        </div>
    );
}