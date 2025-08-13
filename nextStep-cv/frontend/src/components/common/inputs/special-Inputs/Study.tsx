import React from "react";
import type {CvData} from "../../../../types/cvDataInterfaces.ts";
import {useTranslation} from "react-i18next";

// Components
import InputText from "../InputText.tsx";
import InputDate from "../InputDate.tsx";

interface Props {
    studyData: CvData['studies'][0];
    studyIndex: number;
    onStudyChange: (index: number, name: string, value: string) => void;
}

const CvStudy: React.FC<Props> = ({studyData, studyIndex, onStudyChange}) => {
    const {t} = useTranslation();

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        onStudyChange(studyIndex, name, value);
    };

    return (
        <div className="flex flex-col gap-5 justify-center items-center mx-auto max-w-lg">
            <InputText
                placeholder={t("form-studies-title")}
                className="w-full"
                name="title"
                value={studyData?.title ?? ""}
                onChange={handleInputChange}
            />
            <InputText
                placeholder={t("form-studies-institution")}
                className="w-full"
                name="institution"
                value={studyData?.institution ?? ""}
                onChange={handleInputChange}
            />

            <div className="space-y-3 w-full">
                <div className="flex items-center gap-5">
                    <label htmlFor={`study-startDate-${studyIndex}`} className="min-w-[8rem] text-right">
                        {t("form-startDate")}
                    </label>
                    <InputDate
                        id={`study-startDate-${studyIndex}`}
                        type="month"
                        className="flex-1"
                        name="startDate"
                        value={studyData?.startDate ?? ""}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="flex items-center gap-5">
                    <label htmlFor={`study-endDate-${studyIndex}`} className="min-w-[8rem] text-right">
                        {t("form-endDate")}
                    </label>
                    <InputDate
                        id={`study-endDate-${studyIndex}`}
                        type="month"
                        className="flex-1"
                        name="endDate"
                        value={studyData?.endDate ?? ""}
                        onChange={handleInputChange}
                    />
                </div>
            </div>

        </div>
    );
};

export default CvStudy;