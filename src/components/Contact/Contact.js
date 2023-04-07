import './Contact.css';
import { useTranslation} from "react-i18next";

export const Contact = props =>{
    const {t} = useTranslation();
    return(
        <div className='contactContainer'>
            <div className='contactLine'>
                <img style={{width: "1430px"}} alt='' src={'assets/img/bigLine.svg'}></img>
            </div>
            <div className='contactElements'>
            <div className='leftContact'>
                <div className='about'>
                    <img className='contactLogo' alt="" src={'assets/img/headerLogo.svg'}></img>
                    <a className='aboutSpan'>Lorem ipsum dolor sit amet consectetur. Ipsum in neque gravida donec fringilla fames in et. </a>
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
                        <a>{t("home")}</a>
                        <a>{t("aboutUs")}</a>
                        <a>{t("integrations")}</a>
                        <a>{t("pricing")}</a>
                        <a>{t("features")}</a>
                        <a>{t("contactUs")}</a>
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
                <div className='rightContactInputs'>
                    <a>{t("enterYourNameAndEmail")}</a>
                    <textarea className='nameInput' placeholder='Name'></textarea>
                    <textarea className='emailInput' placeholder='Email'></textarea>
                    <textarea className='messageInput' placeholder='Message'></textarea>
                    <button className='sendButton'>
                        <a>Send</a>
                    </button>
                </div>
            </div>
            </div>
        </div>
    );
}