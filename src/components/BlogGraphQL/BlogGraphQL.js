import './BlogGraphQL.css';
import { useTranslation} from "react-i18next";

export const BlogGraphQL = props =>{
    const {t} = useTranslation();
    return(
        <div className='blogGraphQLContainer' style={{backgroundImage: 'URL("./assets/img/blogGraphBackground1.svg")'}}>
            <div className='blogGraphSpans'>
                <a className='blogGraphHeader'>{t("blogGraphHeader")}</a>
                <a className='blogGraphSpan'>{t("blogGraphSpan")}</a>
            </div>
        </div>
    );
}