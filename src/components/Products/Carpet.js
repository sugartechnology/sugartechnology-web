import '../ShowAtHome/ShowAtHome.css';
import { useTranslation} from "react-i18next";
import { ContactInputs } from '../ContactInput/ContactInputs';

export const Carpet = props =>{
    const {t} = useTranslation();

    function closeContactArea(){
        let contactComponentDiv = document.querySelector(".contactComponentDiv");
        let sendMessageButton = document.querySelector(".sendMessageButton");
        contactComponentDiv.style.display = "flex";

        sendMessageButton.addEventListener("click", () => {
            contactComponentDiv.style.display = "none";
        })
    }

    return(
        <div className="ShowAtHomeContainer">
            <div className='contactComponentDiv'>
                <div class="cookiesOverlay" id='cookiesOverlay' style={{zIndex: "1"}}></div>
                <ContactInputs></ContactInputs>
            </div>
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
                    <a className='showAtHomeHeader'>{t("showAtHomeHeaderCarpet")}</a>
                    <a className='showAtHomeSpan'>{t("showAtHomeSpanCarpet")}</a>
                </div>
                <div className='showAtHomeButtons'>
                    <a><button onClick={closeContactArea} className='showAtHomeButton1'><a>{t("getStarted")}</a></button></a>
                </div>
            </div>
            <div className='showAtHomeImageDiv'>
                <img className='showAtHomeImage' alt='' src={'./assets/img/products/carpet.svg'}></img>
            </div>
        </div>
    );
}