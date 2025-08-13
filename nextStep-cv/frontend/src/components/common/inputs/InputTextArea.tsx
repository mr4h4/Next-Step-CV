import React from "react";

type Props = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const TextArea: React.FC<Props> = ({className, ...props}) => {
    const combinedClassName: string = `
        ring-3 ring-gray-400 rounded-lg p-1.5 text-gray-800
        transition-all duration-400 ease-out
        hover:ring-blue-400 focus:ring-green-500 focus:outline-none
        w-80 h-40 resize-none
        ${className || ''}
    `;

    return <textarea className={combinedClassName} {...props} />;
}

export default TextArea;