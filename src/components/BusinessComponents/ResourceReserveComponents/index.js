import React from "react";
import {Businessstyle,BusinessMain,BusinessWrited} from "../BusinessElements";
import BusinessSideBarComponents from "../index";
import {ResourceReserveContent} from "../../Data/BusinessData/ResourceReserveDatas"

const ResourceReserveComponents = () => {
    return(
        <>
        <Businessstyle>
            <BusinessSideBarComponents page3={true}/>
            <BusinessMain>
                {ResourceReserveContent.map((data,idx)=>{
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
export default ResourceReserveComponents;