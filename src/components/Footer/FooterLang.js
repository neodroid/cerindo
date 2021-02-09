import React, { useContext } from 'react';

export const FooterData = (data, index, lang) => {
    var text = 
        (lang === "en") ? 
            <>{data[index].en}</> :
        (lang === "id") ? 
            <>{data[index].id}</> :
        (lang === "cn") ? 
            <>{data[index].ch}</> : null;

        return text   
};

export const FooterDataSingle = (data, lang) => {
    var text = 
        (lang === "en") ? 
            <>{data.en}</> :
        (lang === "id") ? 
            <>{data.id}</> :
        (lang === "cn") ? 
            <>{data.ch}</> : null;

        return text   
};