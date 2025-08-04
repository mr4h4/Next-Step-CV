import React from 'react';

type Props = {
    text: string;
};

const TitleH1: React.FC<Props> = ({text}) => {
    return (
        <h1 className="
        text-gray-800
            font-semibold
            text-2xl
        ">
            {text}
        </h1>
    )
};

export default TitleH1;
