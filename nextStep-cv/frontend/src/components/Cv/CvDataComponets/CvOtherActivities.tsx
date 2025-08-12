import React, {useState} from "react";
import {useTranslation} from "react-i18next";
import type {CvData} from "../../../types/cvDataInterfaces.ts";
import Button from "../../common/Button.tsx";
import InputText from "../../common/inputs/InputText.tsx";

interface Props {
    cvActivities: CvData['otherActivities'];
    setActivities: React.Dispatch<React.SetStateAction<CvData['otherActivities']>>;
}

const CvOtherActivities: React.FC<Props> = ({cvActivities, setActivities}) => {
    const {t} = useTranslation();
    const [isShowing, setIsShowing] = useState<boolean>(false);

    const handleActivityChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const value = event.target.value;
        setActivities(prevActivities => {
            return prevActivities.map((activity, i) => {
                return i === index ? value : activity;
            });
        });
    }

    const handleAddActivity = () => {
        setActivities(prevActivities => [
            ...prevActivities,
            ""
        ]);
    };

    const handleRemoveLastActivity = () => {
        setActivities(prevActivities => {
            return prevActivities.slice(0, -1);
        });
    };

    return (
        <div className="flex flex-col gap-5 w-full">
            <Button
                className={`${isShowing ? "bg-amber-100 hover:bg-amber-200" : "bg-blue-300 hover:bg-blue-400"} w-full`}
                onClick={() => setIsShowing(!isShowing)}
                content={isShowing ? t("form-otherActivities-hide-button") : t("form-otherActivities-show-button")}
            />

            {isShowing && (
                <div className="flex flex-col gap-5">
                    {cvActivities.length > 0 && (
                        <div className="flex flex-col gap-5">
                            {cvActivities.map((activity, index) => {
                                return (
                                    <InputText
                                        key={index}
                                        value={activity ?? ""}
                                        onChange={(e) => handleActivityChange(e, index)}
                                        placeholder={t("form-otherActivities-name")}
                                    />
                                );
                            })}
                        </div>
                    )}
                    <Button
                        className="bg-green-300 hover:bg-green-400"
                        content={t("form-otherActivities-add-activity")}
                        onClick={handleAddActivity}
                    />
                    <Button
                        className="bg-red-300 hover:bg-red-400"
                        content={t("form-otherActivities-remove-activity")}
                        onClick={handleRemoveLastActivity}
                    />
                </div>

            )}
        </div>
    );
}

export default CvOtherActivities;