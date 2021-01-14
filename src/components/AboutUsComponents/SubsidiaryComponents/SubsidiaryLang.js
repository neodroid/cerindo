import React from 'react'

export const SubsidiaryLang = (detailSubsidiary, lang) => {
    var text = 
    (lang == "en") ? 
        <div>{detailSubsidiary.description_en}</div> :
    (lang == "id") ? 
        <div>{detailSubsidiary.description_id}</div> :
    (lang == "cn") ? 
        <div>{detailSubsidiary.description_ch}</div> : null;

    return text
}