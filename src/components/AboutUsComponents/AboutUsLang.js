import React from 'react'

export const AboutUsTitle = (lang) => {
    var text = 
    (lang === "en") ? 
        <>About Us</> :
    (lang === "id") ? 
        <>Tentang Kami</> :
    (lang === "cn") ? 
        <>关于我们</> : <> </>;

    return text
}

export const AboutUsSidebar = (data, lang, index) => {
    var text = 
    (lang === "en") ? 
        <>{data[index].en}</> :
    (lang === "id") ? 
        <>{data[index].id}</> :
    (lang === "cn") ? 
        <>{data[index].ch}</> : <> </>;

    return text
}