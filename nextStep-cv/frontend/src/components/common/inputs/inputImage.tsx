import React, {useState, useEffect} from "react";
import Label from "../text/Label";

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
    label?: string;
    defaultImagePath: string;
    id: string;
};

const InputImage: React.FC<Props> = ({label, defaultImagePath, id, ...props}) => {
    const [image, setImage] = useState<string>(defaultImagePath);

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const url = URL.createObjectURL(file);
            setImage(url);
            event.target.value = "";
        }
        props.onChange?.(event);
    };

    useEffect(() => {
        const previousImage = image;

        return () => {
            // Solo revocar si NO es la default y es un object URL
            if (previousImage !== defaultImagePath && previousImage.startsWith("blob:")) {
                URL.revokeObjectURL(previousImage);
            }
        };
    }, [image, defaultImagePath]);

    const labelStyles = [
        "w-fit h-auto p-2 rounded-xl",
        "bg-blue-200 font-semibold text-text",
        "hover:bg-blue-400 transition-colors duration-300 ease-out cursor-pointer"
    ].join(" ");

    return (
        <>
            <img
                className="w-32 h-32 object-cover rounded-lg ring-2 ring-gray-300 mb-2"
                src={image}
                alt={label ? `Imagen para ${label}` : "Imagen seleccionada"}
            />
            <div className="flex flex-col gap-1">
                {label && <Label
                    className={labelStyles}
                    htmlFor={id}>{label}
                </Label>}
                <input
                    className="hidden"
                    type="file"
                    accept="image/*"
                    id={id}
                    onChange={handleImageChange}
                    {...props}
                />
            </div>
        </>
    );
};

export default InputImage;
