import React, {useState} from "react"
import type {CvData} from "../../../types/cvDataInterfaces";

import {useTranslation} from "react-i18next";
import Button from "../../common/Button.tsx";
import Splitter from "../../common/Splitter.tsx";
import JobExperience from "../../common/inputs/special-Inputs/JobExperience.tsx";

interface Props {
    cvDataJobExperience: CvData['jobExperience'];
    setCvDataJobExperience: React.Dispatch<React.SetStateAction<CvData['jobExperience']>>;
}

const CvJobExperience: React.FC<Props> = ({cvDataJobExperience, setCvDataJobExperience}) => {
    const {t} = useTranslation();
    const [isShowing, setIsShowing] = useState<boolean>(false);

    const handleAddStudy = () => {
        const emptyStudy: CvData['jobExperience'][0] = {
            role: "",
            company: "",
            startDate: "",
            endDate: "",
            description: ""
        };

        // El setter espera el objeto completo, así que actualizamos la propiedad 'studies'.
        setCvDataJobExperience(prevStudies => [
            ...prevStudies,
            emptyStudy
        ]);
    };

    const handleRemoveLastStudy = () => {
        setCvDataJobExperience(prevStudies => {
            return prevStudies.slice(0, -1);
        });
    };


    // SET DATA
    const handleStudyChange = (index: number, name: string, value: string) => {
        setCvDataJobExperience(prevStudies => {
            return prevStudies.map((study, i) => {
                if (i === index) {
                    return {...study, [name]: value};
                }
                return study;
            });
        });
    }


    return (
        <div className="flex flex-col gap-5 w-full">
            <Button
                className={`${isShowing ? "bg-amber-100 hover:bg-amber-200" : "bg-blue-300 hover:bg-blue-400"} w-full`}
                onClick={() => setIsShowing(!isShowing)}
                content={isShowing ? t("form-jobExperience-hide-button") : t("form-jobExperience-show-button")}
            />

            {isShowing && (
                <div className="flex flex-col gap-5">
                    {cvDataJobExperience.length > 0 && (
                        <div className="flex flex-col gap-5">
                            {cvDataJobExperience.map((study, index) => (
                                <>
                                    <JobExperience
                                        key={index}
                                        jobData={study}
                                        jobIndex={index}
                                        onJobChange={handleStudyChange}
                                    />
                                    <Splitter/>
                                </>

                            ))}
                        </div>
                    )}
                    <Button
                        className="bg-green-300 hover:bg-green-400"
                        content={t("form-jobExperience-add-job")}
                        onClick={() => handleAddStudy()}
                    />
                    <Button
                        className="bg-red-300 hover:bg-red-400"
                        content={t("form-jobExperience-remove-job")}
                        onClick={() => handleRemoveLastStudy()}
                    />
                </div>
            )}
        </div>
    );
}

export default CvJobExperience;