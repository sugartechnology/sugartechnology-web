import './TryShoes.css';
import { useTranslation} from "react-i18next";

export const TryShoes = props =>{
    const {t} = useTranslation();
    return(
        <div className='tryShoesContainer'>
            <div className='jointAboutElements'>
                <a className='jointAboutHeader'>{t("tryShoesContainerHeader")}Lorem ipsum dolor sit amet consectetur.</a>
                <a className='jointAboutSpan'>{t("tryShoesContainerSpan")}Lorem ipsum dolor sit amet consectetur. Neque viverra mi at mattis nascetur eu quis risus netus.</a>
                <img className='jointAboutImage' alt='' src={'./assets/img/tryShoesImage.svg'}></img>
                <img className='jointShadow' alt='' src={'./assets/img/goalsShadow.svg'}></img>
            </div>
            <img className='jointAboutBubble' id='shoeBubble' alt='' src={'./assets/img/jointAboutBubble.svg'}></img>
        </div>
    );
}