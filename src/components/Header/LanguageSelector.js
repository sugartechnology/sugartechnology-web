import React from "react";
import { useTranslation } from "react-i18next";

function LanguageSelector() {
    const { i18n } = useTranslation();

    function toggleLanguage() {
      var englishButton = document.querySelector('.englishButton');
      var turkishButton = document.querySelector('.turkishButton');
      var popup = document.getElementById("languagePopup");
      if (turkishButton.style.display === 'none') {
        turkishButton.style.display = 'flex';
        englishButton.style.display = 'none';
        popup.style.display = "none";
        i18n.changeLanguage('tr');
      } else {
        turkishButton.style.display = 'none';
        englishButton.style.display = 'flex';
        popup.style.display = "none";
        i18n.changeLanguage('en');
      }
    }
    function openLanguagePopup() {
      var popup = document.getElementById("languagePopup");
      if(popup.style.display === "none"){
        popup.style.display = "flex";
      }
      else {
        popup.style.display = "none";
      }
    }
    return (
      <div>
          <div className='languageButton'>
            <div className='englishButton' style={{display: "none"}}>
              <img className='languageFlag' alt='' src={process.env.PUBLIC_URL +'/assets/img/Flag.svg'}></img>
              <a className="languageSpan">English</a>
            </div>
            <div className='turkishButton'>
              <img className='languageFlag' alt='' src={process.env.PUBLIC_URL +'/assets/img/Flag2.svg'}></img>
              <a className="languageSpan">Turkish</a>
            </div>
            <img className='languageShowButton' alt='' src={'assets/img/Chevron.svg'} onClick={openLanguagePopup}></img>
          </div>
          
          <div className="languagePopup" id="languagePopup" style={{display: "none"}}>
            <div className='englishButton' onClick={toggleLanguage}>
              <img className='languageFlag' alt='' src={process.env.PUBLIC_URL +'/assets/img/Flag.svg'}></img>
              <a className="languageSpan">English</a>
            </div>
            <img className="languageLine" alt="" src={"./assets/img/littleLine.svg"} style={{width: "100px", position: "relative", right: "40px"}}></img>
            <div className='turkishButton' onClick={toggleLanguage}>
              <img className='languageFlag' alt='' src={process.env.PUBLIC_URL +'/assets/img/Flag2.svg'}></img>
              <a className="languageSpan">Turkish</a>
            </div>
          </div>
      </div>
  );
}

export default LanguageSelector;