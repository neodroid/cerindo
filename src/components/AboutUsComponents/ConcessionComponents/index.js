import React, { useEffect, useState } from "react";
import {
  Aboutstyle,
  AboutSideBar,
  AboutMain,
  AboutSideBarContent,
} from "../AboutUsElements";
import {
  ConcImgData,
  ConcTableData,
} from "../../Data/AboutusData/ConcessionDatas";
import { ConcWrapped, Tabled } from "./ConcessionElements";
import { aboutUsService } from "../../../service/Aboutus";

const ConcessionComponents = () => {
  const [concession, setConcession] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await aboutUsService.getListAboutUs();
      const data = response.data;
      setConcession(data.concession_area);
    };
    fetchData();
  }, []);

  if (concession.length === 0) return null;
  return (
    <>
      <Aboutstyle>
        <AboutSideBar>
          <AboutSideBarContent to="/Mission-Vision">
            Mission, Vision and Value
          </AboutSideBarContent>
          <AboutSideBarContent to="/Subsidiary">
            Company Subsidiary
          </AboutSideBarContent>
          <AboutSideBarContent to="/Board-of-Director">
            Board of Director
          </AboutSideBarContent>
          <AboutSideBarContent to="/Organization-Structure">
            Organization Structure
          </AboutSideBarContent>
          <AboutSideBarContent to="/History-Milestone">
            History and Milestone
          </AboutSideBarContent>
          <AboutSideBarContent page to="/Concession-Area">
            Concession Area
          </AboutSideBarContent>
          <AboutSideBarContent to="/License-And-Award">
            License and Award
          </AboutSideBarContent>
        </AboutSideBar>
        <AboutMain>
          <ConcWrapped>
            <img
              src={concession.concession_images[0].url}
              alt="concession_image"
              width={`809px`}
            />
            <Tabled>
              <colgroup>
                <col style={{ width: `320px` }} />
                <col style={{ width: `150px` }} />
                <col style={{ width: `150px` }} />
              </colgroup>
              <thead>
                <tr>
                  <th rowspan="2">Commodity</th>
                  <th colspan="2">Reverses Ore Quantity</th>
                </tr>
                <tr>
                  <th>2017</th>
                  <th>2018</th>
                </tr>
              </thead>
              <tbody>
                {ConcTableData.map((data, idx) => {
                  return (
                    <tr key={idx}>
                      <td>{data.commodity}</td>
                      <td>{data.year1}</td>
                      <td>{data.year2}</td>
                    </tr>
                  );
                })}
              </tbody>
            </Tabled>
          </ConcWrapped>
        </AboutMain>
      </Aboutstyle>
    </>
  );
};
export default ConcessionComponents;
