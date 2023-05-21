import './BlogGraphQL.css';
import { useTranslation} from "react-i18next";

export const BlogGraphQL = props =>{
    const {t} = useTranslation();
    return(
        <div className='blogGraphQLContainer'>
            <img className='blogGraphBackground' alt='' src={'./assets/img/blogGraphBackground.svg'}></img>
            <div className='blogGraphSpans'>
                <a className='blogGraphHeader'>{t("")}Mobilya seçimi için kolay ve hızlı bir yol</a>
                <a className='blogGraphSpan'>{t("blogGraphSpan")}Karar vermek dünyanın en zor konularından birisi. Bunun nedeni verdiğimiz kararların sonuçlarının ne olacağı her zaman belli değildir ve bu belirsizlik bir karar alma sürecini gerçekten zorlaştırır. Örneğin yeni bir eve alınacak mobilya seçimlerinde alınacak mobilyaların evdeki diğer şeylerle uyumlu olması gerekiyor. Bunlara örnek olarak; perde, halı, tablo, aydınlatma diyebiliriz.</a>
            </div>
        </div>
    );
}