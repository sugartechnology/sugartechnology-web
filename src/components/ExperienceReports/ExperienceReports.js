import './ExperienceReports.css';
import { useTranslation} from "react-i18next";

export const ExperienceReports = props =>{
    const {t} = useTranslation();
    return(
        <div className='experienceReportsContainer'>
            <div className='reportsSpanImages'>
                <img className='reportsSpansImg' alt='' src={'./assets/img/reportsSpansImg.svg'}></img>
                <img className='reportsSpangImgShadow' alt='' src={'./assets/img/arDetailsShadow.svg'}></img>
            </div>
            <div className='reportsSpanElement'>
                <a className='reportsHeader'>{t("")}Raporlar & Müşteri Yönetimi</a>
                <a className='reportsFirstSpan'>{t("")}Müşterileri takip etme, çalışanların performansını izleme</a>
                <a className='reportsSecondSpan'>{t("")}Rapid Render kullanan bayiiler; çalıştığı proje üzerinden müşterilerini kayıt altında tutabilir, çalışılan proje ve verilen teklifler kontrol edilerek çalışan performansı program üzerinden incelenebilir.</a>
            </div>
        </div>
    );
}
