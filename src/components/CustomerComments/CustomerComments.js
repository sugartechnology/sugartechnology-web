import './CustomerComments.css';
import { useTranslation } from "react-i18next";
import { useState } from 'react';

export const CustomerComments = props => {
    const { t } = useTranslation();
    const [index, setIndex] = useState(0);
    const array = [{
        trustedByMillionsOfCompany: "trustedByMillionsOfCompany",
        commentSpan: "commentSpan",
        commentHeader: "commentHeader",
        commentAuthor: "Yusuf Fatih Erol"
    },

    {
        trustedByMillionsOfCompany: "trustedByMillionsOfCompany1",
        commentSpan: "commentSpan1",
        commentHeader: "commentHeader1",
        commentAuthor: "Abdurrahman  Türkeri"
    },
    {
        trustedByMillionsOfCompany: "trustedByMillionsOfCompany3",
        commentSpan: "commentSpan3",
        commentHeader: "commentHeader4",
        commentAuthor: "Ali  Yalcin "
    }];

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
                <img className='redBackgroundMobile' alt='' src={'./assets/img/customerCommentMobileBackground.svg'} style={{ display: "none" }}></img>
                <img className='redBackground' alt='' src={'assets/img/customerCommentRedBackground.svg'}></img>
                <div className='firstComment' id='firstComment'>
                    <div className='commentSpans'>
                        <a className='firstCommentSpan'>{t(array[index].trustedByMillionsOfCompany)}</a>
                        <a className='secondCommentSpan'>“</a>
                        <a className='thirdCommentSpan'>{t(array[index].commentSpan)}</a>
                    </div>
                    <div className='commentCustomer'>
                        <img className='customerPhoto' alt='' src={'assets/img/TepeHomePhoto.svg'}></img>
                        <h1>{t(array[index].commentHeader)}</h1>
                        <a>{array[index].commentAuthor}</a>
                        <img alt='' src={'assets/img/Star.svg'}></img>
                    </div>
                </div>

                <div className='customerCommentsPageButtons'>
                    <img onClick={() => { setIndex(0); }} className='solution1Button' id='comment1Button'></img>
                    <img onClick={() => { setIndex(1); }} className='solution2Button' id='comment2Button'></img>
                    <img onClick={() => { setIndex(2); }} className='solution3Button' id='comment3Button'></img>
                </div>
            </div>

            <img className='commentsRightButton' alt='' src={'assets/img/commentsRightButton.svg'} onClick={() => { next(); }}></img>
        </div >
    );
}