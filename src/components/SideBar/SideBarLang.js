import React, { useContext } from 'react';

export const SideBarLang = (data, lang) => {
    var text = 
    (lang === "en") ? 
        <div>{data.en}</div> :
    (lang === "id") ? 
        <div>{data.id}</div> :
    (lang === "cn") ? 
        <div>{data.ch}</div> : <></>;

    return text
};

export const SideBarDropDown = (data, index, lang) => {
    var text = 
        (lang === "en") ? 
            <>{data[index].en}</> :
        (lang === "id") ? 
            <>{data[index].id}</> :
        (lang === "cn") ? 
            <>{data[index].ch}</> : <></>;

        return text   
};