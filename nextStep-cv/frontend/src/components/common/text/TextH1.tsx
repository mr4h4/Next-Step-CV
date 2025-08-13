import React, { type ReactNode } from "react";

type TextProps = React.HTMLProps<HTMLHeadingElement> & {
    children?: ReactNode;
};

const TextH1: React.FC<TextProps> = ({children, ...props}) => {
    const combinedClassName = `font-bold font-mono text-2xl sm:text-3xl md:text-4xl ${props.className || ''}`;
    return (
        <h1 {...props}
            className={combinedClassName}
        >
            {children}
        </h1>
    );
}

export default TextH1;