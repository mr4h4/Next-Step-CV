import React, {type ReactNode} from "react";

type TextProps = React.HTMLProps<HTMLHeadingElement> & {
    children?: ReactNode;
};

const TextH2: React.FC<TextProps> = ({children, ...props}) => {
    const combinedClassName = `font-bold text-lg sm:text-xl md:text-2xl ${props.className || ''}`;
    console.log(combinedClassName);
    return (
        <h2 {...props}
            className={combinedClassName}
        >
            {children}
        </h2>
    );
}

export default TextH2;