import './Metaverse.css';
import { useTranslation } from "react-i18next";

export const Metaverse = props => {
    const { t } = useTranslation();
    return (
        <div className='MetaverseContainer'>

            <div className='mainPageSmallFigure bright' style={{
                width: '243px',
                height: '233px',
                left: '41%',
                bottom: "10%"
            }}></div>
            <div className='mainPageSmallFigure ' style={{ left: "85%" }}></div>
            <div className='mainPageSmallFigure ' style={{
                width: '629px',
                height: '665px',
                left: '-65px',
                top: '-385px'
            }}></div>
            <div className='mainPageSmallFigure0 ' style={{ left: "85%" }}></div>
            <div className='showAtHomeSpans'>
                <div className='showAtHomeSpanElements metaverse'>
                    <a className='showAtHomeHeader'>{t("metaverseContainerHeader")}</a>
                    <a className='showAtHomeSpan'>{t("metaverseContainerSpan")}</a>
                </div>
                <div className='showAtHomeButtons metaverse'>
                    <a href='/'><button className='showAtHomeButton1'><a>{t("joinNow")}</a></button></a>
                </div>
            </div>
            <div className='metaverseImageDiv'>
                <img className='metaverseImage' alt='' src={'./assets/img/metaverseImage.webp'}></img>
            </div>
        </div>
    );
}