import './CustomerComments.css';
import { useTranslation } from "react-i18next";
import { useState } from 'react';

export const CustomerComments = props => {
    const { t } = useTranslation();
    const [index, setIndex] = useState(0);
    const array = [{
        trustedByMillionsOfCompany: "commentHeader",
        commentSpan: "commentSpan",
        commentHeader: "Simurg Sanat Evi",
        commentAuthor: "Tuğba Karayel Özcan",
        customerPhoto: "https://sugar.mncdn.com/sugartechwebsite/assets/img/sugar/tugba_karayel.jpeg"
    },
    {
        trustedByMillionsOfCompany: "commentHeader3",
        commentSpan: "commentSpan3",
        commentHeader: "Tepe Home",
        commentAuthor: "Yesim Korkmaz",
        customerPhoto : "https://sugar.mncdn.com/sugartechwebsite/assets/img/sugar/yesim_korkmaz.jpeg"
    },
    {
        trustedByMillionsOfCompany: "commentHeader3",
        commentSpan: "commentSpan2",
        commentHeader: "Eko Halı",
        commentAuthor: "Zeynep Yücel",
        customerPhoto : "assets/img/cereen_evcimen.jpeg"
    },
    {
        trustedByMillionsOfCompany: "commentHeader4",
        commentSpan: "commentSpan4",
        commentHeader: "KYS",
        commentAuthor: "Serçil Tombak",
        customerPhoto : "assets/img/kys.JPG"
    }
];

    const next = () => {
        setIndex((index + 1) % array.length);
    }

    const prev = () => {
        setIndex((index - 1) < 0 ? index - 1 + array.length : index - 1);
    }

    return (
        <div className='customerCommentsContainer'>
            <img className='commentsLeftButton' alt='' src={'assets/img/commentsLeftButton.svg'} onClick={() => { prev(); }}></img>
            <div className='firstCommnetBackground'>
                <img className='redBackgroundCircle1' alt='' src={'./assets/img/circle1.svg'}></img>
                <img className='redBackgroundCircle2' alt='' src={'./assets/img/circle2.svg'}></img>
                <img className='redBackgroundCircle3' alt='' src={'./assets/img/circle3.svg'}></img>
                <div className='firstComment' id='firstComment'>
                    <div className='commentSpans'>
                        <a className='firstCommentSpan'>{t(array[index].trustedByMillionsOfCompany)}</a>
                        <a className='secondCommentSpan'>“</a>
                        <a className='thirdCommentSpan'>{t(array[index].commentSpan)}</a>
                    </div>
                    <div className='commentCustomer'>
                        <img className='customerPhoto' alt=''src={t(array[index].customerPhoto)}></img>
                        <h1>{t(array[index].commentAuthor)}</h1>
                        <a>{array[index].commentHeader}</a>
                    </div>
                </div>

            </div>

            <img className='commentsRightButton' alt='' src={'assets/img/commentsRightButton.svg'} onClick={() => { next(); }}></img>
        </div >
    );
}