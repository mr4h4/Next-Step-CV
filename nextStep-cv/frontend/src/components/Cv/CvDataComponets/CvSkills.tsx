import React, {useState} from "react";
import {useTranslation} from "react-i18next";
import type {CvData} from "../../../types/cvDataInterfaces.ts";
import Button from "../../common/Button.tsx";
import InputText from "../../common/inputs/InputText.tsx";

interface Props {
    cvSkills: CvData['skills'];
    setSkills: React.Dispatch<React.SetStateAction<CvData['skills']>>;
}

const CvSkills: React.FC<Props> = ({cvSkills, setSkills}) => {
    const {t} = useTranslation();
    const [isShowing, setIsShowing] = useState<boolean>(false);

    const handleSkillChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const value = event.target.value;
        setSkills(prevSkills => {
            return prevSkills.map((skill, i) => {
                return i === index ? value : skill;
            });
        });
    }

    const handleAddSkill = () => {
        setSkills(prevSkills => [
            ...prevSkills,
            ""
        ]);
    };

    const handleRemoveLastSkill = () => {
        setSkills(prevSkils => {
            return prevSkils.slice(0, -1);
        });
    };

    return (
        <div className="flex flex-col gap-5 w-full">
            <Button
                className={`${isShowing ? "bg-amber-200 hover:bg-amber-300" : "bg-blue-300 hover:bg-blue-400"} w-full`}
                onClick={() => setIsShowing(!isShowing)}
                content={isShowing ? t("form-skills-hide-button") : t("form-skills-show-button")}
            />

            {isShowing && (
                <div className="flex flex-col gap-5">
                    {cvSkills.length > 0 && (
                        <div className="flex flex-col gap-5">
                            {cvSkills.map((skill, index) => {
                                return (
                                    <InputText
                                        key={index}
                                        value={skill ?? ""}
                                        onChange={(e) => handleSkillChange(e, index)}
                                        placeholder={t("form-skills-name")}
                                    />
                                );
                            })}
                        </div>
                    )}
                    <Button
                        className="bg-green-300 hover:bg-green-400"
                        content={t("form-skills-add-ability")}
                        onClick={handleAddSkill}
                    />
                    <Button
                        className="bg-red-300 hover:bg-red-400"
                        content={t("form-skills-remove-ability")}
                        onClick={handleRemoveLastSkill}
                    />
                </div>

            )}
        </div>
    );
}

export default CvSkills;