import React, { useState, useEffect } from "react";
import { Aboutstyle, AboutMain } from "../AboutUsElements";
import AboutSideBarComponents from "../index";
import { CommitmentWrited, CommitmentContent } from "./CommitmentElements";
import { aboutUsService } from "../../../service/Aboutus";

const CommitmentComponents = () => {
  const [commitment, setCommitment] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await aboutUsService.getListAboutUs();
      const data = response.data;
      setCommitment(data.Commitment);
    };
    fetchData();
  }, []);

  if (commitment.length === 0) return null;
  return (
    <>
      <Aboutstyle>
        <AboutSideBarComponents page2={true} />
        <AboutMain>
          <CommitmentContent>
            {commitment.commitment_content.map((data, idx) => {
              return (
                <>
                  <CommitmentWrited title key={idx}>
                    {data.title_en}
                  </CommitmentWrited>
                  <CommitmentWrited>{data.body_en}</CommitmentWrited>
                </>
              );
            })}
          </CommitmentContent>
        </AboutMain>
      </Aboutstyle>
    </>
  );
};
export default CommitmentComponents;
