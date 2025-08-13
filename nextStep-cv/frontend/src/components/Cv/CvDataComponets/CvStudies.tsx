import React, {useState} from "react"
import type {CvData} from "../../../types/cvDataInterfaces";

import {useTranslation} from "react-i18next";
import Button from "../../common/Button.tsx";
import Study from "../../common/inputs/special-Inputs/Study.tsx";
import Splitter from "../../common/Splitter.tsx";

interface Props {
    cvDataStudies: CvData['studies'];
    setCvDataStudies: React.Dispatch<React.SetStateAction<CvData['studies']>>;
}

const CvStudies: React.FC<Props> = ({cvDataStudies, setCvDataStudies}) => {
    const {t} = useTranslation();
    const [isShowing, setIsShowing] = useState<boolean>(false);

    const handleAddStudy = () => {
        const emptyStudy: CvData['studies'][0] = {
            title: "",
            institution: "",
            startDate: "",
            endDate: "",
        };

        // El setter espera el objeto completo, así que actualizamos la propiedad 'studies'.
        setCvDataStudies(prevStudies => [
            ...prevStudies,
            emptyStudy
        ]);
    };

    const handleRemoveLastStudy = () => {
        setCvDataStudies(prevStudies => {
            return prevStudies.slice(0, -1);
        });
    };


    // name is the value who's going to change -> Example: name : instituion
    const handleStudyChange = (index: number, name: string, value: string) => {
        setCvDataStudies(prevStudies => {
            return prevStudies.map((study, i) => {
                if (i === index) {
                    return {...study, [name]: value};
                }
                return study;
            });
        });
    }


    return(
        <div className="flex flex-col gap-5 w-full">
            <Button
                className={`${isShowing ? "bg-amber-200 hover:bg-amber-300" : "bg-blue-300 hover:bg-blue-400"} w-full`}
                onClick={() => setIsShowing(!isShowing)}
                content={isShowing ? t("form-studies-hide-button") : t("form-studies-show-button")}
            />

            {isShowing && (
                <div className="flex flex-col gap-5">
                    {cvDataStudies.length > 0 && (
                        <div className="flex flex-col gap-5">
                            {cvDataStudies.map((study, index) => (
                                <>
                                    <Study
                                        key={index}
                                        studyData={study}
                                        studyIndex={index}
                                        onStudyChange={handleStudyChange}
                                    />
                                    <Splitter/>
                                </>

                            ))}
                        </div>
                    )}
                    <Button
                        className="bg-green-300 hover:bg-green-400"
                        content={t("form-studies-add-study")}
                        onClick={() => handleAddStudy()}
                    />
                    <Button
                        className="bg-red-300 hover:bg-red-400"
                        content={t("form-studies-remove-study")}
                        onClick={() => handleRemoveLastStudy()}
                    />
                </div>
            )}
        </div>
    );
}

export default CvStudies;