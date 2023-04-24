import { useState } from 'react';
import './Contact.css';
import { useTranslation} from "react-i18next";
import { func } from 'prop-types';

export const Contact = props =>{
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
        <div className='contactContainer'>
            <div className='contactLine'>
                <img style={{width: "1430px"}} alt='' src={'assets/img/bigLine.svg'}></img>
            </div>
            <div className='contactElements'>
            <div className='leftContact'>
                <div className='about'>
                    <img className='contactLogo' alt="" src={'assets/img/headerLogo.svg'}></img>
                    <a className='aboutSpan'>{t("contactAboutSpan")}</a>
                </div>
                <div className='communication'>
                    <div className='mailAdressContainer'>
                        <div className='mailAdressLogo'>
                            <img alt="" src={'assets/img/mail.svg'}></img>
                        </div>
                        <div className='mailAdressSpan'>
                            <a>Sugar@sugartech.io</a>
                            <a>aturkeri@sugartech.io</a>
                        </div>
                    </div>
                    <div className='phoneNumberContainer'>
                        <div className='phoneNumberLogo'>
                            <img alt='' src={'assets/img/phone-call.svg'}></img>
                        </div>
                        <div className='phoneNumberSpan'>
                            <a>+90 534 284 3427</a>
                            <a>+001 6547 6589</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='middleContact'>
                <div className='pages'>
                    <div className='contactHeaders'>
                        <a>{t("pages")}</a>
                        <img  className='pagesLine'alt='' src={'assets/img/littleLine.svg'}></img>
                    </div>
                    <div className='contactRouters'>
                        <a href='/'>{t("home")}</a>
                        <a href='/aboutUs'>{t("aboutUs")}</a>
                        <a>{t("integrations")}</a>
                        <a>{t("pricing")}</a>
                        <a>{t("features")}</a>
                        <a href='/contactUs'>{t("contactUs")}</a>
                    </div>
                </div>
                <div className='utilityPages'>
                    <div className='contactHeaders'>
                        <a>{t("utilityPages")}</a>
                        <img className='utilityLine' alt='' src={'assets/img/littleLine.svg'}></img>
                    </div>
                    <div className='contactRouters'>
                        <a>{t("password")}</a>
                        <a>{t("protected")}</a>
                        <a>{t("notFound")}</a>
                        <a>{t("styleGuide")}</a>
                        <a>{t("licences")}</a>
                        <a>{t("changelog")}</a>
                    </div>
                </div>
            </div>
            <div className='rightContact'>
                <div className='contactHeaders'>
                    <a>{t("Contact Us")}</a>
                </div>
                <div className='rightContactInputs' onSubmit={(e)=>{return false;}}>
                    <a>{t("enterYourNameAndEmail")}</a>
                    <textarea id='name' className='nameInput' placeholder='Name' value={name} onChange={(e)=>setName(e.target.value)}></textarea>
                    <textarea id='email' className='emailInput' placeholder='Email' value={mail} onChange={(e)=>setMail(e.target.value)}></textarea>
                    <textarea id='message' className='messageInput' placeholder='Message' value={message} onChange={(e)=>setMessage(e.target.value)}></textarea>
                    <button className='sendButton' onClick={(e)=>{submitForm()}}>
                        <a>Send</a>
                    </button>
                </div>
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