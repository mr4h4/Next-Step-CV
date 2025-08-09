import React from "react";

type TextProps = React.HTMLProps<HTMLParagraphElement> & {
    content?: string;
};

const TextP: React.FC<TextProps> = ({content, ...props}) => {
    const combinedClassName = `font-sans text-sm ${props.className || ''}`;

    return (
        <p {...props}
           className={combinedClassName}
        >
            {content}
        </p>
    );
}

export default TextP;