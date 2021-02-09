import React, { useContext } from 'react'
import {NavDropLinks} from './NavbarElements';

export const NavbarLang = (data, lang) => {
    var text = 
    (lang === "en") ? 
        <div>{data.en}</div> :
    (lang === "id") ? 
        <div>{data.id}</div> :
    (lang === "cn") ? 
        <div>{data.ch}</div> : null;

    return text
};

export const NavbarDropDown = (data, index, lang) => {
    var text = 
        (lang === "en") ? 
            <>{data[index].en}</> :
        (lang === "id") ? 
            <>{data[index].id}</> :
        (lang === "cn") ? 
            <>{data[index].ch}</> : null;

        return text   
};