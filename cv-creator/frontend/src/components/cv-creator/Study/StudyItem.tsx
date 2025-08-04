import React from "react";
import {useTranslation} from "react-i18next";

import TextInput from "../common/Inputs/TextInput.tsx";
import DateInput from "../common/Inputs/DateInput.tsx";
import TextArea from "../common/Inputs/TextArea.tsx";


const StudyItem: React.FC = () => {
    const {t} = useTranslation();

    return (
        <div className="
            flex flex-col justify-center items-center gap-2
            w-fit"
        >
            <TextInput
                maxLength={100}
                id={"study-title"}
                placeholder={t("study-title")}
                required
            />
            <TextInput
                maxLength={100}
                id={"study-institution"}
                placeholder={t("study-institution")}
                required
            />
            <div className={"flex flex-row justify-center items-center w-full  p-2"}>
                <label className={"flex-1/2"}>{t("start-date")}</label>
                <DateInput
                    id={"study-start-date"}
                    required
                />
            </div>
            <div className={"flex flex-row justify-center items-center w-full  p-2"}>
                <label className={"flex-1/2"}>{t("end-date")}</label>
                <DateInput
                    id={"study-end-date"}
                    required
                />
            </div>
            <TextArea
                maxLength={500}
                placeholder={t("description")}
                id={"study-description"}
                required
            />
        </div>
    );
};

export default StudyItem;