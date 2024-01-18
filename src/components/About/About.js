import { useTranslation } from "react-i18next";
import './About.css';

export const About = props =>{
    const {t} = useTranslation();
    return(
        <div>
        <div className='aboutContainer'>
            <div className='aboutSpans'>
                <h2 className='aboutSpansHeader'>{t("aboutSugar")}</h2>
                <p className='aboutSpan'>{t("aboutSugarSpan1")}</p>
                <p className='aboutSpan'>{t("aboutSugarSpan2")}</p>

                <a href='/aboutUs'className='aboutButton'>{t("aboutButton")}</a>
            </div>
            <div className='aboutLogos'>
                <img className='firstAboutLogo' alt='' src={'./assets/img/firstAboutLogo.webp'}></img>
                <img className='secondAboutLogo' alt='' src={'assets/img/Objeto_inteligente.webp'}></img>
            </div>
            
        </div>
        <a className="customersSpan">{t("homePageCustomersSpan")}</a>
        </div>
    );
}