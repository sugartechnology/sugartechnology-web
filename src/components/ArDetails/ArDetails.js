import './ArDetails.css';
import { useTranslation} from "react-i18next";

export const ArDetails = props =>{
    const {t} = useTranslation();
    return(
        <div className='arDetailsContainer'>
            <div className='arDetailsSpans'>
                <a className='arDetailsHeader'>{t("ArDetails")}</a>
                <a className='arDetailsSpan'>{t("arDetailsSpan")}</a>
                <img className='showAtHomeImg' id='option1Img' alt='' src={'./assets/img/sugar-model-viewer2.svg'} style={{display: "flex",position: "absolute", top: "1240px", left: "300px"}}></img>
            </div>
            <img className='arDetailsShadow' alt='' src={'./assets/img/arDetailsShadow.svg'}></img>
            <img alt='' src={'./assets/img/ArDetailsImg2.svg'} style={{position: "absolute", top: "1100px", right: "700px", zIndex: "-1"}}></img>
        </div>
    );
}