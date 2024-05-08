import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import "./LanguageSelector.css";

function LanguageSelector() {
	const { i18n } = useTranslation();
	const [selectedLanguage, setSelectedLanguage] = useState(i18n.resolvedLanguage);
	const wrapperRef = useRef(null);
	const popupRef = useRef(null);
	const [isLanguagePopupOpen, setIsLanguagePopupOpen] = useState(false);

	const languages = [
		{ code: "en", name: "English", src: "/assets/img/header/lang/US.svg" },
		{ code: "tr", name: "Türkçe", src: "/assets/img/header/lang/TR.svg" },
		{ code: "fr", name: "Français", src: "/assets/img/header/lang/FR.svg" },
		{ code: "de", name: "Deutsch", src: "/assets/img/header/lang/DE.svg" },
		{ code: "it", name: "Italiano", src: "/assets/img/header/lang/IT.svg" },
		{ code: "ar", name: "العربية", src: "/assets/img/header/lang/AR.svg" },
	];

	function toggleLanguage(lang) {
		setSelectedLanguage(lang);
		i18n.changeLanguage(lang);
	}

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (
				wrapperRef.current &&
				!wrapperRef.current.contains(event.target) &&
				popupRef.current &&
				!popupRef.current.contains(event.target)
			) {
				setIsLanguagePopupOpen(false);
			} else if (popupRef.current && popupRef.current.contains(event.target)) {
				setIsLanguagePopupOpen(false);
			}
		};

		document.addEventListener("click", handleClickOutside);
		window.addEventListener("scroll", handleClickOutside);
		return () => {
			document.removeEventListener("click", handleClickOutside);
			window.removeEventListener("scroll", handleClickOutside);
		};
	});

	return (
		<div className="language-wrapper" ref={wrapperRef}>
			<div
				className="selected-language-container"
				onClick={() => setIsLanguagePopupOpen(!isLanguagePopupOpen)}>
				{languages
					.filter((lang) => lang.code === selectedLanguage)
					.map((lang, index) => {
						return (
							<div key={index} className="language-option">
								<img className="language-flag" alt={lang.name} src={lang.src} />
								<span className="language-name">{lang.name}</span>
							</div>
						);
					})}
				<img
					className="dropdown-chevron"
					alt="dropdown arrow"
					src={"/assets/img/header/chevron.svg"}
				/>
			</div>
			{isLanguagePopupOpen && (
				<div className="language-dropdown" ref={popupRef}>
					{languages.map((lang, index) => {
						return (
							<div
								key={index}
								className="language-option"
								onClick={() => toggleLanguage(lang.code)}>
								<img className="language-flag" alt={lang.name} src={lang.src} />
								<span className="language-name">{lang.name}</span>
							</div>
						);
					})}
				</div>
			)}
		</div>
	);
}

export default LanguageSelector;
