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

const PhaseThreeComponents = () => {
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
        <PhaseSideBarComponents page3={true} />
        <BusinessMain>
          <PhaseContent>
            <h2>Phase 3</h2>
            <TextPhase>{phase[2].body_en}</TextPhase>
            <h2>Structure</h2>
            <Imagess src={phase[2].structure_img.url} alt="structure" />
            <h2>Financial Report</h2>
            <PdfPart href={phase[2].financialReport.url}>
              <PdfImage />
            </PdfPart>
          </PhaseContent>
        </BusinessMain>
      </Businessstyle>
    </>
  );
};
export default PhaseThreeComponents;
