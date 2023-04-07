import './TryShoes.css';
import { useTranslation} from "react-i18next";

export const TryShoes = props =>{
    const {t} = useTranslation();
    return(
        <div className='tryShoesContainer'>
            <div className='jointAboutElements'>
                <a className='jointAboutHeader'>{t("tryShoesContainerHeader")}</a>
                <a className='jointAboutSpan'>{t("tryShoesContainerSpan")}</a>
                <img className='jointAboutImage' alt='' src={'./assets/img/tryShoesImage.svg'}></img>
                <img className='shoeShadow' alt='' src={'./assets/img/arDetailsShadow.svg'}></img>
            </div>
            <img className='jointAboutBubble' alt='' src={'./assets/img/jointAboutBubble.svg'}></img>
        </div>
    );
}