import React from "react";
import style from "./ThankYouPage.module.scss";

const ThankYouPage = () => {
  return (
    <div className={style.thankYouPage}>
      <h2>Dziękujemy za rejestrację w naszym sklepie.</h2>
      <p>
        Na Twój adres e-mail zostanie wysłane potwierdzenie rejestracji
        zawierające Twój login i hasło.{" "}
      </p>
      <p>Życzymy udanych zakupów,</p>
      <p>Zespół Gamershop</p>
    </div>
  );
};

export default ThankYouPage;
