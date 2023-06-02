import './ListenToPartner.css';
import { useTranslation} from "react-i18next";

export const ListenToPartner = props =>{
    const {t} = useTranslation();

    function showPartner1(){
        var partner1 = document.getElementById("partner1");
        var btn1 = document.getElementById("partner1Button");
        var partner2 = document.getElementById("partner2");
        var btn2 = document.getElementById("partner2Button");
        var partner3 = document.getElementById("partner3");
        var btn3 = document.getElementById("partner3Button");
        
        partner1.style.display = "flex";
        btn1.style.background = "#ED401A";
        partner2.style.display = "none";
        btn2.style.background = "#CCCCCC";
        partner3.style.display = "none";
        btn3.style.background = "#CCCCCC";
    }
    function showPartner2(){
        var partner1 = document.getElementById("partner1");
        var btn1 = document.getElementById("partner1Button");
        var partner2 = document.getElementById("partner2");
        var btn2 = document.getElementById("partner2Button");
        var partner3 = document.getElementById("partner3");
        var btn3 = document.getElementById("partner3Button");
        
        partner2.style.display = "flex";
        btn2.style.background = "#ED401A";
        partner1.style.display = "none";
        btn1.style.background = "#CCCCCC";
        partner3.style.display = "none";
        btn3.style.background = "#CCCCCC";

    }
    function showPartner3(){
        var partner1 = document.getElementById("partner1");
        var btn1 = document.getElementById("partner1Button");
        var partner2 = document.getElementById("partner2");
        var btn2 = document.getElementById("partner2Button");
        var partner3 = document.getElementById("partner3");
        var btn3 = document.getElementById("partner3Button");

        partner3.style.display = "flex";
        btn3.style.background = "#ED401A";
        partner2.style.display = "none";
        btn2.style.background = "#CCCCCC";
        partner1.style.display = "none";
        btn1.style.background = "#CCCCCC";
    }

    return(
        <div className='listenToPartnerContainer'>
            <div className='partner1' id='partner1'>
                <div className='partnerHeaders'>
                    <img className='containerTopLogo' alt='' src={'./assets/img/ListenToPartnerImg1.svg'} style={{position: "absolute", bottom: "140px", left: "40px"}}></img>
                    <a className='partnerHeader'>{t("listenToPartnerHeader")}</a>
                    <img className='partnerLogo' alt='' src={'./assets/img/partnerSimurg.svg'} style={{width: "170px", position: "absolute", left: "40px"}}></img>
                </div>
                <div className='partnerSpans' style={{display: "flex"}}>
                    <a className='partnerSpan'>{t("simurgComments")}</a>
                    <img className='spanBottomLogo' alt='' src={'./assets/img/ListenToPartnerImg2.svg'} style={{position: "absolute",right: "80px", bottom: "-10px"}}></img>
                </div>
                <div className='partnerVideo'>
                    <iframe className='partnerVideo' style={{width: "80%", height: "80%"}}  width="804" height="411" src="https://www.youtube.com/embed/VJPmW2u43uU" frameborder="0" allowfullscreen></iframe>
                    <img className='partnerVideoShadow' id='deskopVideoShadow' alt='' src={'./assets/img/arDetailsShadow.svg'}></img>
                    <img className='partnerVideoShadow' id='mobileVideoShadow' alt='' src={'./assets/img/goalsShadow.svg'}></img>
                </div>
            </div>
            <div className='partner2' id='partner2'>
                <div className='partnerHeaders'>
                    <img className='containerTopLogo' alt='' src={'./assets/img/ListenToPartnerImg1.svg'} style={{position: "absolute", bottom: "140px", left: "40px"}}></img>
                    <a className='partnerHeader'>{t("listenToPartnerHeader")}</a>
                    <img className='partnerLogo' alt='' src={'./assets/img/tepehomeHomeLogo.svg'} style={{width: "170px", position: "absolute", left: "40px"}}></img>
                </div>
                <div className='partnerSpans' style={{display: "flex"}}>
                    <a className='partnerSpan'>{t("tepeHomeComments")}</a>
                    <img className='spanBottomLogo' alt='' src={'./assets/img/ListenToPartnerImg2.svg'} style={{position: "absolute", right: "10px", bottom: "-10px"}}></img>
                </div>
                <div className='partnerVideo'>
                    <iframe className='partnerVideo' style={{width: "80%", height: "80%"}}  width="804" height="411" src="https://www.youtube.com/embed/C-aoRasmfX8" frameborder="0" allowfullscreen></iframe>
                    <img className='partnerVideoShadow' id='deskopVideoShadow' alt='' src={'./assets/img/arDetailsShadow.svg'}></img>
                    <img className='partnerVideoShadow' id='mobileVideoShadow' alt='' src={'./assets/img/goalsShadow.svg'}></img>
                </div>
            </div>
            <div className='partner3' id='partner3'>
                <div className='partnerHeaders'>
                    <img className='containerTopLogo' alt='' src={'./assets/img/ListenToPartnerImg1.svg'} style={{position: "absolute", bottom: "140px", left: "40px"}}></img>
                    <a className='partnerHeader'>{t("listenToPartnerHeader")}</a>
                    <img className='partnerLogo' alt='' src={'./assets/img/ekohalilogo.png'} style={{width: "170px", position: "absolute", left: "40px"}}></img>
                </div>
                <div className='partnerSpans' style={{display: "flex"}}>
                    <a className='partnerSpan'>{t("ekoHaliComments")}</a>
                    <img className='spanBottomLogo' alt='' src={'./assets/img/ListenToPartnerImg2.svg'} style={{position: "absolute", right: "10px", bottom: "-10px"}}></img>
                </div>
                <div className='partnerVideo'>
                    <iframe className='partnerVideo' style={{width: "80%", height: "80%"}}  width="804" height="411" src="https://www.youtube.com/embed/oKDV_wUaaOo" frameborder="0" allowfullscreen></iframe>
                    <img className='partnerVideoShadow' id='deskopVideoShadow' alt='' src={'./assets/img/arDetailsShadow.svg'}></img>
                    <img className='partnerVideoShadow' id='mobileVideoShadow' alt='' src={'./assets/img/goalsShadow.svg'}></img>
                </div>
            </div>
            <div className='partnersPageButtons'>
                <img onClick={showPartner1} className='solution1Button' id='partner1Button'></img>
                <img onClick={showPartner2} className='solution2Button' id='partner2Button'></img>
                <img onClick={showPartner3} className='solution3Button' id='partner3Button'></img>
            </div>
        </div>
    );
}