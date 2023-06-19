import './ContactInput.css';
import { useTranslation} from "react-i18next";
import { ContactInputs } from './ContactInputs';

export const ContactInput = props =>{
    const {t} = useTranslation();
    const closePopup = () => {
        let inputPopup = document.querySelector("#inputDonePopup");
        let inputErrorPopup = document.querySelector("#inputErrorPopup");
        let informationLoadingPopup = document.querySelector("#informationLoadingPopup");
        let informationErrorPopup = document.querySelector("#informationErrorPopup");
        inputPopup.style.display = "none";
        inputErrorPopup.style.display = "none";
        informationLoadingPopup.style.display = "none";
        informationErrorPopup.style.display = "none";
    }
    return(
        <div className='contactInputContainer'>
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
            <ContactInputs></ContactInputs>
            <div class="contactOverlay" id='contactOverlay' style={{zIndex: "1"}}></div>
                <div className='inputDonePopup' id='inputDonePopup'>
                    <div className='inputPopupButton'>
                        <img className='inputPopupCloseButton' onClick={closePopup} alt='' src={'./assets/img/inputPopupButton.svg'}></img>
                    </div>
                    <div className='inputPopupSpans'>
                        <img className='inputPopupImg' alt='' src={'./assets/img/inputPopupImg.svg'}></img>
                        <a className='inputPopupHeader'>{t("contactHeaderSuccesfuly")}</a>
                        <a className='inputPopupSpan'>{t("contactSpanSuccesfuly")}</a>
                        <img className='inputPopupLine' alt='' src={'./assets/img/contactPopupLine.svg'}></img>
                        <a className='inputPopupSecondSpan'>{t("contactSecondSpanSuccesfuly")}</a>
                    </div>
                </div>
                <div className='inputDonePopup' id='inputErrorPopup'>
                    <div className='inputPopupButton'>
                        <img className='inputPopupCloseButton' onClick={closePopup} alt='' src={'./assets/img/inputPopupButton.svg'}></img>
                    </div>
                    <div className='inputPopupSpans'>
                        <img className='inputPopupImg' alt='' src={'./assets/img/inputErrorPopupImg.svg'}></img>
                        <a className='inputPopupHeader'>{t("contactHeaderError")}</a>
                        <a className='inputPopupSpan'>{t("contactSpanError")}</a>
                        <img className='inputPopupLine' alt='' src={'./assets/img/contactPopupLine.svg'}></img>
                        <a className='inputPopupSecondSpan'>{t("contactSecondSpanError")}</a>
                        <a className='inputPopupSecondSpan'>{t("contactThirdSpanError")}</a>
                        <a className='inputPopupSecondSpan'>hello@sugartech.io && +905342843427</a>
                    </div>
                </div>
                <div className='inputDonePopup' id='informationLoadingPopup'>
                    <div class="contactOverlay" id='contactOverlay' style={{zIndex: "1"}}></div>
                    <div className='inputPopupButton'>
                        <img className='informationLoadingButton' onClick={closePopup} alt='' src={'./assets/img/inputPopupButton.svg'}></img>
                    </div>
                    <div className='inputPopupSpans'>
                        <a className='inputPopupHeader'>{t("contactHeaderLoading")}</a>
                        <div class="loading-animation">
                            <div class="loading-circle"></div>
                            <div class="loading-circle"></div>
                            <div class="loading-circle"></div>
                            <div class="loading-circle"></div>
                            <div class="loading-circle"></div>
                            <div class="loading-circle"></div>
                            <div class="loading-circle"></div>
                            <div class="loading-circle"></div>
                            <div class="loading-circle"></div>
                        </div>
                        <a className='inputPopupSpan'>{t("contactSpanLoading")}</a>
                        <img className='inputPopupLine' alt='' src={'./assets/img/contactPopupLine.svg'}></img>
                        <a className='inputPopupSecondSpan'>{t("contactSecondSpanLoading")}</a>
                    </div>
                </div>
                <div className='inputDonePopup' id='informationErrorPopup'>
                    <div class="contactOverlay" id='contactOverlay' style={{zIndex: "1"}}></div>
                    <div className='inputPopupButton'>
                        <img className='informationErrorButton' onClick={closePopup} alt='' src={'./assets/img/inputPopupButton.svg'}></img>
                    </div>
                    <div className='inputPopupSpans'>
                        <img className='inputPopupImg' alt='' src={'./assets/img/inputErrorPopupImg.svg'}></img>
                        <a className='inputPopupHeader'>{t("contactHeaderFail")}</a>
                        <a className='inputPopupSpan'>{t("contactSpanFail")}</a>
                        <img className='inputPopupLine' alt='' src={'./assets/img/contactPopupLine.svg'}></img>
                        <a className='inputPopupSecondSpan'>{t("contactSecondSpanFail")}</a>
                    </div>
                </div>
        </div>
    );
}