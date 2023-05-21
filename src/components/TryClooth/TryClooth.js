import './TryClooth.css';
import { useTranslation} from "react-i18next";

export const TryClooth = props =>{
    const {t} = useTranslation();
    return(
        <div className='tryCloothContainer'>
            <div className='tryCloothElements'>
                <a className='tryCloothHeader'>{t("tryClootContainerHeader")}Lorem ipsum dolor sit consectetur.</a>
                <a className='tryCloothSpan'>{t("tryClootContainerSpan")}Lorem ipsum dolor sit amet consectetur. Potenti turpis aenean tempus aliquam metus at. Ultricies vel adipiscing volutpat erat. Elit diam vulputate id ullamcorper in tellus vulputate donec. Faucibus quisque euismod sodales nunc. </a>
                <div className='tryCloothElementImage'>
                    <img className='tryCloothElementImage1' alt='' src={'./assets/img/tryCloothElementImage1.svg'} style={{width: "407px"}}></img>
                    <img className='tryCloothElementImage2' alt='' src={'./assets/img/tryCloothElementImage2.svg'} style={{width: "421px"}}></img>
                </div>
            </div>
            <div className='tryCloothImages'>
                <img className='tryCloothImage' alt='' src={'./assets/img/tryCloothImage.svg'} style={{width:"361px"}}></img>
                <img className='tryCloothBubble' alt='' src={'./assets/img/tryCloothBubble.svg'} style={{position: "absolute", right: "0px", zIndex: "-1", top: "800px"}}></img>
            </div>
        </div>
    );
}
