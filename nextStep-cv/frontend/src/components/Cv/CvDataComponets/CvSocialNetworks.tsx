import React, {useState} from "react";
import type {CvData} from "../../../types/cvDataInterfaces.ts";

import {useTranslation} from "react-i18next";
import Button from "../../common/Button.tsx";
import Splitter from "../../common/Splitter.tsx";
import SocialNetwork from "../../common/inputs/special-Inputs/SocialNetwork.tsx";

interface Props {
    cvSocialNetworksData: CvData['socialNetworks'];
    setCvSocialNetworksData: React.Dispatch<React.SetStateAction<CvData['socialNetworks']>>;
}

const socialNetworkOptions = [
    {name: "LinkedIn", icon: "https://www.svgrepo.com/show/452047/linkedin-1.svg"},
    {name: "GitHub", icon: "https://www.svgrepo.com/show/439171/github.svg"},
    {name: "Behance", icon: "https://www.svgrepo.com/show/452165/behance.svg"},
    {name: "Dribbble", icon: "https://www.svgrepo.com/show/382718/dribbble-dribble-dribbbble.svg"},
    {name: "Stack Overflow", icon: "https://www.svgrepo.com/show/452105/stack-overflow.svg"},
    {name: "Medium", icon: "https://www.svgrepo.com/show/394277/medium.svg"}
];

const CvSocialNetworks: React.FC<Props> = ({cvSocialNetworksData, setCvSocialNetworksData}) => {
    const {t} = useTranslation();
    const [isShowing, setIsShowing] = useState<boolean>(false);

    const handleAddSocialNetwork = (selectedNetwork: { name: string, icon: string }) => {
        // Evita añadir duplicados
        const isAlreadyAdded = cvSocialNetworksData.some(network => network.name === selectedNetwork.name);
        if (isAlreadyAdded) return;

        const newNetwork = {
            name: selectedNetwork.name,
            link_label: "",
            logo_link: selectedNetwork.icon,
            username_label: ""
        };

        setCvSocialNetworksData(prevNetworks => [
            ...prevNetworks,
            newNetwork
        ]);
    };

    const handleRemoveSocialNetwork = (indexToRemove: number) => {
        setCvSocialNetworksData(prevNetworks => {
            return prevNetworks.filter((_, index) => index !== indexToRemove);
        });
    };

    const handleSocialNetworkChange = (index: number, name: string, value: string) => {
        setCvSocialNetworksData(prevNetworks => {
            return prevNetworks.map((network, i) => {
                if (i === index) {
                    return {...network, [name]: value};
                }
                return network;
            });
        });
    }

    return (
        <div className="flex flex-col gap-5 w-full">
            <Button
                className={`${isShowing ? "bg-amber-100 hover:bg-amber-200" : "bg-blue-300 hover:bg-blue-400"} w-full`}
                onClick={() => setIsShowing(!isShowing)}
                content={isShowing ? t("form-socialNetworks-hide-button") : t("form-socialNetworks-show-button")}
            />

            {isShowing && (
                <div className="flex flex-col gap-5">
                    <div className="grid grid-cols-2 gap-4">
                        {socialNetworkOptions.map((network, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg shadow-sm cursor-pointer transition-all duration-300 hover:bg-gray-100 hover:shadow-md"
                                onClick={() => handleAddSocialNetwork(network)}
                            >
                                <img src={network.icon} alt={network.name} className="w-6 h-6"/>
                                <span className="text-sm font-semibold">{network.name}</span>
                            </div>
                        ))}
                    </div>

                    <Splitter/>

                    {cvSocialNetworksData.length > 0 && (
                        <div className="flex flex-col gap-5">
                            {cvSocialNetworksData.map((network, index) => (
                                <SocialNetwork
                                    key={index}
                                    socialNetworkData={network}
                                    socialNetworkIndex={index}
                                    onSocialNetworkChange={handleSocialNetworkChange}
                                    onRemoveSocialNetwork={handleRemoveSocialNetwork}
                                />
                            ))}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

export default CvSocialNetworks;
