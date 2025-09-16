import React from "react";
import type { CvData } from "../../types/cvDataInterfaces.ts";
import { useTranslation } from "react-i18next";

import TextH3 from "../common/text/TextH3.tsx";
import TextH4 from "../common/text/TextH4.tsx";
import TextP from "../common/text/TextP.tsx";
import Splitter from "../common/Splitter.tsx";
import TextH5 from "../common/text/TextH5.tsx";
import PreviewSocialNetwork from "../common/PreviewSocialNetwork.tsx";

interface CvPreviewProps extends React.HTMLAttributes<HTMLDivElement> {
    cvData: CvData;
}

const CvPreview: React.FC<CvPreviewProps> = ({ cvData, ...rest }) => {
    const { t } = useTranslation();
    const combinedClassName = ` hidden xl:flex xl:flex-row w-[210mm] h-[297mm] bg-gray-200 border-2 border-[#e3e3e3] rounded-lg ${rest.className || ''}`;

    return (
        <div
            className={combinedClassName}
        >
            {/*RIGHT COL*/}
            <div className="p-5 flex flex-col gap-3 flex-[2.5] w-full">
                <img
                    className="w-32 h-32 rounded-full
                    "
                    src={cvData.image.url}
                    alt={cvData.image.altText}
                />
                <TextH3 className="font-semibold">{`${cvData.personalInfo.name === "" ? t("preview-name") : cvData.personalInfo.name} ${cvData.personalInfo.surname === "" ? t("preview-surname") : cvData.personalInfo.surname}`}</TextH3>

                <div className="max-w-[90%] break-words overflow-hidden">
                    <TextP className="break-words text-justify">{cvData.personalInfo.description}</TextP>
                </div>

                <TextH4
                    className="font-bold text-blue-600"
                >
                    {t("preview-job-experience-title")}
                </TextH4>

                <div className="p-2">
                    {cvData.jobExperience.map((jobExperience, index) => (
                        <div key={index}>
                            <TextH5 className={"font-semibold"}>{jobExperience.role}</TextH5>
                            <TextP className={"text-gray-500"}>
                                <span className="font-semibold">{jobExperience.company}</span>
                                <span> | {jobExperience.startDate} - {jobExperience.endDate === "" ? t("preview-actuality") : jobExperience.endDate}</span>
                            </TextP>
                            <TextP>{jobExperience.description}</TextP>
                        </div>
                    ))}
                </div>

                <TextH4 className="font-bold text-blue-600">{t("preview-skills-title")}</TextH4>

                <ul>
                    {cvData.skills.map((skill, index) => (
                        <TextP key={index}>{skill}</TextP>
                    ))}
                </ul>

                {cvData.socialNetworks.length > 0 && (
                    <div>
                        <TextH4 className="font-bold text-blue-600">{t("preview-social-networks-title")}</TextH4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                            {cvData.socialNetworks.map((network, index) => (
                                <PreviewSocialNetwork
                                    key={index}
                                    name={network.name}
                                    logo_link={network.logo_link}
                                    link_label={network.link_label}
                                    username_label={network.username_label}
                                />
                            ))}
                        </div>
                    </div>
                )}

            </div>
            {/*LEFT COL*/}
            <div
                className="flex-[1.5] p-5 bg-slate-700 text-white"
            >
                <TextH4 className={"font-bold"}>{t("preview-data-contact-title")}</TextH4>
                <Splitter/>
                <div className={"p-2"}>
                    <TextP>{cvData.personalInfo.address === "" ? t("preview-address") : cvData.personalInfo.address}</TextP>
                    <TextP>
                        <span className={"font-semibold"}>
                           {t("preview-email")}
                        </span>
                        <span>
                            {cvData.personalInfo.email}
                        </span>
                    </TextP>

                    <TextP>
                        <span className={"font-semibold"}>
                           {t("preview-phoneNumber")}
                        </span>
                        <span>
                            {cvData.personalInfo.phoneNumber}
                        </span>
                    </TextP>
                </div>

                <TextH4 className={"font-bold"}>{t("preview-studies-title")}</TextH4>
                <Splitter/>
                <div className={"p-2"}>
                    {cvData.studies.map((study, index) => (
                        <div key={index}>
                            <TextH5 className={"font-semibold"}>{study.title}</TextH5>
                            <TextP>{study.institution}</TextP>
                            <TextP>{`${study.startDate} - ${study.endDate === "" ? t("preview-actuality") : study.endDate}`}</TextP>
                        </div>
                    ))}
                </div>

                <TextH4 className={"font-bold"}>{t("preview-langs-title")}</TextH4>
                <Splitter/>
                <div className={"p-2"}>
                    <ul>
                        {cvData.languages.map((lang, index) => (
                            <li key={index} >
                                <TextP>
                                <span>
                                    <span className="font-bold">{lang.name}</span>: {lang.level}
                                </span>
                                </TextP>
                            </li>
                        ))}
                    </ul>
                </div>

                <TextH4 className={"font-bold"} >{t("preview-activities-title")}</TextH4>
                <Splitter/>
                <div className={"p-2"}>
                    <ul className="flex flex-col gap-2">
                        {cvData.otherActivities.map((activity, index) => (
                            <li key={index} >
                                <TextP>{activity}</TextP>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        </div>
    );
}

export default CvPreview;