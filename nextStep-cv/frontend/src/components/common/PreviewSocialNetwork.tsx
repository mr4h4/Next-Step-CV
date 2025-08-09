import React from "react";

interface Props {
    name: string;
    link_label: string;
    logo_link: string;
    username_label: string;
}

const PreviewSocialNetwork: React.FC<Props> = ({ name, link_label, logo_link, username_label }) => {
    return (
        // Todo el componente es un enlace (<a>), lo que hace que todo el div sea clicable
        <a
            href={link_label}
            className="flex items-center space-x-2 p-3 bg-gray-50 rounded-lg shadow-sm transition-all duration-300 hover:bg-gray-100 hover:shadow-md"
            target="_blank"
            rel="noopener noreferrer"
        >
            <img
                src={logo_link}
                alt={`${name} logo`}
                className="w-6 h-6 object-contain"
            />

            <div className="flex flex-col">
                <span className="text-sm font-semibold text-gray-800">
                  {name}
                </span>
                    <span className="text-xs text-gray-500">
                  {username_label}
                </span>
            </div>
        </a>
    );
};

export default PreviewSocialNetwork;