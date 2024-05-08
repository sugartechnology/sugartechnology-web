import React, { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import "./MainSectoralSolution.css";

const solutionArray = [
	{
		url: "./assets/img/solutionImages/koltuk.svg",
		header: "furnitureHeader",
		span: "furnitureSpan",
		link: "/productAr",
		popupImage: "./assets/img/ShowAtHomeImage.webp",
	},
	{
		url: "./assets/img/solutionImages/halı.svg",
		header: "carpetHeader",
		span: "carpetSpan",
		link: "/productCarpet",
		popupImage: "./assets/img/products/carpet.svg",
	},
	{
		url: "./assets/img/solutionImages/tablo.webp",
		header: "tableHeader",
		span: "tableSpan",
		link: "/productTable",
		popupImage: "./assets/img/products/tablo.svg",
	},
	{
		url: "./assets/img/solutionImages/banyo.svg",
		header: "bathroomFurnitureHeader",
		span: "bathroomFurnitureSpan",
		link: "/productBathroom",
		popupImage: "./assets/img/products/banyo.svg",
	},
	{
		url: "./assets/img/solutionImages/beyazEşya.webp",
		header: "whiteGoodsHeader",
		span: "whiteGoodsSpan",
		link: "/productWhiteGoods",
		popupImage: "./assets/img/products/beyazEsya.svg",
	},
	{
		url: "./assets/img/solutionImages/aksesuarlar.webp",
		header: "decorationHeader",
		span: "decorationSpan",
		link: "/productDecoration",
		popupImage: "./assets/img/products/dekorasyon.svg",
	},
	{
		url: "./assets/img/solutionImages/materyaller.svg",
		header: "materialsHeader",
		span: "materialsSpan",
		popupImage: "./assets/img/products/materials.svg",
	},
	{
		url: "./assets/img/solutionImages/saat.webp",
		header: "watchHeader",
		span: "watchSpan",
		link: "/productWatch",
		popupImage: "./assets/img/watchImage.webp",
	},
	{
		url: "./assets/img/solutionImages/ayakkabı.webp",
		header: "shoesHeader",
		span: "shoesSpan",
		link: "/productShoes",
		popupImage: "./assets/img/shoesImage.webp",
	},
	{
		url: "./assets/img/solutionImages/kıyafet.webp",
		header: "cloothHeader",
		span: "cloothSpan",
		link: "/productClooth",
		popupImage: "./assets/img/cloothImage.webp",
	},
	{
		url: "./assets/img/solutionImages/tekstil.webp",
		header: "textileHeader",
		span: "textileSpan",
		link: "/productTextile",
		popupImage: "./assets/img/products/tekstil.svg",
	},
	{
		url: "./assets/img/solutionImages/ışık.svg",
		header: "lightHeader",
		span: "lightSpan",
		popupImage: "./assets/img/products/light.svg",
	},
];
export const MainSectoralSolution = () => {
	const [showPopUp, setShowPopUp] = useState(false);
	const [index, setIndex] = useState(0);
	const overlayRef = useRef();
	const { t } = useTranslation();

	const clickedPopUp = () => {
		setShowPopUp(!showPopUp);
	};

	const handleOverlayClick = (e) => {
		if (e.target === overlayRef.current) {
			clickedPopUp();
		}
	};

	const handlePopup = (index) => {
		return showPopUp ? (
			<div>
				<div className="popupOverlay" ref={overlayRef} onClick={handleOverlayClick}></div>
				<div className="popup">
					<div className="popupCloseButtons">
						<img
							className="popupCloseButton"
							alt=""
							src="./assets/img/popupVector2.svg"
							onClick={() => {
								clickedPopUp();
							}}
						/>
					</div>
					<div className="popupSpans">
						<div className="popupSpanElements">
							<div className="showAtHomeHeader">
								{" "}
								{t(solutionArray[index].header)}{" "}
							</div>
							<div className="popupSpan"> {t(solutionArray[index].span)} </div>
						</div>
						<div className="popupButton">
							<a className="showAtHomeButton1" href={solutionArray[index].link}>
								{t("usecase")}
							</a>
						</div>
					</div>
					<div className="popupImageDiv">
						<img
							className="showAtHomeImage"
							alt=""
							src={solutionArray[index].popupImage}
						/>
					</div>
				</div>
			</div>
		) : (
			""
		);
	};

	return (
		<div className="mainSectoralSolutionContainer">
			<div className="mainSolutionHeader">
				<img
					className="mainSolutionHeaderLine"
					alt=""
					src={"./assets/img/mainSolutionLine.svg"}></img>
				<h1>{t("sectoralSolution")}</h1>
				<img
					className="mainSolutionHeaderLine"
					alt=""
					src={"./assets/img/mainSolutionLine.svg"}></img>
			</div>
			<div id="main-solutions-content-container">
				<div className="mainSolutionSpans">
					<span className="mainSolutionSpan">
						{t("mainSolutionSpan")}
					</span>
				</div>
				<div className="solutionItems">
					{solutionArray.map((item, index) => (
						<div
							className="solutionItem"
							key={index}
							onClick={() => {
								setIndex(index);
								clickedPopUp();
							}}>
							<img src={item.url} alt="" />
							<span className="solutionSpans">{t(item.header)}</span>
						</div>
					))}
				</div>
			</div>
			{handlePopup(index)}
		</div>
	);
};
