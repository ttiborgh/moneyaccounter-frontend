import axios from "axios";
import React from "react";

const EntryList = ({ entries, setEntries, setBalance, userId }) => {
  const deleteItem = async (elem) => {
    const response = await axios.delete(
      `/api/deleterecord/${elem.id}/${userId}`
    );
    setEntries(response.data.listOfRecords);
    setBalance(response.data.balance);
  };

  return (
    <>
      {entries.map((elem) => (
        <div className="tabs list" key={elem.id}>
          <h6> {elem.description} </h6>
          <label className="flex">
            <h6 style={{ color: elem.spending === "true" ? "red" : "green" }}>
              {elem.amount}
            </h6>
            <button onClick={() => deleteItem(elem)}>Löschen</button>
          </label>
        </div>
      ))}
    </>
  );
};

export default EntryList;
