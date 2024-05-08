import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import ReCAPTCHA from "react-google-recaptcha";
import PhoneInput from "react-phone-input-2";

export const ContactInputs = () => {
	const { t } = useTranslation();
	// const [recaptchaResponse, setRecaptchaResponse] = useState("");
	const [name, setName] = useState("");
	const [mail, setMail] = useState("");
	const [phone, setPhone] = useState("");
	const [message, setMessage] = useState("");
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 800);
		};

		handleResize();

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	// const handleRecaptchaChange = (response) => {
	//     setRecaptchaResponse(response);
	// }

	const handleSubmit = async () => {
		console.log("hello");
		if (!mail || !phone) {
			informationErrorPopup();
			return;
		}
		showLoadingPopup();

		submitForm();

		// const response =  Promise.race([
		//     fetch("/api/verify-recaptcha", {
		//         method: "POST",
		//         headers: {
		//             "Content-Type": "application/json"
		//         },
		//         body: JSON.stringify({ recaptchaResponse })
		//     }),
		//     new Promise((_, reject) =>
		//         setTimeout(() => reject(new Error("Request timeout")), 15000)
		//     )
		// ]);

		// if (!response) {
		//     inputErrorPopup();
		//     return;
		// }

		// const result = response.json();
		// if (result.success) {
		//     submitForm();
		// } else {
		//     inputErrorPopup();
		// }
	};

	function submitForm() {
		// setError("");
		const form = {
			name: name,
			email: mail,
			message: message,
			phoneNumber: phone,
		};
		sendFormData(form);
	}

	const sendFormData = (form) => {
		const xhr = new XMLHttpRequest();
		xhr.open("POST", "https://cdn.sugartech.io/api/form/save/contactForm");
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
		let inputPopup = document.querySelector("#inputDonePopup");
		let informationLoadingPopup = document.querySelector("#informationLoadingPopup");
		informationLoadingPopup.style.display = "none";
		inputPopup.style.display = "flex";
		setTimeout(() => {
			window.location.reload();
		}, 3000);
	}
	function inputErrorPopup() {
		let inputPopup = document.querySelector("#inputErrorPopup");
		let informationLoadingPopup = document.querySelector("#informationLoadingPopup");
		informationLoadingPopup.style.display = "none";
		inputPopup.style.display = "flex";
		setTimeout(() => {
			window.location.reload();
		}, 3000);
	}
	function informationErrorPopup() {
		let inputPopup = document.querySelector("#informationErrorPopup");
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
	return (
		<form
			id="contactFormElement"
			action="/"
			onSubmit={(e) => {
				e.preventDefault();
				return false;
			}}>
			<div className="contactInputs">
				<div className="contactInputHeaders">
					<span className="contactInputHeader">{t("contactUs")}</span>
					<span className="contactInputSpan">{t("contactPageSpan")}</span>
				</div>
				<div className="contactInputInputs">
					<div>
						<div className="nameInputs">
							<span className="nameInputSpan">{t("fullName")}</span>
							<input
								className="fullnameInput"
								placeholder={t("fullName")}
								value={name}
								required
								onChange={(e) => setName(e.target.value)}></input>
						</div>
					</div>
					<div className="nameEmailInputs">
						<div className="nameInputs">
							<span className="nameInputSpan">{t("phone")}</span>
							<PhoneInput
								className="nameEmailInputCv phone"
								country={"tr"}
								value={phone}
								onChange={(phone) => setPhone(phone)}
								placeholder="Phone Number"
								containerStyle={{
									borderRadius: "8px",
									border: "none",
									maxWidth: "500px",
								}}
								buttonStyle={{
									width: isMobile ? "13%" : "20% ",
									backgroundColor: "white",
								}}
								inputStyle={{
									width: "100%",
									height: "100%",
								}}
							/>
							{/* <input className='nameEmailInput' placeholder={"Phone Number"} value={phone} onChange={(e)=>setPhone(e.target.value)}></input> */}
						</div>
						<div className="emailInputs">
							<span className="emailInputSpan">{t("email")}</span>
							<input
								className="nameEmailInput"
								placeholder="hello@creative-tim.com"
								type="email"
								required
								value={mail}
								onChange={(e) => setMail(e.target.value)}></input>
						</div>
					</div>
					<div className="descriptionInputs">
						<span className="descriptionInputSpan">{t("howCanWeHelpYou")}</span>
						<textarea
							className="descriptionInput"
							type="text"
							placeholder={t("describeYourProblem")}
							value={message}
							onChange={(e) => setMessage(e.target.value)}></textarea>
					</div>
				</div>
				<ReCAPTCHA
					sitekey="6LeDWB4nAAAAAERZuZ45quLmaqG8RQhbvFV_Y_HB"
					/*onChange={handleRecaptchaChange}*/
				/>
				<div className="contactInputButtons">
					<input
						className="sendMessageButton"
						type="submit"
						value={t("sendMessage")}
						onClick={(e) => {
							e.preventDefault();
							if (document.body.querySelector("#contactFormElement").reportValidity())
								handleSubmit();

							return false;
						}}
					/>
				</div>
			</div>
		</form>
	);
};
