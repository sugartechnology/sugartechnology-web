import React from "react";
import { useTranslation } from "react-i18next";

function LanguageSelector(){
    const { i18n } = useTranslation();
    function toggleEnglish(){
      var englishButton = document.querySelector('.englishButton');
      var turkishButton = document.querySelector('.turkishButton');
      var frenchButton = document.querySelector(".frenchButton");
      var germanButton = document.querySelector(".germanButton");
      var italianButton = document.querySelector(".italianButton");
      var arabicButton = document.querySelector(".arabicButton");
      var popup = document.getElementById("languagePopup");
      if(englishButton.style.display === "none"){
        englishButton.style.display = "flex";
        turkishButton.style.display = "none";
        frenchButton.style.display = "none";
        germanButton.style.display = "none";
        italianButton.style.display = "none";
        arabicButton.style.display = "none";
        popup.style.display = "none";
        i18n.changeLanguage('en');
      }
      else{
        englishButton.style.display = "none";
      }
    }
    function toggleTurkish(){
      var englishButton = document.querySelector('.englishButton');
      var turkishButton = document.querySelector('.turkishButton');
      var frenchButton = document.querySelector(".frenchButton");
      var germanButton = document.querySelector(".germanButton");
      var italianButton = document.querySelector(".italianButton");
      var arabicButton = document.querySelector(".arabicButton");
      var popup = document.getElementById("languagePopup");
      if(turkishButton.style.display === "none"){
        turkishButton.style.display = "flex";
        englishButton.style.display = "none";
        frenchButton.style.display = "none";
        germanButton.style.display = "none";
        italianButton.style.display = "none";
        arabicButton.style.display = "none";
        popup.style.display = "none";
        i18n.changeLanguage('tr');
      }
      else{
        turkishButton.style.display = "none";
      }
    }
    function toggleFrench(){
      var englishButton = document.querySelector('.englishButton');
      var turkishButton = document.querySelector('.turkishButton');
      var frenchButton = document.querySelector(".frenchButton");
      var germanButton = document.querySelector(".germanButton");
      var italianButton = document.querySelector(".italianButton");
      var arabicButton = document.querySelector(".arabicButton");
      var popup = document.getElementById("languagePopup");
      if(frenchButton.style.display === "none"){
        frenchButton.style.display = "flex";
        turkishButton.style.display = "none";
        englishButton.style.display = "none";
        germanButton.style.display = "none";
        italianButton.style.display = "none";
        arabicButton.style.display = "none";
        popup.style.display = "none";
        i18n.changeLanguage('fr');
      }
      else{
        frenchButton.style.display = "none";
      }
    }
    function toggleGerman(){
      var englishButton = document.querySelector('.englishButton');
      var turkishButton = document.querySelector('.turkishButton');
      var frenchButton = document.querySelector(".frenchButton");
      var germanButton = document.querySelector(".germanButton");
      var italianButton = document.querySelector(".italianButton");
      var arabicButton = document.querySelector(".arabicButton");
      var popup = document.getElementById("languagePopup");
      if(germanButton.style.display === "none"){
        germanButton.style.display = "flex";
        turkishButton.style.display = "none";
        englishButton.style.display = "none";
        frenchButton.style.display = "none";
        italianButton.style.display = "none";
        arabicButton.style.display = "none";
        popup.style.display = "none";
        i18n.changeLanguage('de');
      }
      else{
        germanButton.style.display = "none";
      }
    }
    function toggleItalian(){
      var englishButton = document.querySelector('.englishButton');
      var turkishButton = document.querySelector('.turkishButton');
      var frenchButton = document.querySelector(".frenchButton");
      var germanButton = document.querySelector(".germanButton");
      var italianButton = document.querySelector(".italianButton");
      var arabicButton = document.querySelector(".arabicButton");
      var popup = document.getElementById("languagePopup");
      if(italianButton.style.display === "none"){
        italianButton.style.display = "flex";
        turkishButton.style.display = "none";
        englishButton.style.display = "none";
        germanButton.style.display = "none";
        frenchButton.style.display = "none";
        arabicButton.style.display = "none";
        popup.style.display = "none";
        i18n.changeLanguage('it');
      }
      else{
        italianButton.style.display = "none";
      }
    }
    function toggleArabic(){
      var englishButton = document.querySelector('.englishButton');
      var turkishButton = document.querySelector('.turkishButton');
      var frenchButton = document.querySelector(".frenchButton");
      var germanButton = document.querySelector(".germanButton");
      var italianButton = document.querySelector(".italianButton");
      var arabicButton = document.querySelector(".arabicButton");
      var popup = document.getElementById("languagePopup");
      if(arabicButton.style.display === "none"){
        arabicButton.style.display = "flex";
        turkishButton.style.display = "none";
        englishButton.style.display = "none";
        germanButton.style.display = "none";
        italianButton.style.display = "none";
        frenchButton.style.display = "none";
        popup.style.display = "none";
        i18n.changeLanguage('ar');
      }
      else{
        arabicButton.style.display = "none";
      }
    }
    function openLanguagePopup() {
      var popup = document.getElementById("languagePopup");
      var headerContainer = document.getElementById("headerContainer");
      if(popup.style.display === "none"){
        popup.style.display = "flex";
        headerContainer.addEventListener('mouseleave', () => {
          popup.style.display = "none";
        })
      }
      else {
        popup.style.display = "none";
      }
    }
    return (
      <div>
          <div className='languageButton'>
            <div className='englishButton' id="englishButton" style={{display: "none", right: "5px", cursor: "pointer"}} onClick={openLanguagePopup}>
              <img className='languageFlag' alt='' src={process.env.PUBLIC_URL +'/assets/img/Flag.svg'}></img>
              <a className="languageSpan" id="headerLanguage">English</a>
            </div>
            <div className='turkishButton' id="turkishButton" style={{right: "5px", cursor: "pointer"}} onClick={openLanguagePopup}>
              <img className='languageFlag' alt='' src={process.env.PUBLIC_URL +'/assets/img/Flag2.svg'}></img>
              <a className="languageSpan" id="headerLanguage">Turkish</a>
            </div>
            <div className='frenchButton' id="frenchButton" style={{display: "none", right: "5px", cursor: "pointer"}} onClick={openLanguagePopup}>
              <img className='languageFlag' alt='' src={process.env.PUBLIC_URL +'/assets/img/frenchFlag.svg'}></img>
              <a className="languageSpan" id="headerLanguage">French</a>
            </div>
            <div className='germanButton' id="germanButton" style={{display: "none", right: "5px", cursor: "pointer"}} onClick={openLanguagePopup}>
              <img className='languageFlag' alt='' src={process.env.PUBLIC_URL +'/assets/img/germanFlag.svg'}></img>
              <a className="languageSpan" id="headerLanguage">German</a>
            </div>
            <div className='italianButton' id="italianButton" style={{display: "none", right: "5px", cursor: "pointer"}} onClick={openLanguagePopup}>
              <img className='languageFlag' alt='' src={process.env.PUBLIC_URL +'/assets/img/italianFlag.svg'}></img>
              <a className="languageSpan" id="headerLanguage">Italian</a>
            </div>
            <div className='arabicButton' id="arabicButton" style={{display: "none", right: "5px", cursor: "pointer"}} onClick={openLanguagePopup}>
              <img className='languageFlag' alt='' src={process.env.PUBLIC_URL +'/assets/img/arabicFlag.svg'}></img>
              <a className="languageSpan" id="headerLanguage">Arabic</a>
            </div>
            <img className='languageShowButton' alt='' src={'assets/img/Chevron.svg'} onClick={openLanguagePopup}></img>
          </div>
          
          <div className="languagePopup" id="languagePopup" style={{display: "none"}}>
            <div id="popupTurkishButton" className='turkishButton' onClick={toggleTurkish} style={{cursor: "pointer", left: "10px"}}>
              <img className='languageFlag' alt='' src={process.env.PUBLIC_URL +'/assets/img/Flag2.svg'}></img>
              <a className="languageSpan">Turkish</a>
            </div>
            <img className="languageLine" alt="" src={"./assets/img/littleLine.svg"} style={{width: "125px", position: "relative", left: "11px"}}></img>
            <div id="popupEnglishButton" className='englishButton' onClick={toggleEnglish} style={{cursor: "pointer", left: "10px"}}>
              <img className='languageFlag' alt='' src={process.env.PUBLIC_URL +'/assets/img/Flag.svg'}></img>
              <a className="languageSpan">English</a>
            </div>
            <img className="languageLine" alt="" src={"./assets/img/littleLine.svg"} style={{width: "125px", position: "relative", left: "11px"}}></img>
            <div id="popupFrenchButton" className='frenchButton' onClick={toggleFrench} style={{cursor: "pointer", left: "10px"}}>
              <img className='languageFlag' alt='' src={process.env.PUBLIC_URL +'/assets/img/frenchFlag.svg'}></img>
              <a className="languageSpan">French</a>
            </div>
            <img className="languageLine" alt="" src={"./assets/img/littleLine.svg"} style={{width: "125px", position: "relative", left: "11px"}}></img>
            <div id="popupGermanButton" className='germanButton' onClick={toggleGerman} style={{cursor: "pointer", left: "10px"}}>
              <img className='languageFlag' alt='' src={process.env.PUBLIC_URL +'/assets/img/germanFlag.svg'} style={{left: "3px"}}></img>
              <a className="languageSpan">German</a>
            </div>
            <img className="languageLine" alt="" src={"./assets/img/littleLine.svg"} style={{width: "125px", position: "relative", left: "11px"}}></img>
            <div id="popupItalianButton" className='italianButton' onClick={toggleItalian} style={{cursor: "pointer", left: "10px"}}>
              <img className='languageFlag' alt='' src={process.env.PUBLIC_URL +'/assets/img/italianFlag.svg'} style={{right: "4px"}}></img>
              <a className="languageSpan">Italian</a>
            </div>
            <img className="languageLine" alt="" src={"./assets/img/littleLine.svg"} style={{width: "125px", position: "relative", left: "11px"}}></img>
            <div id="popupArabicButton" className='arabicButton' onClick={toggleArabic} style={{cursor: "pointer", left: "10px"}}>
              <img className='languageFlag' alt='' src={process.env.PUBLIC_URL +'/assets/img/arabicFlag.svg'} ></img>
              <a className="languageSpan">Arabic</a>
            </div>
          </div>
      </div>
  );
}

export default LanguageSelector;