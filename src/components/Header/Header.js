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
        var popupOption1 =  document.getElementById("firstPopup");
        var popupOption2 = document.getElementById("secondPopup");
        if(popupOption1.style.display === "none"){
            popupOption1.style.display = "flex";
            popupOption2.style.display = "none";
        }else {
            popupOption1.style.display = "none";
        }
        
    }
    const showPopupOption2  = () => {
        var popupOption1 =  document.getElementById("firstPopup");
        var popupOption2 = document.getElementById("secondPopup");
        if(popupOption2.style.display === "none"){
            popupOption1.style.display = "none";
            popupOption2.style.display = "flex";
        }else {
            popupOption2.style.display = "none";
        }
    }
    const showMobilePopup = () => {
        var popup = document.getElementById("mobileHeaderPopup");
        var overlay = document.getElementById("overlay");
        if (popup.style.display === "none"){
            popup.style.display = "flex";
            overlay.style.width = "1000%";
            overlay.style.height = "100%";
        }
        else{
            popup.style.display = "none";
            overlay.style.width = "0%";
            overlay.style.height = "0%";
        }
    } 
    return(
        <div className="headerContainer">
            <div class="overlay" id='overlay'></div>
            <div className='mobileHeaderPopup' id='mobileHeaderPopup' style={{display: "none", position: "absolute"}}>
                <div className='backToHome'>
                    <img className='backToHomeArrow' onClick={showMobilePopup} alt='' src={'./assets/img/arrow-left.svg'}></img>
                    <a className='backToHomeSpan'>{t("backToHome")}</a>
                </div>
                <img alt='' src={'./assets/img/popupLine.svg'} style={{width: "264px"}}></img>
                <div className='backToHomeInputs'>
                    <input className='backToHomeInput' type='text' placeholder='Search for'></input>
                    <img alt='' src={'./assets/img/search.svg'} style={{position: "absolute", right: "30px", top: "64px"}}></img>
                </div>
                <img alt='' src={'./assets/img/popupLine.svg'} style={{width: "264px"}}></img>
                <div className="popupRouters">
                    <div className='popupRouter'>
                        <a href='/'>{t("home")}</a>
                        <img className='popupRightButton' alt='' src={'./assets/img/popupRightButton.svg'}></img>
                    </div>
                    <div className='popupRouter'>
                        <a>{t("productServices")}</a>
                        <img onMouseOver={showPopup} className='popupRightButton' alt='' src={'./assets/img/popupRightButton.svg'}></img>
                    </div>
                    <div className='popupRouter'>
                        <a href='/aboutUs'>{t("aboutUs")}</a>
                        <img className='popupRightButton' alt='' src={'./assets/img/popupRightButton.svg'}></img>
                    </div>
                    <div className='popupRouter'>
                        <a href='/sugarBlog'>{t("blog")}</a>
                        <img className='popupRightButton' alt='' src={'./assets/img/popupRightButton.svg'}></img>
                    </div>
                    <div className='popupRouter'>
                        <a href='/contactUs'>{t("contactUs")}</a>
                        <img className='popupRightButton' alt='' src={'./assets/img/popupRightButton.svg'}></img>
                    </div>
                </div>
                <img alt='' src={'./assets/img/popupLine.svg'} style={{width: "264px"}}></img>
                <div className='mobileMediaCenterButtons'>
                    <button className='popupMediaCenterButton'>
                        <a>{t("mediaCenter")}</a>
                    </button>
                </div>
            </div>

            <div className='headerShowButtons' style={{display: "none"}}>
                <img className='headerShowButton' id='headerShowButton' alt='' src={'./assets/img/headerOpenButton.svg'} onClick={showMobilePopup} style={{width: "50px", position: "relative", cursor: "pointer"}}></img>
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
                <div className='secondPopupFirstOption'><a href='/productAr' style={{fontSize: "13px", cursor: "pointer",position: "relative", left: "5px"}}>{t("showFurniture")}</a></div>
                <img className='popupLineSmall' alt='' src={'./assets/img/popupLine.svg'}></img>
                <div className='secondPopupSecondOption'><a href='/productJoint' style={{fontSize: "13px", cursor: "pointer",position: "relative", left: "5px"}}>{t("createProduct")}</a></div>
            </div>
            <div className='secondPopup' id='secondPopup' style={{display: "none"}}>
                <div className='firstPopupFirstOption'><a href='/productWatch' style={{fontSize: "13px", cursor: "pointer",position: "relative", left: "5px"}}>{t("dressWatch")}</a></div>
                <img className='popupLineSmall' alt='' src={'./assets/img/popupLine.svg'}></img>
                <div className='firstPopupSecondOption'><a href='/productShoes' style={{fontSize: "13px", cursor: "pointer",position: "relative", left: "5px"}}>{t("dressShoe")}</a></div>
                <img className='popupLineSmall' alt='' src={'./assets/img/popupLine.svg'}></img>
                <div className='firstPopupThirdOption'><a href='/productClooth' style={{fontSize: "13px", cursor: "pointer",position: "relative", left: "5px"}}>{t("dressClooth")}</a></div>
            </div>
            <img className='askYourQuestionRobot' alt='' src={'./assets/img/askYourQuestions.svg'}></img>
        </div>  
    );
}