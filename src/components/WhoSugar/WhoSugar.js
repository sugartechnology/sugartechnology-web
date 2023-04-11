import './WhoSugar.css';
import { useTranslation} from "react-i18next";

export const WhoSugar = props =>{
    const {t} = useTranslation();
    return(
        <div className='WhoSugarContainer'>
            <div className='flyingElements1'>
                <img className='whoSugarImg1' alt='' src={'./assets/img/WhoSugarLogos1.svg'} style={{position:"relative", top:"200px"}}></img>
                <img className='whoSugarImg2' alt='' src={'./assets/img/WhoSugarLogos2.svg'} style={{position:"relative", top:"50px", left:"50px", width: "150px"}}></img>
                <img className='whoSugarImg3' alt='' src={'./assets/img/WhoSugarLogos3.svg'} style={{position:"relative", left:"160px"}}></img>
                <img className='whoSugarImg4' alt='' src={'./assets/img/WhoSugarLogos4.svg'} style={{position: "relative", left: "300px", width: "150px", top: "30px"}}></img>
                <img className='whoSugarImg41' alt='' src={'./assets/img/shoeImg.svg'} style={{position: "absolute", left: "893px", top: "170px", width: "60px"}}></img>
                <img className='whoSugarImg5' alt='' src={'./assets/img/WhoSugarLogos5.svg'} style={{position:"relative", left:"400px"}}></img>
                <img className='whoSugarImg6' alt='' src={'./assets/img/WhoSugarLogos6.svg'} style={{position:"relative", top: "180px", left: "370px", width: "150px"}}></img>
            </div>
            <div className='flyingElements2' style={{display: "none"}}>
                <img className='mobileBubble1' alt='' src={'./assets/img/mobileBubble1.svg'}></img>
                <img className='mobileBubble2' alt='' src={'./assets/img/mobileBubble2.svg'}></img>
                <img className='mobileBubble3' alt='' src={'./assets/img/mobileBubble3.svg'}></img>
                <img className='mobileBubble4' alt='' src={'./assets/img/mobileBubble4.svg'}></img>
                <img className='mobileBubble5' alt='' src={'./assets/img/mobileBubble5.svg'}></img>
                <img className='mobileBubble6' alt='' src={'./assets/img/mobileBubble6.svg'}></img>
            </div>
            <div className='whoSugarSpans'>
                <a className='whoSugarHeader'>{t("whoIsSugar")}</a>
                <a className='whoSugarSpan'>{t("whoSugarSpan1")}</a>
                <a className='whoSugarSpan'>{t("whoSugarSpan2")}</a>
            </div>
            <div className='whoSugarLogos'>
                <img className='whoSugarLogo1' alt='' src={'./assets/img/sketch_business.svg'}></img>
                <img className='whoSugarLogo2' alt='' src={'./assets/img/WhoSugarLogo7.svg'}></img>
            </div>
        </div>
    );
}