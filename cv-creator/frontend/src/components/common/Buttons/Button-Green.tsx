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
                    bg-yellow-400 rounded-lg shadow-md
                    hover:bg-yellow-600
                     transition-all duration-200"
        >
            {placeholder}
        </button>
    );
};

export default ButtonBlue;
