import './ListenToPartner.css';
import { useTranslation} from "react-i18next";

export const WhiteGoodsPartner = props =>{
    const {t} = useTranslation();

    return(
        <div className='listenToPartnerContainerNoneVideo'>
            <div className='partnerContainer'>
                <img className='redBackgroundCircle1' alt='' src={'./assets/img/circle1.svg'}></img>
                <img className='redBackgroundCircle2' alt='' src={'./assets/img/circle2.svg'}></img>
                <img className='redBackgroundCircle3' alt='' src={'./assets/img/circle3.svg'}></img>
                <div className='commentSpans'>
                    <a className='firstCommentSpan' style={{width: "70%"}}>{t("whiteGoodsPartnerHead")}</a>
                    <a className='secondCommentSpan'>“</a>
                    <a className='thirdCommentSpan'>{t("whiteGoodsPartnerSpan")}</a>
                </div>
                <div className='commentCustomer'>
                    <img className='customerPhoto' alt='' src={'assets/img/buket_kaplan_vestel.jpeg'}></img>
                    <h1>Buket Kaplan</h1>
                    <a>Marketing Communications&Retail Marketing Executive</a>
                    <img className='partnerCompanyLogo' alt='' src={'./assets/img/vestel-logo-min.svg'}></img>
                </div>
            </div>
        </div>
    );
}