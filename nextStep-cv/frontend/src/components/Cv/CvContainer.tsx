import React, { useState } from "react";
import { useCvData } from "../../hooks/useCvData.ts";

import { useTranslation } from "react-i18next";

import Button from "../common/Button.tsx";
import Link from "../common/Link.tsx";
import Splitter from "../common/Splitter.tsx";
import CvForm from "./CvForm.tsx";
import CvPreview from "./CvPreview.tsx";
import i18n from "i18next";

const CvContainer: React.FC = () => {
    const { t } = useTranslation();

    const { cvData, setCvData } = useCvData();
    const [cvDownloadUrl, setCvDownloadUrl] = useState("");
    const [isShowing, setIsShowing] = useState<boolean>(true);

    const clickableClass: string = "bg-green-500 hover:bg-green-600 w-full";
    const notClickableClass: string = "bg-gray-400 text-gray-700 cursor-not-allowed opacity-40 w-full";

    const handleSendCv = async () => {
        setCvDownloadUrl("");

        const rawLang:string= i18n.language || "es";
        const language:string = rawLang.includes("-") ? rawLang.split("-")[0] : rawLang;

        try {
            const formData = new FormData();
            formData.append("lang", language);
            formData.append("cv", JSON.stringify(cvData));
            console.log(JSON.stringify(cvData));

            if (cvData.image.file) {
                formData.append("photo", cvData.image.file);
            } else {
                try {
                    const response = await fetch(cvData.image.url);
                    const imageBlob = await response.blob();
                    const imageFileToSend = new File([imageBlob], "defaultUserImage.svg", { type: imageBlob.type });
                    formData.append("photo", imageFileToSend);
                } catch (error) {
                    console.error("Error al obtener la imagen por defecto:", error);
                    return;
                }
            }

            const response = await fetch('/api/createCV', {
                method: 'POST',
                body: formData
            });

            if (!response.ok) {
                throw new Error(response.statusText);
            }

            const result = await response.json();
            setCvDownloadUrl(result.cv_url);

        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="container mx-auto px-4">
            <main className="
                    flex flex-col xl:flex-row items-start justify-center gap-20
                    w-full h-auto
                    mt-10 mb-10
                "
            >
                <div className="flex flex-col gap-5 w-full xl:w-[600px] xl:min-w-[400px]">
                    <Button
                        className={`${isShowing ? "bg-amber-200 hover:bg-amber-300" : "bg-blue-300 hover:bg-blue-400"} w-full`}
                        onClick={() => setIsShowing(!isShowing)}
                        content={isShowing ? t("hide-form-button") : t("show-form-button")}
                    />

                    {isShowing && (
                        <div className="w-full">
                            <CvForm cvData={cvData} setCvData={setCvData} />
                        </div>
                    )}
                </div>

                <div className="flex-1 w-full">
                    <CvPreview cvData={cvData} />
                </div>
            </main>

            <Splitter />

            {/*DOWNLOAD SECTION*/}
            <div className="flex flex-row flex-wrap justify-center items-center gap-4 w-full max-w-sm p-5 mx-auto">
                <Button
                    className={clickableClass}
                    content={t("send-cv-button")}
                    onClick={handleSendCv}
                />

                <Link
                    href={cvDownloadUrl || "#"}
                    download="cv.pdf"
                    content={t("download-cv-button")}
                    className={cvDownloadUrl ? clickableClass : notClickableClass}
                />
            </div>

        </div>
    );
}

export default CvContainer;