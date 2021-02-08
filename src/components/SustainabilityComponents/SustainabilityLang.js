import React from 'react'

export const SustainabilityTitle = (lang) => {
    var text = 
    (lang === "en") ? 
        <>Global Sustainability</> :
    (lang === "id") ? 
        <>Keberlangsungan Global</> :
    (lang === "cn") ? 
        <>全球可持续发展</> : null;

    return text
}