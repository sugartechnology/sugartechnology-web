import './ArDetails.css';
import { useTranslation} from "react-i18next";

export const ArDetails = props =>{
    const {t} = useTranslation();

    function showMaterialPopup(){
        var option1Span = document.getElementById("option1Span");
        var option1Line = document.getElementById("option1Line");
        var option1Popup = document.getElementById("option1Popup");
        var option1Img = document.getElementById("option1Img");
        var option2Span = document.getElementById("option2Span");
        var option2Line = document.getElementById("option2Line");
        var option2Popup = document.getElementById("option2Popup");
        var option2Img = document.getElementById("option2Img");
        var option3Span = document.getElementById("option3Span");
        var option3Line = document.getElementById("option3Line");
        var option3Popup = document.getElementById("option3Popup");
        var option3Img = document.getElementById("option3Img");
       
        option1Span.style.color = "#ED401A";
        option1Line.style.border = "3px solid #ED401A";
        option1Popup.style.display = "flex";
        option1Img.style.display = "flex";

        option2Span.style.color = "#ABABAB";
        option2Line.style.border = "3px solid #ABABAB";
        option2Popup.style.display = "none";
        option2Img.style.display = "none";

        option3Span.style.color = "#ABABAB";
        option3Line.style.border = "3px solid #ABABAB";
        option3Popup.style.display = "none";
        option3Img.style.display = "none";
        
    }
    function showARPopup(){
        var option1Span = document.getElementById("option1Span");
        var option1Line = document.getElementById("option1Line");
        var option1Popup = document.getElementById("option1Popup");
        var option1Img = document.getElementById("option1Img");
        var option2Span = document.getElementById("option2Span");
        var option2Line = document.getElementById("option2Line");
        var option2Popup = document.getElementById("option2Popup");
        var option2Img = document.getElementById("option2Img");
        var option3Span = document.getElementById("option3Span");
        var option3Line = document.getElementById("option3Line");
        var option3Popup = document.getElementById("option3Popup");
        var option3Img = document.getElementById("option3Img");
       
        option1Span.style.color = "#ABABAB";
        option1Line.style.border = "3px solid #ABABAB";
        option1Popup.style.display = "none";
        option1Img.style.display = "none";

        option2Span.style.color = "#ED401A";
        option2Line.style.border = "3px solid #ED401A";
        option2Popup.style.display = "flex";
        option2Img.style.display = "flex";

        option3Span.style.color = "#ABABAB";
        option3Line.style.border = "3px solid #ABABAB";
        option3Popup.style.display = "none";
        option3Img.style.display = "none";
    }
    function showJointPopup(){
        var option1Span = document.getElementById("option1Span");
        var option1Line = document.getElementById("option1Line");
        var option1Popup = document.getElementById("option1Popup");
        var option1Img = document.getElementById("option1Img");
        var option2Span = document.getElementById("option2Span");
        var option2Line = document.getElementById("option2Line");
        var option2Popup = document.getElementById("option2Popup");
        var option2Img = document.getElementById("option2Img");
        var option3Span = document.getElementById("option3Span");
        var option3Line = document.getElementById("option3Line");
        var option3Popup = document.getElementById("option3Popup");
        var option3Img = document.getElementById("option3Img");
       
        option1Span.style.color = "#ABABAB";
        option1Line.style.border = "3px solid #ABABAB";
        option1Popup.style.display = "none";
        option1Img.style.display = "none";

        option2Span.style.color = "#ABABAB";
        option2Line.style.border = "3px solid #ABABAB";
        option2Popup.style.display = "none";
        option2Img.style.display = "none";

        option3Span.style.color = "#ED401A";
        option3Line.style.border = "3px solid #ED401A";
        option3Popup.style.display = "flex";
        option3Img.style.display = "flex";
    }
    return(
        <div className='arDetailsContainer'>
            <div className='arDetailsSpans'>
                <a className='arDetailsHeader'>{t("ArDetails")}</a>
                <a className='arDetailsSpan'>Lorem ipsum dolor sit amet consectetur. Potenti turpis aenean tempus aliquam metus at. Ultricies vel adipiscing volutpat erat. Elit diam vulputate id ullamcorper in tellus vulputate donec. Faucibus quisque euismod sodales nunc. Velit mattis accumsan aenean dignissim fames nisl sed pulvinar. Nullam ut tortor in ac semper enim cursus quisque. Amet felis at consectetur faucibus. At nisl dictum in eu quisque eget. Integer lacinia non mattis diam ornare. Tempor leo erat risus faucibus nulla pharetra egestas ultrices.</a>
            </div>
            <div className='arDetailsOptions'>
                <div className='option1' style={{display: "flex", flexDirection: "column", gap: "15px"}}>
                    <a onClick={showMaterialPopup} className='option1Span' id='option1Span'>{t("changeMaterial")}</a>
                    <img className='option1Line' id='option1Line' alt='' src={'./assets/img/ArDetailsOptionLine.svg'}></img>
                    <div className='option1Popup' id='option1Popup' style={{display:"flex", zIndex: "1",justifyContent: "center", alignItems: "center"}}>
                        <a className='optionPopupSpan'>Lorem ipsum dolor sit amet consectetur. Potenti turpis aenean tempus aliquam metus at. Ultricies vel adipiscing volutpat erat. Elit diam vulputate id ullamcorper in tellus vulputate donec. Faucibus quisque euismod sodales nunc. Velit mattis accumsan aenean dignissim fames nisl sed pulvinar. Nullam ut tortor in ac semper enim cursus quisque.  </a>
                    </div>
                    <img id='option1Img' alt='' src={'./assets/img/sugar-model-viewer2.svg'} style={{display: "flex",position: "absolute", top: "1200px", left: "400px"}}></img>
                </div>
                <div className='option2' style={{display: "flex", flexDirection: "column", gap: "15px"}}>
                    <a onClick={showARPopup} className='option2Span' id='option2Span'>{t("arSeeHome")}</a>
                    <img className='option2Line' id='option2Line' alt='' src={'./assets/img/ArDetailsOptionLine.svg'}></img>
                    <div className='option2Popup' id='option2Popup' style={{display:"none", zIndex: "1",justifyContent: "center", alignItems: "center"}}>
                        <a className='optionPopupSpan'>Lorem ipsum dolor sit amet consectetur. Potenti turpis aenean tempus aliquam metus at. Ultricies vel adipiscing volutpat erat. Elit diam vulputate id ullamcorper in tellus vulputate donec. Faucibus quisque euismod sodales nunc. Velit mattis accumsan aenean dignissim fames nisl sed pulvinar. Nullam ut tortor in ac semper enim cursus quisque.  </a>
                    </div>
                    <img id='option2Img' alt='' src={'./assets/img/sugar-model-viewer2.svg'} style={{display: "none",position: "absolute", top: "1200px", left: "400px"}}></img>
                </div>
                <div className='option3' style={{display: "flex", flexDirection: "column", gap: "15px"}}>
                    <a onClick={showJointPopup} className='option3Span' id='option3Span'>{t("joint")}</a>
                    <img className='option3Line' id='option3Line' alt='' src={'./assets/img/ArDetailsOptionLine.svg'}></img>
                    <div className='option3Popup' id='option3Popup' style={{display:"none", zIndex: "1",justifyContent: "center", alignItems: "center"}}>
                        <a className='optionPopupSpan'>Lorem ipsum dolor sit amet consectetur. Potenti turpis aenean tempus aliquam metus at. Ultricies vel adipiscing volutpat erat. Elit diam vulputate id ullamcorper in tellus vulputate donec. Faucibus quisque euismod sodales nunc. Velit mattis accumsan aenean dignissim fames nisl sed pulvinar. Nullam ut tortor in ac semper enim cursus quisque.  </a>
                    </div>
                    <img id='option3Img' alt='' src={'./assets/img/sugar-model-viewer2.svg'} style={{display: "none",position: "absolute", top: "1200px", left: "400px"}}></img>
                </div>
            </div>
            <img alt='' src={'./assets/img/ArDetailsImg2.svg'} style={{position: "absolute", top: "1100px", right: "700px", zIndex: "-1"}}></img>
        </div>
    );
}