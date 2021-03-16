import React, { useState, useEffect } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";

const Balance = ({ balance }) => {
  const [currency, setCurrency] = useState();
  const { t } = useTranslation();

  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get(
        "https://api.exchangeratesapi.io/latest?base=HUF"
      );
      setCurrency(response.data);
    };
    fetch();
  }, []);

  return (
    <div className="tabs">
      <h2> {t("saldo")} </h2>
      <div className="saldo" style={{ color: balance > 0 ? "green" : "red" }}>
        {Math.abs(balance)} HUF
      </div>
      <br />
      <div className="currencies">
        <p> {Math.abs((currency?.rates.EUR * balance).toFixed(2))} EUR </p>
        <p> {Math.abs((currency?.rates.USD * balance).toFixed(2))} USD </p>
        <p> {Math.abs((currency?.rates.GBP * balance).toFixed(2))} GBP </p>
      </div>
    </div>
  );
};
export default Balance;
