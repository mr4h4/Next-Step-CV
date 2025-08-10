import React from "react";
import {useCvData} from "../../hooks/useCvData.ts";

import CvPreview from "./CvPreview.tsx";
import CvForm from "./CvForm.tsx";

const CvContainer: React.FC = () => {
    const {cvData, setCvData} = useCvData();

    const debugCvData = () => {
        console.log(cvData);
    }

    return (
        <main className="
                flex flex-col xl:flex-row items-start justify-center gap-20
                w-[50vw] h-auto
                mt-10
            "
        >
            <div className="w-full">
                <CvForm cvData={cvData} setCvData={setCvData}/>
            </div>
            <div className="flex-2/3">
                <CvPreview cvData={cvData}/>
            </div>
        </main>
    );
}

export default CvContainer;
