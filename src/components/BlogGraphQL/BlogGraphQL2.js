import './BlogGraphQL.css';
import { useTranslation} from "react-i18next";

export const BlogGraphQL2 = props =>{
    const {t} = useTranslation();
    return(
        <div className='blogGraphQLContainer' style={{backgroundImage: 'URL("./assets/img/blogGraphBackground3.webp")'}}>
            <div className='blogGraphSpans'>
                <a className='blogGraphHeader'>{t("blogGraph2Header")}</a>
                <a className='blogGraphSpan'>{t("blogGraph2Span")}</a>
            </div>
        </div>
    );
}