import './SectoralSolution.css';
import { useTranslation} from "react-i18next";

export const SectoralSolution = props =>{
    const {t} = useTranslation();
    return(
        <div className='sectoralSolutionContainer'>
            <div className='sectoralSolutionHeader'>
                <img alt='' src={'./assets/img/sectoralSolutionLine.svg'}></img>
                <a className='sectoralSolutionSpan'>{t("sectoralSolution")}</a>
                <img alt='' src={'./assets/img/sectoralSolutionLine.svg'}></img>
            </div>
            <div className='solutionsDiv'>
                <div className='solution' id='solution1'>
                    <div className='solutionSpans' id='leftSpans'>
                        <a className='solutionHeader'>{t("solutionHeader1")}</a>
                        <a className='solutionSpan'>{t("solutionSpan1")}</a>
                        <a href='/productAr'><button className='solutionButton'><a>{t("readMore")}</a></button></a>
                    </div>
                    <div className='solutionImage'>
                        <img alt='' src={'./assets/img/solutionImg1.webp'} id='rightImage'></img>
                        <img className='solutionShadow' alt='' src={'./assets/img/arDetailsShadow.svg'} style={{display: "none"}}></img>
                    </div>
                </div>

                <div className='solution' id='solution2'>
                    <div className='solutionImage'>
                        <img alt='' src={'./assets/img/solutionImg2.webp'} id='leftImage'></img>
                        <img className='solutionShadow' alt='' src={'./assets/img/arDetailsShadow.svg'} style={{display: "none"}}></img>
                    </div>
                    <div className='solutionSpans' id='rightSpans'>
                        <a className='solutionHeader'>{t("solutionHeader2")}</a>
                        <a className='solutionSpan'>{t("solutionSpan2")}</a>
                        <a href='/'><button className='solutionButton'><a>{t("readMore")}</a></button></a>
                    </div>
                </div>

                <div className='solution' id='solution3'> 
                    <div className='solutionSpans' id='leftSpans'>
                        <a className='solutionHeader'>{t("solutionHeader3")}</a>
                        <a className='solutionSpan'>{t("solutionSpan3")}</a>
                        <a href='/productShoes'><button className='solutionButton'><a>{t("readMore")}</a></button></a>
                    </div>
                    <div className='solutionImage'>
                        <img alt='' src={'./assets/img/solutionImg3.webp'} id='rightImage'></img>
                        <img className='solutionShadow' alt='' src={'./assets/img/arDetailsShadow.svg'} style={{display: "none"}}></img>
                    </div>
                </div>

                <div className='solution' id='solution4'>
                    <div className='solutionImage'>
                        <img alt='' src={'./assets/img/solutionImg4.webp'} id='leftImage'></img>
                        <img className='solutionShadow' alt='' src={'./assets/img/arDetailsShadow.svg'} style={{display: "none"}}></img>
                    </div>
                    <div className='solutionSpans' id='rightSpans'>
                        <a className='solutionHeader'>{t("solutionHeader4")}</a>
                        <a className='solutionSpan'>{t("solutionSpan4")}</a>
                        <a href='/productMeta'><button className='solutionButton'><a>{t("readMore")}</a></button></a>
                    </div>
                </div>
            </div>
        </div>
    );
}