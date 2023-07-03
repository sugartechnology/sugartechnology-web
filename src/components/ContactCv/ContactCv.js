import './ContactCv.css';
import { useState, useEffect } from 'react';
import { useTranslation} from "react-i18next";
import ReCAPTCHA from 'react-google-recaptcha';

export const ContactCv = props =>{

    const {t} = useTranslation();
    const [name, setName] = useState("");
    const [mail, setMail] = useState("");
    const [cv, setCv] = useState(null);
    const [message, setMessage] = useState("");
    const [phone, setPhone] = useState("");
    const [option, setOption] = useState("");
    // const [recaptchaResponse, setRecaptchaResponse] = useState("");
    const [job, setJob] = useState("");

    // const handleRecaptchaChange = (response) => {
    //     setRecaptchaResponse(response);
    // }

    const handleFileSelect = (event) => {
        const file = event.target.files[0];
        const fileSize = file.size;
        const maxSize = 20 * 1024 * 1024;

        if (fileSize > maxSize) {
        alert('Dosya boyutu 20 MB\'tan büyük olamaz.');
        event.target.value = null;
        } else {
        setCv(file);
        }
    };

    const toggleFirstOption = () => {
        setOption('firstOption');
    };

    const toggleSecondOption = () => {
        setOption('secondOption');
    };

    function cvDoubleMethod(event){
        handleFileSelect(event);
        setCv(event.target.value);
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
    
        if (!mail || !phone || !message || !name || !job || !cv || !option) {
            informationErrorPopup();
            return;
        }
        // const response =  Promise.race([
        //     fetch("/api/verify-recaptcha", {
        //         method: "POST",
        //         headers: {
        //             "Content-Type": "application/json"
        //         },
        //         body: JSON.stringify({ recaptchaResponse })
        //     }),
        //     new Promise((_, reject) =>
        //         setTimeout(() => reject(new Error("Request timeout")), 15000)
        //     )
        // ]);
    
        // if (!response) {
        //     inputErrorPopup();
        //     return;
        // }
    
        // const result = response.json();
        // if (result.success) {
        //     submitForm();
        // } else {
        //     inputErrorPopup();
        // }

        showLoadingPopup();
    
        submitForm();
        
    }

    const submitForm = () => {
        const form = {
            name: name,
            email: mail,
            message: message,
            cv: cv,
            phone: phone,
            option: option,
            job: job,
        };
        sendFormData(form);
    };

    const sendFormData = (form) => {
        const xhr = new XMLHttpRequest();
        xhr.open("POST", "https://cdn.sugartech.io/api/form/save/contactForm");
        xhr.setRequestHeader("Content-Type", "application/json");
      
        xhr.onreadystatechange = function () {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                inputDonePopup();
                } else {
                inputErrorPopup();
                }
            }
        };
      
        xhr.send(JSON.stringify(form));
    };

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
    function inputDonePopup() {
        let inputPopup = document.querySelector('#inputDonePopup');
        let informationLoadingPopup = document.querySelector("#informationLoadingPopup");
        informationLoadingPopup.style.display = "none";
        inputPopup.style.display = "flex";
        setTimeout(() => {
            window.location.reload();
        }, 3000);
    }
    function inputErrorPopup(){
        let inputPopup = document.querySelector('#inputErrorPopup');
        let informationLoadingPopup = document.querySelector("#informationLoadingPopup");
        informationLoadingPopup.style.display = "none";
        inputPopup.style.display = "flex";
        setTimeout(() => {
            window.location.reload();
        }, 3000);
    }
    function informationErrorPopup(){
        let inputPopup = document.querySelector('#informationErrorPopup');
        let informationLoadingPopup = document.querySelector("#informationLoadingPopup");
        informationLoadingPopup.style.display = "none";
        inputPopup.style.display = "flex";
        setTimeout(() => {
            window.location.reload();
        }, 3000);
    }
    function showLoadingPopup(){
        let informationLoadingPopup = document.querySelector("#informationLoadingPopup");
        informationLoadingPopup.style.display = "flex";
    }
    return(
        <div className='contactCvContainer'>
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
            <div className='contactCvInputs' onSubmit={(e)=>{return false;}}>
                <div className='contactInputHeaders'>
                    <a className='contactCvHeader'>{t("contactCvHeader")}</a>
                    <a className='contactCvSpan'>{t("contactCvSpan")}</a>
                </div>
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
                <div className='jobTitleInputs'>
                    <a className='nameInputSpan'>{t("jobTitle")}</a>
                    <select className='jobTitleSelect' value={job} onChange={(e)=>setJob(e.target.value)}>
                        <option>Select Your Job</option>
                        <option>Software Developer</option>
                        <option>Graphic Designer</option>
                        <option>Unity</option>
                    </select>
                </div>
                <div className='nameEmailInputs'>
                        <div className='nameInputs'>
                            <a className='nameInputSpan'>{t("phone")}</a>
                            <input className='nameEmailInput' placeholder={"Phone Number"} value={phone} onChange={(e)=>setPhone(e.target.value)}></input>
                        </div>
                        <div className='emailInputs'>
                            <a className='addCvInput'>{t("addCv")}</a>
                            <input className='nameEmailInput' type='file' placeholder={t("fileChoosen")} value={cv} onChange={cvDoubleMethod}></input>
                            <a className='cvAlert'>{t("cvAlert")}</a>
                        </div>
                </div>
                <div className='descriptionInputs'>
                    <a className='descriptionInputSpan'>{t("howCanWeHelpYou")}</a>
                    <textarea className='descriptionInput' type="text" placeholder={t("describeYourProblem")} value={message} onChange={(e)=>setMessage(e.target.value)}></textarea>
                </div>
                
                <div className='contactOptions'>
                    <div className='contactOption'>
                        <input id='firstOption' type='radio' onClick={toggleFirstOption} value='firstOption' checked={option === 'firstOption'} onChange={(e) => setOption(e.target.value)}/>
                        <label htmlFor='firstOption'>I confirm that I have read the information clause.</label>
                    </div>
                    <div className='contactOption'>
                        <input id='secondOption' type='radio' onClick={toggleSecondOption} value='secondOption' checked={option === 'secondOption'} onChange={(e) => setOption(e.target.value)} />
                        <label htmlFor='secondOption'>Lorem ipsum dolor sit amet consectetur. Potenti turpis aenean tempus aliquam metus at. Ultricies vel adipiscing volutpat erat.</label>
                    </div>
                </div>
                <ReCAPTCHA className='contactCvRecaptcha'
                    sitekey="6LcjSPglAAAAAJbme5uh6p2Mf0fjAqhWn5FI1mN2"
                   /*onChange={handleRecaptchaChange}*/ />
                <div className='submitButton' onClick={handleSubmit}>
                    <a>{t("submit")}</a>
                </div>
            </div>

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