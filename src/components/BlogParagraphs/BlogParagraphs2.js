import './BlogParagraphs.css';
import { useTranslation} from "react-i18next";

export const BlogParagraphs2 = props =>{
    const {t} = useTranslation();
    return(
        <div className='blogParagraphs2Container'>
            <div className='paragraph' style={{marginTop: "40px"}}>
                <a className='paragraphHeader'>{t("paragraphHeader2")}</a>
                <a className='secondParagraphList'>{t("paragraphList2Span1")}</a>
                <a className='secondParagraphList'>{t("paragraphList2Span2")}</a>
                <a className='secondParagraphList'>{t("paragraphList2Span3Part1")}  <a style={{textDecoration: "none", color: "#039be5"}} href="https://bigumigu.com/haber/netfax-ten-aaskanaklarla-sekillenen-kisiye-ozel-gorsel-dunya/">{t("paragraphList2Span3Part2")}</a> {t("paragraphList2Span3Part2")} </a>
                <a className='secondParagraphList'>{t("paragraphList2Span4")}</a>
                <a className='secondParagraphList'>{t("paragraphList2Span5")}</a>
                <a className='secondParagraphList'>{t("paragraphList2Span6")}</a>
                <a className='secondParagraphList'>{t("paragraphList2Span7")}</a>
                <a className='secondParagraphList'>{t("paragraphList2Span8")}</a>
            </div>
           
            <div className='author'>
                <div className='authorImage' style={{width: "30%"}}>
                    <img style={{width: "100%"}} alt='' src={'./assets/img/SugarTeamLeader1.webp'}></img>
                </div>
                <div className='authorSpans'>
                    <a className='authorHeader'>Abdurrahman Türkeri</a>
                    <a className='authorSpan'>{t("paragraphAuthor2Span")}</a>
                </div>
            </div>
        </div>
    );
}
