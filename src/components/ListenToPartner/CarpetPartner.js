import './ListenToPartner.css';
import { useTranslation} from "react-i18next";

export const CarpetPartner = props =>{
    const {t} = useTranslation();

    return(
        <div className='listenToPartnerContainer'>
            <div className='partner1'>
            <img className='containerTopLogo' alt='' src={'./assets/img/ListenToPartnerImg1.svg'}></img>
                <div className='partnerHeaders'>
                    <img className='partnerLogo' alt='' src={'./assets/img/ekohalilogo.svg'} ></img>
                    <a className='partnerHeader'>{t("listenToPartnerHeader")}</a>
                    <img className='spanBottomLogo' alt='' src={'./assets/img/ListenToPartnerImg2.svg'} style={{position: "absolute", right: "10px", top: "70px"}}></img>
                </div>
                <div className='partnerSpans' style={{display: "flex"}}>
                    <a className='partnerSpan'>{t("ekoHaliComments")}</a>
                </div>
                <div className='partnerVideo'>
                    <iframe className='partnerVideos' src="https://www.youtube.com/embed/oKDV_wUaaOo" frameBorder="0" allowFullScreen></iframe>
                    <img className='partnerVideoShadow' id='deskopVideoShadow' alt='' src={'./assets/img/goalsShadow.svg'}></img>
                </div>
            </div>
        </div>
    );
}