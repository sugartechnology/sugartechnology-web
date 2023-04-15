import './ContactInput.css';
import { useTranslation} from "react-i18next";

export const ContactInput = props =>{
    const {t} = useTranslation();
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