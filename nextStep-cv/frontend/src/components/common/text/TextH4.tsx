import React from "react";

type TextProps = React.HTMLProps<HTMLHeadingElement> & {
    content?: string;
};

const TextH4: React.FC<TextProps> = ({content, className, ...props}) => {
    const combinedClassName = `text-lg ${className || ''}`;

    return (
        <h4 {...props}
            className={combinedClassName}
        >
            {content}
        </h4>
    );
}

export default TextH4;