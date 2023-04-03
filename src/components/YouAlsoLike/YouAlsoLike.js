import './YouAlsoLike.css';
import { useTranslation} from "react-i18next";

export const YouAlsoLike = props =>{
    const {t} = useTranslation();
    return(
        <div className='youAlsoLikeContainer'>
            <a className='youAlsoLikeSpan'>{t("youAlsoLike")}</a>
        </div>
    );
}