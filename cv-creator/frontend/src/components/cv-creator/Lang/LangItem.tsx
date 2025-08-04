import React from "react";
import {useTranslation} from "react-i18next";

import TextInput from "../common/Inputs/TextInput.tsx";


const LangItem: React.FC = () => {
    const {t} = useTranslation();

    return (
        <div className={"flex flex-col justify-center items-center gap-2 w-fit p-2"}>
            <TextInput placeholder={t("lang-lang")}/>
            <TextInput placeholder={t("lang-level")}/>
        </div>
    );
}
export default LangItem;