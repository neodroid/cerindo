import React from "react";
import {Businessstyle,BusinessMain,BusinessWrited} from "../BusinessElements";
import BusinessSideBarComponents from "../index";
import {FerronickleSmeltingContent} from "../../Data/BusinessData/FerronickleSmeltingDatas"

const FerronickleSmeltingComponents = () => {
    return(
        <>
        <Businessstyle>
            <BusinessSideBarComponents page2={true}/>
            <BusinessMain>
                {FerronickleSmeltingContent.map((data,idx)=>{
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
export default FerronickleSmeltingComponents;