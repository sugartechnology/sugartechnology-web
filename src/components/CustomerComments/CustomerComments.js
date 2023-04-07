import './CustomerComments.css';
import { useTranslation} from "react-i18next";

export const CustomerComments = props =>{
    const {t} = useTranslation();

    function showComment1(){
        var comment1 = document.getElementById("firstComment");
        var btn1 = document.getElementById("comment1Button");
        var comment2 = document.getElementById("secondCustomerComment");
        var btn2 = document.getElementById("comment2Button");
        var comment3 = document.getElementById("thirdCustomerComment");
        var btn3 = document.getElementById("comment3Button");
        if(comment1.style.display === "none"){
            comment1.style.display = "flex";
            btn1.style.background = "#ED401A";
            comment2.style.display = "none";
            btn2.style.background = "#CCCCCC";
            comment3.style.display = "none";
            btn3.style.background = "#CCCCCC";
        }
        else{
            comment1.style.display = "none"
        }
    }
    function showComment2(){
        var comment1 = document.getElementById("firstComment");
        var btn1 = document.getElementById("comment1Button");
        var comment2 = document.getElementById("secondCustomerComment");
        var btn2 = document.getElementById("comment2Button");
        var comment3 = document.getElementById("thirdCustomerComment");
        var btn3 = document.getElementById("comment3Button");
        if(comment2.style.display === "none"){
            comment2.style.display = "flex";
            btn2.style.background = "#ED401A";
            comment1.style.display = "none";
            btn1.style.background = "#CCCCCC";
            comment3.style.display = "none";
            btn3.style.background = "#CCCCCC";
        }
        else{
            comment2.style.display = "none"
        }
    }
    function showComment3(){
        var comment1 = document.getElementById("firstComment");
        var btn1 = document.getElementById("comment1Button");
        var comment2 = document.getElementById("secondCustomerComment");
        var btn2 = document.getElementById("comment2Button");
        var comment3 = document.getElementById("thirdCustomerComment");
        var btn3 = document.getElementById("comment3Button");
        if(comment3.style.display === "none"){
            comment3.style.display = "flex";
            btn3.style.background = "#ED401A";
            comment2.style.display = "none";
            btn2.style.background = "#CCCCCC";
            comment1.style.display = "none";
            btn1.style.background = "#CCCCCC";
        }
        else{
            comment3.style.display = "none"
        }
    }
    
    return(
        <div className='customerCommentsContainer'>
            <img className='commentsLeftButton' alt='' src={'assets/img/commentsLeftButton.svg'}></img>
            <div className='firstCommnetBackground'>
                <img className='redBackgroundMobile' alt='' src={'./assets/img/customerCommentMobileBackground.svg'} style={{display: "none"}}></img>
                <img className='redBackground' alt='' src={'assets/img/customerCommentRedBackground.svg'}></img>
                    <div className='firstComment' id='firstComment'>
                        <div className='commentSpans'>
                            <a className='firstCommentSpan'>{t("trustedByMillionsOfCompany")}</a>
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
                    <div className='secondCustomerComment' id='secondCustomerComment' style={{display: "none"}}>
                        <div className='commentSpans'>
                            <a className='firstCommentSpan'>{t("trustedByMillionsOfCompany")}</a>
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
                    <div className='thirdCustomerComment' id='thirdCustomerComment' style={{display: "none"}}>
                        <div className='commentSpans'>
                            <a className='firstCommentSpan'>{t("trustedByMillionsOfCompany")}</a>
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
                <div className='customerCommentsPageButtons'>
                    <img onClick={showComment1} className='solution1Button' id='comment1Button'></img>
                    <img onClick={showComment2} className='solution2Button' id='comment2Button'></img>
                    <img onClick={showComment3} className='solution3Button' id='comment3Button'></img>
                </div>
            </div>

            {/* <div className='secondComment'>
                <div className='commentHeader'>
                    <a>People love Sugar</a>
                </div>
                <div className='comments'>
                    <div className='customerComment'>
                        <div className='commentSymbol'>
                            <img alt='' src={'assets/img/commentSymbol.svg'}></img>
                        </div>
                        <div className='commentSpan'>
                            <a>Lorem ipsum dolor sit amet consectetur. Potenti turpis aenean tempus aliquam metus at. Ultricies vel adipiscing volutpat erat. Elit diam vulputate id ullamcorper in tellus vulputate donec. Faucibus quisque euismod sodales nunc. Velit mattis accumsan aenean dignissim fames nisl sed pulvinar. Nullam ut tortor in ac semper enim cursus quisque. Amet felis at consectetur faucibus. At nisl dictum in eu quisque eget. Integer lacinia non mattis diam ornare. Tempor leo erat risus faucibus nulla pharetra egestas ultrices.
                            </a>
                        </div>
                        <div className='commentOwner'>
                            <img alt='' src={'assets/img/TepeHomeLittlePhoto.svg'}></img>
                            <a className='commentOwnerFirstSpan'>Lorem ipsum</a>
                            <a className='commentOwnerSecondSpan'>Tepe home</a>
                            <img alt='' src={'assets/img/littleStar.svg'}></img>
                        </div>
                    </div>
                    <div className='customerComment'>
                        <div className='commentSymbol'>
                            <img alt='' src={'assets/img/commentSymbol.svg'}></img>
                        </div>
                        <div className='commentSpan'>
                            <a>Lorem ipsum dolor sit amet consectetur. Potenti turpis aenean tempus aliquam metus at. Ultricies vel adipiscing volutpat erat. Elit diam vulputate id ullamcorper in tellus vulputate donec. Faucibus quisque euismod sodales nunc. Velit mattis accumsan aenean dignissim fames nisl sed pulvinar. Nullam ut tortor in ac semper enim cursus quisque. Amet felis at consectetur faucibus. At nisl dictum in eu quisque eget. Integer lacinia non mattis diam ornare. Tempor leo erat risus faucibus nulla pharetra egestas ultrices.
                            </a>
                        </div>
                        <div className='commentOwner'>
                            <img alt='' src={'assets/img/TepeHomeLittlePhoto.svg'}></img>
                            <a className='commentOwnerFirstSpan'>Lorem ipsum</a>
                            <a className='commentOwnerSecondSpan'>Tepe home</a>
                            <img alt='' src={'assets/img/littleStar.svg'}></img>
                        </div>
                    </div>
                    <div className='customerComment'>
                        <div className='commentSymbol'>
                            <img alt='' src={'assets/img/commentSymbol.svg'}></img>
                        </div>
                        <div className='commentSpan'>
                            <a>Lorem ipsum dolor sit amet consectetur. Potenti turpis aenean tempus aliquam metus at. Ultricies vel adipiscing volutpat erat. Elit diam vulputate id ullamcorper in tellus vulputate donec. Faucibus quisque euismod sodales nunc. Velit mattis accumsan aenean dignissim fames nisl sed pulvinar. Nullam ut tortor in ac semper enim cursus quisque. Amet felis at consectetur faucibus. At nisl dictum in eu quisque eget. Integer lacinia non mattis diam ornare. Tempor leo erat risus faucibus nulla pharetra egestas ultrices.
                            </a>
                        </div>
                        <div className='commentOwner'>
                            <img alt='' src={'assets/img/TepeHomeLittlePhoto.svg'}></img>
                            <a className='commentOwnerFirstSpan'>Lorem ipsum</a>
                            <a className='commentOwnerSecondSpan'>Tepe home</a>
                            <img alt='' src={'assets/img/littleStar.svg'}></img>
                        </div>
                    </div>
                </div>
            </div>
            <div className='thirdComment'>
            <div className='commentHeader'>
                    <a>People love Sugar</a>
                </div>
                <div className='comments'>
                    <div className='customerComment'>
                        <div className='commentSymbol'>
                            <img alt='' src={'assets/img/commentSymbol.svg'}></img>
                        </div>
                        <div className='commentSpan'>
                            <a>Lorem ipsum dolor sit amet consectetur. Potenti turpis aenean tempus aliquam metus at. Ultricies vel adipiscing volutpat erat. Elit diam vulputate id ullamcorper in tellus vulputate donec. Faucibus quisque euismod sodales nunc. Velit mattis accumsan aenean dignissim fames nisl sed pulvinar. Nullam ut tortor in ac semper enim cursus quisque. Amet felis at consectetur faucibus. At nisl dictum in eu quisque eget. Integer lacinia non mattis diam ornare. Tempor leo erat risus faucibus nulla pharetra egestas ultrices.
                            </a>
                        </div>
                        <div className='commentOwner'>
                            <img alt='' src={'assets/img/TepeHomeLittlePhoto.svg'}></img>
                            <a className='commentOwnerFirstSpan'>Lorem ipsum</a>
                            <a className='commentOwnerSecondSpan'>Tepe home</a>
                            <img alt='' src={'assets/img/littleStar.svg'}></img>
                        </div>
                    </div>
                    <div className='customerComment'>
                        <div className='commentSymbol'>
                            <img alt='' src={'assets/img/commentSymbol.svg'}></img>
                        </div>
                        <div className='commentSpan'>
                            <a>Lorem ipsum dolor sit amet consectetur. Potenti turpis aenean tempus aliquam metus at. Ultricies vel adipiscing volutpat erat. Elit diam vulputate id ullamcorper in tellus vulputate donec. Faucibus quisque euismod sodales nunc. Velit mattis accumsan aenean dignissim fames nisl sed pulvinar. Nullam ut tortor in ac semper enim cursus quisque. Amet felis at consectetur faucibus. At nisl dictum in eu quisque eget. Integer lacinia non mattis diam ornare. Tempor leo erat risus faucibus nulla pharetra egestas ultrices.
                            </a>
                        </div>
                        <div className='commentOwner'>
                            <img alt='' src={'assets/img/TepeHomeLittlePhoto.svg'}></img>
                            <a className='commentOwnerFirstSpan'>Lorem ipsum</a>
                            <a className='commentOwnerSecondSpan'>Tepe home</a>
                            <img alt='' src={'assets/img/littleStar.svg'}></img>
                        </div>
                    </div>
                    <div className='customerComment'>
                        <div className='commentSymbol'>
                            <img alt='' src={'assets/img/commentSymbol.svg'}></img>
                        </div>
                        <div className='commentSpan'>
                            <a>Lorem ipsum dolor sit amet consectetur. Potenti turpis aenean tempus aliquam metus at. Ultricies vel adipiscing volutpat erat. Elit diam vulputate id ullamcorper in tellus vulputate donec. Faucibus quisque euismod sodales nunc. Velit mattis accumsan aenean dignissim fames nisl sed pulvinar. Nullam ut tortor in ac semper enim cursus quisque. Amet felis at consectetur faucibus. At nisl dictum in eu quisque eget. Integer lacinia non mattis diam ornare. Tempor leo erat risus faucibus nulla pharetra egestas ultrices.
                            </a>
                        </div>
                        <div className='commentOwner'>
                            <img alt='' src={'assets/img/TepeHomeLittlePhoto.svg'}></img>
                            <a className='commentOwnerFirstSpan'>Lorem ipsum</a>
                            <a className='commentOwnerSecondSpan'>Tepe home</a>
                            <img alt='' src={'assets/img/littleStar.svg'}></img>
                        </div>
                    </div>
                </div>
            </div>  */}
            
           <img className='commentsRightButton' alt='' src={'assets/img/commentsRightButton.svg'}></img>
        </div>
    );
}