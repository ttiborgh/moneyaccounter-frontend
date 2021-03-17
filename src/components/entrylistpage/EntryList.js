import axios from "axios";
import React from "react";
import { useTranslation } from "react-i18next";

const EntryList = ({ entries, setEntries, setBalance, userId }) => {
  const {t} = useTranslation();
  const deleteItem = async (elem) => {
    const response = await axios.delete(
      `/api/deleterecord/${elem.id}/${userId}`
    );
    setEntries(response.data.listOfRecords);
    setBalance(response.data.balance);
  };

  return (
    <>
      {entries
        .map((elem) => (
          <div className="tabs list" key={elem.id}>
            <h6> {elem.description} </h6>
            <label className="flex">
              <h6 style={{ color: elem.spending ? "red" : "green" }}>
                {elem.amount}
              </h6>
              <button className="deletebutton" onClick={() => deleteItem(elem)}>
              {t("delete")}
              </button>
            </label>
          </div>
        ))
        .reverse()}
    </>
  );
};

export default EntryList;
