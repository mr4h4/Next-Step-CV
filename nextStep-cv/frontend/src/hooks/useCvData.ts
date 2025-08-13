import {useState} from "react";
import type {CvData} from "../types/cvDataInterfaces.ts";

const initialCvData: CvData = {
    image: {
        url: "public/defaultUserImage.svg",
        altText: "Default User Image",
        file: null
    },
    personalInfo: {
        name: "",
        surname: "",
        address: "",
        email: "",
        phoneNumber: "",
        description: ""
    },
    studies: [],
    jobExperience: [],
    languages: [],
    skills: [],
    otherActivities: [],
    socialNetworks: [],
};

export const useCvData = () => {
    const [cvData, setCvData] = useState<CvData>(initialCvData);
    return {cvData, setCvData};
}