import './ExperienceReports.css';
import { useTranslation} from "react-i18next";

export const ExperienceReports = props =>{
    const {t} = useTranslation();
    return(
        <div className='experienceReportsContainer'>
            <img className='reportsBackground' alt='' src={'./assets/img/reportsBackground.svg'}></img>
            <div className='reportsHeaders'>
                <a className='reportsHeader'>{t("dailyAndProductBasedExperienceReports")}</a>
            </div>
            <div className='reportsSpanElement'>
                <img className='reportsSpansImg' alt='' src={'./assets/img/reportsSpansImg.svg'}></img>
                <div className='reportsSpans'>
                    <a className='reportsSpan'>{t("experienceReportsSpan")}</a>
                    <ul className='reportList'>
                        <li>{t("reportsList1")}</li>
                        <li>{t("reportsList2")}</li>
                        <li>{t("reportsList3")}</li>
                        <li>{t("reportsList4")}</li>
                        <li>{t("reportsList5")}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
