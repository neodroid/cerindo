import React from "react";
import {Businessstyle,BusinessMain,BusinessWrited} from "../BusinessElements";
import BusinessSideBarComponents from "../index";
import {PowerPlantContent} from "../../Data/BusinessData/PowerPlantDatas"

const PowerPlantComponents = () => {
    return(
        <>
        <Businessstyle>
            <BusinessSideBarComponents page6={true}/>
            <BusinessMain>
                {PowerPlantContent.map((data,idx)=>{
                    return(
                        <div key={idx}>
                        <BusinessWrited title>{data.title}</BusinessWrited>
                        <BusinessWrited>{data.content}</BusinessWrited>
                        </div>
                    )
                })}
            </BusinessMain>
        </Businessstyle>
        </>
    )
};
export default PowerPlantComponents;