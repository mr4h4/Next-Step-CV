import React from "react";

type TextProps = React.HTMLProps<HTMLHeadingElement> & {
    content?: string;
};

const TextH1: React.FC<TextProps> = ({content, ...props}) => {
    const combinedClassName = `text-2xl ${props.className || ''}`;
    console.log(combinedClassName);
    return (
        <h3 {...props}
            className={combinedClassName}
        >
            {content}
        </h3>
    );
}

export default TextH1;