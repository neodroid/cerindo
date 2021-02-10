import React from 'react'

export const BODlang = (data, lang) => {
    var text = 
    (lang === "en") ? 
        <div>{data.description_en}</div> :
    (lang === "id") ? 
        <div>{data.description_id}</div> :
    (lang === "cn") ? 
        <div>{data.description_ch}</div> : <> </>;

    return text
}