import './BlogGraphQL.css';
import { useTranslation} from "react-i18next";

export const BlogGraphQL = props =>{
    const {t} = useTranslation();
    return(
        <div className='blogGraphQLContainer'>
            <img className='blogGraphBackground' alt='' src={'./assets/img/blogGraphBackground.svg'}></img>
            <div className='blogGraphSpans'>
                <a className='blogGraphHeader'>{t("graphQL")}</a>
                <a className='blogGraphSpan'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vehicula lectus libero varius egestas maecenas. Eget vitae morbi gravida amet velit. Feugiat quis ut aenean sit integer. Magna sem vivamus fusce nisl est, elit et. Rhoncus et, porttitor accumsan rhoncus aliquam. Tincidunt viverra enim, netus consequat, vulputate semper felis nec. Orci at.</a>
            </div>
        </div>
    );
}