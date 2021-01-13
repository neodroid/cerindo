import React from "react";
import {Businessstyle,BusinessMain,BusinessWrited} from "../BusinessElements";
import BusinessSideBarComponents from "../index";
import {NickleOreMiningContent} from "../../Data/BusinessData/NickleOreMiningDatas"

const NickleOreComponents = () => {
    return(
        <>
        <Businessstyle>
            <BusinessSideBarComponents page1={true}/>
            <BusinessMain>
                {NickleOreMiningContent.map((data,idx)=>{
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
export default NickleOreComponents;