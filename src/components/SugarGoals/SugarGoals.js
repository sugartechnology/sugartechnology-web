import './SugarGoals.css';
import { useTranslation } from "react-i18next";

export const SugarGoals = props => {
    const { t } = useTranslation();
    return (
        <div className='SugarGoalsContainer'>
            <div className='sugarGoalHeaders'>
                <a className='sugarGoalHeader'>{t("goalsHeader")}</a>
            </div>
            <div className='sugarGoals'>
                <img className='goals1' alt='' src={'./assets/img/goals1.svg'} style={{ position: "relative", left: "30px" }}></img>
                <img className='goals1v1' alt='' src={'./assets/img/goals1v1.svg'} style={{ display: "none", position: "relative" }}></img>
                <img className='goals2' alt='' src={'./assets/img/goals2.svg'} style={{ position: "relative", left: "10px" }}></img>
                <img className='goals2v1' alt='' src={'./assets/img/goals2v1.svg'} style={{ display: "none", position: "relative" }}></img>
                <img className='goals3' alt='' src={'./assets/img/goals3.svg'} style={{ position: "relative", right: "10px" }}></img>
                <img className='goals3v1' alt='' src={'./assets/img/goals3v1.svg'} style={{ display: "none", position: "relative" }}></img>
                <img className='goals4' alt='' src={'./assets/img/goals4.svg'} style={{ position: "relative", right: "30px" }}></img>
                <img className='goals4v1' alt='' src={'./assets/img/goals4v1.svg'} style={{ display: "none", position: "relative" }}></img>
            </div>
            <img className='goalsShadow' alt='' src={'./assets/img/goalsShadow.svg'}></img>
            <div className='sugarGoalsElements1'>
                <div className='sugarGoalsElement'>
                    <img className='sugarGoalsImage' alt='' src={'./assets/img/goals1Logo.svg'}></img>
                    <a className='sugarGoalsHeader' style={{ color: "#895EE2" }}>{t("goals1Header")}</a>
                    <a className='sugarGoalsSpan'>{t("goals1Span")}</a>
                </div>
                <div className='sugarGoalsElement'>
                    <img className='sugarGoalsImage' alt='' src={'./assets/img/goals2Logo.svg'}></img>
                    <a className='sugarGoalsHeader' style={{ color: "#B983D2" }}>{t("goals2Header")}</a>
                    <a className='sugarGoalsSpan'>{t("goals2Span")}</a>
                </div>
                <div className='sugarGoalsElement'>
                    <img className='sugarGoalsImage' alt='' src={'./assets/img/goals3Logo.svg'}></img>
                    <a className='sugarGoalsHeader' style={{ color: "#C75C89" }}>{t("goals3Header")}</a>
                    <a className='sugarGoalsSpan'>{t("goals3Span")}</a>
                </div>
                <div className='sugarGoalsElement'>
                    <img className='sugarGoalsImage' alt='' src={'./assets/img/goals4Logo.svg'}></img>
                    <a className='sugarGoalsHeader' style={{ color: "#ED401A" }}>{t("goals4Header")}</a>
                    <a className='sugarGoalsSpan'>{t("goals4Span")}</a>
                </div>
            </div>
            <div className='sugarGoalsElements2'>
                <div className='sugarGoalsElementsGroup'>
                    <div className='sugarGoalsElement'>
                        <img className='sugarGoalsImage' alt='' src={'./assets/img/goals1Logo.svg'}></img>
                        <a className='sugarGoalsHeader' style={{ color: "#895EE2" }}>{t("goals1Header")}</a>
                        <a className='sugarGoalsSpan'>{t("goals1Span")}</a>
                    </div>
                    <div className='sugarGoalsElement'>
                        <img className='sugarGoalsImage' alt='' src={'./assets/img/goals2Logo.svg'}></img>
                        <a className='sugarGoalsHeader' style={{ color: "#B983D2" }}>{t("goals2Header")}</a>
                        <a className='sugarGoalsSpan'>{t("goals2Span")}</a>
                    </div>
                </div>
                <div className='sugarGoalsElementsGroup'>
                    <div className='sugarGoalsElement'>
                        <img className='sugarGoalsImage' alt='' src={'./assets/img/goals3Logo.svg'}></img>
                        <a className='sugarGoalsHeader' style={{ color: "#C75C89" }}>{t("goals3Header")}</a>
                        <a className='sugarGoalsSpan'>{t("goals3Span")}</a>
                    </div>
                    <div className='sugarGoalsElement'>
                        <img className='sugarGoalsImage' alt='' src={'./assets/img/goals4Logo.svg'}></img>
                        <a className='sugarGoalsHeader' style={{ color: "#ED401A" }}>{t("goals4Header")}</a>
                        <a className='sugarGoalsSpan'>{t("goals4Span")}</a>
                    </div>
                </div>
            </div>
            <img className='goalsBubble' alt='' src={'./assets/img/goalsBubble.webp'} style={{ bottom: "5%" }}></img>
        </div>
    );
}