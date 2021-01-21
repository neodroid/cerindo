import React, { useState, useEffect } from "react";
import { phasesService } from "../../../service/Phases";
import {
  Businessstyle,
  BusinessMain,
} from "../../BusinessComponents/BusinessElements";
import PhaseSideBarComponents from "../AsidePhase";
import {
  PhaseOneDatas,
  PhaseOneImageData,
  DownloadFile,
} from "../../Data/PhaseData/PhaseOneDatas";
import {
  PhaseContent,
  TextPhase,
  Imagess,
  PdfPart,
  PdfImage,
} from "../PhaseElements";

const PhaseThreeAComponents = () => {
  const [phase, setPhase] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await phasesService.getListPhases();
      const data = response.data;
      setPhase(data);
    };
    fetchData();
  }, []);

  if (phase.length === 0) return null;
  return (
    <>
      <Businessstyle>
        <PhaseSideBarComponents page4={true} />
        <BusinessMain>
          <PhaseContent>
            <h2>Phase 3a</h2>
            <TextPhase>{phase[3].body_en}</TextPhase>
            <h2>Structure</h2>
            <Imagess
              src={phase[3].structure_img.url}
              alt="structure"
              width={`782px`}
            />
            <h2>Financial Report</h2>
            <PdfPart href={phase[3].financialReport.url}>
              <PdfImage />
            </PdfPart>
          </PhaseContent>
        </BusinessMain>
      </Businessstyle>
    </>
  );
};
export default PhaseThreeAComponents;
