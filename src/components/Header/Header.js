import './Header.css'
import { useTranslation} from "react-i18next";
import LanguageSelector from './LanguageSelector';
import React, { useState, useEffect } from 'react';


export const Header = props => {
    const {t} = useTranslation();
    const [isTablet, setIsTablet] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 900);
            setIsTablet(window.innerWidth > 900 && window.innerWidth <= 1100);
            
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
        window.removeEventListener('resize', handleResize);
        };
    }, []);

    const showPopup = ()=>{
        var popup = document.getElementById("productServicesPopup");
        var popupOption1 =  document.getElementById("firstPopup");
        var popupOption2 =  document.getElementById("secondPopup");
        var headerContainer = document.getElementById('headerContainer');
        popup.style.display = "flex";
        headerContainer.addEventListener('mouseleave', () => {
            popup.style.display = "none";
            popupOption1.style.display = "none";
            popupOption2.style.display = "none";
        })
        
        
    }
    const showPopupMobile = ()=>{
        var motherPopup = document.getElementById("mobileHeaderPopup");
        var firstMobilePopup = document.getElementById("firstMobilePopup");
        var firstChildPopup = document.getElementById("firstChildPopup");
        var secondChildPopup = document.getElementById("secondChildPopup");
        var span = document.getElementById("routerProductSpan");
        var div = document.getElementById("routerProduct");
        var btn = document.getElementById("productMobileButton");
        if(firstMobilePopup.style.display === "none"){
            firstMobilePopup.style.display = "flex";
            motherPopup.style.height = "650px";
            btn.style.transform = "rotate(+90deg)";
            span.style.color = "#ED401A";
            btn.style.transform = "rotate(+90deg)";
            div.style.background = "#F8EDEB";
        }
        else{
            firstMobilePopup.style.display = "none";
            motherPopup.style.height = "430px";
            firstChildPopup.style.display = "none";
            secondChildPopup.style.display = "none";
            div.style.background = "#FFFFFF";
            span.style.color = "#000000";
            btn.style.transform = "none";
        }
    }
    const showFirstChildPopup = () => {
       var firstChildPopup = document.getElementById("firstChildPopup");
       var motherPopup = document.getElementById("mobileHeaderPopup");
       var secondChildPopup = document.getElementById("secondChildPopup");
       var span = document.getElementById("routerShowAtHomeMobileSpan");
       var btn = document.getElementById("showAtHomeMobileButton");
       var btn2 = document.getElementById("vtonMobileButton");
        var span2 = document.getElementById("routerVtonMobileSpan");
       if(firstChildPopup.style.display === "none"){
        motherPopup.style.height = "666px";
        firstChildPopup.style.display = "flex";
        secondChildPopup.style.display = "none";
        btn.style.transform = "rotate(+90deg)";
        span.style.color = "#ED401A";
        btn2.style.transform = "none";
        span2.style.color = "#000000";
       }
       else{
        firstChildPopup.style.display = "none";
        btn.style.transform = "none";
        motherPopup.style.height = "570px";
        span.style.color = "#000000";
       }
    }
    const showSecondChildPopup = () => {
        var firstChildPopup = document.getElementById("firstChildPopup");
        var motherPopup = document.getElementById("mobileHeaderPopup");
        var secondChildPopup = document.getElementById("secondChildPopup");
        var btn = document.getElementById("vtonMobileButton");
        var span = document.getElementById("routerVtonMobileSpan");
        var span2 = document.getElementById("routerShowAtHomeMobileSpan");
        var btn2 = document.getElementById("showAtHomeMobileButton");
        if(secondChildPopup.style.display === "none"){
            motherPopup.style.height = "666px";
            secondChildPopup.style.display = "flex";
            firstChildPopup.style.display = "none";
            btn.style.transform = "rotate(+90deg)";
            span.style.color = "#ED401A";
            btn2.style.transform = "none";
        span2.style.color = "#000000";
        }
        else{
            secondChildPopup.style.display = "none";
            btn.style.transform = "none";
            motherPopup.style.height = "570px";
            span.style.color = "#000000";
        }
    }
    const showMobilePopup = () => {
        var popup = document.getElementById("mobileHeaderPopup");
        var overlay = document.getElementById("overlay");
        var span = document.getElementById("routerProductSpan");
        var div = document.getElementById("routerProduct");
        var btn = document.getElementById("productMobileButton");
        var firstMobilePopup = document.getElementById("firstMobilePopup");
        if (popup.style.display === "none"){
            popup.style.display = "flex";
            overlay.style.width = "100%";
            overlay.style.height = "100%";
        }
        else{
            popup.style.display = "none";
            overlay.style.width = "0%";
            overlay.style.height = "0%";
            div.style.background = "#FFFFFF";
            span.style.color = "#000000";
            btn.style.transform = "none";
            firstMobilePopup.style.display = "none";
        }
    }
    const showPopupOption1 = () => {
        var popupOption1 = document.getElementById("firstPopup");
        var popupOption2 = document.getElementById("secondPopup");
        popupOption1.style.display = "flex";
        popupOption2.style.display = "none";
    }
    const showPopupOption2 = () => {
        var popupOption1 = document.getElementById("firstPopup");
        var popupOption2 = document.getElementById("secondPopup");
        popupOption2.style.display = "flex";
        popupOption1.style.display = "none";
        
    }
    const closePopupOption1 = () => {
        var popupOption1 = document.getElementById("firstPopup");
        popupOption1.style.display = "none";
    }
    const closePopupOption2 = () => {
        var popupOption2 = document.getElementById("secondPopup");
        popupOption2.style.display = "none";
    }

    const closePopups = () => {
        closePopupOption1();
        closePopupOption2();
    }
    
    return(
        <div className={`${isMobile ? 'mobile' : ''} ${isTablet ? 'tablet' : ''} headerContainer`} id='headerContainer'>
            <div class="overlay" id='overlay' style={{zIndex: "1"}} onClick={showMobilePopup}></div>
            <div className='mobileHeaderPopup' id='mobileHeaderPopup' style={{display: "none", position: "absolute", zIndex: "2"}}>
                <div className='backToHome' onClick={showMobilePopup}>
                    <img className='backToHomeArrow' alt='' src={'./assets/img/arrow-left.svg'}></img>
                    <a className='backToHomeSpan'>{t("backToHome")}</a>
                </div>
                <img alt='' src={'./assets/img/popupLine.svg'} style={{width: "264px"}}></img>
                <div className='backToHomeInputs'>
                    <input className='backToHomeInput' type='text' placeholder='Search for'></input>
                    <img alt='' src={'./assets/img/search.svg'} style={{position: "absolute", right: "30px", top: "64px"}}></img>
                </div>
                <img alt='' src={'./assets/img/popupLine.svg'} style={{width: "264px"}}></img>
                <div className="popupRouters">
                    <div className='popupRouter' id='routerHome'>
                        <a href='/'>{t("home")}</a>
                        <img className='popupRightButton' alt='' src={'./assets/img/popupMobileVector.svg'}></img>
                    </div>
                    <div className='popupRouter' id='routerProduct' onClick={showPopupMobile}>
                        <a id='routerProductSpan'>{t("productServices")}</a>
                        <img className='popupRightButton' id='productMobileButton' alt='' src={'./assets/img/popupMobileVector.svg'}></img>
                    </div>
                    <div className='firstMobilePopup' id='firstMobilePopup' style={{display: "none"}}>
                        <img className='firstMobilePopupLine' alt='' src={'./assets/img/popupLine.svg'} style={{width: "200px"}}></img>
                        <div className='popupRouterMobile' id='routerShowAtHomeMobile' onClick={showFirstChildPopup}>
                            <a id='routerShowAtHomeMobileSpan'>{t("showAtHome")}</a>
                            <img className='popupRightButton' id='showAtHomeMobileButton' alt='' src={'./assets/img/popupMobileVector.svg'}></img>
                        </div>
                        <div className='firstChildPopup' id='firstChildPopup' style={{display: "none"}}>
                            <img className='firstMobilePopupLine' alt='' src={'./assets/img/popupLine.svg'} style={{width: "170px"}}></img>
                            <div className='popupRouterMobile' id='routerShowFurnitureMobile'>
                                <a>{t("showFurniture")}</a>
                            </div>
                            <div className='popupRouterMobile' id='routerJointMobile'>
                                <a href='/productJoint'>{t("createProduct")}</a>
                            </div>
                            <img className='firstMobilePopupLine' alt='' src={'./assets/img/popupLine.svg'} style={{width: "170px"}}></img>
                        </div>
                        <div className='popupRouterMobile' id='routerMetaverseMobile'>
                            <a href='/productMeta'>{t("metaverse")}</a>
                        </div>
                        <div className='popupRouterMobile' id='routerVtonMobile' onClick={showSecondChildPopup}>
                            <a id='routerVtonMobileSpan'>{t("vton")}</a>
                            <img className='popupRightButton' id='vtonMobileButton' alt='' src={'./assets/img/popupMobileVector.svg'}></img>
                        </div>
                        <img className='firstMobilePopupLine' alt='' src={'./assets/img/popupLine.svg'} style={{width: "200px"}}></img>
                        <div className='secondChildPopup' id='secondChildPopup' style={{display: "none"}}>
                            <div className='popupRouterMobile' id='routerWatchMobile'>
                                <a href='/productWatch'>{t("dressWatch")}</a>
                            </div>
                            <div className='popupRouterMobile' id='routerShoesMobile'>
                                <a href='/productShoes'>{t("dressShoe")}</a>
                            </div>
                            <div className='popupRouterMobile' id='routerCloothMobile'>
                                <a href='/productClooth'>{t("dressClooth")}</a>
                            </div>
                            <img className='firstMobilePopupLine' alt='' src={'./assets/img/popupLine.svg'} style={{width: "170px"}}></img>
                        </div>
                    </div>
                    <div className='popupRouter' id='routerAbout'>
                        <a href='/aboutUs'>{t("aboutUs")}</a>
                        <img className='popupRightButton' alt='' src={'./assets/img/popupMobileVector.svg'}></img>
                    </div>
                    <div className='popupRouter' id='routerBlog'>
                        <a href='/blogs'>{t("blog")}</a>
                        <img className='popupRightButton' alt='' src={'./assets/img/popupMobileVector.svg'}></img>
                    </div>
                    <div className='popupRouter' id='routerContact'>
                        <a href='/contactUs'>{t("contactUs")}</a>
                        <img className='popupRightButton' alt='' src={'./assets/img/popupMobileVector.svg'}></img>
                    </div>
                </div>
                <img id='mobilePopupLine3' alt='' src={'./assets/img/popupLine.svg'} style={{width: "264px", position: "relative"}}></img>
                <div className='mobileMediaCenterButtons'>
                    <a href='/contactCv'>
                        <button className='popupMediaCenterButton' id='popupMediaCenterButton'>
                            <a>{t("careers")}</a>
                        </button>
                    </a>
                </div>
            </div>

            <div className='headerShowButtons' style={{display: "none"}}>
                <img className='headerShowButton' id='headerShowButton' alt='' src={'./assets/img/headerOpenButton.svg'} onClick={showMobilePopup} style={{width: "50px", position: "relative", cursor: "pointer"}}></img>
            </div>
            <div className="sugarLogo" >
                <a href='/'><img alt="" src={'assets/img/headerLogo.svg'}></img></a>
            </div>
            <div className="routers">
                <a href='/'>{t("home")}</a>
                <a onMouseOver={showPopup}>{t("productServices")}</a>
                <div className='productServicesPopup' id='productServicesPopup' style={{ display: "none", position: "absolute", top: "45px", left: "70px", zIndex: "6"}}>
                    <div className='popupOption' id='firstPopupOption' onMouseOver={showPopupOption1}><a>{t("showAtHome")}</a><img className='popupVector' id='vector1' alt='' src={'./assets/img/popupVector.svg'}></img></div>
                    <div className='firstPopup' id='firstPopup' style={{display: "none"}}>
                        <div className='secondPopupFirstOption'><a style={{fontSize: "13px", cursor: "pointer",position: "relative", left: "5px"}}>{t("showFurniture")}</a></div>
                        <img className='popupLineSmall' alt='' src={'./assets/img/popupLine.svg'}></img>
                        <div className='itemsPopup'>
                            <a href='/productAr' className='popupItem'>Mobilya</a>
                            <a href='/productCarpet' className='popupItem'>Halı</a>
                            <a href='/productTablo' className='popupItem'>Tablo</a>
                            <a href='/productBathroom' className='popupItem'>Banyo Mobilya</a>
                            <a href='/productBeyazEsya' className='popupItem'>Beyaz Eşya</a>
                            <a href='/productDekorasyon' className='popupItem'>Dekorasyon</a>
                            <a href='/productTekstil' className='popupItem'>Tekstil</a>
                        </div>
                        <img className='popupLineSmall' alt='' src={'./assets/img/popupLine.svg'}></img>
                        <div className='secondPopupSecondOption'><a href='/productJoint' style={{fontSize: "13px", cursor: "pointer",position: "relative", left: "5px"}}>{t("createProduct")}</a></div>
                    </div>
                    <img className='popupLine' alt='' src={'./assets/img/popupLine.svg'}></img>
                    <div className='popupOption' onMouseOver={closePopups} style={{top: "0px"}}><a href='/productMeta'>{t("metaverse")}</a></div>
                    <img className='popupLine' alt='' src={'./assets/img/popupLine.svg'}></img>
                    <div className='popupOption' id='thirdPopupOption' onMouseOver={showPopupOption2} style={{top: "0px"}}><a>{t("vton")}</a><img className='popupVector' id='vector2' alt='' src={'./assets/img/popupVector.svg'}></img></div>
                    <div className='secondPopup' id='secondPopup' style={{display: "none"}}>
                        <div className='firstPopupFirstOption'><a href='/productWatch' style={{fontSize: "13px", cursor: "pointer",position: "relative", left: "5px"}}>{t("dressWatch")}</a></div>
                        <img className='popupLineSmall' alt='' src={'./assets/img/popupLine.svg'}></img>
                        <div className='firstPopupSecondOption'><a href='/productShoes' style={{fontSize: "13px", cursor: "pointer",position: "relative", left: "5px"}}>{t("dressShoe")}</a></div>
                        <img className='popupLineSmall' alt='' src={'./assets/img/popupLine.svg'}></img>
                        <div className='firstPopupThirdOption'><a href='/productClooth' style={{fontSize: "13px", cursor: "pointer",position: "relative", left: "5px"}}>{t("dressClooth")}</a></div>
                    </div>
                </div>
                <a href='/aboutUs'>{t("aboutUs")}</a>
                <a href='/blogs'>{t("blog")}</a>
                <a href='/contactUs'>{t("contactUs")}</a>
            </div>
            <div className="headerButtons">
                <LanguageSelector></LanguageSelector>
                <a href='/contactCv'>
                    <button className='mediaCenterButton'>
                        <a>{t("careers")}</a>
                    </button>
                </a>
            </div>
        </div>  
    );
}