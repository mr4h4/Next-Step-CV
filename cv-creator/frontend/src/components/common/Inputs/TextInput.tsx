import React, {type InputHTMLAttributes} from "react";

type TextInputProps = InputHTMLAttributes<HTMLInputElement> & {};

const TextInput: React.FC<TextInputProps> = ({...rest}) => {

    return (
        <input
            type="text"
            className="
                w-full
                p-2
                border-3 ring-secondary rounded-2xl
                text-gray-700 font-bold

                /*FOCUS*/
                focus:outline-none focus:ring-3 focus:ring-success focus:border-transparent

                /*HOVER*/
                transition-all duration-200
                hover:border-primary hover:shadow-md

                cursor-text
            "
            {...rest}
        />
    );
};

export default TextInput;