import './BlogGraphQL.css';
import { useTranslation } from "react-i18next";

export const BlogGraphQL4 = props => {
    const { t } = useTranslation();
    return (
        <div className='blogGraphQLContainer' style={{ backgroundPosition: "center center", backgroundImage: 'URL("./assets/img/blogGraphBackground2.webp")' }}>
            <div className='blogGraphSpans'>
                <a className='blogGraphHeader'>{t("blogGraph4Header")}</a>
            </div>
        </div>
    );
}