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

const PhaseLastComponents = () => {
  const [phase, setPhase] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await phasesService.getDetailPhases(
        "60097c0103d5721630ad166e"
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
        <PhaseSideBarComponents page5={true} />
        <BusinessMain>
          <PhaseContent>
            <h2>PT Ceria Cobalt Indotama</h2>
            <TextPhase>{phase.body_en}</TextPhase>
            <h2>Structure</h2>
            <Imagess
              src={phase.structure_img.url}
              alt="structure"
              width={`782px`}
            />
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
export default PhaseLastComponents;
