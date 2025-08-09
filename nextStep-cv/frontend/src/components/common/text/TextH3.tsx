import React, {type ReactNode} from "react";

type TextProps = React.HTMLProps<HTMLHeadingElement> & {
    children?: ReactNode;
};

const TextH1: React.FC<TextProps> = ({children, ...props}) => {
    const combinedClassName = `text-xl ${props.className || ''}`;
    console.log(combinedClassName);
    return (
        <h3 {...props}
            className={combinedClassName}
        >
            {children}
        </h3>
    );
}

export default TextH1;