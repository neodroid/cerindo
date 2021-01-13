import React from "react";
import {Businessstyle,BusinessMain,BusinessWrited} from "../BusinessElements";
import BusinessSideBarComponents from "../index";
import {HPALContent} from "../../Data/BusinessData/HPALDatas"

const NickelCobaltHPALComponents = () => {
    return(
        <>
        <Businessstyle>
            <BusinessSideBarComponents page4={true}/>
            <BusinessMain>
                {HPALContent.map((data,idx)=>{
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
export default NickelCobaltHPALComponents;