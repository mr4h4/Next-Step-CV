import React, {useState} from "react";

import {useTranslation} from "react-i18next";
import InputText from "../InputText";
import Button from "../../Button";

export interface SocialNetwork {
    name: string;
    link_label: string;
    logo_link: string;
    username_label: string;
}

interface Props {
    socialNetworkData: SocialNetwork;
    socialNetworkIndex: number;
    onSocialNetworkChange: (index: number, name: string, value: string) => void;
    onRemoveSocialNetwork: (index: number) => void;
}

const SocialNetwork: React.FC<Props> = ({
                                            socialNetworkData,
                                            socialNetworkIndex,
                                            onSocialNetworkChange,
                                            onRemoveSocialNetwork,
                                        }) => {
    const {t} = useTranslation();
    const [isExpanded, setIsExpanded] = useState<boolean>(false);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        onSocialNetworkChange(socialNetworkIndex, name, value);
    };

    return (
        <div className="flex flex-col gap-3 p-4 bg-gray-100 rounded-lg">
            <div
                className="flex items-center gap-2 cursor-pointer"
                onClick={() => setIsExpanded(!isExpanded)}
            >
                <img
                    src={socialNetworkData.logo_link}
                    alt={socialNetworkData.name}
                    className="w-6 h-6 object-contain"
                />
                <span className="text-sm font-semibold">{socialNetworkData.name}</span>
            </div>

            {isExpanded && (
                <div className="flex flex-col gap-3">
                    <InputText
                        placeholder={t("form-social-network-link-label")}
                        name="link_label"
                        value={socialNetworkData?.link_label ?? ""}
                        onChange={handleInputChange}
                    />
                    <InputText
                        placeholder={t("form-social-network-username-label")}
                        name="username_label"
                        value={socialNetworkData?.username_label ?? ""}
                        onChange={handleInputChange}
                    />
                    <Button
                        className="bg-red-500 hover:bg-red-600 w-full"
                        content={t("form-social-network-remove")}
                        onClick={() => onRemoveSocialNetwork(socialNetworkIndex)}
                    />
                </div>
            )}
        </div>
    );
};

export default SocialNetwork;