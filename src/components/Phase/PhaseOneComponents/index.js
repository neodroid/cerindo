import React from "react";
import {
  Businessstyle,
  BusinessMain,
} from "../../BusinessComponents/BusinessElements";
import PhaseSideBarComponents from "../AsidePhase";
import {PhaseOneDatas,PhaseOneImageData,DownloadFile} from "../../Data/PhaseData/PhaseOneDatas"
import {
  PhaseContent,
  TextPhase,
  Imagess,
  PdfPart,
  PdfImage
} from "../PhaseElements";

const PhaseOneComponents = () => {
  return (
    <>
      <Businessstyle>
        <PhaseSideBarComponents page1={true} />
        <BusinessMain>
          <PhaseContent>
            <h2>Phase 1</h2>
            <TextPhase>{PhaseOneDatas.content}</TextPhase>
            <h2>Structure</h2>
            <Imagess
              src={PhaseOneImageData.img}
              alt="structure"
            />
            <h2>Financial Report</h2>
            <PdfPart href={DownloadFile.link}>
              <PdfImage/>
            </PdfPart>
          </PhaseContent>
        </BusinessMain>
      </Businessstyle>
    </>
  );
};
export default PhaseOneComponents;
