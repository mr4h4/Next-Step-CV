import React, {useState} from "react";
import type {CvData} from "../../../types/cvDataInterfaces";
import {useTranslation} from "react-i18next";
import Button from "../../common/Button.tsx";
import Lang from "../../common/inputs/special-Inputs/Lang.tsx";
import Splitter from "../../common/Splitter.tsx";


interface Props {
    cvLangsData: CvData['languages'];
    setCvLangsData: React.Dispatch<React.SetStateAction<CvData['languages']>>;
}

const CvLangs: React.FC<Props> = ({cvLangsData, setCvLangsData}) => {
    const {t} = useTranslation();
    const [isShowing, setIsShowing] = useState<boolean>(false);


    const handleAddLang = () => {
        const emptyLang: CvData['languages'][0] = {
            name: "",
            level: ""
        }
        setCvLangsData(prevLangs => [...prevLangs, emptyLang]);
    }

    const handleRemoveLastLang = () => {
        setCvLangsData(prevLangs => {
            return prevLangs.slice(0, -1);
        });
    }

    // name is the value who's going to change -> Example: name : level
    const handleLangChange = (index: number, name: string, value: string) => {
        setCvLangsData(prevLangs => {
            return prevLangs.map((lang, i) => {
                if (i === index) {
                    return {...lang, [name]: value};
                }
                return lang;
            });
        });
    }


    return (
        <div className="flex flex-col gap-5 w-full">
            <Button
                className={`${isShowing ? "bg-amber-100 hover:bg-amber-200" : "bg-blue-300 hover:bg-blue-400"} w-full`}
                onClick={() => setIsShowing(!isShowing)}
                content={isShowing ? t("form-langs-hide-button") : t("form-langs-show-button")}
            />
            {isShowing && (
                <div className="flex flex-col gap-5">
                    {cvLangsData.length > 0 && (
                        <div className="flex flex-col gap-5">
                            {cvLangsData.map((lang, index) => (
                                <>
                                    <Lang
                                        key={index}
                                        langData={lang}
                                        langIndex={index}
                                        onLangChange={handleLangChange}
                                    />
                                    <Splitter/>
                                </>
                            ))}
                        </div>
                    )}
                    <Button
                        className="bg-green-300 hover:bg-green-400"
                        content={t("form-langs-add-lang")}
                        onClick={() => handleAddLang()}
                    />
                    <Button
                        className="bg-red-300 hover:bg-red-400"
                        content={t("form-langs-remove-lang")}
                        onClick={() => handleRemoveLastLang()}
                    />
                </div>
            )}
        </div>
    );
}

export default CvLangs;
