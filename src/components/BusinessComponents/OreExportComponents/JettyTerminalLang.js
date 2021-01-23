import React from 'react'

export const JettyTerminalLangTitle = (jettyTerminal, lang) => {
    var text = 
    (lang == "en") ? 
        <div>{jettyTerminal.title_en}</div> :
    (lang == "id") ? 
        <div>{jettyTerminal.title_id}</div> :
    (lang == "cn") ? 
        <div>{jettyTerminal.title_ch}</div> : null;

    return text
}

export const JettyTerminalLangBody = (jettyTerminal, lang) => {
    var text = 
    (lang == "en") ? 
        <div>{jettyTerminal.body_en}</div> :
    (lang == "id") ? 
        <div>{jettyTerminal.body_id}</div> :
    (lang == "cn") ? 
        <div>{jettyTerminal.body_ch}</div> : null;

    return text
}