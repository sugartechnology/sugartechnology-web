import './ContactInput.css';
import { useState } from 'react';
import { useTranslation} from "react-i18next";

export const ContactInput = props =>{
    const {t} = useTranslation();

    const [name, setName] = useState("");
    const [mail, setMail] = useState("");
    const [message, setMessage] = useState("");

    function submitForm() {
        const form = {
          name: name,
          email: mail,
          message: message,
        }
        sendFormData(form);
    }
  
    function sendFormData(form) {
        const xhr = new XMLHttpRequest();
        xhr.open("POST", "https://cdn.sugartech.io/api/form/save/contactForm");
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify(form));
        inputPopup();
    }
    function inputPopup() {
        let inputPopup = document.getElementById('inputPopup');
        let overlay = document.getElementById("overlay");
        let btn = document.getElementById('inputPopupCloseButton');
        inputPopup.style.display = "flex";
        overlay.style.width = "100%";
        overlay.style.height = "100%";
        btn.addEventListener('click', function closeInputPopup(){
            inputPopup.style.display = "none";
            overlay.style.width = "0%";
            overlay.style.height = "0%";
        });
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
            <div className='contactInputs'>
                <div className='contactInputHeaders'>
                    <a className='contactInputHeader'>{t("contactUs")}</a>
                    <a className='contactInputSpan'>{t("contactPageSpan")}</a>
                </div>
                <div className='contactInputInputs' onSubmit={(e)=>{return false;}}>
                    <div className='nameEmailInputs'>
                        <div className='nameInputs'>
                            <a className='nameInputSpan'>{t("fullName")}</a>
                            <input className='nameEmailInput' placeholder={t("fullName")} value={name} onChange={(e)=>setName(e.target.value)}></input>
                        </div>
                        <div className='emailInputs'>
                            <a className='emailInputSpan'>{t("email")}</a>
                            <input className='nameEmailInput' placeholder='hello@creative-tim.com' value={mail} onChange={(e)=>setMail(e.target.value)}></input>
                        </div>
                    </div>
                    <div className='descriptionInputs'>
                        <a className='descriptionInputSpan'>{t("howCanWeHelpYou")}</a>
                        <textarea className='descriptionInput' type="text" placeholder={t("describeYourProblem")} value={message} onChange={(e)=>setMessage(e.target.value)}></textarea>
                    </div>
                </div>
                <div className='contactInputButtons'>
                    <button className='sendMessageButton' onClick={(e)=>{submitForm()}}><a>{t("sendMessage")}</a></button>
                </div>
            </div>
            <div className='inputPopup' id='inputPopup'>
                <div className='inputPopupButton'>
                    <img id='inputPopupCloseButton' alt='' src={'./assets/img/inputPopupButton.svg'}></img>
                </div>
                <div className='inputPopupSpans'>
                    <img className='inputPopupImg' alt='' src={'./assets/img/inputPopupImg.svg'}></img>
                    <a className='inputPopupHeader'>Thank You!</a>
                    <a className='inputPopupSpan'>Your submission has been sent.</a>
                </div>
            </div>
        </div>
    );
}