import React from "react";

type TextProps = React.HTMLProps<HTMLParagraphElement> & {
    content?: string;
};

const TextP: React.FC<TextProps> = ({content, ...props}) => {
    const combinedClassName = `text-center font-sans text-xl ${props.className || ''}`;

    return (
        <p {...props}
           className={combinedClassName}
        >
            {content}
        </p>
    );
}

export default TextP;