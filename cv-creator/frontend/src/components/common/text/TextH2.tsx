import React from "react";

type TextProps = React.HTMLProps<HTMLHeadingElement> & {
    content?: string;
};

const TextH1: React.FC<TextProps> = ({content, ...props}) => {
    const combinedClassName = `font-bold text-3xl ${props.className || ''}`;
    console.log(combinedClassName);
    return (
        <h2 {...props}
            className={combinedClassName}
        >
            {content}
        </h2>
    );
}

export default TextH1;