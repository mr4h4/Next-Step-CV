import React from "react";
import { useTranslation } from "react-i18next";

const LanguageSelector: React.FC = () => {
    const { i18n } = useTranslation();

    const changeLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedLang = event.target.value;
        i18n.changeLanguage(selectedLang);
    };

    const currentLanguage: string|undefined = i18n.resolvedLanguage;

    return (
        <div className="relative flex flex-col items-center gap-5 text-center w-fit ">
            <select
                id="language-select"
                value={currentLanguage === undefined ? "es" : currentLanguage}
                onChange={changeLanguage}
                className="p-1 rounded border border-gray-300 bg-gray-200"
            >
                <option value="es">🇪🇸 ES</option>
                <option value="en">🇬🇧 EN</option>
            </select>
        </div>
    );
}

export default LanguageSelector;