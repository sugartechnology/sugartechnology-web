import './TryShoes.css';
import { useTranslation} from "react-i18next";

export const TryShoes = props =>{
    const {t} = useTranslation();
    return(
        <div className='tryShoesContainer'>
            <div className='jointAboutElements'>
                <a className='jointAboutHeader'>{t("tryShoesContainerHeader")}Lorem ipsum dolor sit consectetur.</a>
                <a className='jointAboutSpan'>{t("tryShoesContainerSpan")}Lorem ipsum dolor sit amet consectetur. Potenti turpis aenean tempus aliquam metus at. Ultricies vel adipiscing volutpat erat. Elit diam vulputate id ullamcorper in tellus vulputate donec. Faucibus quisque euismod sodales nunc.</a>
                <iframe className='jointAboutImage' style={{width: "50%", height: "61%"}} width="560" height="315" src="https://www.youtube.com/shorts/hOnLOylBcSM" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                <img className='jointShadow' alt='' src={'./assets/img/goalsShadow.svg'}></img>
            </div>
            <img className='jointAboutBubble' id='shoeBubble' alt='' src={'./assets/img/jointAboutBubble.webp'}></img>
        </div>
    );
}