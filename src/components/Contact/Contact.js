import './Contact.css';
import { useTranslation} from "react-i18next";
import React, { useState, useEffect } from 'react';

export const Contact = props =>{
    const {t} = useTranslation();
    const [isTablet, setIsTablet] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 800);
            setIsTablet(window.innerWidth > 800 && window.innerWidth <= 1100);
            
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
        window.removeEventListener('resize', handleResize);
        };
    }, []);

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
        if ((this.status == 200) && (this.status < 300)) {
            inputDonePopup();
        }
        else{
            inputErrorPopup();
        }
    }
    function inputDonePopup() {
        let inputPopup = document.getElementById('inputDonePopup');
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
    function inputErrorPopup(){
        let inputPopup = document.getElementById('inputErrorPopup');
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
        <div className={`${isMobile ? 'mobile' : ''} ${isTablet ? 'tablet' : ''} contactContainer`}>
            <div className='contactLine'>
                <img style={{width: "100%"}} alt='' src={'assets/img/bigLine.svg'}></img>
            </div>
            <div className='contactElements'>
            <div className='leftContact'>
                <div className='about'>
                    <img className='contactLogo' alt="" src={'assets/img/headerLogo.svg'}></img>
                    <a className='aboutSpan'>{t("contactAboutSpan")}fbosnbjuıkgnjshbgıu rsjnhfbvıjfkbjfsbık</a>
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
                        <a href='/'>{t("productServices")}</a>
                        <a href='/aboutUs'>{t("aboutUs")}</a>
                        <a href='/blogs'>{t("blog")}</a>
                        <a href='/contactUs'>{t("contactUs")}</a>
                        <a href='/contactCv'>{t("careers")}</a>
                    </div>
                </div>
                <div className='utilityPages'>
                    <div className='contactHeaders'>
                        <a>{t("utilityPages")}</a>
                        <img className='utilityLine' alt='' src={'assets/img/littleLine.svg'}></img>
                    </div>
                    <div className='contactRouters'>
                        <a href='/productAr'>{t("showFurniture")}</a>
                        <a href='/productJoint'>{t("createProduct")}</a>
                        <a href='/productMeta'>{t("metaverse")}</a>
                        <a href='/productWatch'>{t("dressWatch")}</a>
                        <a href='/productShoes'>{t("dressShoe")}</a>
                        <a href='/productClooth'>{t("dressClooth")}</a>
                    </div>
                </div>
            </div>
            <div className='rightContact'>
                <div className='contactHeaders'>
                    <a>{t("contactUs")}</a>
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
            <div className='inputDonePopup' id='inputDonePopup'>
                <div className='inputPopupButton'>
                    <img id='inputPopupCloseButton' alt='' src={'./assets/img/inputPopupButton.svg'}></img>
                </div>
                <div className='inputPopupSpans'>
                    <img className='inputPopupImg' alt='' src={'./assets/img/inputPopupImg.svg'}></img>
                    <a className='inputPopupHeader'>Thank You!</a>
                    <a className='inputPopupSpan'>Your submission has been sent.</a>
                </div>
            </div>
            <div className='inputDonePopup' id='inputErrorPopup'>
                <div className='inputPopupButton'>
                    <img id='inputPopupCloseButton' alt='' src={'./assets/img/inputPopupButton.svg'}></img>
                </div>
                <div className='inputPopupSpans'>
                    <img className='inputPopupImg' alt='' src={'./assets/img/inputErrorPopupImg.svg'}></img>
                    <a className='inputPopupHeader'>OOPS!</a>
                    <a className='inputPopupSpan'>Your submission has been sent.</a>
                    <img className='inputPopupLine' alt='' src={'./assets/img/contactPopupLine.svg'}></img>
                    <a className='inputPopupSecondSpan'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam semper gravida facilisi donec est.</a>
                </div>
            </div>
        </div>
    );
}