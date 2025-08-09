import React from "react";
import type { CvData } from "../../types/cvDataInterfaces.ts";
import { useTranslation } from "react-i18next";

import TextH3 from "../common/text/TextH3.tsx";
import TextH4 from "../common/text/TextH4.tsx";
import TextP from "../common/text/TextP.tsx";
import Spliter from "../common/Spliter.tsx";
import TextH5 from "../common/text/TextH5.tsx";

interface CvPreviewProps extends React.HTMLAttributes<HTMLDivElement> {
    cvData: CvData;
}

const CvPreview: React.FC<CvPreviewProps> = ({ cvData, ...rest }) => {
    const { t } = useTranslation();
    const combinedClassName = ` hidden xl:grid grid-cols-3 w-full h-auto  bg-gray-200 border-2 border-[#e3e3e3] rounded-lg   ${rest.className || ''}`;

    return (
        <div
            className={combinedClassName}
        >
            <div className="p-5 flex flex-col gap-3 col-span-2">
                <img
                    className="w-24 h-24"
                    src={cvData.image.url}
                    alt={cvData.image.altText}
                />
                <TextH3
                    className="font-semibold"
                    content={`${cvData.personalInfo.name === "" ? t("preview-name") : cvData.personalInfo.name} ${cvData.personalInfo.surname === "" ? t("preview-surname") : cvData.personalInfo.surname}`}
                />
                <TextP
                    content={`${cvData.personalInfo.description === "" ? t("preview-description") : cvData.personalInfo.description}`}
                />
                <TextH4
                    className="font-bold text-blue-600"
                    content={t("preview-job-experience-title")}
                />

                <div className="p-2">
                    {cvData.jobExperience.map((jobExperience, index) => (
                        <div key={index}>
                            <TextH5 className={"font-semibold"} content={jobExperience.role}/>
                            <TextP className={"text-gray-500"} key={index} content={
                                <>
                                    <span className="font-semibold">{jobExperience.company}</span>
                                    <span> | {jobExperience.startDate} - {jobExperience.endDate}</span>
                                </>
                            }/>
                            <TextP content={jobExperience.description}/>
                        </div>
                    ))}
                </div>

                <TextH4
                    className="font-bold text-blue-600"
                    content={t("preview-abilities-title")}
                />

                <ul>
                    {cvData.abilities.map((ability, index) => (
                        <TextP key={index} content={ability}/>
                    ))}
                </ul>

            </div>

            <div
                className="p-5 bg-slate-700 text-white"
            >
                <TextH4
                    className={"font-bold"}
                    content={t("preview-data-contact-title")}
                />
                <Spliter/>
                <div className={"p-2"}>
                    <TextP content={cvData.personalInfo.address === "" ? t("preview-address") : cvData.personalInfo.address}/>
                    <TextP content={
                        <span className={"font-semibold"}>
                           {t("preview-email")} {cvData.personalInfo.email}
                        </span>
                    }/>
                    <TextP content={
                        <span className={"font-semibold"}>
                           {t("preview-phoneNumber")} {cvData.personalInfo.phoneNumber}
                        </span>
                    }/>
                </div>

                <TextH4
                    className={"font-bold"}
                    content={t("preview-studies-title")}
                />
                <Spliter/>
                <div className={"p-2"}>
                    {cvData.studies.map((study, index) => (
                        <div key={index}>
                            <TextH5 className={"font-semibold"} content={study.title}/>
                            <TextP content={study.institution}/>
                            <TextP content={`${study.startDate} - ${study.endDate}`}/>
                            <TextP content={study.description}/>
                        </div>
                    ))}
                </div>

                <TextH4
                    className={"font-bold"}
                    content={t("preview-langs-title")}
                />
                <Spliter/>
                <div className={"p-2"}>
                    {cvData.languages.map((lang, index) => (
                        <TextP key={index} content={
                            <span>
                                <span className="font-bold">{lang.name}</span>: {lang.level}
                            </span>
                        }/>
                    ))}
                </div>


            </div>
        </div>
    );

}

export default CvPreview;