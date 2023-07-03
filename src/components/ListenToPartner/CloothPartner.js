import './ListenToPartner.css';
import { useTranslation} from "react-i18next";

export const CloothPartner = props =>{
    const {t} = useTranslation();

    return(
        <div className='listenToPartnerContainerNoneVideo'>
            <div className='partner1'>
                <div className='partnerHeaders'>
                    <img className='containerTopLogo' alt='' src={'./assets/img/ListenToPartnerImg1.svg'} style={{position: "absolute", bottom: "140px", left: "40px"}}></img>
                    <a className='partnerHeader'>{t("listenToPartnerHeader")}</a>
                    <img className='partnerLogo' alt='' src={'./assets/img/simurgLogo.svg'} style={{width: "170px", position: "absolute", left: "40px"}}></img>
                </div>
                <div className='partnerSpans' style={{display: "flex"}}>
                    <a className='partnerSpan'>{t("simurgComments")}</a>
                    <img className='spanBottomLogo' alt='' src={'./assets/img/ListenToPartnerImg2.svg'} style={{position: "absolute",right: "80px", bottom: "-10px"}}></img>
                </div>
            </div>
        </div>
    );
}