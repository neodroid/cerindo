import React from "react";
import { Aboutstyle, AboutMain } from "../AboutUsElements";
import AboutSideBarComponents from "../index";
import {CommitmentContentData} from "../../Data/AboutusData/CommitmentDatas";
import {CommitmentWrited,CommitmentContent} from "./CommitmentElements";

const CommitmentComponents = () => {
  return (
    <>
      <Aboutstyle>
        <AboutSideBarComponents page2={true} />
        <AboutMain>
          <CommitmentContent>
          {CommitmentContentData.map((data,idx)=>{
            return(
              <>
                <CommitmentWrited title key={idx}>{data.title}</CommitmentWrited>
                <CommitmentWrited>{data.exp}</CommitmentWrited>
              </>
            )
          })}
          </CommitmentContent>
        </AboutMain>
      </Aboutstyle>
    </>
  );
};
export default CommitmentComponents;
