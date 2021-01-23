import React,{ useState, useEffect } from "react";
import {
    AboutSideBar,
    AboutSideBarContent,
    ArrowDiv,
    ArrowDownLang,
    TextButton,
    DropDown,
    Dropbtn,
    Contentt,
    Changed
} from "../AboutUsComponents/AboutUsElements";

const BusinessSideBarComponents = ({page1,page2,page3,page4,page5,page6,page7}) => {
    const [selected, setSelected] = useState(true);

    const Clickit = ()=>{
        setSelected(!selected);
    }

    useEffect(()=>{
        Clickit()
    },[])
    return(
        <>
            <AboutSideBar>
                <DropDown tabIndex={-1}>
                    <Dropbtn onClick={Clickit}>
                        <TextButton page={page1}>Nickel Ore Mining</TextButton>
                        <TextButton page={page2}>Ferronickel Smelting</TextButton>
                        <TextButton page={page3}>Resource and Reserve</TextButton>
                        <TextButton page={page4}>Nickel-Cobalt HPAL</TextButton>
                        <TextButton page={page5}>Ore Export</TextButton>
                        <TextButton page={page6}>Power Plants</TextButton>

                        <ArrowDiv>
                            {selected ? <ArrowDownLang style={{transform: "rotate(225deg)"}}/> : <ArrowDownLang/>}
                        </ArrowDiv>
                    </Dropbtn>
                    { selected ?
                    <Contentt>
                        <AboutSideBarContent page={page1} to="/Nickle-Ore-Mining">
                            Nickel Ore Mining
                        </AboutSideBarContent>
                        <AboutSideBarContent page={page2} to="/Ferronickle-Smelting">
                            Ferronickel Smelting
                        </AboutSideBarContent>
                        <AboutSideBarContent page={page3} to="/Resource-Reserve">
                            Resource and Reserve
                        </AboutSideBarContent>
                        <AboutSideBarContent page={page4} to="/Nickle-Cobalt-HPAL">
                            Nickel-Cobalt HPAL
                        </AboutSideBarContent>
                        <AboutSideBarContent page={page5} to="/Ore-Export">
                            Ore Export
                        </AboutSideBarContent>
                        <AboutSideBarContent page={page6} to="/Power-Plant">
                            Power Plants
                        </AboutSideBarContent>
                    </Contentt>
                    : 
                    <Changed>
                        <Contentt>
                        <AboutSideBarContent page={page1} to="/Nickle-Ore-Mining">
                        Nickel Ore Mining
                        </AboutSideBarContent>
                        <AboutSideBarContent page={page2} to="/Ferronickle-Smelting">
                        Ferronickel Smelting
                        </AboutSideBarContent>
                        <AboutSideBarContent page={page3} to="/Resource-Reserve">
                        Resource and Reserve
                        </AboutSideBarContent>
                        <AboutSideBarContent page={page4} to="/Nickle-Cobalt-HPAL">
                            Nickel-Cobalt HPAL
                        </AboutSideBarContent>
                        <AboutSideBarContent page={page5} to="/Ore-Export">
                            Ore Export
                        </AboutSideBarContent>
                        <AboutSideBarContent page={page6} to="/Power-Plant">
                            Power Plants
                        </AboutSideBarContent>
                    </Contentt>
                    </Changed>
                    }
                </DropDown>
            </AboutSideBar>
        </>
    )
}

export default BusinessSideBarComponents;
/*
import React,{ useState, useEffect } from "react";
import {
    BusinessSideBar,
    BusinessSideBarContent,
    BusinessSideBarImage,
    ArrowDiv,
    ArrowDownLang,
    TextButton,
    DropDown,
    Dropbtn,
    Contentt,
    Changed
} from "./BusinessElements";
import {BusinessAllImage} from "../Data/BusinessData/BussinessDatas";
import {businessService} from "../../service/Business";
const BusinessSideBarComponents = ({page1,page2,page3,page4,page5,page6}) => {
  const [businessImage, setBusinessImage] = useState([]);
  const [selected, setSelected] = useState(true);

  const Clickit = ()=>{
    setSelected(!selected);
  }
  useEffect(() => {
    Clickit()
    const fetchData = async () => {
      const response = await businessService.getListBusiness();
      const data = response.data;
      setBusinessImage(data);
    };
    fetchData();
  }, []);

  const callImage = (idx) => {
    return businessImage[idx].thumbnail.url;
  };
  if (businessImage.length === 0) return null;

    return(
        <>
            <BusinessSideBar>
                    <DropDown tabIndex={-1}>
                    <Dropbtn onClick={Clickit}>
                        <TextButton page={page1}>Nickel Ore Mining</TextButton>
                        <TextButton page={page2}>Ferronickel Smelting</TextButton>
                        <TextButton page={page3}>Resource and Reserve</TextButton>
                        <TextButton page={page4}>Nickel-Cobalt HPAL</TextButton>
                        <TextButton page={page5}>Jetty Terminal</TextButton>
                        <TextButton page={page6}>Power Plants</TextButton>

                        <ArrowDiv>
                            {selected ? <ArrowDownLang style={{transform: "rotate(225deg)"}}/> : <ArrowDownLang/>}
                        </ArrowDiv>
                    </Dropbtn>
                    { selected ? 
                    <Contentt>
                        <h1>Mining</h1>
                        <BusinessSideBarImage img={callImage(0)}>
                            <BusinessSideBarContent page={page1} to="/Nickle-Ore-Mining">Nickel Ore Mining</BusinessSideBarContent>
                        </BusinessSideBarImage>
                        <BusinessSideBarImage img={callImage(1)}>
                            <BusinessSideBarContent page={page2} to="/Ferronickle-Smelting">Ferronickel Smelting</BusinessSideBarContent>
                        </BusinessSideBarImage>
                        <BusinessSideBarImage img={callImage(2)}>
                            <BusinessSideBarContent page={page3} to="/Resource-Reserve">Resource and Reserve</BusinessSideBarContent>
                        </BusinessSideBarImage>
                        <BusinessSideBarImage img={callImage(3)}>
                            <BusinessSideBarContent page={page4} to="/Nickle-Cobalt-HPAL">Nickel-Cobalt HPAL</BusinessSideBarContent>
                        </BusinessSideBarImage>
                        <h1>Logistic</h1>
                        <BusinessSideBarImage img={callImage(4)}>
                            <BusinessSideBarContent page={page5} to="/Jetty-Terminal">Jetty Terminal</BusinessSideBarContent>
                        </BusinessSideBarImage>
                        <h1>Energy</h1>
                        <BusinessSideBarImage img={callImage(5)}>
                            <BusinessSideBarContent page={page6} to="/Power-Plant">Power Plants</BusinessSideBarContent>
                        </BusinessSideBarImage>
                    </Contentt>
                    : 
                    <Changed>
                        <Contentt>
                        <h1>Mining</h1>
                        <BusinessSideBarImage img={callImage(0)}>
                            <BusinessSideBarContent page={page1} to="/Nickle-Ore-Mining">Nickel Ore Mining</BusinessSideBarContent>
                        </BusinessSideBarImage>
                        <BusinessSideBarImage img={callImage(1)}>
                            <BusinessSideBarContent page={page2} to="/Ferronickle-Smelting">Ferronickel Smelting</BusinessSideBarContent>
                        </BusinessSideBarImage>
                        <BusinessSideBarImage img={callImage(2)}>
                            <BusinessSideBarContent page={page3} to="/Resource-Reserve">Resource and Reserve</BusinessSideBarContent>
                        </BusinessSideBarImage>
                        <BusinessSideBarImage img={callImage(3)}>
                            <BusinessSideBarContent page={page4} to="/Nickle-Cobalt-HPAL">Nickel-Cobalt HPAL</BusinessSideBarContent>
                        </BusinessSideBarImage>
                        <h1>Logistic</h1>
                        <BusinessSideBarImage img={callImage(4)}>
                            <BusinessSideBarContent page={page5} to="/Jetty-Terminal">Jetty Terminal</BusinessSideBarContent>
                        </BusinessSideBarImage>
                        <h1>Energy</h1>
                        <BusinessSideBarImage img={callImage(5)}>
                            <BusinessSideBarContent page={page6} to="/Power-Plant">Power Plants</BusinessSideBarContent>
                        </BusinessSideBarImage>
                    </Contentt>
                    </Changed>}
                    </DropDown>
            </BusinessSideBar>
        </>
    )
};
export default BusinessSideBarComponents; */
