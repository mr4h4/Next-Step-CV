import {useState} from "react";
import type {CvData} from "../types/cvDataInterfaces.ts";

const initialCvData: CvData = {
    image: {
        url: "src/assets/defaultUserImage.svg",
        altText: "Default User Image"
    },
    personalInfo: {
        name: "",
        surname: "",
        address: "",
        email: "",
        phoneNumber: "",
        description: "",
    },
    studies: [],
    jobExperience: [],
    languages: [],
    abilities: [],
    otherActivities: [],
    socialNetworks: [],
};

export const useCvData = () => {
    const [cvData, setCvData] = useState<CvData>(initialCvData);
    return {cvData, setCvData};
}