import './Clooth.css';
import { useTranslation} from "react-i18next";

export const Clooth = props =>{
    const {t} = useTranslation();
    return(
        <div className='cloothContainer'>
            <div className='showAtHomeBubbles'>
                <img alt='' src={'./assets/img/ShowAtHomeImg1.svg'}></img>
                <img alt='' src={'./assets/img/ShowAtHomeImg2.svg'} style={{position: "relative", top: "280px", right: "610px"}}></img>
                <img alt='' src={'./assets/img/ShowAtHomeImg3.svg'} style={{position: "relative", right: "200px", bottom: "200px"}}></img>
                <img alt='' src={'./assets/img/ShowAtHomeImg4.svg'} style={{position: "relative", left: "100px", bottom: "270px"}}></img>
                <img alt='' src={'./assets/img/ShowAtHomeImg5.svg'} style={{position: "relative", left: "1205px", bottom: "300px"}}></img>
            </div>
            <div className='jointSpans'>
                <a className='showAtHomeHeader'>{t("cloothContainerHeader")}</a>
                <a className='showAtHomeSpan'>{t("cloothContainerSpan")}</a>
                <div className='showAtHomeButtons'>
                    <button className='showAtHomeButton1'><a>{t("getStarted")}</a></button>
                    <button className='showAtHomeButton2'><a>{t("readMore")}</a></button>
                </div>
            </div>
            <div>
                <img className='cloothImage' alt='' src={'./assets/img/cloothImage.svg'}></img>
            </div>
        </div>
    );
}