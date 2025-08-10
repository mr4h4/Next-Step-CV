import React from "react";
import type {CvData} from "../../../../types/cvDataInterfaces.ts";
import {useTranslation} from "react-i18next";

// Components
import InputText from "../InputText.tsx";
import InputDate from "../InputDate.tsx";
import InputTextArea from "../InputTextArea.tsx";

interface Props {
    jobData: CvData['jobExperience'][0];
    jobIndex: number;
    onJobChange: (index: number, name: string, value: string) => void;
}

const CvStudy: React.FC<Props> = ({jobData, jobIndex, onJobChange}) => {
    const {t} = useTranslation();

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = event.target;
        onJobChange(jobIndex, name, value);
    };

    return (
        <div className="flex flex-col gap-5 justify-center items-center mx-auto max-w-lg">
            <InputText
                placeholder={t("form-jobExperience-role")}
                className="w-full"
                name="role"
                value={jobData?.role ?? ""}
                onChange={handleInputChange}
            />
            <InputText
                placeholder={t("form-jobExperience-company")}
                className="w-full"
                name="company"
                value={jobData?.company ?? ""}
                onChange={handleInputChange}
            />

            <div className="space-y-3 w-full">
                <div className="flex items-center gap-5">
                    <label htmlFor={`study-startDate-${jobIndex}`} className="min-w-[8rem] text-right">
                        {t("form-startDate")}
                    </label>
                    <InputDate
                        id={`study-startDate-${jobIndex}`}
                        type="month"
                        className="flex-1"
                        name="startDate"
                        value={jobData?.startDate ?? ""}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="flex items-center gap-5">
                    <label htmlFor={`study-endDate-${jobIndex}`} className="min-w-[8rem] text-right">
                        {t("form-endDate")}
                    </label>
                    <InputDate
                        id={`study-endDate-${jobIndex}`}
                        type="month"
                        className="flex-1"
                        name="endDate"
                        value={jobData?.endDate ?? ""}
                        onChange={handleInputChange}
                    />
                </div>
            </div>
            <InputTextArea
                placeholder={t("form-description")}
                name="description"
                value={jobData?.description ?? ""}
                onChange={handleInputChange}
            />
        </div>
    );
};

export default CvStudy;