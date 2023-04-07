import './SugarBrands.css';
import { useTranslation} from "react-i18next";

export const SugarBrands = props =>{
    const {t} = useTranslation();
    function showBrand1(){
        var brand1 = document.getElementById("brand1");
        var btn1 = document.getElementById("brand1Button");
        var brand2 = document.getElementById("brand2");
        var btn2 = document.getElementById("brand2Button");
        var brand3 = document.getElementById("brand3");
        var btn3 = document.getElementById("brand3Button");
        if (brand1.style.display === "none"){
            brand1.style.display = "flex";
            btn1.style.background = "#ED401A";
            brand2.style.display = "none";
            btn2.style.background = "#CCCCCC";
            brand3.style.display = "none";
            btn3.style.background = "#CCCCCC";
        }
        else{
            brand1.style.display = "none";
        }
    }
    function showBrand2(){
        var brand1 = document.getElementById("brand1");
        var btn1 = document.getElementById("brand1Button");
        var brand2 = document.getElementById("brand2");
        var btn2 = document.getElementById("brand2Button");
        var brand3 = document.getElementById("brand3");
        var btn3 = document.getElementById("brand3Button");
        if (brand2.style.display === "none"){
            brand2.style.display = "flex";
            btn2.style.background = "#ED401A";
            brand1.style.display = "none";
            btn1.style.background = "#CCCCCC";
            brand3.style.display = "none";
            btn3.style.background = "#CCCCCC";
        }
        else{
            brand2.style.display = "none";
        }
    }
    function showBrand3(){
        var brand1 = document.getElementById("brand1");
        var btn1 = document.getElementById("brand1Button");
        var brand2 = document.getElementById("brand2");
        var btn2 = document.getElementById("brand2Button");
        var brand3 = document.getElementById("brand3");
        var btn3 = document.getElementById("brand3Button");
        if (brand3.style.display === "none"){
            brand3.style.display = "flex";
            btn3.style.background = "#ED401A";
            brand2.style.display = "none";
            btn2.style.background = "#CCCCCC";
            brand1.style.display = "none";
            btn1.style.background = "#CCCCCC";
        }
        else{
            brand3.style.display = "none";
        }
    }
    return(
        <div className='sugarBrandsContainer'>
            <div className='sugarBrandsHeaders'>
                <a className='sugarBrandsHeader'>{t("sugarBrandsHeader")}</a>
            </div>
            <div className='sugarBrands'>
                <div className='sugarBrand' id='brand1'>
                    <img className='sugarBrandHomeImg' alt='' src={'./assets/img/istikbalHome.svg'}></img>
                    <a className='sugarBrandSpan'>{t("sugarBrand1Span")}</a>
                    <img className='sugarBrandLogo' alt='' src={'./assets/img/istikbalHomeLogo.svg'}></img>
                </div>
                <img className='sugarBrandShadow1' alt='' src={'./assets/img/arDetailsShadow.svg'}></img>
                <div className='sugarBrand' id='brand2'>
                    <img className='sugarBrandHomeImg' alt='' src={'./assets/img/tepehomeHome.svg'}></img>
                    <a className='sugarBrandSpan'>{t("sugarBrand2Span")}</a>
                    <img className='sugarBrandLogo' alt='' src={'./assets/img/tepehomeHomeLogo.svg'}></img>
                </div>
                <img className='sugarBrandShadow2' alt='' src={'./assets/img/arDetailsShadow.svg'}></img>
                <div className='sugarBrand' id='brand3'>
                    <img className='sugarBrandHomeImg' alt='' src={'./assets/img/bellonaHome.svg'}></img>
                    <a className='sugarBrandSpan'>{t("sugarBrand3Span")}</a>
                    <img className='sugarBrandLogo' alt='' src={'./assets/img/bellonaHomeLogo.svg'}></img>
                </div>
                <img className='sugarBrandShadow3' alt='' src={'./assets/img/arDetailsShadow.svg'}></img>
            </div>
            <div className='brandsPageButton' style={{display: "none"}}>
                <img onClick={showBrand1} className='solution1Button' id='brand1Button'></img>
                <img onClick={showBrand2} className='solution2Button' id='brand2Button'></img>
                <img onClick={showBrand3} className='solution3Button' id='brand3Button'></img>
            </div>
        </div>
    );
}