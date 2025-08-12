import React from "react";
import InputImage from "../../common/inputs/inputImage.tsx";
import {useTranslation} from "react-i18next";
import type {CvData} from "../../../types/cvDataInterfaces.ts";

interface Props {
    cvDataImage: CvData['image'];
    setImageData: React.Dispatch<React.SetStateAction<CvData['image']>>;
}

const CvImageSelector: React.FC<Props> = ({cvDataImage, setImageData}) => {
    const {t} = useTranslation();

    const handleImageChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        const file = event.target.files?.[0];
        if (file) {
            const url: string = URL.createObjectURL(file);

            // Llama al setter del componente padre directamente con el nuevo valor
            setImageData(prevImage => ({
                ...prevImage,
                url: url,
                altText: "User Image",
                file: file
            }));
        }
    }

    return (
        <div>
            <InputImage
                label={t("form-select-image-label")}
                defaultImagePath={"src/assets/defaultUserImage.svg"}
                id={"cv-image"}
                onChange={handleImageChange}
                value={cvDataImage.url} // Usa la URL de la imagen del CV
            />
        </div>
    );
}

export default CvImageSelector;