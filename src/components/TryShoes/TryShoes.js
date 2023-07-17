import './TryShoes.css';
import { useTranslation} from "react-i18next";

export const TryShoes = props =>{
    const {t} = useTranslation();
    return(
        <div className='tryShoesContainer'>
            <div className='jointAboutElements'>
                <a className='jointAboutHeader'>{t("tryShoesContainerHeader")}</a>
                <a className='jointAboutSpan'>{t("tryShoesContainerSpan")}</a>
                <iframe className='metaverseProjectElement' width="315" height="560" src="https://www.youtube.com/embed/hOnLOylBcSM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                
            </div>
            <img className='jointAboutBubble' id='shoeBubble' alt='' src={'./assets/img/jointAboutBubble.webp'}></img>
        </div>
    );
}