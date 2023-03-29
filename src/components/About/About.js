import './About.css';
import { useTranslation} from "react-i18next";

export const About = props =>{
    const {t} = useTranslation();
    return(
        <div className='aboutContainer'>
            <div className='aboutSpans'>
                <h1>{t("aboutSugar")}</h1>
                <a>Lorem ipsum dolor sit amet consectetur. Potenti turpis aenean tempus aliquam metus at. Ultricies vel adipiscing volutpat erat. Elit diam vulputate id ullamcorper in tellus vulputate donec. Faucibus quisque euismod sodales nunc. Velit mattis accumsan aenean dignissim fames nisl sed pulvinar. Nullam ut tortor in ac semper enim cursus quisque. Amet felis at consectetur faucibus. At nisl dictum in eu quisque eget. Integer lacinia non mattis diam ornare. Tempor leo erat risus faucibus nulla pharetra egestas ultrices.</a>
                <button className='aboutButton'>
                    <a>{t("readMore")}</a>
                </button>
            </div>
            <div className='aboutLogos'>
                <img className='firstAboutLogo' alt='' src={'assets/img/sketch_business.svg'}></img>
                <img className='secondAboutLogo' alt='' src={'assets/img/Objeto_inteligente.svg'}></img>
            </div>
        </div>
    );
}