import './SectoralSolution.css';
import { useTranslation} from "react-i18next";

export const SectoralSolution = props =>{
    const {t} = useTranslation();
    function showSolution1(){
        var solution1 = document.getElementById("solution1");
        var btn1 = document.getElementById("solution1Button");
        var solution2 = document.getElementById("solution2v1");
        var btn2 = document.getElementById("solution2Button");
        var solution3 = document.getElementById("solution3");
        var btn3 = document.getElementById("solution3Button");
        var solution4 = document.getElementById("solution4v1");
        var btn4 = document.getElementById("solution4Button");

        if(solution1.style.display === "none"){
            solution1.style.display = "flex";
            btn1.style.background = "#ED401A";
            solution2.style.display = "none";
            btn2.style.background = "#CCCCCC";
            solution3.style.display = "none";
            btn3.style.background = "#CCCCCC";
            solution4.style.display = "none";
            btn4.style.background = "#CCCCCC";
        }
        else{
            solution1.style.display = "none"
        }
    }
    function showSolution2(){
        var solution1 = document.getElementById("solution1");
        var btn1 = document.getElementById("solution1Button");
        var solution2 = document.getElementById("solution2v1");
        var btn2 = document.getElementById("solution2Button");
        var solution3 = document.getElementById("solution3");
        var btn3 = document.getElementById("solution3Button");
        var solution4 = document.getElementById("solution4v1");
        var btn4 = document.getElementById("solution4Button");

        if(solution2.style.display === "none"){
            solution2.style.display = "flex";
            btn2.style.background = "#ED401A";
            solution1.style.display = "none";
            btn1.style.background = "#CCCCCC";
            solution3.style.display = "none";
            btn3.style.background = "#CCCCCC";
            solution4.style.display = "none";
            btn4.style.background = "#CCCCCC";
        }
        else{
            solution2.style.display = "none"
        }
    }
    function showSolution3(){
        var solution1 = document.getElementById("solution1");
        var btn1 = document.getElementById("solution1Button");
        var solution2 = document.getElementById("solution2v1");
        var btn2 = document.getElementById("solution2Button");
        var solution3 = document.getElementById("solution3");
        var btn3 = document.getElementById("solution3Button");
        var solution4 = document.getElementById("solution4v1");
        var btn4 = document.getElementById("solution4Button");

        if(solution3.style.display === "none"){
            solution3.style.display = "flex";
            btn3.style.background = "#ED401A";
            solution2.style.display = "none";
            btn2.style.background = "#CCCCCC";
            solution1.style.display = "none";
            btn1.style.background = "#CCCCCC";
            solution4.style.display = "none";
            btn4.style.background = "#CCCCCC";
        }
        else{
            solution3.style.display = "none"
        }
    }
    function showSolution4(){
        var solution1 = document.getElementById("solution1");
        var btn1 = document.getElementById("solution1Button");
        var solution2 = document.getElementById("solution2v1");
        var btn2 = document.getElementById("solution2Button");
        var solution3 = document.getElementById("solution3");
        var btn3 = document.getElementById("solution3Button");
        var solution4 = document.getElementById("solution4v1");
        var btn4 = document.getElementById("solution4Button");

        if(solution4.style.display === "none"){
            solution4.style.display = "flex";
            btn4.style.background = "#ED401A";
            solution2.style.display = "none";
            btn2.style.background = "#CCCCCC";
            solution3.style.display = "none";
            btn3.style.background = "#CCCCCC";
            solution1.style.display = "none";
            btn1.style.background = "#CCCCCC";
        }
        else{
            solution4.style.display = "none"
        }
    }
    return(
        <div className='sectoralSolutionContainer'>
            <div className='sectoralSolutionHeader'>
                <a className='sectoralSolutionSpan'>{t("sectoralSolution")}</a>
            </div>
            <div className='solution' id='solution1'>
                <div className='solutionSpans' id='leftSpans'>
                    <a className='solutionHeader'>{t("solutionHeader1")}<a>{t("weHaveGoodSolutionForYou")}</a></a>
                    <a className='solutionSpan'>{t("solutionSpan1")}Lorem ipsum dolor sit amet consectetur. Leo massa tincidunt senectus etiam nulla quisque in egestas. Scelerisque dictumst vulputate cras mi tortor placerat quis. Adipiscing enim placerat faucibus suscipit consequat dictumst sapien mauris. Euismod morbi placerat mi iaculis augue accumsan.</a>
                    <a href='/productAr'><button className='solutionButton'><a>{t("readMore")}</a></button></a>
                </div>
                <div className='solutionImage'>
                    <img alt='' src={'./assets/img/solutionImg1.svg'} id='rightImage'></img>
                    <img className='solutionShadow' alt='' src={'./assets/img/arDetailsShadow.svg'} style={{display: "none"}}></img>
                </div>
            </div>

            <div className='solution' id='solution2'>
                <div className='solutionImage'>
                    <img alt='' src={'./assets/img/solutionImg2.svg'} id='leftImage'></img>
                    <img className='solutionShadow' alt='' src={'./assets/img/arDetailsShadow.svg'} style={{display: "none"}}></img>
                </div>
                <div className='solutionSpans' id='rightSpans'>
                    <a className='solutionHeader'>{t("solutionHeader2")}<a>{t("weHaveGoodSolutionForYou")}</a></a>
                    <a className='solutionSpan'>{t("solutionSpan2")}Lorem ipsum dolor sit amet consectetur. Leo massa tincidunt senectus etiam nulla quisque in egestas. Scelerisque dictumst vulputate cras mi tortor placerat quis. Adipiscing enim placerat faucibus suscipit consequat dictumst sapien mauris. Euismod morbi placerat mi iaculis augue accumsan.</a>
                    <a href='/'><button className='solutionButton'><a>{t("readMore")}</a></button></a>
                </div>
            </div>

            <div className='solution' id='solution3'> 
                <div className='solutionSpans' id='leftSpans'>
                    <a className='solutionHeader'>{t("solutionHeader3")}<a>{t("weHaveGoodSolutionForYou")}</a></a>
                    <a className='solutionSpan'>{t("solutionSpan3")}Lorem ipsum dolor sit amet consectetur. Leo massa tincidunt senectus etiam nulla quisque in egestas. Scelerisque dictumst vulputate cras mi tortor placerat quis. Adipiscing enim placerat faucibus suscipit consequat dictumst sapien mauris. Euismod morbi placerat mi iaculis augue accumsan.</a>
                    <a href='/productShoes'><button className='solutionButton'><a>{t("readMore")}</a></button></a>
                </div>
                <div className='solutionImage'>
                    <img alt='' src={'./assets/img/solutionImg3.svg'} id='rightImage'></img>
                    <img className='solutionShadow' alt='' src={'./assets/img/arDetailsShadow.svg'} style={{display: "none"}}></img>
                </div>
            </div>

            <div className='solution' id='solution4'>
                <div className='solutionImage'>
                    <img alt='' src={'./assets/img/solutionImg4.svg'} id='leftImage'></img>
                    <img className='solutionShadow' alt='' src={'./assets/img/arDetailsShadow.svg'} style={{display: "none"}}></img>
                </div>
                <div className='solutionSpans' id='rightSpans'>
                    <a className='solutionHeader'>{t("solutionHeader4")}<a>{t("weHaveGoodSolutionForYou")}</a></a>
                    <a className='solutionSpan'>{t("solutionSpan4")}Lorem ipsum dolor sit amet consectetur. Leo massa tincidunt senectus etiam nulla quisque in egestas. Scelerisque dictumst vulputate cras mi tortor placerat quis. Adipiscing enim placerat faucibus suscipit consequat dictumst sapien mauris. Euismod morbi placerat mi iaculis augue accumsan.</a>
                    <a href='/productMeta'><button className='solutionButton'><a>{t("readMore")}</a></button></a>
                </div>
            </div>
        </div>
    );
}