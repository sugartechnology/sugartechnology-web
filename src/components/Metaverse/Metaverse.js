import './Metaverse.css';
import { useTranslation} from "react-i18next";

export const Metaverse = props =>{
    const {t} = useTranslation();
    return(
        <div className='MetaverseContainer'>
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
                    <a className='showAtHomeHeader'>{t("metaverseContainerHeader")}</a>
                    <a className='showAtHomeSpan'>{t("metaverseContainerSpan")}</a>
                </div>
                <div className='showAtHomeButtons'>
                    <a href='/'><button className='showAtHomeButton1'><a>{t("getStarted")}</a></button></a>
                </div>
            </div>
            <div className='metaverseImageDiv'>
                <img className='metaverseImage' alt='' src={'./assets/img/metaverseBackground.svg'}></img>
            </div>
        </div>
    );
}