import React, {useState} from "react";
import {useTranslation} from "react-i18next";
import TitleH2 from "../../common/TitleH2.tsx";
import ButtonBlue from "../../common/Buttons/Button-Blue.tsx";
import ButtonRed from "../../common/Buttons/Button-Red.tsx";
import SkillItem from "./SkillItem.tsx";
import ButtonGreen from "../../common/Buttons/Button-Green.tsx";


const SkillsContainer: React.FC = () => {
    const {t} = useTranslation();

    const [isVisible, setIsVisible] = useState<boolean>(false);

    const handleSkillsVisibility = () => {
        setIsVisible((prev) => !prev);
    };

    const [skillItems, setSkillItems] = useState<number[]>([]);

    const handleAddSkill = () => {
        setSkillItems(prev => [...prev, prev.length]);
    }

    const handleDelSkill = () => {
        setSkillItems(prev => prev.slice(0, -1));
    }


    const toggleButtonText = isVisible
        ? t("skill-hide-button")
        : t("skill-show-button");

    return (
        <div className="flex flex-col justify-center items-center w-full gap-10">
            <TitleH2 text={t("skill-section-title")}/>
            <ButtonBlue onClickAction={handleSkillsVisibility} placeholder={toggleButtonText}/>

            {isVisible && (
                <div className="flex flex-col justify-center items-center w-full gap-5">
                    {
                        skillItems.map((id) => (
                            <SkillItem key={id}/>
                        ))
                    }
                    <ButtonGreen
                        onClickAction={handleAddSkill}
                        placeholder={t("skill-add-skill-button")}
                    />
                    {skillItems.length > 0 && (
                        <ButtonRed
                            onClickAction={handleDelSkill}
                            placeholder={t("skill-del-skill-button")}/>
                    )}
                </div>
            )}
        </div>
    );
};

export default SkillsContainer;
