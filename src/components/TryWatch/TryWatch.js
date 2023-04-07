import './TryWatch.css';
import { useTranslation} from "react-i18next";

export const TryWatch = props =>{
    const {t} = useTranslation();
    return(
        <div className='tryWatchContainer'>
            <div className='jointAboutElements'>
                <a className='jointAboutHeader'>Lorem ipsum dolor sit consectetur.</a>
                <a className='jointAboutSpan'>Lorem ipsum dolor sit amet consectetur. Potenti turpis aenean tempus aliquam metus at. Ultricies vel adipiscing volutpat erat. Elit diam vulputate id ullamcorper in tellus vulputate donec. Faucibus quisque euismod sodales nunc. </a>
                <img className='jointAboutImage' alt='' src={'./assets/img/tryWatchImage.svg'}></img>
                <img className='watchShadow' alt='' src={'./assets/img/arDetailsShadow.svg'}></img>
            </div>
            <img className='jointAboutBubble' alt='' src={'./assets/img/jointAboutBubble.svg'}></img>
        </div>
    );
}