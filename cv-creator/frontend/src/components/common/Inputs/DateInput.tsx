import React, {type InputHTMLAttributes} from "react";

type DateInputProps = InputHTMLAttributes<HTMLInputElement> & {};

const DateInput: React.FC<DateInputProps> = ({...rest}) => {

    return (
        <input
            type="date"
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

                cursor-pointer
            "
            {...rest}
        />
    );
};

export default DateInput;