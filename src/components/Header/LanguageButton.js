import { useTranslation } from "react-i18next";

export default function LanguageButton({className, lang, onClick }) {
	const { t } = useTranslation();
	return (
		<div className={"language-dropdown-button " + className} onClick={onClick}>
			<img
				className="language-flag "
				alt={t(lang.img.alt)}
				src={lang.img.src}
			/>
			<span className="language-span">{t(lang.name)}</span>
		</div>
	);
}
