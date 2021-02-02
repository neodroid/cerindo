import React from "react";
import {JobData} from "../../Data/CareerData";
import { FaAngleLeft } from "react-icons/fa";
import {
    BannerStyle,
    MainCareer,
    Upsiv,
    Mail,
    ArrowLeft,
    Inputan,
    ApartInputan,
    InputanArea,
    Buttonscv,
    Buttons
} from "./JobElements";
import { FaArrowRight } from "react-icons/fa";

const JobComponents = ({match}) =>{
    const jobss = JobData.filter(x=>x['job'] == match.params.job);
    const jobing = jobss.map(x=>x.joblist.filter(x=>x.jobs == match.params.jobs));
    const prejob = jobing.map(x=>x.map(y=>y.prerequisite))
    return(
        <>
            <BannerStyle>
                {jobing.map(x=>x.map(y=>y.jobs))}
            </BannerStyle>
            <MainCareer>
                <h1>Main Purpose of Position</h1>
                <p>{prejob.map(x=>x.map(y=>y.allpurpose))}</p>
                <h1>Main Duties & Responsibilities</h1>
                <p>{prejob.map(x=>x.map(y=>y.duties))}</p>
                <h1>Qualification</h1>
                <p>{prejob.map(x=>x.map(y=>y.quali))}</p>
                <Upsiv>
                Please send your CV to <Mail>recruitment@cerindocorp.co.id</Mail> <br/>
                Candidates who do not meet the criteria are expected not to submit a CV. Only CVs that meet the criteria will be processed further. Candidates who are accepted will receive an attractive remuneration package.
                </Upsiv>
                <ArrowLeft to="/Career"><FaAngleLeft/>Back to Career</ArrowLeft>
                <h1>Upload CV</h1>
                <Inputan
                type="text"
                placeholder="Your Name"
                required/>
                <ApartInputan>
                    <Inputan
                    type="text"
                    placeholder="Your Phone Number"
                    required/>
                    <Inputan
                    type="email"
                    placeholder="Your Email"
                    required/>
                </ApartInputan>
                <Inputan
                    type="text"
                    placeholder="Subject"
                    required/>
                <InputanArea  
                rows="20"
                required 
                placeholder="Type your message"
                style={{marginTop:"20px",padding:"16px"}}/>
                <br/>
                <label for="myfile"
                style={{color:"#A5A3A3",fontSize:"14px",lineHeight:"30px",margin:"20px 0"}}
                >Upload PDF max 2 mb </label>
                <input type="file" id="myfile" name="myfile"/>
                <br/>
                <Buttonscv>
                <Buttons>Send <FaArrowRight style={{marginLeft:"8px"}}/></Buttons>
                </Buttonscv>
            </MainCareer>
        </>
    )
}

export default JobComponents;