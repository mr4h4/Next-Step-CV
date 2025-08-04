import React from 'react';

type Props = {
    text: string;
};

const TitleH1: React.FC<Props> = ({ text }) => {
    return (
        <h1 className="
        text-gray-900
            font-bold
            text-3xl
        ">
            {text}
        </h1>
    )
};

export default TitleH1;
