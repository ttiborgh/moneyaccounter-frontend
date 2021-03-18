import React from "react";
import { useTranslation } from "react-i18next";

const SwitchLanguage = () => {
  const { i18n } = useTranslation();

  const actualLanguage = i18n.language;

  const handleChange = (e) => {
    i18n.changeLanguage(e.target.value);
    console.log(actualLanguage);
  };

  return (
    <select
      className="form-select"
      value={actualLanguage}
      onChange={handleChange}
    >
      <option value="en">🇬🇧 English</option>
      <option value="de">🇩🇪 Deutsch</option>
      <option value="hu">🇭🇺 Magyar</option>
    </select>
  );
};

export default SwitchLanguage;
