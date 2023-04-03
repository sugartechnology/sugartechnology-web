import './ListenToPartner.css';
import { useTranslation} from "react-i18next";

export const ListenToPartner = props =>{
    const {t} = useTranslation();
    return(
        <div className='listenToPartnerContainer'>
            <div className='partner1'>
                <div className='partnerHeaders'>
                    <img alt='' src={'./assets/img/ListenToPartnerImg1.svg'} style={{position: "absolute", bottom: "140px", left: "30px"}}></img>
                    <img alt='' src={'./assets/img/partnerSimurg.svg'} style={{width: "170px", position: "relative", left: "30px"}}></img>
                    <a className='partnerHeader'>{t("listenToPartnerHeader")}</a>
                    <img alt='' src={'./assets/img/ListenToPartnerImg2.svg'} style={{position: "absolute", left: "760px", top: "70px"}}></img>
                </div>
                <div className='partnerSpans' style={{display: "flex"}}>
                    <a className='partnerSpan'>Bir “Sanat Evi” için teknolojiyle işini dönüştürmek mümkün mü? Simurg Sanatevi iş birliğiyle benzersiz sanat eserlerini dijital ortama taşıyarak ve müşterilerin zaman ve mekandan bağımsız ürünleri kendi yaşam alanlarında deneyimlemesini sağlayarak geleceği bugünden tasarlıyoruz!Simurg Sanatevi kurucu ortaklarından Sayın İbrahim Halil Şahin, SugAR teknolojisi ile dijital dönüşüm yolculuğunu, müşteri ve satış ekibi deneyiminin nasıl dönüştüğünü, teknolojiyle gelecek vizyonunu bizlerle paylaştı.</a>
                </div>
                <div className='partnerVideo'>
                    <img className='partnerVideoImg' alt='' src={'./assets/img/listenPartnerVideo.svg'}></img>
                </div>
            </div>
            <div className='partnerPageButton'>
                <img alt='' src={'./assets/img/commentPageButtons.svg'}></img>
            </div>
        </div>
    );
}