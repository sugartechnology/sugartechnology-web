import './SectoralSolution.css';
import { useTranslation} from "react-i18next";

export const SectoralSolution = props =>{
    const {t} = useTranslation();
    return(
        <div className='sectoralSolutionContainer'>
            <div className='sectoralSolutionHeader'>
                <a className='sectoralSolutionSpan'>{t("sectoralSolution")}</a>
                <img className='sectoralSolutionLine' alt='' src={'./assets/img/sectoralSolutionLine.svg'}></img>
            </div>
            <div className='solution'>
                <div className='solutionSpans' id='leftSpans'>
                    <a className='solutionHeader'>{t("areYouAFurnitureSeller")}<a>{t("weHaveGoodSolutionForYou")}</a></a>
                    <a className='solutionSpan'>Lorem ipsum dolor sit amet consectetur. Leo massa tincidunt senectus etiam nulla quisque in egestas. Scelerisque dictumst vulputate cras mi tortor placerat quis. Adipiscing enim placerat faucibus suscipit consequat dictumst sapien mauris. Euismod morbi placerat mi iaculis augue accumsan.</a>
                    <button className='solutionButton'><a>{t("readMore")}</a></button>
                </div>
                <div className='solutionImage'>
                    <img alt='' src={'./assets/img/sugar-model-viewer.svg'} id='rightImage'></img>
                </div>
            </div>

            <div className='solution'>
                <div className='solutionImage'>
                    <img alt='' src={'./assets/img/solutionImage2.svg'} id='leftImage'></img>
                </div>
                <div className='solutionSpans' style={{position: "relative", left: "100px"}} id='rightSpans'>
                    <a className='solutionHeader'>{t("areYouArchitect")}<a>{t("weHaveGoodSolutionForYou")}</a></a>
                    <a className='solutionSpan'>Lorem ipsum dolor sit amet consectetur. Leo massa tincidunt senectus etiam nulla quisque in egestas. Scelerisque dictumst vulputate cras mi tortor placerat quis. Adipiscing enim placerat faucibus suscipit consequat dictumst sapien mauris. Euismod morbi placerat mi iaculis augue accumsan.</a>
                    <button className='solutionButton'><a>{t("readMore")}</a></button>
                </div>
            </div>

            <div className='solution'>
                <div className='solutionSpans' id='leftSpans'>
                    <a className='solutionHeader'>{t("areYouShoeSeller")}<a>{t("weHaveGoodSolutionForYou")}</a></a>
                    <a className='solutionSpan'>Lorem ipsum dolor sit amet consectetur. Leo massa tincidunt senectus etiam nulla quisque in egestas. Scelerisque dictumst vulputate cras mi tortor placerat quis. Adipiscing enim placerat faucibus suscipit consequat dictumst sapien mauris. Euismod morbi placerat mi iaculis augue accumsan.</a>
                    <button className='solutionButton'><a>{t("readMore")}</a></button>
                </div>
                <div className='solutionImage'>
                    <img alt='' src={'./assets/img/solutionImage3.svg'} id='rightImage'></img>
                </div>
            </div>

            <div className='solution'>
                <div className='solutionImage'>
                    <img alt='' src={'./assets/img/solutionImage4.svg'} id='leftImage'></img>
                </div>
                <div className='solutionSpans' style={{position: "relative", left: "100px"}} id='rightSpans'>
                    <a className='solutionHeader'>{t("doYouWantMetaverse")}<a>{t("weHaveGoodSolutionForYou")}</a></a>
                    <a className='solutionSpan'>Lorem ipsum dolor sit amet consectetur. Leo massa tincidunt senectus etiam nulla quisque in egestas. Scelerisque dictumst vulputate cras mi tortor placerat quis. Adipiscing enim placerat faucibus suscipit consequat dictumst sapien mauris. Euismod morbi placerat mi iaculis augue accumsan.</a>
                    <button className='solutionButton'><a>{t("readMore")}</a></button>
                </div>
            </div>
        </div>
    );
}