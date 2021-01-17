import React, { useEffect, useState } from "react";
import {
  Aboutstyle,
  AboutSideBar,
  AboutMain,
  AboutSideBarContent,
} from "../AboutUsElements";
import AboutSideBarComponents from "../index";
import {
  ConcImgData,
  ConcTableData,
} from "../../Data/AboutusData/ConcessionDatas";
import { ConcWrapped, Tabled,Imagees } from "./ConcessionElements";
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
        <AboutSideBarComponents page6={true}/>
        <AboutMain>
          <ConcWrapped>
            <Imagees
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
