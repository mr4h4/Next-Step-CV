import React from "react";

type Props = React.LabelHTMLAttributes<HTMLLabelElement>;

const Label: React.FC<Props> = ({className = "", children, ...rest}) => {
    const defaultClassName = "block mb-1 text-sm font-medium text-gray-700 transition-all duration-300 ease-in-out";

    return (
        <label className={className === "" ? defaultClassName : className} {...rest}>
            {children}
        </label>
    );
};

export default Label;
