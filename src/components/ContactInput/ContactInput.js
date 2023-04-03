import './ContactInput.css';
import { useTranslation} from "react-i18next";

export const ContactInput = props =>{
    const {t} = useTranslation();
    return(
        <div className='contactInputContainer'>
            <div className='showAtHomeBubbles'>
                <img alt='' src={'./assets/img/ShowAtHomeImg1.svg'} style={{position: "relative", top: "50px", left: "70px", zIndex: "-1"}}></img>
                <img alt='' src={'./assets/img/ShowAtHomeImg2.svg'} style={{position: "relative", right: "610px", top: "400px"}}></img>
                <img alt='' src={'./assets/img/contactInputBubble3.svg'} style={{position: "relative", left: "800px", bottom: "600px", zIndex: "-1"}}></img>
                <img alt='' src={'./assets/img/ShowAtHomeImg4.svg'} style={{position: "relative", left: "100px", bottom: "270px"}}></img>
                <img alt='' src={'./assets/img/contactInputBubble4.svg'} style={{position: "relative", left: "400px", bottom: "50px"}}></img>
            </div>
            <div className='contactInputs'>
                <div className='contactInputHeaders'>
                    <a className='contactInputHeader'>{t("contactUs")}</a>
                    <a className='contactInputSpan'>{t("contactPageSpan")}</a>
                </div>
                <div className='contactInputInputs'>
                    <div className='nameEmailInputs'>
                        <div className='nameInputs'>
                            <a className='nameInputSpan'>{t("fullName")}</a>
                            <input className='nameEmailInput' placeholder={t("fullName")}></input>
                        </div>
                        <div className='emailInputs'>
                            <a className='emailInputSpan'>{t("email")}</a>
                            <input className='nameEmailInput' placeholder='hello@creative-tim.com'></input>
                        </div>
                    </div>
                    <div className='descriptionInputs'>
                        <a className='descriptionInputSpan'>{t("howCanWeHelpYou")}</a>
                        <textarea className='descriptionInput' type="text" placeholder={t("describeYourProblem")}></textarea>
                    </div>
                </div>
                <div className='contactInputButtons'>
                    <button className='sendMessageButton'><a>{t("sendMessage")}</a></button>
                </div>
            </div>
        </div>
    );
}