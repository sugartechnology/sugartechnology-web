import './WhoSugar.css';
import { useTranslation} from "react-i18next";

export const WhoSugar = props =>{
    const {t} = useTranslation();
    return(
        <div className='WhoSugarContainer'>
            <div className='flyingElements'>
                <img className='whoSugarImg1' alt='' src={'./assets/img/WhoSugarLogos1.svg'} style={{position:"relative", top:"200px"}}></img>
                <img className='whoSugarImg2' alt='' src={'./assets/img/WhoSugarLogos2.svg'} style={{position:"relative", top:"50px", right:"80px"}}></img>
                <img className='whoSugarImg3' alt='' src={'./assets/img/WhoSugarLogos3.svg'} style={{position:"relative", right:"50px", bottom:"30px"}}></img>
                <img className='whoSugarImg4' alt='' src={'./assets/img/WhoSugarLogos4.svg'}></img>
                <img className='whoSugarImg41' alt='' src={'./assets/img/shoeImg.svg'} style={{position: "absolute", left: "793px", top: "160px"}}></img>
                <img className='whoSugarImg5' alt='' src={'./assets/img/WhoSugarLogos5.svg'} style={{position:"relative", left:"80px", bottom:"30px"}}></img>
                <img className='whoSugarImg51' alt='' src={'./assets/img/WhoSugarLogos5.svg'} style={{position:"relative", display: "none"}}></img>
                <img className='whoSugarImg6' alt='' src={'./assets/img/WhoSugarLogos6.svg'} style={{position:"relative", top:"200px"}}></img>
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