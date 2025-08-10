import React from 'react';

// Interfaz que extiende todas las props de un botón HTML estándar
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    content?: string;
}

const Button: React.FC<ButtonProps> = ({content, className, ...props}) => {
    const combinedClassName: string = `text-center text-xs sm:text-sm font-bold cursor-pointer transition-all duration-300 ease-in-out p-3 rounded-xl ${className || ''}`;
    return (
        <button className={combinedClassName} {...props}>
            {content}
        </button>
    );
};

export default Button;
