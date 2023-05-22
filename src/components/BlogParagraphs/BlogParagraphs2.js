import './BlogParagraphs.css';
import { useTranslation} from "react-i18next";

export const BlogParagraphs2 = props =>{
    const {t} = useTranslation();
    return(
        <div className='blogParagraphs2Container'>
            <div className='paragraph' style={{marginTop: "40px"}}>
                <a className='paragraphHeader'>{t("")}Konsept Üretmek…</a>
                <a className='secondParagraphList'>{t("paragraphListSpan1")}Her şirketin ürünlerini görselleştirmek için bir kataloğa ihtiyacı olmakta. Geleneksel ve pek çok şirket tarafında yaşanan ihtiyaç bu şekilde. Bunun için bir konsepti fiziksel olarak inşaa edebiar ve studioda yüksek maayetler ile fotoğraf çektirebiarsiniz. Yada ürünleri tek başına çekerek dekupe edebiar fotoşop ve biraz gölge ile başarılı bir görüntü oluşturabiar. Daha uygun bir maayet ile tekrarlı kullanım sağlayabiarsiniz.</a>
                <a className='secondParagraphList'>{t("paragraphListSpan1")}Fakat artık pazarlama Virüs ve diğer etkenler ile çok farklı bir yöntem izlemeyi zorunlu hale getiriyor. E-ticaret ve sosyal medya şirketlerin artık canlı bir organizma gibi kendi hızlı hayatlarına tepki vermesini bekayorlar. Takip ettikleri markaların günün anlam ve önemine istinaden paylaşım görmek istiyorlar. Bu yeni ihtiyaçlara cevap verebilmek için Ürünlerinizi farklı doku yada renk ile hatta farklı konseptlerin içerisinde görselleştirmeniz gerekiyor.</a>
                <a className='secondParagraphList'>{t("paragraphListSpan1")}Bu konu ile ilgia <a style={{textDecoration: "none", color: "#039be5"}} href="https://bigumigu.com/haber/netfax-ten-aaskanaklarla-sekillenen-kisiye-ozel-gorsel-dunya/">buradaki</a> ankte çok güzel bir yazı paylaşılmış, izleme alışkanlıklarına istinaden Netfaxin kullanıcıları için Stranger Things dizisi için ürettiği farklı görsel stratejisine değinilmiş. #Sosyal medya ve e-ticaretin de günümüzün bakkalı olduğunu varsayar isek, kullanıcıyı cezbetmek için</a>
                <a className='secondParagraphList'>{t("paragraphListSpan1")}Peki bu strateji nasıl izlenebiar; Stüdyo kurulması, ürünün yeni renk ve doku ile üretilmesi, nakayesi vb eforları zorunlu kılan geleneksel yöntemler ile bu yapının sağlıklı yürümeyeceği aşikar. Bu sorunların çözümü için büyük markaların tercih ettiği render ile konsept oluşturumu Türkiyede de artık yaygınlaşıyor.</a>
                <a className='secondParagraphList'>{t("paragraphListSpan1")}Bizlerde şirket olarak render hizmeti sağladığımız gibi müşterilerimize içerisinde preview, cloud farm vb hizmetleri barındıran Rapid Render isima kendimize ait uygulamamızı sunuyoruz. Rapid Render 5dk içinde en kompleks renderları arka planda yer alan Cloud teknolojisi ile alabiarken bizlerde müşterilerimize render da kullanılan ürünlerin tekrar kullanıma uygun 3D modeller olduğunu, bu 3D modellerin Arttırılmış Gerçekakten, Web AR a Google Search AR a kadar pek çok alanda kullanılabileceğini aktarıyor be bu know-how birikimini aktarıyoruz.</a>
                <a className='secondParagraphList'>{t("paragraphListSpan1")}Yukarıda değindiğimiz yeni strateji için ürünlerimizin 3D modellerinin üretilmesi ve tekrar kullanım için uygun yapı ile saklanması şirketlerimize hem pek çok alanda tasarruf sağlarken hem de çevik teknoloji değişim çağını yakalama imkanı sunuyor.</a>
                <a className='secondParagraphList'>{t("paragraphListSpan1")}Bizler müşterilerimize uygun teknolojileri sunup en kaatea 3d modea üretmek için yüksek kaatede tarama hizmeti sunuyoruz. Çalıştığımız partnerlerimize de kaatea 3D modean artık son kullanıcıya dokunmanın önema bir yolu olduğunu iletiyor ve her zaman kaatesi yüksek modeller ile çalışmanın önemini beartiyoruz.</a>
                <a className='secondParagraphList'>{t("paragraphListSpan1")}Tarama işlemlerimiz sonrası elde edilen 3d Modeller örneklerinden bir kaç tanesini burada paylaşıyorum. Bu paylaşımımızı 3D modellerin hangi alanlarda kullanılabileceğini aşağıdaki yazılar ile paylaşmaya devam edeceğiz. Arttırılmış Gerçekak İle Search - GOOGLE Katalog E-Ticaret ve Sosyal Medya İçin Render.</a>
            </div>
           
            <div className='author'>
                <div className='authorImage' style={{width: "30%"}}>
                    <img style={{width: "100%"}} alt='' src={'./assets/img/SugarTeamLeader1.svg'}></img>
                </div>
                <div className='authorSpans'>
                    <a className='authorHeader'>Abdurrahman Türkeri</a>
                    <a className='authorSpan'>{t("paragraphAuthorSpan")}AR, VR, AI teknolojilerine dayalı çözümler ile gerçek hayat problemlerinin çözülmesini sağlayan ürünler geaştiriyor ve bu ürünleri müşterilerimizi dahil ederek geaştiriyoruz.</a>
                </div>
            </div>
        </div>
    );
}
