import '../ShowAtHome/ShowAtHome.css';
import { useTranslation } from "react-i18next";
import { ContactInputs } from '../ContactInput/ContactInputs';

export const Table = props => {
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
        <div className="ShowAtHomeContainer">
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
                    <a className='showAtHomeHeader'>{t("showAtHomeHeaderTable")}</a>
                    <a className='showAtHomeSpan'>{t("showAtHomeSpanTable")}</a>
                </div>
                <div className='showAtHomeButtons'>
                    <button onClick={closeContactArea} className='showAtHomeButton1'><a>{t("getStarted")}</a></button>
                </div>
            </div>
            <div className='showAtHomeImageDiv'>
                <img className='showAtHomeImage' alt='' src={'./assets/img/products/tablo.svg'}></img>
            </div>
        </div>
    );
}