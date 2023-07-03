import './ListenToPartner.css';
import { useTranslation} from "react-i18next";

export const ShoesPartner = props =>{
    const {t} = useTranslation();

    return(
        <div className='listenToPartnerContainerNoneVideo'>
            <div className='partnerContainer'>
                <img className='redBackgroundCircle1' alt='' src={'./assets/img/circle1.svg'}></img>
                <img className='redBackgroundCircle2' alt='' src={'./assets/img/circle2.svg'}></img>
                <img className='redBackgroundCircle3' alt='' src={'./assets/img/circle3.svg'}></img>
                <div className='commentSpans'>
                    <a className='firstCommentSpan' style={{width: "70%"}}>{t("listenToPartnerHeader")}</a>
                    <a className='secondCommentSpan'>“</a>
                    <a className='thirdCommentSpan'>{t("shoesPartnerSpan")}</a>
                </div>
                <div className='commentCustomer'>
                    <img className='customerPhoto' alt='' src={'assets/img/kys2.JPEG'}></img>
                    <h1>Ayakkabı Müdürü İsmi</h1>
                    <a>Ayakkabı Müdürü</a>
                    <img className='partnerCompanyLogo' alt='' src={'./assets/img/simurgLogo.svg'}></img>
                </div>
            </div>
        </div>
    );
}