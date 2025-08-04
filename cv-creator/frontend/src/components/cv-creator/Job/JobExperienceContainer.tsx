import React, {useState} from "react";
import {useTranslation} from "react-i18next";
import TitleH2 from "../common/TitleH2.tsx";
import JobItem from "./JobItem.tsx";
import ButtonRed from "../common/Buttons/Button-Red.tsx";
import ButtonGreen from "../common/Buttons/Button-Green.tsx";
import ButtonBlue from "../common/Buttons/Button-Blue.tsx";

const JobExperienceContainer: React.FC = () => {
    const {t} = useTranslation();

    const [isVisible, setIsVisible] = useState<boolean>(false);

    const handleJobsVisibility = () => {
        setIsVisible((prev) => !prev);
    };

    const [jobItems, setJobItems] = useState<number[]>([]);

    const handleAddJob = () => {
        setJobItems(prev => [...prev, prev.length]);
    }

    const handleDelJob = () => {
        setJobItems(prev => prev.slice(0, -1));
    }


    const toggleButtonText = isVisible
        ? t("job-hide-button")
        : t("job-show-button");

    return (
        <div className="flex flex-col justify-center items-center w-full gap-10">
            <TitleH2 text={t("job-section-title")}/>
            <ButtonBlue onClickAction={handleJobsVisibility} placeholder={toggleButtonText}/>

            {isVisible && (
                <div className="flex flex-col justify-center items-center w-full gap-5">
                    {
                        jobItems.map((id) => (
                            <JobItem key={id}/>
                        ))
                    }
                    <ButtonGreen
                        onClickAction={handleAddJob}
                        placeholder={t("job-add-job-button")}
                    />
                    {jobItems.length > 0 && (
                        <ButtonRed
                            onClickAction={handleDelJob}
                            placeholder={t("job-del-job-button")}/>
                    )}
                </div>
            )}
        </div>
    );
};

export default JobExperienceContainer;
