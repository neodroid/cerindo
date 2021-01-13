import React from "react";
import {Businessstyle,BusinessMain,BusinessWrited} from "../BusinessElements";
import BusinessSideBarComponents from "../index";
import {JettyTerminalContent} from "../../Data/BusinessData/JettyTerminalDatas"

const JettyTerminalComponents = () => {
    return(
        <>
        <Businessstyle>
            <BusinessSideBarComponents page5={true}/>
            <BusinessMain>
                {JettyTerminalContent.map((data,idx)=>{
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
export default JettyTerminalComponents;