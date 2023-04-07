import './MetaReports.css';
import { useTranslation} from "react-i18next";

export const MetaReports = props =>{
    const {t} = useTranslation();
    return(
        <div className='metaReportsContainer'>
           <div className='metaReportsImg'>
                <img alt='' src={'./assets/img/metaReportsImage.svg'} style={{width: "500px", position: "relative", top: "40px"}}></img>
           </div>
           <div className='metaReportsSpans'>
                <a className='metaReportsHeader'>{t("dailyAndProductBasedExperienceReports")}</a>
                <a className='metaReportsSpan'>{t("experienceReportsSpan")}</a>
                <ul className='metaReportsList'>
                    <li>{t("reportsList1")}</li>
                    <li>{t("reportsList2")}</li>
                    <li>{t("reportsList3")}</li>
                    <li>{t("reportsList4")}</li>
                    <li>{t("reportsList5")}</li>
                </ul>
           </div>
        </div>
    );
}