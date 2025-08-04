import React, {useEffect, useState, type InputHTMLAttributes} from 'react';
import {useTranslation} from "react-i18next";

type ImageUpdaterProps = InputHTMLAttributes<HTMLInputElement> & {};

import defaultProfile from '../../../assets/default-profile.webp';

const ImageInput: React.FC<ImageUpdaterProps> = ({...rest}) => {
    const [previewUrl, setPreviewUrl] = useState<string>(defaultProfile);
    const [, setImageFile] = useState<File | null>(null);

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log("Image change");
        try {
            const file = event.target.files?.[0];
            if (file) {
                const objectURL = URL.createObjectURL(file);
                setPreviewUrl(objectURL);
                setImageFile(file);
            }
        } catch (err) {
            console.error(err);
        }
    };

    const {t} = useTranslation();

    useEffect(() => {
        return () => {
            if (previewUrl && previewUrl !== defaultProfile) {
                URL.revokeObjectURL(previewUrl);
            }
        };
    }, [previewUrl]);

    return (
        <div className="flex flex-col justify-center items-center">
            <img
                src={previewUrl}
                alt={"Default Image"}
                className="w-34 h-34 rounded-full object-cover border-5 border-gray-200 transition-transform duration-500 hover:scale-105 "
            />
            <div className="mt-4 flex gap-4">
                <label htmlFor="cv-image" className="
                    cursor-pointer px-4 py-2 text-sm text-white font-semibold
                    bg-primary rounded-lg shadow-md
                    hover:bg-indigo-600 hover:scale-105
                     transition-all duration-200
                ">
                    {t("cv-image")}
                </label>

                <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden"
                    {...rest}
                />
            </div>
        </div>
    );
}

export default ImageInput;