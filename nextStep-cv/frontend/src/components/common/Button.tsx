import React from 'react';

// Interfaz que extiende todas las props de un botón HTML estándar
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    texto: string;
}

const Button: React.FC<ButtonProps> = ({texto, className, ...props}) => {
    const combinedClassName: string = `text-center font-mono text-xl p-3 rounded-xl ${className || ''}`;
    return (
        <button className={combinedClassName} {...props}>
            {texto}
        </button>
    );
};

export default Button;
