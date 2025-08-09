import React from "react";

type TextProps = React.HTMLProps<HTMLHeadingElement> & {
    content?: string;
};

const TextH1: React.FC<TextProps> = ({content, ...props}) => {
    const combinedClassName = `font-bold font-mono text-4xl ${props.className || ''}`;
    return (
        <h1 {...props}
            className={combinedClassName}
        >
            {content}
        </h1>
    );
}

export default TextH1;