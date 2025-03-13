import React, { useEffect, useState } from 'react';
import { useTranslation } from "react-i18next";
import './Contact.css';

export const Contact = props => {
	const { t } = useTranslation();
	const [isTablet, setIsTablet] = useState(false);
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 800);
			setIsTablet(window.innerWidth > 800 && window.innerWidth <= 1100);

		};

		handleResize();

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	const [name, setName] = useState("");
	const [mail, setMail] = useState("");
	const [message, setMessage] = useState("");

	const handleSubmit = async (event) => {
		event.preventDefault();

		if (!mail || !name || !mail) {
			informationErrorPopup();
			return;
		}
		showLoadingPopup();

		submitForm();
	}

	function submitForm() {
		const form = {
			name: name,
			email: mail,
			message: message,
		}
		sendFormData(form);
	}

	const sendFormData = (form) => {
		const xhr = new XMLHttpRequest();
		xhr.open("POST", process.env.REACT_APP_BACKEND_API + "/api/form/save/contactForm");
		xhr.setRequestHeader("Content-Type", "application/json");

		xhr.onreadystatechange = function () {
			if (xhr.readyState === XMLHttpRequest.DONE) {
				if (xhr.status === 200) {
					inputDonePopup();
				} else {
					inputErrorPopup();
				}
			}
		};

		xhr.send(JSON.stringify(form));
	};

	function inputDonePopup() {
		let inputPopup = document.querySelector('#inputDonePopup');
		let informationLoadingPopup = document.querySelector("#informationLoadingPopup");
		informationLoadingPopup.style.display = "none";
		inputPopup.style.display = "flex";
		setTimeout(() => {
			window.location.reload();
		}, 3000);
	}
	function inputErrorPopup() {
		let inputPopup = document.querySelector('#inputErrorPopup');
		let informationLoadingPopup = document.querySelector("#informationLoadingPopup");
		informationLoadingPopup.style.display = "none";
		inputPopup.style.display = "flex";
		setTimeout(() => {
			window.location.reload();
		}, 3000);
	}
	function informationErrorPopup() {
		let inputPopup = document.querySelector('#informationErrorPopup');
		let informationLoadingPopup = document.querySelector("#informationLoadingPopup");
		informationLoadingPopup.style.display = "none";
		inputPopup.style.display = "flex";
		setTimeout(() => {
			window.location.reload();
		}, 3000);
	}
	function showLoadingPopup() {
		let informationLoadingPopup = document.querySelector("#informationLoadingPopup");
		informationLoadingPopup.style.display = "flex";
	}
	const closePopup = () => {
		let inputPopup = document.querySelector("#inputDonePopup");
		let inputErrorPopup = document.querySelector("#inputErrorPopup");
		let informationLoadingPopup = document.querySelector("#informationLoadingPopup");
		let informationErrorPopup = document.querySelector("#informationErrorPopup");
		inputPopup.style.display = "none";
		inputErrorPopup.style.display = "none";
		informationLoadingPopup.style.display = "none";
		informationErrorPopup.style.display = "none";
	}

	return (
		<div className={`${isMobile ? 'mobile' : ''} ${isTablet ? 'tablet' : ''} contactContainer`}>
			<div className='contactElements'>
				<div className='leftContact'>
					<div className='about'>
						<img className='contactLogo' alt="" src={'assets/img/headerLogo.svg'}></img>
					</div>
					<span className='contactAboutSpan'>{t("contactAboutSpan")}</span>

					<div className='communication'>
						<div className='mailAdressContainer'>
							<div className='mailAdressLogo'>
								<img alt="" src={'assets/img/mail.svg'}></img>
							</div>
							<div className='mailAdressSpan'>
								<span>hello@sugartech.io</span>
							</div>
						</div>
						<div className='phoneNumberContainer'>
							<div className='phoneNumberLogo'>
								<img alt='' src={'assets/img/phone-call.svg'}></img>
							</div>
							<div className='phoneNumberSpan'>
								<span>444 06 93</span>
							</div>
						</div>
					</div>
				</div>
				<div className='middleContact'>
					<div className='pages'>
						<div className='contactHeaders'>
							<span>{t("pages")}</span>

						</div>
						<div style={{ display: !isMobile && "none", width: "100%", height: "1.5px", background: "#E3E3E3" }} />
						<div className='contactRouters'>
							<a href='/'>{t("home")}</a>
							<a href='/'>{t("productServices")}</a>
							<a href='/aboutUs'>{t("aboutUs")}</a>
							<a href='/blogs'>{t("blog")}</a>
							<a href='/contactUs'>{t("contactUs")}</a>
							<a href='/contactCv'>{t("careers")}</a>
						</div>
					</div>
					<div className='utilityPages'>
						<div className='contactHeaders'>
							<span>{t("utilityPages")}</span>

						</div>
						<div style={{ display: !isMobile && "none", width: "100%", height: "1.5px", background: "#E3E3E3" }} />

						<div className='contactRouters'>
							<a href='/productAr'>{t("showFurniture")}</a>
							<a href='/productJoint'>{t("createProduct")}</a>
							<a href='/productMeta'>{t("metaverse")}</a>
							<a href='/productWatch'>{t("dressWatch")}</a>
							<a href='/productShoes'>{t("dressShoe")}</a>
							<a href='/productClooth'>{t("dressClooth")}</a>
						</div>
					</div>
				</div>
				<div className='rightContact'>
					<div className='contactHeaders'>
						<span>{t("contactUs")}</span>

					</div>
					<div className='rightContactInputs'>
						<span>{t("enterYourNameAndEmail")}</span>
						<textarea id='name'
							className='nameInput'
							placeholder='Name'
							value={name}
							onChange={(e) => setName(e.target.value)}></textarea>
						<textarea id='email'
							className='emailInput'
							placeholder='Email'
							value={mail}
							onChange={(e) => setMail(e.target.value)}></textarea>
						<textarea id='message'
							className='messageInput'
							placeholder='Message'
							value={message}
							onChange={(e) => setMessage(e.target.value)}></textarea>
						<button
							className='sendButton'
							onClick={handleSubmit}>
							<span>{t("sendMessage")}</span>
						</button>
					</div>
				</div>
			</div>
			<div className='inputDonePopup' id='inputDonePopup'>
				<div className='inputPopupButton'>
					<img id='inputPopupCloseButton' alt='' src={'./assets/img/inputPopupButton.svg'}></img>
				</div>
				<div className='inputPopupSpans'>
					<img className='inputPopupImg' alt='' src={'./assets/img/inputPopupImg.svg'}></img>
					<span className='inputPopupHeader'>Thank You!</span>
					<span className='inputPopupSpan'>Your submission has been sent.</span>
				</div>
			</div>
			<div className='inputDonePopup' id='inputErrorPopup'>
				<div className='inputPopupButton'>
					<img id='inputPopupCloseButton' alt='' src={'./assets/img/inputPopupButton.svg'}></img>
				</div>
				<div className='inputPopupSpans'>
					<img className='inputPopupImg' alt='' src={'./assets/img/inputErrorPopupImg.svg'}></img>
					<span className='inputPopupHeader'>OOPS!</span>
					<span className='inputPopupSpan'>Your submission has been sent.</span>
					<img className='inputPopupLine' alt='' src={'./assets/img/contactPopupLine.svg'}></img>
					<span className='inputPopupSecondSpan'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam semper gravida facilisi donec est.</span>
				</div>
			</div>
			<div className='inputDonePopup' id='inputDonePopup'>
				<div className='inputPopupButton'>
					<img className='inputPopupCloseButton' onClick={closePopup} alt='' src={'./assets/img/inputPopupButton.svg'}></img>
				</div>
				<div className='inputPopupSpans'>
					<img className='inputPopupImg' alt='' src={'./assets/img/inputPopupImg.svg'}></img>
					<span className='inputPopupHeader'>{t("contactHeaderSuccesfuly")}</span>
					<span className='inputPopupSpan'>{t("contactSpanSuccesfuly")}</span>
					<img className='inputPopupLine' alt='' src={'./assets/img/contactPopupLine.svg'}></img>
					<span className='inputPopupSecondSpan'>{t("contactSecondSpanSuccesfuly")}</span>
				</div>
			</div>
			<div className='inputDonePopup' id='inputErrorPopup'>
				<div className='inputPopupButton'>
					<img className='inputPopupCloseButton' onClick={closePopup} alt='' src={'./assets/img/inputPopupButton.svg'}></img>
				</div>
				<div className='inputPopupSpans'>
					<img className='inputPopupImg' alt='' src={'./assets/img/inputErrorPopupImg.svg'}></img>
					<span className='inputPopupHeader'>{t("contactHeaderError")}</span>
					<span className='inputPopupSpan'>{t("contactSpanError")}</span>
					<img className='inputPopupLine' alt='' src={'./assets/img/contactPopupLine.svg'}></img>
					<span className='inputPopupSecondSpan'>{t("contactSecondSpanError")}</span>
					<span className='inputPopupSecondSpan'>{t("contactThirdSpanError")}</span>
					<span className='inputPopupSecondSpan'>hello@sugartech.io && +905342843427</span>
				</div>
			</div>
			<div className='inputDonePopup' id='informationLoadingPopup'>
				<div className="contactOverlay" id='contactOverlay' style={{ zIndex: "1" }}></div>
				<div className='inputPopupButton'>
					<img className='informationLoadingButton' onClick={closePopup} alt='' src={'./assets/img/inputPopupButton.svg'}></img>
				</div>
				<div className='inputPopupSpans'>
					<span className='inputPopupHeader'>{t("contactHeaderLoading")}</span>
					<div className="loading-animation">
						<div className="loading-circle"></div>
						<div className="loading-circle"></div>
						<div className="loading-circle"></div>
						<div className="loading-circle"></div>
						<div className="loading-circle"></div>
						<div className="loading-circle"></div>
						<div className="loading-circle"></div>
						<div className="loading-circle"></div>
						<div className="loading-circle"></div>
					</div>
					<span className='inputPopupSpan'>{t("contactSpanLoading")}</span>
					<img className='inputPopupLine' alt='' src={'./assets/img/contactPopupLine.svg'}></img>
					<span className='inputPopupSecondSpan'>{t("contactSecondSpanLoading")}</span>
				</div>
			</div>
			<div className='inputDonePopup' id='informationErrorPopup'>
				<div className="contactOverlay" id='contactOverlay' style={{ zIndex: "1" }}></div>
				<div className='inputPopupButton'>
					<img className='informationErrorButton' onClick={closePopup} alt='' src={'./assets/img/inputPopupButton.svg'}></img>
				</div>
				<div className='inputPopupSpans'>
					<img className='inputPopupImg' alt='' src={'./assets/img/inputErrorPopupImg.svg'}></img>
					<span className='inputPopupHeader'>{t("contactHeaderFail")}</span>
					<span className='inputPopupSpan'>{t("contactSpanFail")}</span>
					<img className='inputPopupLine' alt='' src={'./assets/img/contactPopupLine.svg'}></img>
					<span className='inputPopupSecondSpan'>{t("contactSecondSpanFail")}</span>
				</div>
			</div>
		</div>
	);
}