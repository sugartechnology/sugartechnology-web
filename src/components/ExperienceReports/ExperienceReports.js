import './ExperienceReports.css';
import { useTranslation} from "react-i18next";

export const ExperienceReports = props =>{
    const {t} = useTranslation();
    return(
        <div className='experienceReportsContainer'>
           <div style={{display: "flex", width: "88%", height: "100%", position: "relative"}}>
            <div className='reportsSpanImages'>
                    <img className='reportsSpansImg' style={{width: "76%"}} alt='' src={'./assets/img/reportsSpansImg.svg'}></img>
                    <img className='reportsSpangImgShadow' alt='' src={'./assets/img/goalsShadow.svg'}></img>
                </div>
                <div className='reportsSpanElement'>
                    <a className='reportsHeader'>{t("reportsHeader")}</a>
                    <a className='reportsFirstSpan'>{t("reportsFirstSpan")}</a>
                    <a className='reportsSecondSpan'>{t("reportsSecondSpan")}</a>
                </div>
           </div>
        </div>
    );
}
