import './BlogGraphQL.css';
import { useTranslation} from "react-i18next";

export const BlogGraphQL3 = props =>{
    const {t} = useTranslation();
    return(
        <div className='blogGraphQLContainer' style={{backgroundImage: 'URL("./assets/img/blogGraphBackground2.svg")'}}>
            <div className='blogGraphSpans'>
                <a className='blogGraphHeader'>{t("blogGraph3Header")}</a>
                <a className='blogGraphSpan'>{t("blogGraph3Span")}</a>
            </div>
        </div>
    );
}