import React, { useState } from "react";

const EntryList = ({ entries, balance, setBalance }) => {
  const [deletedItems, setDeletedItems] = useState([]);

  const deleteItem = (elem) => {
    setDeletedItems([...deletedItems, elem.id]);
    setBalance(
      elem.spending === "true"
        ? balance + parseInt(elem.amount)
        : balance - parseInt(elem.amount)
    );
  };

  return (
    <>
      {entries
        ?.filter((elem) => !deletedItems.includes(elem.id))
        .map((elem) => (
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
