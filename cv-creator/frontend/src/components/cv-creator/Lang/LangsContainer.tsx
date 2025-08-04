import React, {useState} from "react";
import {useTranslation} from "react-i18next";
import TitleH2 from "../common/TitleH2.tsx";
import ButtonBlue from "../common/Buttons/Button-Blue.tsx";
import ButtonRed from "../common/Buttons/Button-Red.tsx";
import LangItem from "./LangItem.tsx";
import ButtonGreen from "../common/Buttons/Button-Green.tsx";


const LangsContainer: React.FC = () => {
    const {t} = useTranslation();

    const [isVisible, setIsVisible] = useState<boolean>(false);

    const handleLangsVisibility = () => {
        setIsVisible((prev) => !prev);
    };

    const [langItems, setLangItems] = useState<number[]>([]);

    const handleAddLang = () => {
        setLangItems(prev => [...prev, prev.length]);
    }

    const handleDelLang = () => {
        setLangItems(prev => prev.slice(0, -1));
    }


    const toggleButtonText = isVisible
        ? t("lang-hide-button")
        : t("lang-show-button");

    return (
        <div className="flex flex-col justify-center items-center w-full gap-10">
            <TitleH2 text={t("lang-section-title")}/>
            <ButtonBlue onClickAction={handleLangsVisibility} placeholder={toggleButtonText}/>

            {isVisible && (
                <div className="flex flex-col justify-center items-center w-full gap-5">
                    {
                        langItems.map((id) => (
                            <LangItem key={id}/>
                        ))
                    }
                    <ButtonGreen
                        onClickAction={handleAddLang}
                        placeholder={t("lang-add-lang-button")}
                    />
                    {langItems.length > 0 && (
                        <ButtonRed
                            onClickAction={handleDelLang}
                            placeholder={t("lang-del-lang-button")}/>
                    )}
                </div>
            )}
        </div>
    );
};

export default LangsContainer;
