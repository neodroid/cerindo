import React, { useState, useEffect, useContext } from "react";
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
import { langContext } from "../../../langContext";
import { PhaseBody } from '../PhaseLang';

const PhaseThreeComponents = () => {
  const { language } = useContext(langContext);
  const [phase, setPhase] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await phasesService.getDetailPhases(
        "60097b5a03d5721630ad1668"
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
        <PhaseSideBarComponents page3={true} />
        <BusinessMain>
          <PhaseContent>
            <h2>Phase 3</h2>
            <TextPhase>{PhaseBody(phase, language)}</TextPhase>
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
export default PhaseThreeComponents;
