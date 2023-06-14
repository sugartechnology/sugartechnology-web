import { useState } from 'react';
import { useTranslation} from "react-i18next";
import ReCAPTCHA from 'react-google-recaptcha';

export const ContactInputs = props =>{
    const { t } = useTranslation();
    const [recaptchaResponse, setRecaptchaResponse] = useState("");
    const [name, setName] = useState("");
    const [mail, setMail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    const handleRecaptchaChange = (response) => {
        setRecaptchaResponse(response);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        if (!mail || !phone) {
            informationErrorPopup();
            return;
        }
    
        const response = await Promise.race([
            fetch("/api/verify-recaptcha", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ recaptchaResponse })
            }),
            new Promise((_, reject) =>
                setTimeout(() => reject(new Error("Request timeout")), 15000)
            )
        ]);
    
        if (!response) {
            inputErrorPopup();
            return;
        }
    
        const result = await response.json();
        if (result.success) {
            submitForm();
        } else {
            inputErrorPopup();
        }
    }
    


    function submitForm() {
        setError("");
        const form = {
          name: name,
          email: mail,
          message: message,
          phone: phone,
        }
        sendFormData(form);
    }
  
    function sendFormData(form) {
        
        const xhr = new XMLHttpRequest();
        xhr.open("POST", "https://cdn.sugartech.io/api/form/save/contactForm");
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify(form));
        xhr.onreadystatechange = 
        
        inputDonePopup.bind(xhr);
    }
    
    function inputDonePopup(e) {
        let inputPopup = document.querySelector('#inputDonePopup');
        let overlay = document.querySelector(".contactOverlay");
        let btn = document.querySelector('.inputPopupCloseButton');
        inputPopup.style.display = "flex";
        overlay.style.width = "100%";
        overlay.style.height = "100%";
        btn.addEventListener("click", () => {
            inputPopup.style.display = "none";
            overlay.style.width = "0%";
            overlay.style.height = "0%";
        });
    }
    function inputErrorPopup(){
        let inputPopup = document.querySelector('#inputErrorPopup');
        let overlay = document.querySelector(".contactOverlay");
        let btn = document.querySelector('.inputPopupCloseButton');
        inputPopup.style.display = "flex";
        overlay.style.width = "100%";
        overlay.style.height = "100%";
        btn.addEventListener("click", () => {
            inputPopup.style.display = "none";
            overlay.style.width = "0%";
            overlay.style.height = "0%";
        });
    }
    function informationErrorPopup(){
        let inputPopup = document.querySelector('#informationErrorPopup');
        let overlay = document.querySelector(".contactOverlay");
        let btn = document.querySelector('.informationErrorButton');
        inputPopup.style.display = "flex";
        overlay.style.width = "100%";
        overlay.style.height = "100%";
        btn.addEventListener("click", () => {
            inputPopup.style.display = "none";
            overlay.style.width = "0%";
            overlay.style.height = "0%";
        });
    }
    return(
        <div className='contactInputs'>
                <div className='contactInputHeaders'>
                    <a className='contactInputHeader'>{t("contactUs")}</a>
                    <a className='contactInputSpan'>{t("contactPageSpan")}</a>
                </div>
                <div className='contactInputInputs' onSubmit={(e)=>{return false;}}>
                    <div>
                        <div className='nameInputs'>
                            <a className='nameInputSpan'>{t("fullName")}</a>
                            <input className='fullnameInput' placeholder={t("fullName")} value={name} onChange={(e)=>setName(e.target.value)}></input>
                        </div>
                    </div>
                    <div className='nameEmailInputs'>
                        <div className='nameInputs'>
                            <a className='nameInputSpan'>{t("phone")}</a>
                            <input className='nameEmailInput' placeholder={"Phone Number"} value={phone} onChange={(e)=>setPhone(e.target.value)}></input>
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
                <ReCAPTCHA
                    sitekey="6LcjSPglAAAAAJbme5uh6p2Mf0fjAqhWn5FI1mN2"
                    onChange={handleRecaptchaChange}/>
                <div className='contactInputButtons'>
                    <button className='sendMessageButton' onClick={handleSubmit}><a>{t("sendMessage")}</a></button>
                </div>
        </div>
    );
}