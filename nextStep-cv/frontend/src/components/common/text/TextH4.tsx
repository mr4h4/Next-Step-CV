import React, { type ReactNode } from "react";

type TextProps = React.HTMLProps<HTMLHeadingElement> & {
    children?: ReactNode;
};

const TextH4: React.FC<TextProps> = ({children, className, ...props}) => {
    const combinedClassName = `text-sm sm:text-base md:text-lg ${className || ''}`;

    return (
        <h4 {...props}
            className={combinedClassName}
        >
            {children}
        </h4>
    );
}

export default TextH4;