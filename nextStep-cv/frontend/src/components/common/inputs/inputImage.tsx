import React, {useEffect} from "react";
import Label from "../text/Label";

type Props = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'value'> & {
    label?: string;
    defaultImagePath: string;
    id: string;
    value: string; // <-- Aquí se define explícitamente como string
};

const InputImage: React.FC<Props> = ({label, defaultImagePath, id, value, onChange, ...props}) => {
    const labelStyles = [
        "w-fit h-auto p-2 rounded-xl",
        "bg-blue-200 font-semibold text-text",
        "hover:bg-blue-400 transition-colors duration-300 ease-out cursor-pointer"
    ].join(" ");

    // Usa useEffect para manejar la URL del objeto
    useEffect(() => {
        // La limpieza se hará solo si el valor NO es el default y es un blob URL
        return () => {
            if (value && value !== defaultImagePath && value.startsWith("blob:")) {
                URL.revokeObjectURL(value);
            }
        };
    }, [value, defaultImagePath]);

    return (
        <div className="relative flex flex-col items-center w-full max-w-xs">
            <img
                className="w-32 h-32 object-cover rounded-full mb-2"
                src={value || defaultImagePath} // El src ahora depende de la prop 'value'
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
                    onChange={onChange} // Pasa el onChange del padre directamente
                    {...props}
                />
            </div>
        </div>
    );
};

export default InputImage;