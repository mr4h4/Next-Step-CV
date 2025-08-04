import React from 'react';

type Props = {
    placeholder: string;
    onClickAction?: () => void;
};


const ButtonBlue: React.FC<Props> = ({placeholder, onClickAction}) => {
    return (
        <button
            {...(onClickAction ? {onClick: onClickAction} : {})}
            className="
                    cursor-pointer px-4 py-2 text-sm text-white font-semibold
                    bg-primary rounded-lg shadow-md
                    hover:bg-indigo-600 hover:scale-105
                     transition-all duration-200"
        >
            {placeholder}
        </button>
    );
};

export default ButtonBlue;
