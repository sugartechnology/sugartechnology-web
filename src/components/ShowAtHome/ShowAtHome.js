import './ShowAtHome.css';
import { useTranslation} from "react-i18next";

export const ShowAtHome = props =>{
    const {t} = useTranslation();
    return(
        <div className='ShowAtHomeContainer'>
            <div className='showAtHomeBubbles'>
                <img className='bubble1' alt='' src={'./assets/img/ShowAtHomeImg1.svg'}></img>
                <img className='bubble2' alt='' src={'./assets/img/ShowAtHomeImg2.svg'} style={{position: "relative", top: "280px", right: "610px"}}></img>
                <img className='bubble3' alt='' src={'./assets/img/ShowAtHomeImg3.svg'} style={{position: "relative", right: "200px", bottom: "200px"}}></img>
                <img className='bubble4' alt='' src={'./assets/img/ShowAtHomeImg4.svg'} style={{position: "relative", left: "100px", bottom: "270px"}}></img>
                <img className='bubble5' alt='' src={'./assets/img/ShowAtHomeImg5.svg'} style={{position: "relative", left: "1205px", bottom: "300px"}}></img>
            </div>
            <div className='showAtHomeSpans'>
                <a className='showAtHomeHeader'>{t("showAtHomeHeader")}</a>
                <a className='showAtHomeSpan'>{t("showAtHomeSpan")}</a>
                <div className='showAtHomeButtons'>
                    <button className='showAtHomeButton1'><a>{t("getStarted")}</a></button>
                    <button className='showAtHomeButton2'><a>{t("usecase")}</a></button>
                </div>
            </div>
            <div>
                <img className='showAtHomeImage' alt='' src={'./assets/img/ShowAtHomeImage.svg'}></img>
            </div>
        </div>
    );
}