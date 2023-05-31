import './Clooth.css';
import { useTranslation} from "react-i18next";

export const Clooth = props =>{
    const {t} = useTranslation();
    return(
        <div className='cloothContainer'>
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
                <div className='showAtHomeSpanElements'>
                    <a className='showAtHomeHeader'>{t("cloothContainerHeader")}Lorem ipsum dolor  consectetur.</a>
                    <a className='showAtHomeSpan'>{t("cloothContainerSpan")}Lorem ipsum dolor sit amet consectetur. Erat dui quis ac mollis malesuada. Eu neque non ipsum in egestas quam mattis. </a>
                </div>
                <div className='showAtHomeButtons'>
                    <a href='/'><button className='showAtHomeButton1'><a>{t("getStarted")}</a></button></a>
                    <a href='/'><button className='showAtHomeButton2'><a>{t("readMore")}</a></button></a>
                </div>
            </div>
            <div className='cloothImageDiv'>
                <img className='cloothImage' alt='' src={'./assets/img/cloothImage.svg'}></img>
            </div>
        </div>
    );
}