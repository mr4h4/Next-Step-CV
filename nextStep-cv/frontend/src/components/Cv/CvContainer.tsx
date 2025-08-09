import React from "react";
import {useCvData} from "../../hooks/useCvData.ts";

import CvPreview from "./CvPreview.tsx";

const CvContainer: React.FC = () => {
    const {cvData, setCvData} = useCvData();


    return (
        <main className="grid grid-cols-1 xl:grid-cols-3 gap-10 mt-5 mx-auto max-w-screen p-10">
            <div>
                {/*CV FORM LOGIC*/}
            </div>
            <CvPreview cvData={cvData} className="col-span-2"/>
        </main>
    );
}

export default CvContainer;
