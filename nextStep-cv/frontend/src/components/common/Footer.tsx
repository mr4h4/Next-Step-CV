import React from "react";
import {useTranslation} from "react-i18next";
import TextH5 from "./text/TextH5.tsx";


const Footer: React.FC = () => {
    const {t} = useTranslation();
    return (
        <footer className="text-center py-4 mt-auto">
            <TextH5 className="text-gray-600">{t("created-by")} </TextH5>
            <a
                href="https://github.com/H3rHex"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity duration-300 flex items-center justify-center"
            >
                <img
                    src="../../../public/github.svg"
                    alt="GitHub Icon"
                    className="w-16 h-16"
                />
            </a>
        </footer>
    );
};

export default Footer;
