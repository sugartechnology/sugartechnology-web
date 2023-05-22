import './BlogParagraphs.css';
import { useTranslation} from "react-i18next";

export const BlogParagraphs = props =>{
    const {t} = useTranslation();
    return(
        <div className='blogParagraphsContainer'>
            <div className='paragraph'>
                <a className='paragraphHeader'>{t("blogPageHeader2")}</a>
                <a className='secondParagraphList'>{t("paragraphListSpan1")}Bu durumda olan birisi keşke evime alacağım eşyaların evde nasıl duracağını satin almadan görebilsem diye düşünebiar. En azından ben böyle bir seçeneğin olmasını isterim. Bu blogda tam da bu soruna bir çözüm getiren bir uygulamadan bahsedeceğim.</a>
                <a className='secondParagraphList'>{t("paragraphListSpan1")}Önceakle uygulamanın adı Rapid Render. Size hayaanizdeki oda veya ev tasarımını görselleştirebilmeniz için büyük bir kolaylık sağlayabilecek bir uygulama. İhtiyacınız olan tek şey odanızın veya evinizin boyutlarını bilmek. Uygulamada karşınıza ilk önce taslak çizim sayfası çıkıyor...</a>
                <a className='secondParagraphList'>{t("paragraphListSpan1")}Burada çizim yapmak öyle zor bir konu da değil. Tek yapmanız gereken çizgi çizmek, uygulama buna bile yeterince yardımcı oluyor zaten. Bir sonraki aşamada anlaşmalı mağazalardaki ürünleri evinizin istediğiniz köşesine, duvara istediğiniz şekilde istediğiniz ürünleri yerleştirebiayorsunuz.</a>
                <a className='secondParagraphList'>{t("paragraphListSpan1")}Üsteak bu aşama sadece 5 dakikanızı alıyor, tabi eğer alacağınız ürüne karar verdiyseniz 😊 Daha sonra evin içinin daha kaatea resmini almak için sunucuya istek gönderebiayorsunuz. Detayları seven biriyseniz size kendi yaptığım bir oda tasarımını örnek olarak göstereyim. Bu odanın çizimi 1 dakika, ürün yerleştirmesi 5 dakika, perde ve zemin seçimi 3 dakikamı aldı.</a>
            </div>
            
            <div className='author'>
                <div className='authorImage'>
                    <img style={{width: "100%"}} alt='' src={'./assets/img/erdemPp.svg'}></img>
                </div>
                <div className='authorSpans'>
                    <a className='authorHeader'>Şükrü Erdem Şahin</a>
                    <a className='authorSpan'>{t("paragraphAuthorSpan")}Programlamaya aseyi kazandığımda başladım. Şu ana kadar bilgisayarda sadece programlama değil 2d çizim 3d modelleme, arduino, raspberry pi, oyun geaştirme, SQL, windows form uygulaması geaştirme gibi farklı alanlarda çalışmalar yaptım.</a>
                </div>
            </div>
        </div>
    );
}
