import React, {useState} from "react";
import {useTranslation} from "react-i18next";
import TitleH2 from "../common/TitleH2.tsx";
import ButtonBlue from "../common/Buttons/Button-Blue.tsx";
import StudyItem from "./StudyItem.tsx";
import ButtonRed from "../common/Buttons/Button-Red.tsx";
import ButtonGreen from "../common/Buttons/Button-Green.tsx";

const StudiesContainer: React.FC = () => {
    const {t} = useTranslation();

    const [isVisible, setIsVisible] = useState<boolean>(false);

    const handleStudiesVisibility = () => {
        setIsVisible((prev) => !prev);
    };

    const [studyItems, setStudyItems] = useState<number[]>([]);

    const handleAddStudy = () => {
        setStudyItems(prev => [...prev, prev.length]);
    }

    const handleDelStudy = () => {
        setStudyItems(prev => prev.slice(0, -1));
    }


    const toggleButtonText = isVisible
        ? t("studies-hide-button")
        : t("studies-show-button");

    return (
        <div className="flex flex-col justify-center items-center w-full gap-10">
            <TitleH2 text={t("studies-section-title")}/>
            <ButtonBlue onClickAction={handleStudiesVisibility} placeholder={toggleButtonText}/>

            {isVisible && (
                <div className="flex flex-col justify-center items-center w-full gap-5">
                    {
                        studyItems.map((id) => (
                            <StudyItem key={id}/>
                        ))
                    }
                    <ButtonGreen
                        onClickAction={handleAddStudy}
                        placeholder={t("studies-add-study-button")}
                    />
                    {studyItems.length > 0 && (
                        <ButtonRed
                            onClickAction={handleDelStudy}
                            placeholder={t("studies-del-study-button")}/>
                    )}
                </div>
            )}
        </div>
    );
};

export default StudiesContainer;
