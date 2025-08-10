import React from "react";
import type {CvData} from "../../types/cvDataInterfaces.ts";
import {useTranslation} from "react-i18next";

// Components
import CvPersonalInfo from "./CvDataComponets/CvPersonalInfo.tsx";
import TextH2 from "../common/text/TextH2.tsx";
import Splitter from "../common/Splitter.tsx";
import CvImageSelector from "./CvDataComponets/CvImageSelector.tsx";

interface Props {
    cvData: CvData;
    setCvData: React.Dispatch<React.SetStateAction<CvData>>
}

const CvForm: React.FC<Props> = ({cvData, setCvData}) => {
    const {t} = useTranslation();

    // Create a new Image setter function
    const setImageData = React.useCallback((action: React.SetStateAction<CvData['image']>) => {
        setCvData(prevCvData => {
            const newImage = typeof action === 'function'
                ? action(prevCvData.image)
                : action;

            return {
                ...prevCvData,
                image: newImage,
            };
        });
    }, [setCvData])

    // Create a new CvPersonalInfo setter function
    const setPersonalInfoData = React.useCallback((action: React.SetStateAction<CvData['personalInfo']>) => {
        setCvData(prevCvData => {
            const newInfo = typeof action === 'function'
                ? action(prevCvData.personalInfo)
                : action;

            return {
                ...prevCvData,
                personalInfo: newInfo,
            };
        });
    }, [setCvData]);


    return (
        <div
            className="
                flex flex-col items-center justify-center gap-5
                w-full h-auto p-10
                bg-gray-200 rounded-lg border-3 border-gray-200

            "
        >
            <TextH2 className={"font-mono text-gray-800 text-center p-4 mb-5"}>{t("cv-form-title")}</TextH2>
            <CvImageSelector
                cvDataImage={cvData.image}
                setImageData={setImageData}
            />
            <Splitter/>
            <CvPersonalInfo
                cvDataPersonalInfo={cvData.personalInfo}
                setPersonalInfoData={setPersonalInfoData}
            />
            <Splitter/>
        </div>
    );
}

export default CvForm;