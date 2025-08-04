import React from "react";
import {useTranslation} from "react-i18next";

import ImageInput from "./Inputs/ImageInput.tsx";
import TextInput from "./Inputs/TextInput.tsx";
import TextArea from "./Inputs/TextArea.tsx";
import StudyItem from "./StudyItem.tsx";

const CvForm: React.FC = () => {
    const {t} = useTranslation();


    return (
        <div id="cv-form-container"
             className="
                    flex flex-col justify-center items-center
                    w-full
                    bg-accent-300
                    rounded-lg
                    p-6
                 ">
            {/*CV-IMAGE*/}
            <ImageInput
                id="cv-image"
            />

            {/*CV-NAME AND CV-SURNAME*/}
            <div className="flex flex-col gap-4 m-5 w-3/4 h-auto">
                <TextInput
                    placeholder={t("cv-name")}
                    id={"cv-name"}
                    required
                    maxLength={40}
                />
                <TextInput
                    placeholder={t("cv-surname")}
                    id={"cv-surname"}
                    required
                    maxLength={60}
                />
            </div>
            {/*DESCRIPTION*/}
            <div className="flex flex-col gap-4 m-5 w-3/4 h-auto">
                <TextArea
                    placeholder={t("cv-self-description")}
                    id={"cv-self-description"}
                    required
                    maxLength={500}
                />
            </div>
            <div className="flex flex-col gap-4 m-5 w-3/4 h-auto">
                <TextInput
                    placeholder={t("cv-email")}
                    id={"cv-email"}
                    required
                    maxLength={100}
                />
                <TextInput
                    placeholder={t("cv-phone-number")}
                    id={"cv-phone-number"}
                    required
                    maxLength={20}
                />

                <TextInput
                    placeholder={t("cv-location")}
                    id={"cv-location"}
                    required
                    maxLength={20}
                />

                <StudyItem/>
            </div>
        </div>
    );
};

export default CvForm;