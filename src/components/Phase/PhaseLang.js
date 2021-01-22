import React from 'react'

export const PhaseBody = (phase, lang) => {
    var text = 
    (lang == "en") ? 
        <div>{phase.body_en}</div> :
    (lang == "id") ? 
        <div>{phase.body_id}</div> :
    (lang == "cn") ? 
        <div>{phase.body_ch}</div> : null;

    return text
}
