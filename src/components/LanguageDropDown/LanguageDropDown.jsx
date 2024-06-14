import { MdArrowDropDown } from "react-icons/md";
import { RiTranslate2 } from "react-icons/ri";

export default function LanguageDropDown() {
  return (
    <div className="languages-container">
      <RiTranslate2 className="translation-icon" />
      <select name="languages" className="languages">
        <option value="العربية">العربية</option>
        <option value="Français">Français</option>
        <option value="english">english</option>
      </select>
      <MdArrowDropDown className="arrow-down-icon" />
    </div>
  );
}
