import React from "react";
import { useTranslation } from "react-i18next";

function LanguageSelector() {

  const { i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = React.useState(
    localStorage.getItem("selectedLanguage") || i18n.language
  );
  function toggleEnglish() {
    closeLanguagePopup();
    setSelectedLanguage("en");
    i18n.changeLanguage("en");
  }

  function toggleTurkish() {
    closeLanguagePopup();
    setSelectedLanguage("tr");
    i18n.changeLanguage("tr");
  }

  function toggleFrench() {
    closeLanguagePopup();
    setSelectedLanguage("fr");
    i18n.changeLanguage("fr");
  }

  function toggleGerman() {
    closeLanguagePopup();
    setSelectedLanguage("de");
    i18n.changeLanguage("de");
  }

  function toggleItalian() {
    closeLanguagePopup();
    setSelectedLanguage("it");
    i18n.changeLanguage("it");
  }

  function toggleArabic() {
    closeLanguagePopup();
    setSelectedLanguage("ar");
    i18n.changeLanguage("ar");
  }
  function openLanguagePopup() {
    var popup = document.getElementById("languagePopup");
    var headerContainer = document.getElementById("headerContainer");
    if (popup.style.display === "none") {
      popup.style.display = "flex";
      headerContainer.addEventListener('mouseleave', () => {
        popup.style.display = "none";
      })
    }
    else {
      popup.style.display = "none";
    }
  }
  const closeLanguagePopup = () => {
    var popup = document.getElementById("languagePopup");
    var headerContainer = document.getElementById("headerContainer");
    if (popup.style.display === "flex") {
      popup.style.display = "none";
      headerContainer.addEventListener('mouseleave', () => {
        popup.style.display = "none";
      })
    }
    else {
      popup.style.display = "flex";
    }
  }
  return (
    <div>
      <div className='languageButton'>
        <div className={`englishButton ${selectedLanguage === "en" ? "" : "hidden"}`} id="englishButton" style={{ right: "5px", cursor: "pointer" }} onClick={openLanguagePopup}>
          <img className='languageFlag' alt='' src={process.env.PUBLIC_URL + '/assets/img/Flag.svg'}></img>
          <a className="languageSpan" id="headerLanguage">English</a>
        </div>
        <div className={`turkishButton ${selectedLanguage === "tr" ? "" : "hidden"}`} id="turkishButton" style={{ right: "5px", cursor: "pointer" }} onClick={openLanguagePopup}>
          <img className='languageFlag' alt='' src={process.env.PUBLIC_URL + '/assets/img/Flag2.svg'}></img>
          <a className="languageSpan" id="headerLanguage">Turkish</a>
        </div>
        <div className={`frenchButton ${selectedLanguage === "fr" ? "" : "hidden"}`} id="frenchButton" style={{ right: "5px", cursor: "pointer" }} onClick={openLanguagePopup}>
          <img className='languageFlag' alt='' src={process.env.PUBLIC_URL + '/assets/img/frenchFlag.svg'}></img>
          <a className="languageSpan" id="headerLanguage">French</a>
        </div>
        <div className={`germanButton ${selectedLanguage === "de" ? "" : "hidden"}`} id="germanButton" style={{ right: "5px", cursor: "pointer" }} onClick={openLanguagePopup}>
          <img className='languageFlag' alt='' src={process.env.PUBLIC_URL + '/assets/img/germanFlag.svg'}></img>
          <a className="languageSpan" id="headerLanguage">German</a>
        </div>
        <div className={`italianButton ${selectedLanguage === "it" ? "" : "hidden"}`} id="italianButton" style={{ right: "5px", cursor: "pointer" }} onClick={openLanguagePopup}>
          <img className='languageFlag' alt='' src={process.env.PUBLIC_URL + '/assets/img/italianFlag.svg'}></img>
          <a className="languageSpan" id="headerLanguage">Italian</a>
        </div>
        <div className={`arabicButton ${selectedLanguage === "ar" ? "" : "hidden"}`} id="arabicButton" style={{ right: "5px", cursor: "pointer" }} onClick={openLanguagePopup}>
          <img className='languageFlag' alt='' src={process.env.PUBLIC_URL + '/assets/img/arabicFlag.svg'}></img>
          <a className="languageSpan" id="headerLanguage">Arabic</a>
        </div>
        <img className='languageShowButton' alt='' src={'assets/img/Chevron.svg'} onClick={openLanguagePopup}></img>
      </div>

      <div className="languagePopup" id="languagePopup" style={{ display: "none" }}>
        <div id="popupTurkishButton" className='turkishButton' onClick={toggleTurkish} style={{ cursor: "pointer", left: "10px" }}>
          <img className='languageFlag' alt='' src={process.env.PUBLIC_URL + '/assets/img/Flag2.svg'}></img>
          <a className="languageSpan">Turkish</a>
        </div>
        <img className="languageLine" alt="" src={"./assets/img/littleLine.svg"} style={{ width: "125px", position: "relative", left: "11px" }}></img>
        <div id="popupEnglishButton" className='englishButton' onClick={toggleEnglish} style={{ cursor: "pointer", left: "10px" }}>
          <img className='languageFlag' alt='' src={process.env.PUBLIC_URL + '/assets/img/Flag.svg'}></img>
          <a className="languageSpan">English</a>
        </div>
        <img className="languageLine" alt="" src={"./assets/img/littleLine.svg"} style={{ width: "125px", position: "relative", left: "11px" }}></img>
        <div id="popupFrenchButton" className='frenchButton' onClick={toggleFrench} style={{ cursor: "pointer", left: "10px" }}>
          <img className='languageFlag' alt='' src={process.env.PUBLIC_URL + '/assets/img/frenchFlag.svg'}></img>
          <a className="languageSpan">French</a>
        </div>
        <img className="languageLine" alt="" src={"./assets/img/littleLine.svg"} style={{ width: "125px", position: "relative", left: "11px" }}></img>
        <div id="popupGermanButton" className='germanButton' onClick={toggleGerman} style={{ cursor: "pointer", left: "10px" }}>
          <img className='languageFlag' alt='' src={process.env.PUBLIC_URL + '/assets/img/germanFlag.svg'} style={{ left: "3px" }}></img>
          <a className="languageSpan">German</a>
        </div>
        <img className="languageLine" alt="" src={"./assets/img/littleLine.svg"} style={{ width: "125px", position: "relative", left: "11px" }}></img>
        <div id="popupItalianButton" className='italianButton' onClick={toggleItalian} style={{ cursor: "pointer", left: "10px" }}>
          <img className='languageFlag' alt='' src={process.env.PUBLIC_URL + '/assets/img/italianFlag.svg'} style={{ right: "4px" }}></img>
          <a className="languageSpan">Italian</a>
        </div>
        <img className="languageLine" alt="" src={"./assets/img/littleLine.svg"} style={{ width: "125px", position: "relative", left: "11px" }}></img>
        <div id="popupArabicButton" className='arabicButton' onClick={toggleArabic} style={{ cursor: "pointer", left: "10px" }}>
          <img className='languageFlag' alt='' src={process.env.PUBLIC_URL + '/assets/img/arabicFlag.svg'} ></img>
          <a className="languageSpan">Arabic</a>
        </div>
      </div>
    </div>
  );
}

export default LanguageSelector;