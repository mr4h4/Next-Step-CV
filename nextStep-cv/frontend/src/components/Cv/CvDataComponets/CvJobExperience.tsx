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

    const handleAddJob = () => {
        const emptyJob: CvData['jobExperience'][0] = {
            role: "",
            company: "",
            startDate: "",
            endDate: "",
            description: ""
        };

        setCvDataJobExperience(prevJobs => [
            ...prevJobs,
            emptyJob
        ]);
    };

    const handleRemoveLastJob = () => {
        setCvDataJobExperience(prevJobs => {
            return prevJobs.slice(0, -1);
        });
    };


    // name is the value who's going to change -> Example: name : role
    const handleJobChange = (index: number, name: string, value: string) => {
        setCvDataJobExperience(prevJobs => {
            return prevJobs.map((job, i) => {
                if (i === index) {
                    return {...job, [name]: value};
                }
                return job;
            });
        });
    }


    return (
        <div className="flex flex-col gap-5 w-full">
            <Button
                className={`${isShowing ? "bg-amber-200 hover:bg-amber-300" : "bg-blue-300 hover:bg-blue-400"} w-full`}
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
                                        onJobChange={handleJobChange}
                                    />
                                    <Splitter/>
                                </>

                            ))}
                        </div>
                    )}
                    <Button
                        className="bg-green-300 hover:bg-green-400"
                        content={t("form-jobExperience-add-job")}
                        onClick={() => handleAddJob()}
                    />
                    <Button
                        className="bg-red-300 hover:bg-red-400"
                        content={t("form-jobExperience-remove-job")}
                        onClick={() => handleRemoveLastJob()}
                    />
                </div>
            )}
        </div>
    );
}

export default CvJobExperience;