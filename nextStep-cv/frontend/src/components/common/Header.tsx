import React from "react";
import TextH1 from "./text/TextH1";
import LanguageSelector from "../Language/LanguageSelector";

const Header: React.FC = () => {
    return (
        <header
            className="
            w-full max-w-xl mx-auto mt- p-6
            grid grid-cols-1 gap-5 text-center
            bg-primary-400 rounded-xl border-b-3 border-primary-500
            sm:grid-cols-[1fr_auto] sm:items-center sm:text-left
        "
        >
            <TextH1 className="text-blue-100">- NextStep CV -</TextH1>
            <LanguageSelector/>
        </header>
    );
};

export default Header;
