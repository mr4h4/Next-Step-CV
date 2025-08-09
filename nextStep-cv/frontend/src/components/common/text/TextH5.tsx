import React, {type ReactNode} from "react";

type TextProps = React.HTMLProps<HTMLHeadingElement> & {
    children?: ReactNode;
};

const TextH5: React.FC<TextProps> = ({children, className, ...props}) => {

    const combinedClassName = `text-base ${className || ''}`;

    return (
        <h5 {...props}
            className={combinedClassName}
        >
            {children}
        </h5>
    );
}

export default TextH5;