import './CustomerComments.css'

export const CustomerComments = props =>{
    return(
        <div className='customerCommentsContainer'>
            <div className='firstCommnetBackground'>
                <img alt='' src={'assets/img/CustomerCommentBackground.svg'}></img>
                <div className='firstCommentPage'>
                    <img className='commentsLeftButton' alt='' src={'assets/img/commentsLeftButton.svg'}></img>
                    <div className='firstComment'>
                        <div className='commentSpans'>
                            <a className='firstCommentSpan'>Trusted by millions of company.</a>
                            <a className='secondCommentSpan'>“</a>
                            <a className='thirdCommentSpan'>Lorem ipsum dolor sit amet consectetur. A id rhoncus orci eget donec rhoncus. Vitae vitae quisque scelerisque velit in blandit dictum netus sed. Amet suspendisse sit morbi sagittis sed et. Odio etiam tristique in diam. Feugiat purus erat diam sit pharetra duis. Habitasse aenean ligula tincidunt amet ut ac lorem.</a>
                        </div>
                        <div className='commentCustomer'>
                            <img className='customerPhoto' alt='' src={'assets/img/TepeHomePhoto.svg'}></img>
                            <h1>Lorem ipsum</h1>
                            <a>Tepe Home</a>
                            <img alt='' src={'assets/img/Star.svg'}></img>
                        </div>
                    </div>
                    <img className='commentsRightButton' alt='' src={'assets/img/commentsRightButton.svg'}></img>
                </div>
            </div>
           <img className='commentPageButtons' alt='' src={'assets/img/commentPageButtons.svg'}></img>
        </div>
    );
}