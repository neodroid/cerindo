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

const PhaseTwoComponents = () => {
  const [phase, setPhase] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await phasesService.getDetailPhases(
        "60097b1f03d5721630ad1665"
      );
      const data = response.data;
      setPhase(data);
    };
    fetchData();
  }, []);

  if (phase.length === 0) return null;
  return (
    <>
      <Businessstyle>
        <PhaseSideBarComponents page2={true} />
        <BusinessMain>
          <PhaseContent>
            <h2>Phase 2</h2>
            <TextPhase>{phase.body_en}</TextPhase>
            <h2>Structure</h2>
            <Imagess src={phase.structure_img.url} alt="structure" />
            <h2>Financial Report</h2>
            <PdfPart href={phase.financialReport.url}>
              <PdfImage />
            </PdfPart>
          </PhaseContent>
        </BusinessMain>
      </Businessstyle>
    </>
  );
};
export default PhaseTwoComponents;
