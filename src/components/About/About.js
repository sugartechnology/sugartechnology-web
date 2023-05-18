import './About.css';
import { useTranslation} from "react-i18next";

export const About = props =>{
    const {t} = useTranslation();
    return(
        <div className='aboutContainer'>
            <div className='aboutSpans'>
                <h1>{t("aboutSugar")}</h1>
                <a>{t("aboutSugarSpan")}</a>
                <button className='aboutButton'>
                    <a>{t("readMore")}</a>
                </button>
            </div>
            <div className='aboutLogos'>
                <img className='firstAboutLogo' alt='' src={'./assets/img/firstAboutLogo.svg'}></img>
                <img className='secondAboutLogo' alt='' src={'assets/img/Objeto_inteligente.svg'}></img>
            </div>
        </div>
    );
}