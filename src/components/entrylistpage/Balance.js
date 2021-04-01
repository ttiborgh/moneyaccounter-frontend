import React, { useState, useEffect } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";

const Balance = ({ balance }) => {
  const [currency, setCurrency] = useState();
  const { t } = useTranslation();

  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get(
        "http://api.exchangeratesapi.io/v1/latest?access_key=ce435b7d26b67a460e0fe6d64fc1d4de&base=EUR&symbols=GBP,USD,HUF"
      );
      console.log(response.data);
      setCurrency(response.data);
    };
    fetch();
  }, []);

  {/* TODO: Fix currency exchanges, since the API became subscription based*/}

  return (
    <div className="tabs">
      <h2> {t("saldo")} </h2>
      <div className="saldo" style={{ color: balance > 0 ? "green" : "red" }}>
        {Math.abs(balance)} HUF
      </div>
      <br />
      <div className="currencies">
        <p> {Math.abs(((1 / currency?.rates.HUF) * balance).toFixed(2))} EUR </p>
        <p> {Math.abs((currency?.rates.USD * balance).toFixed(2))} USD </p>  
        <p> {Math.abs((currency?.rates.GBP * balance).toFixed(2))} GBP </p>
      </div>
    </div>
  );
};
export default Balance;
