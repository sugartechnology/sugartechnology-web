import './About.css';
import { useTranslation} from "react-i18next";

export const About = props =>{
    const {t} = useTranslation();
    return(
        <div>
        <div className='aboutContainer'>
            <div className='aboutSpans'>
                <a className='aboutSpansHeader'>{t("aboutSugar")}</a>
                <a className='aboutSpan'>{t("aboutSugarSpan1")}</a>

                <a className='aboutSpan'>{t("aboutSugarSpan2")}</a>

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