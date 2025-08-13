import React from 'react'
import type {CvData} from "../../../../types/cvDataInterfaces.ts";
import {useTranslation} from "react-i18next";
import InputText from "../InputText.tsx";

interface Props {
    langData: CvData['languages'][0];
    langIndex: number;
    onLangChange: (index: number, name: string, value: string) => void;
}

const Lang: React.FC<Props> = ({langData, langIndex, onLangChange}) => {
    const {t} = useTranslation();

    const handleOnInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        onLangChange(langIndex, name, value);
    }

    return (
        <div className="flex flex-col items-center gap-3">
            <InputText
                className={"w-full"}
                placeholder={t("form-langs-name")}
                value={langData?.name ?? ""}
                name={"name"}
                onChange={handleOnInputChange}
            />

            <InputText
                className={"w-full"}
                placeholder={t("form-langs-level")}
                value={langData?.level ?? ""}
                name={"level"}
                onChange={handleOnInputChange}
            />
        </div>
    );
}

export default Lang;