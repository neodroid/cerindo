import React from "react";
import {NewsMediaData} from "../../../Data/News"
import {
    NewsMapWrap,
    NewsMap,
    NewsMapImg,
    NewsMapsImg
} from "./NewsMediaElements"

const NewsMedia = () => {
    return(
        <>
        <NewsMapWrap>
        <h1>Ceria was seen on</h1>
        <NewsMapsImg>
            {NewsMediaData.map((data,idx) => {
                return(
                    <NewsMapImg src = {data.image} ley={idx}/>
                )
            })
            }
        </NewsMapsImg>
        </NewsMapWrap>
        </>
    )
}

export default NewsMedia;