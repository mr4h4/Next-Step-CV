import React, {useState} from "react";
import {useTranslation} from "react-i18next";
import TitleH2 from "../../common/TitleH2.tsx";
import ButtonBlue from "../../common/Buttons/Button-Blue.tsx";
import ButtonRed from "../../common/Buttons/Button-Red.tsx";
import AbiltyItem from "./AbiltyItem.tsx";
import ButtonGreen from "../../common/Buttons/Button-Green.tsx";


const AbilitiesContainer: React.FC = () => {
    const {t} = useTranslation();

    const [isVisible, setIsVisible] = useState<boolean>(false);

    const handleAbilitiesVisibility = () => {
        setIsVisible((prev) => !prev);
    };

    const [abilityItems, setAbilityItems] = useState<number[]>([]);

    const handleAddAbility = () => {
        setAbilityItems(prev => [...prev, prev.length]);
    }

    const handleDelAbility = () => {
        setAbilityItems(prev => prev.slice(0, -1));
    }


    const toggleButtonText = isVisible
        ? t("ability-hide-button")
        : t("ability-show-button");

    return (
        <div className="flex flex-col justify-center items-center w-full gap-10">
            <TitleH2 text={t("ability-section-title")}/>
            <ButtonBlue onClickAction={handleAbilitiesVisibility} placeholder={toggleButtonText}/>

            {isVisible && (
                <div className="flex flex-col justify-center items-center w-full gap-5">
                    {
                        abilityItems.map((id) => (
                            <AbiltyItem key={id}/>
                        ))
                    }
                    <ButtonGreen
                        onClickAction={handleAddAbility}
                        placeholder={t("ability-add-ability-button")}
                    />
                    {abilityItems.length > 0 && (
                        <ButtonRed
                            onClickAction={handleDelAbility}
                            placeholder={t("ability-del-ability-button")}/>
                    )}
                </div>
            )}
        </div>
    );
};

export default AbilitiesContainer;
