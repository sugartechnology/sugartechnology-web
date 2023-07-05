import './About.css';
import { useTranslation} from "react-i18next";

export const About = props =>{
    const {t} = useTranslation();
    return(
        <div className='aboutContainer'>
            <div className='aboutSpans'>
                <a className='aboutSpansHeader'>{t("aboutSugar")}</a>
                <a className='aboutSpan'>{t("aboutSugarSpan")}</a>
                <a href='/aboutUs'className='aboutButton'>{t("aboutButton")}</a>
            </div>
            <div className='aboutLogos'>
                <img className='firstAboutLogo' alt='' src={'./assets/img/firstAboutLogo.webp'}></img>
                <img className='secondAboutLogo' alt='' src={'assets/img/Objeto_inteligente.webp'}></img>
            </div>
        </div>
    );
}