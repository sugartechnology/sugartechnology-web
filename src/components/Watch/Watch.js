import { ContactInputs } from '../ContactInput/ContactInputs';
import './Watch.css';
import { useTranslation } from "react-i18next";

export const Watch = props => {
    const { t } = useTranslation();
    function closeContactArea() {
        let contactComponentDiv = document.querySelector(".contactComponentDiv");
        let sendMessageButton = document.querySelector(".sendMessageButton");
        let closeBtn = document.querySelector(".productInputsCloseButton");
        let overlay = document.querySelector(".cookiesOverlay");
        contactComponentDiv.style.display = "flex";

        sendMessageButton.addEventListener("click", () => {
            contactComponentDiv.style.display = "none";
        })
        closeBtn.addEventListener("click", () => {
            contactComponentDiv.style.display = "none";
        })
        overlay.addEventListener("click", () => {
            contactComponentDiv.style.display = "none";
        })
    }
    return (
        <div className='watchContainer'>
            <div className='contactComponentDiv'>
                <div className="cookiesOverlay" id='cookiesOverlay' style={{ zIndex: "1" }}></div>
                <ContactInputs></ContactInputs>
                <div className='productInputsCloseButton'>
                    <img alt='' src={'./assets/img/inputPopupButton.svg'}></img>
                </div>
            </div>
            <div className='mainPageSmallFigure bright' style={{
                width: '243px',
                height: '233px',
                left: '498px',
                top: '136px'
            }}></div>
            <div className='mainPageSmallFigure ' style={{ left: "85%" }}></div>
            <div className='mainPageSmallFigure ' style={{
                width: '629px',
                height: '665px',
                left: '-65px',
                top: '-385px'
            }}></div>
            <div className='mainPageSmallFigure0 '></div>
            <div className='showAtHomeSpans'>
                <div className='showAtHomeSpanElements metaverse'>
                    <a className='showAtHomeHeader'>{t("watchContainerHeader")}</a>
                    <a className='showAtHomeSpan'>{t("watchContainerSpan")} </a>
                </div>
                <div className='showAtHomeButtons metaverse'>
                    <button className='showAtHomeButton1' onClick={closeContactArea}><a>{t("getStarted")}</a></button>
                </div>
            </div>
            <div className='watchImageDiv'>
                <img className='watchImage' alt='' src={'./assets/img/watchImage.webp'}></img>
            </div>
        </div>
    );
}
