import { ContactInputs } from '../ContactInput/ContactInputs';
import './Joint.css';
import { useTranslation } from "react-i18next";

export const Joint = props => {
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
        <div className='jointContainer'>
            <div className='contactComponentDiv'>
                <div className="cookiesOverlay" id='cookiesOverlay' style={{ zIndex: "1" }}></div>
                <ContactInputs ></ContactInputs>
                <div className='productInputsCloseButton'>
                    <img alt='' src={'./assets/img/inputPopupButton.svg'}></img>
                </div>
            </div>
            <div className='mainPageSmallFigure bright' style={{
                width: '243px',
                height: '233px',
                left: '41%',
                bottom: "10%"
            }}></div>
            <div className='mainPageSmallFigure ' style={{
                left: "85%"
            }}></div>
            <div className='mainPageSmallFigure ' style={{
                width: '629px',
                height: '665px',
                left: '-65px',
                top: '-385px'
            }}></div>
            <div className='mainPageSmallFigure0 '></div>
            <div className='showAtHomeSpans'>
                <div className='showAtHomeSpanElements'>
                    <a className='showAtHomeHeader'>{t("jointContainerHeader")}</a>
                    <a className='showAtHomeSpan'>{t("jointContainerSpan")}</a>
                </div>
                <div className='showAtHomeButtons'>
                    <a><button onClick={closeContactArea} className='showAtHomeButton1'><a>{t("getStarted")}</a></button></a>
                </div>
            </div>
            <div className='jointImageDiv'>
                <img className='jointImage' id='jointDeskopImage' alt='' src={'./assets/img/jointImage.webp'}></img>
                <img className='jointImage' id='jointMobileImage' alt='' src={'./assets/img/jointImageMobile.webp'}></img>
            </div>
        </div>
    );
}