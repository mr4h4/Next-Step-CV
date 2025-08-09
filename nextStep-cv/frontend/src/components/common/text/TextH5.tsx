import React from "react";

type TextProps = React.HTMLProps<HTMLHeadingElement> & {
    content?: string;
};

const TextH5: React.FC<TextProps> = ({content, className, ...props}) => {

    const combinedClassName = `text-base ${className || ''}`;

    return (
        <h5 {...props}
            className={combinedClassName}
        >
            {content}
        </h5>
    );
}

export default TextH5;