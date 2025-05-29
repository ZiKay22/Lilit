import React, { useState, useEffect, useRef } from "react";
import IMask from "imask";
import "./form.css";
import { Link } from "react-router-dom";

// Пример простых SVG-иконок (замени на свои или более точные)
const amex = (
  <svg width="60" height="40" viewBox="0 0 60 40" xmlns="http://www.w3.org/2000/svg">
    <rect width="60" height="40" fill="#2e77bb" rx="6" />
    <text x="10" y="25" fill="white" fontWeight="bold" fontSize="16">AMEX</text>
  </svg>
);

const visa = (
  <svg width="60" height="40" viewBox="0 0 60 40" xmlns="http://www.w3.org/2000/svg">
    <rect width="60" height="40" fill="#1a1f71" rx="6" />
    <text x="10" y="25" fill="white" fontWeight="bold" fontSize="18">VISA</text>
  </svg>
);

const mastercard = (
  <svg width="60" height="40" viewBox="0 0 60 40" xmlns="http://www.w3.org/2000/svg">
    <rect width="60" height="40" fill="#eb001b" rx="6" />
    <circle cx="22" cy="20" r="12" fill="#f79e1b" />
    <circle cx="38" cy="20" r="12" fill="#ff5f00" />
    <text x="10" y="35" fill="white" fontWeight="bold" fontSize="10">MasterCard</text>
  </svg>
);

const defaultIcon = (
  <svg width="60" height="40" viewBox="0 0 60 40" xmlns="http://www.w3.org/2000/svg">
    <rect width="60" height="40" fill="#888" rx="6" />
    <text x="10" y="25" fill="white" fontWeight="bold" fontSize="14">CARD</text>
  </svg>
);

function PaymentForm() {
  const [name, setName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiration, setExpiration] = useState("");
  const [securityCode, setSecurityCode] = useState("");
  const [cardType, setCardType] = useState("unknown");

  const cardNumberRef = useRef(null);
  const expirationRef = useRef(null);
  const securityCodeRef = useRef(null);

  useEffect(() => {
    if (!cardNumberRef.current || !expirationRef.current || !securityCodeRef.current) return;

    const cardNumberMask = IMask(cardNumberRef.current, {
      mask: [
        { mask: "0000 000000 00000", regex: "^3[47]\\d{0,13}", cardtype: "american express" },
        { mask: "0000 0000 0000 0000", regex: "^(?:6011|65\\d{0,2}|64[4-9]\\d?)\\d{0,12}", cardtype: "discover" },
        { mask: "0000 000000 0000", regex: "^3(?:0([0-5]|9)|[689]\\d?)\\d{0,11}", cardtype: "diners" },
        { mask: "0000 0000 0000 0000", regex: "^(5[1-5]\\d{0,2}|22[2-9]\\d{0,1}|2[3-7]\\d{0,2})\\d{0,12}", cardtype: "mastercard" },
        { mask: "0000 000000 00000", regex: "^(?:2131|1800)\\d{0,11}", cardtype: "jcb15" },
        { mask: "0000 0000 0000 0000", regex: "^(?:35\\d{0,2})\\d{0,12}", cardtype: "jcb" },
        { mask: "0000 0000 0000 0000", regex: "^(?:5[0678]\\d{0,2}|6304|67\\d{0,2})\\d{0,12}", cardtype: "maestro" },
        { mask: "0000 0000 0000 0000", regex: "^4\\d{0,15}", cardtype: "visa" },
        { mask: "0000 0000 0000 0000", regex: "^62\\d{0,14}", cardtype: "unionpay" },
        { mask: "0000 0000 0000 0000", cardtype: "unknown" }
      ],
      dispatch: function (appended, dynamicMasked) {
        const number = (dynamicMasked.value + appended).replace(/\D/g, "");
        for (let i = 0; i < dynamicMasked.compiledMasks.length; i++) {
          const re = new RegExp(dynamicMasked.compiledMasks[i].regex);
          if (number.match(re) != null) {
            return dynamicMasked.compiledMasks[i];
          }
        }
      }
    });

    cardNumberMask.on("accept", () => {
      setCardNumber(cardNumberMask.value);
      setCardType(cardNumberMask.masked.currentMask.cardtype || "unknown");
    });

    const expirationMask = IMask(expirationRef.current, {
      mask: "MM{/}YY",
      blocks: {
        MM: { mask: IMask.MaskedRange, from: 1, to: 12 },
        YY: { mask: IMask.MaskedRange, from: 0, to: 99 }
      }
    });

    expirationMask.on("accept", () => {
      setExpiration(expirationMask.value);
    });

    const securityCodeMask = IMask(securityCodeRef.current, {
      mask: "0000"
    });

    securityCodeMask.on("accept", () => {
      setSecurityCode(securityCodeMask.value);
    });

    return () => {
      cardNumberMask.destroy();
      expirationMask.destroy();
      securityCodeMask.destroy();
    };
  }, []);

  // Возвращает иконку для текущего типа карты
  const getCardIcon = () => {
    switch (cardType) {
      case "american express":
        return amex;
      case "visa":
        return visa;
      case "mastercard":
        return mastercard;
      default:
        return defaultIcon;
    }
  };
const isFormValid =
  name.trim() !== "" &&
  cardNumber.trim().length >= 15 &&
  expiration.trim().length === 5 &&
  securityCode.trim().length >= 3;

  return (
    <div>
      <div className="" style={{  marginBottom: "20px" }}>
        <svg className="col-12"
          version="1.1"
          id="cardfront"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 750 471"
          style={{ enableBackground: "new 0 0 750 471" }}
          xmlSpace="preserve"
          width="200"
          height="220"
        >
          <g id="Front">
            <rect width="750" height="471" rx="30" fill="#444" />
            <text
              x="60"
              y="295"
              fill="#fff"
              fontSize="28"
              fontFamily="monospace"
              letterSpacing="3"
            >
              {cardNumber || "0123 4567 8910 1112"}
            </text>
            <text
              x="54"
              y="428"
              fill="#fff"
              fontSize="24"
              fontFamily="monospace"
              textTransform="uppercase"
            >
              {name || "JOHN DOE"}
            </text>
            <text
              x="574"
              y="434"
              fill="#fff"
              fontSize="24"
              fontFamily="monospace"
            >
              {expiration || "01/23"}
            </text>

            {/* Иконка карты справа сверху */}
            <g transform="translate(600, 50)" >
              {getCardIcon()}
            </g>
          </g>
        </svg>
      </div>

      <form>
        <label htmlFor="name">Name on card:</label>
        <input
          id="name"
          maxLength="20"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="John Doe"
        />

        <label htmlFor="cardnumber">Card number:</label>
        <input
          id="cardnumber"
          ref={cardNumberRef}
          type="text"
          maxLength="19"
          placeholder="0123 4567 8910 1112"
          defaultValue={cardNumber}
          onChange={() => {}}
        />

        <label htmlFor="expirationdate">Expiration date:</label>
        <input
          id="expirationdate"
          ref={expirationRef}
          type="text"
          maxLength="5"
          placeholder="01/23"
          defaultValue={expiration}
          onChange={() => {}}
        />

        <label htmlFor="securitycode">Security code:</label>
        <input
          id="securitycode"
          ref={securityCodeRef}
          type="text"
          maxLength="4"
          placeholder="123"
          defaultValue={securityCode}
          onChange={() => {}}
        />
             <div className="d-flex justify-content-center my-3">
  {isFormValid ? (
    <Link to="/success" className="btn btn-dark" style={{ width: "100%" }}>
      Գնել
    </Link>
  ) : (
    <button disabled className="btn btn-secondary" style={{ width: "100%" }}>
     Լրացնել
    </button>
  )}
</div>

        
      </form>
    </div>
  );
}

export default PaymentForm;
