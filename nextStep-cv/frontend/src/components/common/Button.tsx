import React from 'react';

// Interfaz que extiende todas las props de un botón HTML estándar
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    content?: string;
}

const Button: React.FC<ButtonProps> = ({content, className, disabled, ...props}) => {
    const cursorClass: string = disabled ? 'cursor-not-allowed' : 'cursor-pointer';

    const combinedClassName: string = `text-center text-xs sm:text-sm font-bold transition-all duration-300 ease-in-out p-3 rounded-xl ${cursorClass} ${className || ''}`;

    return (
        <button className={combinedClassName} disabled={disabled} {...props}>
            {content}
        </button>
    );
};

export default Button;