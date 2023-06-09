import './WhoSugar.css';
import { useTranslation} from "react-i18next";

export const WhoSugar = props =>{
    const {t} = useTranslation();
    return(
        <div className='WhoSugarContainer'>
            <div className='flyingElements1'>
                <a className='whoSugarImg1' href='/productAr'><img alt='' src={'./assets/img/WhoSugarLogos1.webp'}></img></a>
                <a className='whoSugarImg2' href='/productJoint'><img alt='' src={'./assets/img/WhoSugarLogos2.svg'} ></img></a>
                <a className='whoSugarImg3' href='/productMeta'><img alt='' src={'./assets/img/WhoSugarLogos3.webp'}></img></a>
                <a className='whoSugarImg4' href='/productShoes'><img alt='' src={'./assets/img/WhoSugarLogos4.svg'}></img></a>
                <a className='whoSugarImg5' href='/productWatch'><img alt='' src={'./assets/img/WhoSugarLogos5.webp'}></img></a>
                <a className='whoSugarImg6' href='/productClooth'><img alt='' src={'./assets/img/WhoSugarLogos6.svg'}></img></a>
            </div>
            <div className='whoSugarSpans'>
                <a className='whoSugarHeader'>{t("whoIsSugar")}</a>
                <a className='whoSugarSpan'>{t("whoSugarSpan")}</a>
            </div>
            <div className='whoSugarLogos'>
                <img className='whoSugarLogo1' alt='' src={'./assets/img/whoSugarImage.svg'}></img>
                <img className='whoSugarLogo2' alt='' src={'./assets/img/WhoSugarLogo7.webp'}></img>
            </div>
        </div>
    );
}