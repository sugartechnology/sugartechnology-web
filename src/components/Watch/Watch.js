import './Watch.css';
import { useTranslation} from "react-i18next";

export const Watch = props =>{
    const {t} = useTranslation();
    return(
        <div className='watchContainer'>
             <div className='mainPageTopLeftFigure rotate'></div>
        <div className='mainPageTopRightFigure rotate'></div>
        <div className='mainPageMiddleFigure rotate'></div>
        <div className='mainPageSmallFigure bright' style={{
            width: '243px',
            height: '233px',
            left: '498px',
            top: '136px'
        }}></div>
        <div className='mainPageSmallFigure '></div>
        <div className='mainPageSmallFigure ' style={{
            width: '629px',
            height: '665px',
            left: '170px',
            top: '316px'
        }}></div>
        <div className='mainPageSmallFigure0 '></div>
            <div className='showAtHomeSpans'>
                <a className='showAtHomeHeader'>{t("watchContainerHeader")}</a>
                <a className='showAtHomeSpan'>{t("watchContainerSpan")}</a>
                <div className='showAtHomeButtons'>
                    <button className='showAtHomeButton1'><a>{t("getStarted")}</a></button>
                    <button className='showAtHomeButton2'><a>{t("readMore")}</a></button>
                </div>
            </div>
            <div>
                <img className='watchImage' alt='' src={'./assets/img/watchImage.svg'}></img>
            </div>
        </div>
    );
}
