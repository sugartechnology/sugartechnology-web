import './ContactInput.css';
import { useTranslation} from "react-i18next";
import { ContactInputs } from './ContactInputs';

export const ContactInput = props =>{
    const {t} = useTranslation();
    const closePopup = () => {
        let inputPopup = document.querySelector(".inputDonePopup");

        inputPopup.style.display = "none";
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
                        <a className='inputPopupHeader'>Thank You!</a>
                        <a className='inputPopupSpan'>Your submission has been sent.</a>
                        <img className='inputPopupLine' alt='' src={'./assets/img/contactPopupLine.svg'}></img>
                        <a className='inputPopupSecondSpan'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam semper gravida facilisi donec est.</a>
                    </div>
                </div>
                <div className='inputDonePopup' id='inputErrorPopup'>
                    <div className='inputPopupButton'>
                        <img className='inputPopupCloseButton' onClick={closePopup} alt='' src={'./assets/img/inputPopupButton.svg'}></img>
                    </div>
                    <div className='inputPopupSpans'>
                        <img className='inputPopupImg' alt='' src={'./assets/img/inputErrorPopupImg.svg'}></img>
                        <a className='inputPopupHeader'>OOPS!</a>
                        <a className='inputPopupSpan'>Your submission has been sent.</a>
                        <img className='inputPopupLine' alt='' src={'./assets/img/contactPopupLine.svg'}></img>
                        <a className='inputPopupSecondSpan'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam semper gravida facilisi donec est.</a>
                        <a></a>
                    </div>
                </div>
                <div className='inputDonePopup' id='informationErrorPopup'>
                    <div class="contactOverlay" id='contactOverlay' style={{zIndex: "1"}}></div>
                    <div className='inputPopupButton'>
                        <img className='informationErrorButton' onClick={closePopup} alt='' src={'./assets/img/inputPopupButton.svg'}></img>
                    </div>
                    <div className='inputPopupSpans'>
                        <img className='inputPopupImg' alt='' src={'./assets/img/inputErrorPopupImg.svg'}></img>
                        <a className='inputPopupHeader'>OOPS!</a>
                        <a className='inputPopupSpan'>Your submission has been sent.</a>
                        <img className='inputPopupLine' alt='' src={'./assets/img/contactPopupLine.svg'}></img>
                        <a className='inputPopupSecondSpan'>Görünüşe göre bazı bilgilerin eksik.</a>
                    </div>
                </div>
        </div>
    );
}