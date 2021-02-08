import React from 'react'

export const AboutUsTitle = (lang) => {
    var text = 
    (lang === "en") ? 
        <>About Us</> :
    (lang === "id") ? 
        <>Tentang Kami</> :
    (lang === "cn") ? 
        <>关于我们</> : null;

    return text
}