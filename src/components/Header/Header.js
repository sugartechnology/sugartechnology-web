import './Header.css'
import { useTranslation} from "react-i18next";
import LanguageSelector from './LanguageSelector';



export const Header = props => {
    const {t} = useTranslation();
    const showPopup = ()=>{
        var popup = document.getElementById("productServicesPopup");
        if(popup.style.display === "none"){
            popup.style.display = "flex";
        }else { 
            popup.style.display = "none";
        }
    }
    return(
        <div className="headerContainer" style={{width: "1439px", height: "70px"}}>
            <div className="sugarLogo">
                <img alt="" src={'assets/img/headerLogo.svg'}></img>
            </div>
            <div className="routers">
                <a href='/'>{t("home")}</a>
                <a href='/products' >{t("productServices")}</a>
                <a href='/aboutUs'>{t("aboutUs")}</a>
                <a href='/blog'>{t("blog")}</a>
                <a href='/contact'>{t("contactUs")}</a>
            </div>
            <div className="headerButtons">
                <LanguageSelector></LanguageSelector>
                <button className='mediaCenterButton'>
                    <a>{t("mediaCenter")}</a>
                </button>
            </div>
        </div>  
    );
}