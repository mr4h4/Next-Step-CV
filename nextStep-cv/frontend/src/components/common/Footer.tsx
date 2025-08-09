import React from "react";
import {useTranslation} from "react-i18next";
import TextH5 from "./text/TextH5.tsx";


const Footer: React.FC = () => {
    const {t} = useTranslation();
    return (
        <footer className="text-center py-4 mt-auto">
            <TextH5 content={t("created-by")} className="text-gray-600"/>
            <a
                href="https://github.com/H3rHex"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity duration-300 flex items-center justify-center"
            >
                <img
                    src="src/assets/github.svg"
                    alt="GitHub Icon"
                    className="w-16 h-16"
                />
            </a>
        </footer>
    );
};

export default Footer;
