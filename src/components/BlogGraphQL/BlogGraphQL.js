import './BlogGraphQL.css';
import { useTranslation} from "react-i18next";

export const BlogGraphQL = props =>{
    const {t} = useTranslation();
    return(
        <div className='blogGraphQLContainer'>
            <img className='blogGraphBackground' alt='' src={'./assets/img/blogGraphBackground1.svg'}></img>
            <img className='blogGraphBackgroundMobile' alt='' src={'./assets/img/blog1background.svg'}></img>
            <div className='blogGraphSpans'>
                <a className='blogGraphHeader'>{t("blogGraphHeader")}</a>
                <a className='blogGraphSpan'>{t("blogGraphSpan")}</a>
            </div>
        </div>
    );
}