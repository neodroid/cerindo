import React from "react";
import {SustainabilityElementsDatas} from "../../Data/HomeData/SustainabilityElementsDatas";
import {Link as LinkR} from "react-router-dom";
import { Button } from "../../ButtonElement";
import {InfoBg} from "../Business/BusinessElements";
import { InfoRow,
    Column1,
    TextWrapper,
    BtnWrap,
    InfoWrapper,
} from "../AboutUs/AboutUsElements";
import {
    Heading,
    Subtitle,
    Column2
} from "./SustainabilityElements";
import {ImageRight, ImageCenter, ImageLeft,ImageCanvas,Imaging} from "./SustainabilityElements"

const Sustainability = () => {
    return(
        <InfoBg>
                <InfoWrapper>
                    <InfoRow imgStart={true}>
                        <Column1>
                            <TextWrapper>
                                <Heading lightText={true}>{SustainabilityElementsDatas.title}</Heading>
                                <Subtitle darktext={false}>{SustainabilityElementsDatas.about}</Subtitle>
                                <BtnWrap button={true}>
                                <Button
                                    primary="false"
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact="true"
                                    offset={-80}
                                ><LinkR to="/QHSE" style={{textDecoration: "none", color:"white"}}>
                                    View Our Commitment
                                    </LinkR>
                                </Button>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <Imaging>
                                <ImageRight img={SustainabilityElementsDatas.image1}></ImageRight>
                                <ImageCenter img={SustainabilityElementsDatas.image2}>
                                    <ImageCanvas></ImageCanvas>
                                </ImageCenter>
                                <ImageLeft img={SustainabilityElementsDatas.image3}></ImageLeft>
                            </Imaging>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
        </InfoBg>
    )
};

export default Sustainability;