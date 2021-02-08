import React from 'react'

export const BusinessTitle = (lang) => {
    var text = 
    (lang === "en") ? 
        <>Business</> :
    (lang === "id") ? 
        <>Bisnis</> :
    (lang === "cn") ? 
        <>商业</> : null;

    return text
}