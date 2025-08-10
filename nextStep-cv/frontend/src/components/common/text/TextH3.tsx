import React, {type ReactNode} from "react";

type TextProps = React.HTMLProps<HTMLHeadingElement> & {
    children?: ReactNode;
};

const TextH1: React.FC<TextProps> = ({children, ...props}) => {
    const combinedClassName = `text-base sm:text-lg md:text-xl ${props.className || ''}`;
    return (
        <h3 {...props}
            className={combinedClassName}
        >
            {children}
        </h3>
    );
}

export default TextH1;