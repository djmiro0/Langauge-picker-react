import React, { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";

export default function LanguageChooser() {
  const { language, setLanguage } = useContext(LanguageContext);

  return (
    <div>
      <select value={language} onChange={(e) => setLanguage(e.target.value)}>
        <option value="DE">🇩🇪&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;German</option>
        <option value="US">🇺🇸&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;English</option>
        <option value="TR">🇹🇷&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Turkish</option>
        <option value="IR">🇮🇷&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Persian</option>
        <option value="FR">🇫🇷&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;French</option>
        <option value="SP">🇪🇸&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Spanish</option>
        <option value="DU">🇳🇱&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dutch</option>
      </select>
    </div>
  );
}
