import React, { useState, useEffect } from "react";
import axios from "axios";

const Balance = ({ balance }) => {
  const [currency, setCurrency] = useState();

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
      <h2> Saldo </h2>
      <div className="saldo" style={{ color: balance > 0 ? "green" : "red" }}>
        {Math.abs(balance)} HUF
      </div>
      <br />
      <div className="currencies">
        <p> {Math.abs((currency?.rates.EUR * balance).toFixed(1))} EUR </p>
        <p> {Math.abs((currency?.rates.USD * balance).toFixed(1))} USD </p>
        <p> {Math.abs((currency?.rates.GBP * balance).toFixed(1))} GBP </p>
      </div>
    </div>
  );
};
export default Balance;
