import React from 'react';

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    content?: string;
    download?: string | boolean; // soporte para descargar
}

const Link: React.FC<LinkProps> = ({content, className, download, ...props}) => {
    const isDisabled = !props.href || props.href === '#';
    const cursorClass: string = isDisabled ? 'cursor-not-allowed' : 'cursor-pointer';

    const combinedClassName: string =
        `text-center text-xs sm:text-sm font-bold transition-all duration-300 ease-in-out p-3 rounded-xl ${cursorClass} ${className || ''}`;

    return (
        <a
            className={combinedClassName}
            download={download}
            {...props}
            onClick={(e) => {
                if (isDisabled) e.preventDefault();
                props.onClick?.(e);
            }}
        >
            {content}
        </a>
    );
};

export default Link;
