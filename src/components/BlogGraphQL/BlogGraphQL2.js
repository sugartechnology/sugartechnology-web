import './BlogGraphQL.css';
import { useTranslation} from "react-i18next";

export const BlogGraphQL2 = props =>{
    const {t} = useTranslation();
    return(
        <div className='blogGraphQLContainer'>
            <img className='blogGraphBackground' alt='' src={'./assets/img/blogGraphBackground3.svg'}></img>
            <img className='blogGraphBackgroundMobile' alt='' src={'./assets/img/blog2backgroundMobile.svg'}></img>
            <div className='blogGraphSpans'>
                <a className='blogGraphHeader'>{t("blogGraph2Header")}</a>
                <a className='blogGraphSpan'>{t("blogGraph2Span")}</a>
            </div>
        </div>
    );
}