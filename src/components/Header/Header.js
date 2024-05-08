import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "./Header.css";
import LanguageSelector from "./LanguageSelector";
import { Link } from "react-router-dom";

export const Header = () => {
	const { t } = useTranslation();
	const POPUP_LINE = "./assets/img/popupLine.svg";
	const [isTablet, setIsTablet] = useState(false);
	const [isMobile, setIsMobile] = useState(false);
	const [isOpenFirstMobilePopup, setIsOpenFirstMobilePopup] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 900);
			setIsTablet(window.innerWidth > 900 && window.innerWidth <= 1100);
		};

		handleResize();

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	const showPopup = () => {
		var popup = document.getElementById("productServicesPopup");
		var popupOption1 = document.getElementById("firstPopup");
		var popupOption2 = document.getElementById("secondPopup");
		var headerContainer = document.getElementById("headerContainer");
		popup.style.display = "flex";
		headerContainer.addEventListener("mouseleave", () => {
			popup.style.display = "none";
			popupOption1.style.display = "none";
			popupOption2.style.display = "none";
		});
	};
	const showPopupMobile = () => {
		var firstMobilePopup = document.getElementById("firstMobilePopup");
		var firstChildPopup = document.getElementById("firstChildPopup");
		var secondChildPopup = document.getElementById("secondChildPopup");
		var span = document.getElementById("routerProductSpan");
		var div = document.getElementById("routerProduct");
		var btn = document.getElementById("productMobileButton");
		if (firstMobilePopup.style.display === "none") {
			firstMobilePopup.style.display = "flex";
			btn.style.transform = "rotate(+90deg)";
			span.style.color = "#ED401A";
			btn.style.transform = "rotate(+90deg)";
			div.style.background = "#F8EDEB";
		} else {
			firstMobilePopup.style.display = "none";
			firstChildPopup.style.display = "none";
			secondChildPopup.style.display = "none";
			div.style.background = "#FFFFFF";
			span.style.color = "#000000";
			btn.style.transform = "none";
		}
	};
	const showFirstChildPopup = () => {
		setIsOpenFirstMobilePopup(!isOpenFirstMobilePopup);
		var firstChildPopup = document.getElementById("firstChildPopup");
		var secondChildPopup = document.getElementById("secondChildPopup");
		var span = document.getElementById("routerShowAtHomeMobileSpan");
		var btn = document.getElementById("showAtHomeMobileButton");
		var btn2 = document.getElementById("vtonMobileButton");
		var span2 = document.getElementById("routerVtonMobileSpan");
		if (firstChildPopup.style.display === "none") {
			firstChildPopup.style.display = "flex";
			secondChildPopup.style.display = "none";
			btn.style.transform = "rotate(+90deg)";
			span.style.color = "#ED401A";
			btn2.style.transform = "none";
			span2.style.color = "#000000";
		} else {
			firstChildPopup.style.display = "none";
			btn.style.transform = "none";
			span.style.color = "#000000";
		}
	};
	const showSecondChildPopup = () => {
		var firstChildPopup = document.getElementById("firstChildPopup");
		var secondChildPopup = document.getElementById("secondChildPopup");
		var btn = document.getElementById("vtonMobileButton");
		var span = document.getElementById("routerVtonMobileSpan");
		var span2 = document.getElementById("routerShowAtHomeMobileSpan");
		var btn2 = document.getElementById("showAtHomeMobileButton");
		if (secondChildPopup.style.display === "none") {
			secondChildPopup.style.display = "flex";
			firstChildPopup.style.display = "none";
			btn.style.transform = "rotate(+90deg)";
			span.style.color = "#ED401A";
			btn2.style.transform = "none";
			span2.style.color = "#000000";
		} else {
			secondChildPopup.style.display = "none";
			btn.style.transform = "none";
			span.style.color = "#000000";
		}
	};
	const handleMobilePopup = () => {
		var popup = document.getElementById("mobileHeaderPopup");
		var span = document.getElementById("routerProductSpan");
		var div = document.getElementById("routerProduct");
		var btn = document.getElementById("productMobileButton");
		var firstMobilePopup = document.getElementById("firstMobilePopup");
		if (popup.style.display === "none") {
			popup.style.display = "flex";
		} else {
			popup.style.display = "none";
			div.style.background = "#FFFFFF";
			span.style.color = "#000000";
			btn.style.transform = "none";
			firstMobilePopup.style.display = "none";
		}
	};
	const showPopupOption1 = () => {
		var popupOption1 = document.getElementById("firstPopup");
		var popupOption2 = document.getElementById("secondPopup");
		popupOption1.style.display = "flex";
		popupOption2.style.display = "none";
	};
	const showPopupOption2 = () => {
		var popupOption1 = document.getElementById("firstPopup");
		var popupOption2 = document.getElementById("secondPopup");
		popupOption2.style.display = "flex";
		popupOption1.style.display = "none";
	};
	const closePopupOption1 = () => {
		var popupOption1 = document.getElementById("firstPopup");
		popupOption1.style.display = "none";
	};
	const closePopupOption2 = () => {
		var popupOption2 = document.getElementById("secondPopup");
		popupOption2.style.display = "none";
	};

	const closePopups = () => {
		closePopupOption1();
		closePopupOption2();
	};

	return (
		<div
			className={`${isMobile ? "mobile" : ""} ${isTablet ? "tablet" : ""} headerContainer`}
			id="headerContainer">
			{(isMobile || isTablet) && (
				<div
					className="mobileHeaderPopup"
					id="mobileHeaderPopup"
					style={{ display: "none", position: "absolute", zIndex: "2" }}>
					<Link to={"/"} className="backToHome" onClick={handleMobilePopup}>
						<img
							className="backToHomeArrow"
							alt=""
							src={"./assets/img/arrow-left.svg"}></img>
						<span className="backToHomeSpan">{t("backToHome")}</span>
					</Link>
					<img className="mobilePopupLine" alt="" src={POPUP_LINE}></img>
					<div className="popupRouters">
						<div className="popupRouter" id="routerHome">
							<a href="/">{t("home")}</a>
						</div>
						<div className="popupRouter" id="routerProduct" onClick={showPopupMobile}>
							<span id="routerProductSpan">{t("productServices")}</span>
							<img
								className="popupRightButton"
								id="productMobileButton"
								alt=""
								src={"./assets/img/popupMobileVector.svg"}></img>
						</div>
						<div
							className="firstMobilePopup"
							id="firstMobilePopup"
							style={{
								display: "none",
								background: isOpenFirstMobilePopup && "none",
							}}>
							<img className="mobilePopupLine" alt="" src={POPUP_LINE}></img>
							<div
								className="popupRouterMobile"
								id="routerShowAtHomeMobile"
								onClick={showFirstChildPopup}>
								<span id="routerShowAtHomeMobileSpan">{t("showAtHome")}</span>
								<img
									className="popupRightButton"
									id="showAtHomeMobileButton"
									alt=""
									src={"./assets/img/popupMobileVector.svg"}></img>
							</div>
							<div
								className="firstChildPopup"
								id="firstChildPopup"
								style={{ display: "none" }}>
								<img className="mobilePopupLine" alt="" src={POPUP_LINE}></img>
								<div className="popupRouterMobile" id="routerShowFurnitureMobile">
									<span>{t("showFurniture")}</span>
								</div>
								<img className="mobilePopupLine" alt="" src={POPUP_LINE}></img>
								<div className="itemsPopup">
									<a href="/productAr" className="popupItem">
										{t("furniture")}
									</a>
									<a href="/productCarpet" className="popupItem">
										{t("carpet")}
									</a>
									<a href="/productTable" className="popupItem">
										{t("table")}
									</a>
									<a href="/productBathroom" className="popupItem">
										{t("bathroomFurniture")}
									</a>
									<a href="/productWhiteGoods" className="popupItem">
										{t("whiteGoods")}
									</a>
									<a href="/productDecoration" className="popupItem">
										{t("decoration")}
									</a>
									<a href="/productTextile" className="popupItem">
										{t("textile")}
									</a>
								</div>
								<img className="mobilePopupLine" alt="" src={POPUP_LINE}></img>
								<div className="popupRouterMobile" id="routerJointMobile">
									<a href="/productJoint">{t("createProduct")}</a>
								</div>
								<img className="mobilePopupLine" alt="" src={POPUP_LINE}></img>
							</div>
							<div className="popupRouterMobile" id="routerMetaverseMobile">
								<a href="/productMeta">{t("metaverse")}</a>
							</div>
							<div
								className="popupRouterMobile"
								id="routerVtonMobile"
								onClick={showSecondChildPopup}>
								<span id="routerVtonMobileSpan">{t("vton")}</span>
								<img
									className="popupRightButton"
									id="vtonMobileButton"
									alt=""
									src={"./assets/img/popupMobileVector.svg"}></img>
							</div>
							<img className="mobilePopupLine" alt="" src={POPUP_LINE}></img>
							<div
								className="secondChildPopup"
								id="secondChildPopup"
								style={{ display: "none" }}>
								<div className="popupRouterMobile" id="routerWatchMobile">
									<a href="/productWatch">{t("dressWatch")}</a>
								</div>
								<div className="popupRouterMobile" id="routerShoesMobile">
									<a href="/productShoes">{t("dressShoe")}</a>
								</div>
								<div className="popupRouterMobile" id="routerCloothMobile">
									<a href="/productClooth">{t("dressClooth")}</a>
								</div>
								<img className="mobilePopupLine" alt="" src={POPUP_LINE}></img>
							</div>
						</div>
						<div className="popupRouter" id="routerAbout">
							<a href="/aboutUs">{t("aboutUs")}</a>
						</div>
						<div className="popupRouter" id="routerBlog">
							<a href="/blogs">{t("blog")}</a>
						</div>
						<div className="popupRouter" id="routerContact">
							<a href="/contactUs">{t("contactUs")}</a>
						</div>
					</div>
					<img className="mobilePopupLine" alt="" src={POPUP_LINE}></img>
					<div className="mobileMediaCenterButtons" style={{ paddingLeft: "10px" }}>
						<a
							href="/contactCv"
							className="popupMediaCenterButton"
							id="popupMediaCenterButton">
							{t("careers")}
						</a>
					</div>
				</div>
			)}
			<div className="headerShowButtons" style={{ display: "none" }}>
				<img
					className="headerShowButton"
					id="headerShowButton"
					alt=""
					src={"./assets/img/headerOpenButton.svg"}
					onClick={handleMobilePopup}
					style={{ width: "50px", position: "relative", cursor: "pointer" }}></img>
			</div>
			<div className="sugarLogo">
				<a href="/">
					<img alt="" src={"assets/img/headerLogo.svg"}></img>
				</a>
			</div>
			{(!isMobile && !isTablet) && (
				<div className="routers">
					<a href="/">{t("home")}</a>
					<span onMouseOver={showPopup}>{t("productServices")}</span>
					<div
						className="productServicesPopup"
						id="productServicesPopup"
						style={{display: "none"}}>
						<div
							className="popupOption"
							id="firstPopupOption"
							onMouseOver={showPopupOption1}>
							<span>{t("showAtHome")}</span>
							<img
								className="popupVector"
								id="vector1"
								alt=""
								src={"./assets/img/popupVector.svg"}></img>
						</div>
						<div className="firstPopup" id="firstPopup" style={{ display: "none" }}>
							<div className="itemsPopup">
								<a href="/productAr" className="popupItem">
									{t("furniture")}
								</a>
								<a href="/productCarpet" className="popupItem">
									{t("carpet")}
								</a>
								<a href="/productTable" className="popupItem">
									{t("table")}
								</a>
								<a href="/productBathroom" className="popupItem">
									{t("bathroomFurniture")}
								</a>
								<a href="/productWhiteGoods" className="popupItem">
									{t("whiteGoods")}
								</a>
								<a href="/productDecoration" className="popupItem">
									{t("decoration")}
								</a>
								<a href="/productTextile" className="popupItem">
									{t("textile")}
								</a>
								<img className="popupLineSmall" alt="" src={POPUP_LINE}></img>
								<a href="/productJoint" className="popupItem">
									{t("createProduct")}
								</a>
							</div>
						</div>
						<img className="popupLine" alt="" src={POPUP_LINE}></img>
						<div
							className="popupOption"
							onMouseOver={closePopups}
							style={{ top: "0px" }}>
							<a href="/productMeta">{t("metaverse")}</a>
						</div>
						<img className="popupLine" alt="" src={POPUP_LINE}></img>
						<div
							id="thirdPopupOption"
							className="popupOption"
							onMouseOver={showPopupOption2}
							style={{ top: "0px" }}>
							<span>{t("vton")}</span>
							<img
								className="popupVector"
								id="vector2"
								alt=""
								src={"./assets/img/popupVector.svg"}></img>
						</div>
						<div className="secondPopup" id="secondPopup" style={{ display: "none" }}>
							<div className="firstPopupFirstOption">
								<a href="/productWatch">{t("dressWatch")}</a>
							</div>
							<img className="popupLineSmall" alt="" src={POPUP_LINE}></img>
							<div className="firstPopupSecondOption">
								<a href="/productShoes">{t("dressShoe")}</a>
							</div>
							<img className="popupLineSmall" alt="" src={POPUP_LINE}></img>
							<div className="firstPopupThirdOption">
								<a href="/productClooth">{t("dressClooth")}</a>
							</div>
						</div>
					</div>
					<a href="/aboutUs">{t("aboutUs")}</a>
					<a href="/blogs">{t("blog")}</a>
					<a href="/contactUs">{t("contactUs")}</a>
				</div>
			)}
			<div className="headerButtons">
				<LanguageSelector></LanguageSelector>
				<a href="/contactCv" className="mediaCenterButton">
					{t("careers")}
				</a>
			</div>
		</div>
	);
};
