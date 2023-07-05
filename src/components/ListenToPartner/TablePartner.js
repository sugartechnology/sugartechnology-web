import './ListenToPartner.css';
import { useTranslation} from "react-i18next";

export const TablePartner = props =>{
    const {t} = useTranslation();

    return(
        <div className='listenToPartnerContainer'>
            <div className='partner1' id='partner1'>
                <div className='partnerHeaders'>
                    <img className='containerTopLogo' alt='' src={'./assets/img/ListenToPartnerImg1.svg'} style={{position: "absolute", bottom: "140px", left: "40px"}}></img>
                    <a className='partnerHeader'>{t("listenToPartnerHeader")}</a>
                    <img className='partnerLogo' alt='' src={'./assets/img/simurgLogo.svg'} style={{width: "170px", position: "absolute", left: "40px"}}></img>
                </div>
                <div className='partnerSpans' style={{display: "flex"}}>
                    <a className='partnerSpan'>{t("simurgComments")}</a>
                    <img className='spanBottomLogo' alt='' src={'./assets/img/ListenToPartnerImg2.svg'} style={{position: "absolute",right: "80px", bottom: "-10px"}}></img>
                </div>
                <div className='partnerVideo'>
                    <iframe className='jointAboutImage' style={{width: "80%", height: "80%"}}  width="804" height="411" src="https://www.youtube.com/embed/VJPmW2u43uU" frameBorder="0" allowFullScreen></iframe>
                    <img className='partnerVideoShadow' id='deskopVideoShadow' alt='' src={'./assets/img/goalsShadow.svg'}></img>
                </div>
            </div>
        </div>
    );
}