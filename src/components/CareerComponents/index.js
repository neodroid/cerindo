import React from "react";
import {CareerJobCerData,EmployeProfileData} from "../Data/CareerData";
import {JobData} from "../Data/CareerData";
import {
    CareerTempl,
    Jobcer,
    JobcerContent,
    JobcerBoard,
    JobcerImage,
    ContentDiv,
    TextButton,
    ArrowDownLang,
    ArrowDiv,
    DropDown,
    Dropbtn,
    DropDownContent,
    ArrowBg,
    ContentWrited,
    ButtonLink,
    Linkeda,
    Arrowchild,
    EmployContent,
    WritedEmploy,
    InfoRow,
    Column1,
    Column2,
    EmployImage,
    Nulity
} from "./CareerElements";

const CareerComponents = () =>{
    return(
        <CareerTempl>
            <Jobcer>
                <JobcerContent>
                    <h2>Jobs in Ceria</h2>
                    <JobcerBoard/>
                    <p>{CareerJobCerData.content}</p>
                </JobcerContent>
                <JobcerImage>
                    <img src={CareerJobCerData.image}/>
                </JobcerImage>
            </Jobcer>
            <h2>Jobs Vacancies</h2>
            <div style={{width:"100%",margin:"0 auto 52px"}}>
                {JobData.map((data,idx)=>{
                    if(data.position > 1) {
                    return(
                    <DropDown role="button" tabIndex={-1} key={idx}>
                        <Dropbtn>
                            <ContentDiv job>
                            <TextButton>{data.job}</TextButton>
                            </ContentDiv>
                            <ContentDiv>
                                <TextButton pos>{data.position} Positions</TextButton>
                            </ContentDiv>
                            <ArrowDiv>
                                <ArrowBg>
                                    <ArrowDownLang />
                                </ArrowBg>
                            </ArrowDiv>
                        </Dropbtn>
                        <DropDownContent>
                        {data.joblist.map((data)=>{
                            if(data.jobs != null){
                            return(
                            <Linkeda>
                                <ContentWrited>{data.jobs}</ContentWrited>
                                <ButtonLink><Arrowchild/></ButtonLink>
                            </Linkeda>
                            )}
                            else{
                            return(
                                <Nulity/>)}
                        })}
                        </DropDownContent>
                    </DropDown>
                )}else{
                    return(
                        <DropDown role="button" tabIndex={-1} key={idx}>
                            <Dropbtn>
                                <ContentDiv job>
                                <TextButton>{data.job}</TextButton>
                                </ContentDiv>
                                <ContentDiv>
                                    <TextButton pos>{data.position} Position</TextButton>
                                </ContentDiv>
                                <ArrowDiv>
                                    <ArrowBg>
                                        <ArrowDownLang />
                                    </ArrowBg>
                                </ArrowDiv>
                            </Dropbtn>
                            <DropDownContent>
                            {data.joblist.map((data)=>{
                                if(data.jobs != null){
                                return(
                                <Linkeda>
                                    <ContentWrited>{data.jobs}</ContentWrited>
                                    <ButtonLink><Arrowchild/></ButtonLink>
                                </Linkeda>
                                )}
                                else{
                                return(
                                <Nulity/>
                                    )}
                            })}
                            </DropDownContent>
                        </DropDown>
                    )}
                })}
            </div>
            <h2>Employees’ Stories</h2>
            <div style={{width:"100%",margin:"0 auto 52px"}}>
                {EmployeProfileData.map((data,idx)=>{
                    if(idx%2 != 0){
                    return(
                    <EmployContent key={idx}>
                        <InfoRow imgStart={true}>
                            <Column1>
                            <EmployImage src={data.image}/>
                            <WritedEmploy name>{data.name}</WritedEmploy>
                            </Column1>
                            <Column2>
                            <WritedEmploy>{data.desc}</WritedEmploy>
                            </Column2>
                        </InfoRow>
                    </EmployContent>
                    )} else{
                        return(
                            <EmployContent key={idx}>
                                <InfoRow imgStart={false}>
                                    <Column1>
                                        <EmployImage src={data.image}/>
                                        <WritedEmploy name>{data.name}</WritedEmploy>
                                    </Column1>
                                    <Column2>
                                        <WritedEmploy>{data.desc}</WritedEmploy>
                                    </Column2>
                                </InfoRow>
                            </EmployContent>
                            )
                    }
                })}
            </div>
        </CareerTempl>
    )
}

export default CareerComponents;