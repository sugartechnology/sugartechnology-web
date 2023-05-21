import './BlogParagraphs.css';
import { useTranslation} from "react-i18next";

export const BlogParagraphs3 = props =>{
    const {t} = useTranslation();
    return(
        <div className='blogParagraphs3Container'>
            <div className='paragraph'>
                <a className='paragraphHeader'>{t("")}Bu teknolojiyi 1990 yada 2000 lerde bir seminerde denedim...</a>
                <a className='paragraphSpan'>{t("blogParagraphSpan1")}Satış kariyerimin ilk günlerinde bunun bir anı paylaşımı olduğunu düşünürken, tecrübe kazandığım 4-5 yıl sonunda, anısını aktarmaktan ziyade müşterimizin, Artırılmış Gerçekliğin kullanılabilirliği sorgulayıp, teknolojinin kullanımının güncel veriler ile desteklenerek anlatılmasını istedğini farkettim. </a>
            </div>
            <div className='paragraph'>
                <a className='paragraphHeader'>{t("")}Özet olarak müşterimiz şunları sormak istiyordu:</a>
                <ol className='secondParagraphLists'>
                    <li className='secondParagraphList'>{t("paragraphListSpan1")}Bu teknoloji uzun zamandır var, Teknoloji de oyun değiştirici yeni bir gelişme var mı?</li>
                    <li className='secondParagraphList'>{t("paragraphListSpan1")}Uzun zamandır olmasına rağmen insanlar kullanmıyor ... Neden yatırım yapmalıyım ?</li>
                </ol>
                <img className='paragraphImage' alt='' src={'./assets/img/paragraphImage1.png'}></img>
            </div>
            <div className='paragraph'>
                <a className='paragraphSpan'>{t("blogParagraphSpan2")}Bu serinin sonunda marka yetkililerinin AR ve dijitalleşme teknolojilerine geçiş için roadmaplerinin oluşmasına yardımcı olabilmeyi umuyorum. İlk olarak üzerine en çok yazı yazılan konu ile başlayacak AR ve Vr farklarına kısaca değineceğim.</a>
            </div>
            <div className='paragraph'>
                <a className='paragraphHeader'>{t("")}AR Nedir ? VR ile AR arasındaki farklar nedir ?</a>
                <a className='paragraphSpan'>{t("")}İngilizce açılımı Augmented Reality olan AR teknolojisi, gerçek hayattaki bir alanı yada objeyi tanır ve tanıdığı gerçek alanlara dijital içerik koymamızı sağlar. Tespit edilen içerik bazen bir insan vucüdu, insan saçı, bazen sadece zemin yada gökyüzünün kendisi olabilir.</a>
                <img className='paragraphImage'alt='' src={'assets/img/paragraphImage5.jpeg'}></img>
            </div>
            <div className='paragraph'>
                <a className='paragraphSpan'>{t("")}AR teknolojisinin çalışması yapay zeka ve sensör desteği ile mümkün olur VR ile kaşılaştırıldığında ihtiyaç duyduğu Yapay Zeka ve sensör isterleri çok olsada, Akıllı Telefonlarımız hali hazırda bunları sağlayan cihazlar olduğu için teknolojinin yaygınlaşmasında AR isterlerine bağlı engel bulunmamaktadır.</a>
                <a className='paragraphSpan'>{t("")}VR ise Virtual Reality- Sanal Gerçeklik anlamına gelip bir gözlük yada benzeri teknoloji tarafından gerçek hayattan izole edilmemiz ve devamında sanal bir ortamda dijital içerikler ile etkileşime girdiğimiz teknolojidir. AR ile kritik farklar izole olmak, akıllı gözlük gibi günlük rutin kullanımda hayatımızda olmayan bir cihaz kullanma zorunluluğudur. Telefonlarımızı cardboard ile VR gözlüğe çevirebiliyor ellerimizi de dongle olarak konumlandırabilsekte, VR cihaz yatırımı daha mantıklı bir opsiyon olarak tercih edilmektedir.</a>
            </div>
            <div className='author'>
                <div className='authorImage' style={{width: "20%"}}>
                    <img style={{width: "100%"}} alt='' src={'./assets/img/SugarTeamLeader1.svg'}></img>
                </div>
                <div className='authorSpans'>
                    <a className='authorHeader'>Abdurrahman Türkeri</a>
                    <a className='authorSpan'>{t("paragraphAuthorSpan")}AR, VR, AI teknolojilerine dayalı çözümler ile gerçek hayat problemlerinin çözülmesini sağlayan ürünler geliştiriyor ve bu ürünleri müşterilerimizi dahil ederek geliştiriyoruz.</a>
                </div>
            </div>
        </div>
    );
}
