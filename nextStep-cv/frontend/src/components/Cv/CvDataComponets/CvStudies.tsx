import React from "react"
import type {CvData} from "../../../types/cvDataInterfaces";
import {useTranslation} from "react-i18next";

interface Props {
    cvData: CvData['studies'];
    setCvData: React.Dispatch<React.SetStateAction<CvData['studies']>>;
}

const CvStudies: React.FC<Props> = ({cvData, setCvData}) => {
    return(

    );
}

export default CvStudies;