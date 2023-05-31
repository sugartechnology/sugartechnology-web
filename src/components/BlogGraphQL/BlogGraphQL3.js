import './BlogGraphQL.css';
import { useTranslation} from "react-i18next";

export const BlogGraphQL3 = props =>{
    const {t} = useTranslation();
    return(
        <div className='blogGraphQLContainer'>
            <img className='blogGraphBackground' alt='' src={'./assets/img/blogGraphBackground2.svg'}></img>
            <img className='blogGraphBackgroundMobile' alt='' src={'./assets/img/blog3backgroundMobile.svg'}></img>
            <div className='blogGraphSpans'>
                <a className='blogGraphHeader'>{t("blogGraph3Header")}</a>
                <a className='blogGraphSpan'>{t("blogGraph3Span")}</a>
            </div>
        </div>
    );
}