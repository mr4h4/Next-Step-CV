import React from "react";
import {useTranslation} from "react-i18next";

import TextInput from "../../common/Inputs/TextInput.tsx";


const SkillItem: React.FC = () => {
    const {t} = useTranslation();

    return (
        <div className={"flex flex-col justify-center items-center gap-2 w-fit p-2"}>
            <TextInput maxLength={40} placeholder={t("skill-skill")}/>
        </div>
    );
}
export default SkillItem;