import './Header.css'
import { useTranslation} from "react-i18next";
import LanguageSelector from './LanguageSelector';



export const Header = props => {
    const {t} = useTranslation();
    const showPopup = ()=>{
        var popup = document.getElementById("productServicesPopup");
        var popupOption1 =  document.getElementById("firstPopup");
        var popupOption2 =  document.getElementById("secondPopup");
        if(popup.style.display === "none"){
            popup.style.display = "flex";
        }else { 
            popup.style.display = "none";
            popupOption1.style.display = "none";
            popupOption2.style.display = "none";
        }
    }
    const showPopupOption1 = () => {
        var popupOption =  document.getElementById("firstPopup");
        if(popupOption.style.display === "none"){
            popupOption.style.display = "flex";
        }else {
            popupOption.style.display = "none";
        }
        
    }
    const showPopupOption2  = () => {
        var popupOption = document.getElementById("secondPopup");
        if(popupOption.style.display === "none"){
            popupOption.style.display = "flex";
        }else {
            popupOption.style.display = "none";
        }
    }
    return(
        <div className="headerContainer" style={{width: "1439px", height: "70px"}}>
            <div className='headerShowButton' id='headerShowButton'>
                <img alt='' src={'./assets/img/headerOpenButton.svg'} style={{width: "50px"}}></img>
            </div>
            <div className="sugarLogo">
                <img alt="" src={'assets/img/headerLogo.svg'}></img>
            </div>
            <div className="routers">
                <a href='/'>{t("home")}</a>
                <a onMouseOver={showPopup}>{t("productServices")}</a>
                <a href='/aboutUs'>{t("aboutUs")}</a>
                <a href='/sugarBlog'>{t("blog")}</a>
                <a href='/contactUs'>{t("contactUs")}</a>
            </div>
            <div className="headerButtons">
                <LanguageSelector></LanguageSelector>
                <button className='mediaCenterButton'>
                    <a>{t("mediaCenter")}</a>
                </button>
            </div>
            <div className='productServicesPopup' id='productServicesPopup' style={{ display: "none" , position:"absolute", top:"70px", zIndex:"6"}}>
                <div className='popupOption' id='firstPopupOption' onMouseOver={showPopupOption1}><a>{t("showAtHome")}</a><img className='popupVector' id='vector1' alt='' src={'./assets/img/popupVector.svg'}></img></div>
                <img className='popupLine' alt='' src={'./assets/img/popupLine.svg'}></img>
                <div className='popupOption' style={{top: "0px"}}><a href='/productMeta'>{t("metaverse")}</a></div>
                <img className='popupLine' alt='' src={'./assets/img/popupLine.svg'}></img>
                <div className='popupOption' id='thirdPopupOption' onMouseOver={showPopupOption2} style={{top: "0px"}}><a>{t("vton")}</a><img className='popupVector' id='vector2' alt='' src={'./assets/img/popupVector.svg'}></img></div>
            </div>
            <div className='firstPopup' id='firstPopup' style={{display: "none"}}>
                <div className='secondPopupFirstOption'><a href='/productAr' style={{fontSize: "13px", cursor: "pointer"}}>{t("showFurniture")}</a></div>
                <img className='popupLineSmall' alt='' src={'./assets/img/popupLine.svg'}></img>
                <div className='secondPopupSecondOption'><a href='/productJoint' style={{fontSize: "13px", cursor: "pointer"}}>{t("createProduct")}</a></div>
            </div>
            <div className='secondPopup' id='secondPopup' style={{display: "none"}}>
                <div className='firstPopupFirstOption'><a href='/productWatch' style={{fontSize: "13px", cursor: "pointer"}}>{t("dressWatch")}</a></div>
                <img className='popupLineSmall' alt='' src={'./assets/img/popupLine.svg'}></img>
                <div className='firstPopupSecondOption'><a href='/productShoes' style={{fontSize: "13px", cursor: "pointer"}}>{t("dressShoe")}</a></div>
                <img className='popupLineSmall' alt='' src={'./assets/img/popupLine.svg'}></img>
                <div className='firstPopupThirdOption'><a href='/productClooth' style={{fontSize: "13px", cursor: "pointer"}}>{t("dressClooth")}</a></div>
            </div>
        </div>  
    );
}