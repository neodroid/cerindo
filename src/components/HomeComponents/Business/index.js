import React from "react";
import {BusinessElementsDatas} from "../../Data/HomeData/BusinessElementsDatas";
import {Link as LinkR} from "react-router-dom";
import { Button } from "../../ButtonElement";
import {
    InfoBg,
    InfoWrappered,
    ImageInfo,
    Heading,
    Subtitle,
} from "./BusinessElements";
import { InfoRow,
    Column1,
    TextWrapper,
    Column2,
    BtnWrap,
    InfoWrapper
} from "../AboutUs/AboutUsElements";

const Business = () => {
    return(
        <InfoBg img={BusinessElementsDatas.background}>
            <InfoWrappered>
                <InfoWrapper>
                    <InfoRow imgStart={false}>
                        <Column1>
                        <TextWrapper>
                            <Heading>{BusinessElementsDatas.title}</Heading>
                            <Subtitle>{BusinessElementsDatas.about}</Subtitle>
                            <BtnWrap button={true}>
                            <Button
                                primary="false"
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact="true"
                                offset={-80}
                                to="/Nickle-Ore-Mining"
                            >
                                Learn More
                            </Button>
                            </BtnWrap>
                        </TextWrapper>
                        </Column1>
                        <Column2>
                        <ImageInfo src={BusinessElementsDatas.image} alt="image"/>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoWrappered>
        </InfoBg>
    )
};

export default Business;