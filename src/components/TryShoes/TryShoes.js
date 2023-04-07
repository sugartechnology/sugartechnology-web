import './TryShoes.css';
import { useTranslation} from "react-i18next";

export const TryShoes = props =>{
    const {t} = useTranslation();
    return(
        <div className='tryShoesContainer'>
            <div className='jointAboutElements'>
                <a className='jointAboutHeader'>Lorem ipsum dolor sit consectetur.</a>
                <a className='jointAboutSpan'>Lorem ipsum dolor sit amet consectetur. Potenti turpis aenean tempus aliquam metus at. Ultricies vel adipiscing volutpat erat. Elit diam vulputate id ullamcorper in tellus vulputate donec. Faucibus quisque euismod sodales nunc. </a>
                <img className='jointAboutImage' alt='' src={'./assets/img/tryShoesImage.svg'}></img>
                <img className='shoeShadow' alt='' src={'./assets/img/arDetailsShadow.svg'}></img>
            </div>
            <img className='jointAboutBubble' alt='' src={'./assets/img/jointAboutBubble.svg'}></img>
        </div>
    );
}