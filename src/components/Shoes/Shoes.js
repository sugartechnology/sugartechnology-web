import './Shoes.css';
import { useTranslation} from "react-i18next";

export const Shoes = props =>{
    const {t} = useTranslation();
    return(
        <div className='shoesContainer'>
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
                    <a className='showAtHomeHeader'>{t("shoesContainerHeader")}Lorem ipsum dolor sit amet consectetur.</a>
                    <a className='showAtHomeSpan'>{t("shoesContainerSpan")}Lorem ipsum dolor sit amet consectetur. Neque viverra mi at mattis nascetur eu quis risus netus.</a>
                </div>
                <div className='showAtHomeButtons'>
                    <button className='showAtHomeButton1'><a>{t("getStarted")}</a></button>
                    <button className='showAtHomeButton2'><a>{t("readMore")}</a></button>
                </div>
            </div>
            <div className='shoesImageDiv'>
                <img className='shoesImage' alt='' src={'./assets/img/shoesImage.svg'}></img>
            </div>
        </div>
    );
}