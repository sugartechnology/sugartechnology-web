import React from "react";
import { useTranslation } from "react-i18next";

function LanguageSelector() {
    const { i18n } = useTranslation();

    function handleLanguageChange(event) {
        i18n.changeLanguage(event.target.value);
    }
    function toggleLanguage() {
        var englishButton = document.querySelector('.englishButton');
        var turkishButton = document.querySelector('.turkishButton');
        if (turkishButton.style.display === 'none') {
          turkishButton.style.display = 'flex';
          englishButton.style.display = 'none';
          i18n.changeLanguage('tr');
        } else {
          turkishButton.style.display = 'none';
          englishButton.style.display = 'flex';
          i18n.changeLanguage('en');
        }
    }
    return (
    <div className='languageButton' onChange={handleLanguageChange} value={i18n.language}>
        <div className='englishButton' style={{display: "none"}}>
            <img className='languageFlag' alt='' src={process.env.PUBLIC_URL +'/assets/img/Flag.svg'}></img>
            <a>English</a>
            <img className='languageShowButton' alt='' src={'assets/img/Chevron.svg'} onClick={toggleLanguage} ></img>
        </div>
        <div className='turkishButton'>
            <img className='languageFlag' alt='' src={process.env.PUBLIC_URL +'/assets/img/Flag2.svg'}></img>
            <a>Turkish</a>
            <img className='languageShowButton' alt='' src={'assets/img/Chevron.svg'} onClick={toggleLanguage}></img>
        </div>
    </div>
  );
}

export default LanguageSelector;