import React from "react";
import {useTranslation} from "react-i18next";
import type {CvData} from "../../../types/cvDataInterfaces";

// Components
import InputText from "../../common/inputs/InputText.tsx";
import InputTextArea from "../../common/inputs/InputTextArea.tsx";

interface Props {
    cvDataPersonalInfo: CvData['personalInfo'];
    setPersonalInfoData: React.Dispatch<React.SetStateAction<CvData['personalInfo']>>;
}

const CvPersonalInfo: React.FC<Props> = ({cvDataPersonalInfo, setPersonalInfoData}) => {
    const {t} = useTranslation();

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPersonalInfoData(prevInfo => ({
            ...prevInfo,
            name: event.target.value,
        }))
    }

    const handleSurnameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPersonalInfoData(prevInfo => ({
            ...prevInfo,
            surname: event.target.value,
        }))
    }

    const handleDescriptionChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setPersonalInfoData(prevInfo => ({
            ...prevInfo,
            description: event.target.value,
        }))
    }

    const handleAddressChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPersonalInfoData(prevInfo => ({
            ...prevInfo,
            address: event.target.value,
        }))
    }

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPersonalInfoData(prevInfo => ({
            ...prevInfo,
            email: event.target.value,
        }))
    }

    const handlePhoneNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPersonalInfoData(prevInfo => ({
            ...prevInfo,
            phoneNumber: event.target.value,
        }))
    }

    return (
        <div className="flex flex-col gap-5">
            <InputText
                placeholder={t("form-personal-info-name")}
                onChange={handleNameChange}
                value={cvDataPersonalInfo?.name ?? ""}
            />

            <InputText
                placeholder={t("form-personal-info-surname")}
                onChange={handleSurnameChange}
                value={cvDataPersonalInfo?.surname ?? ""}
            />

            <InputTextArea
                placeholder={t("form-personal-info-description")}
                onChange={handleDescriptionChange}
                value={cvDataPersonalInfo?.description ?? ""}
            />

            <InputText
                placeholder={t("form-personal-info-address")}
                onChange={handleAddressChange}
                value={cvDataPersonalInfo?.address ?? ""}
            />

            <InputText
                placeholder={t("form-personal-info-email")}
                onChange={handleEmailChange}
                value={cvDataPersonalInfo?.email ?? ""}
            />

            <InputText
                placeholder={t("form-personal-info-phoneNumber")}
                onChange={handlePhoneNumberChange}
                value={cvDataPersonalInfo?.phoneNumber ?? ""}
            />
        </div>
    );
}

export default CvPersonalInfo;