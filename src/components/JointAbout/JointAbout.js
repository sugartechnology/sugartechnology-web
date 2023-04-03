import './JointAbout.css';
import { useTranslation} from "react-i18next";

export const JointAbout = props =>{
    const {t} = useTranslation();
    return(
        <div className='jointAboutContainer'>
            <div className='jointAboutElements'>
                <a className='jointAboutHeader'>Lorem ipsum dolor sit consectetur.</a>
                <a className='jointAboutSpan'>Lorem ipsum dolor sit amet consectetur. Potenti turpis aenean tempus aliquam metus at. Ultricies vel adipiscing volutpat erat. Elit diam vulputate id ullamcorper in tellus vulputate donec. Faucibus quisque euismod sodales nunc. </a>
                <img className='jointAboutImage' alt='' src={'./assets/img/jointAboutImage.svg'}></img>
            </div>
            <img className='jointAboutBubble' alt='' src={'./assets/img/jointAboutBubble.svg'}></img>
        </div>
    );
}