import './CustomerComments.css';
import { useTranslation } from "react-i18next";
import React, { useState } from 'react';

export const CustomerComments = (props) => {
    const { t } = useTranslation();
    const [index, setIndex] = useState(0);
    const array = [
      {
        trustedByMillionsOfCompany: 'commentHeader',
        commentSpan: 'commentSpan',
        commentHeader: 'Genel Müdür Yardımcısı',
        commentAuthor: 'Tuğba Karayel Özcan',
        customerPhoto:'https://sugar.mncdn.com/sugartechwebsite/assets/img/sugar/tugba_karayel.jpeg',
        companyLogo: 'assets/img/simurgLogo.svg'
      },
      {
        trustedByMillionsOfCompany: 'commentHeader2',
        commentSpan: 'commentSpan2',
        commentHeader: 'Şatış Direktörü',
        commentAuthor: 'Yeşim Korkmaz',
        customerPhoto:'https://sugar.mncdn.com/sugartechwebsite/assets/img/sugar/yesim_korkmaz.jpeg',
        companyLogo: 'assets/img/tepe-home-min.svg'
      },
      {
        trustedByMillionsOfCompany: 'commentHeader3',
        commentSpan: 'commentSpan3',
        commentHeader: 'İş Geliştirme ve Pazarlama Yöneticisi',
        commentAuthor: 'Zeynep Yücel',
        customerPhoto: 'assets/img/zeynepYucel.jpeg',
        companyLogo: 'assets/img/ekohalilogo.svg'
      },
      {
        trustedByMillionsOfCompany: 'commentHeader4',
        commentSpan: 'commentSpan4',
        commentHeader: 'İç Mimar ve Ürün Tasarımcısı',
        commentAuthor: 'Serçil Tombak',
        customerPhoto: 'assets/img/kys.webp',
        companyLogo: 'assets/img/kys_design.svg'
      },
      {
        trustedByMillionsOfCompany: 'commentHeader5',
        commentSpan: 'commentSpan5',
        commentHeader: 'Tasarımcı ve Şirket Yöneticisi',
        commentAuthor: 'Göksal Günaydın',
        customerPhoto: 'assets/img/kys2.jpeg',
        companyLogo: 'assets/img/kys_design.svg'
      },
      {
        trustedByMillionsOfCompany: 'commentHeader6',
        commentSpan: 'commentSpan6',
        commentHeader: 'Pazarlama Müdürü',
        commentAuthor: 'Ceren Evcimen',
        customerPhoto: 'assets/img/cerenEvcimen.jpeg',
        companyLogo: 'assets/img/tepe-home-min.svg'
      },
    ];

    const next = () => {
        setIndex((index + 1) % array.length);
    };
  
    const prev = () => {
        setIndex(index - 1 < 0 ? index - 1 + array.length : index - 1);
    };
  
    return (
      <div className='customerCommentsContainer'>
        <img className='commentsLeftButton' alt='' src={'assets/img/CommentsLeftButton.svg'} onClick={() => {prev();}}></img>
          <img className='redBackgroundCircle1' alt='' src={'./assets/img/circle1.svg'}></img>
          <img className='redBackgroundCircle2' alt='' src={'./assets/img/circle2.svg'}></img>
          <img className='redBackgroundCircle3' alt='' src={'./assets/img/circle3.svg'}></img>
          <div className="commentContainer">
            <div className='commentSpans'>
              <a className='firstCommentSpan'>{t(array[index].trustedByMillionsOfCompany)}</a>
              <a className='secondCommentSpan'>“</a>
              <a className='thirdCommentSpan'>{t(array[index].commentSpan)}</a>
            </div>
            <div className='commentCustomer'>
              <img className='customerPhoto' alt='' src={t(array[index].customerPhoto)}></img>
              <h1>{t(array[index].commentAuthor)}</h1>
              <a>{array[index].commentHeader}</a>
              <img className='companyLogo' alt='' src={array[index].companyLogo}></img>
            </div>
          </div>
        <img className='commentsRightButton' alt='' src={'assets/img/CommentsRightButton.svg'} onClick={() => {next();}}></img>
      </div>
    );
  };