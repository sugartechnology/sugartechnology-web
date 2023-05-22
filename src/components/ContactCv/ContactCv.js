import './ContactCv.css';
import { useState } from 'react';
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
    const [job, setJob] = useState("");
    const [isHuman, setIsHuman] = useState(false);

    function handleFileSelect(event) {
        const file = event.target.files[0];
        const fileSize = file.size;
        const maxSize = 20 * 1024 * 1024;
        if (fileSize > maxSize) {
          alert('Dosya boyutu 20 MB\'tan büyük olamaz.');
          event.target.value = null;
        }
      }

    const handleRecaptchaChange = (value) => {
        setIsHuman(true);
    }
    function cvDoubleMethod(event){
        handleFileSelect(event);
        setCv(event.target.value);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        if (isHuman) {
            submitForm();
        } else {
            alert("Please verify that you are a human!");
        }
    }
    function submitForm() {
        const form = {
          name: name,
          email: mail,
          message: message,
          cv: cv,
          phone: phone,
          option: option,
          job: job,
        }
        sendFormData(form);
    }
    function sendFormData(form) {
        var thizz = this;
        const xhr = new XMLHttpRequest();
        xhr.open("POST", "https://cdn.sugartech.io/api/form/save/contactForm");
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify(form));
        inputDonePopup();
        // if (this.readyState === 4) {
        //     if ((this.status == 200) && (this.status < 300)) {
        //         inputDonePopup();
        //     }
        //     else{
        //         inputErrorPopup();
        //     }
        // }
        
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
    function toggleFirstOption(){
        let firstOption = document.querySelector("#firstOption");
        let secondOption = document.querySelector("#secondOption");
        firstOption.style.background = "#ED401A";
        secondOption.style.background = "#CCCCCC";
    }
    function toggleSecondOption(){
        let firstOption = document.querySelector("#firstOption");
        let secondOption = document.querySelector("#secondOption");
        secondOption.style.background = "#ED401A";
        firstOption.style.background = "#CCCCCC";
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
                    <a className='contactCvHeader'>{t("")}Apply for the future!</a>
                    <a className='contactCvSpan'>{t("")}If you haven’t found your dream position in our offers, leave us your CV/contact for the future!</a>
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
                            <input className='nameEmailInput' placeholder={"+90 534 284 3427"} value={phone} onChange={(e)=>setPhone(e.target.value)}></input>
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
                <ReCAPTCHA className='contactCvRecaptcha' style={{position: "relative" ,right: "174px" ,top: "130px"}}
                    sitekey="6LcjSPglAAAAAJbme5uh6p2Mf0fjAqhWn5FI1mN2"
                    onChange={handleRecaptchaChange}/>
                <div className='contactOptions'>
                    <div className='contactOption'>
                        <div>
                            <img id='firstOption' onClick={toggleFirstOption} value={option} onChange={(e)=>setOption(e.target.value)}></img>
                        </div>
                        <a>{t("")}I confirm that I have read the information clause.</a>
                    </div>
                    <div className='contactOption'>
                        <div>
                            <img id='secondOption' style={{width: "20px"}} onClick={toggleSecondOption} value={option} onChange={(e)=>setOption(e.target.value)}></img>
                        </div>
                        <a>{t("")}Lorem ipsum dolor sit amet consectetur. Potenti turpis aenean tempus aliquam metus at. Ultricies vel adipiscing volutpat erat. </a>
                    </div>
                </div>
                <div className='submitButton' onClick={handleSubmit}>
                    <a>{t("submit")}</a>
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
                    <img className='inputPopupLine' alt='' src={'./assets/img/contactPopupLine.svg'}></img>
                    <a className='inputPopupSecondSpan'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam semper gravida facilisi donec est.</a>
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