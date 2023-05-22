import './BlogGraphQL.css';
import { useTranslation} from "react-i18next";

export const BlogGraphQL3 = props =>{
    const {t} = useTranslation();
    return(
        <div className='blogGraphQLContainer'>
            <img className='blogGraphBackground' alt='' src={'./assets/img/blogGraphBackground2.svg'}></img>
            <div className='blogGraphSpans'>
                <a className='blogGraphHeader'>{t("")}AR ve 3D teknolojileri için Neden En doğru zamandayız?</a>
                <a className='blogGraphSpan'>{t("blogGraphSpan")}Müşterilerimizle Artırılmış Gerçeklik çözümümüz hakkında konuştuğumuzda bazen aşağıdaki gibi bir yorum alıyorum.</a>
            </div>
        </div>
    );
}