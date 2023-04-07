import './BlogGraphQL.css';
import { useTranslation} from "react-i18next";

export const BlogGraphQL = props =>{
    const {t} = useTranslation();
    return(
        <div className='blogGraphQLContainer'>
            <img className='blogGraphBackground' alt='' src={'./assets/img/blogGraphBackground.svg'}></img>
            <div className='blogGraphSpans'>
                <a className='blogGraphHeader'>{t("graphQL")}</a>
                <a className='blogGraphSpan'>{t("blogGraphSpan")}</a>
            </div>
        </div>
    );
}