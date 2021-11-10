import React from "react";

export const BODlang = (data, lang) => {
  var text =
    lang === "en" ? (
      <div>{data.description_en}</div>
    ) : lang === "id" ? (
      <div>{data.description_id}</div>
    ) : lang === "cn" ? (
      <div>{data.description_ch}</div>
    ) : (
      <> </>
    );

  return text;
};

export const BODMTitleLang = (data, lang, index) => {
  var text = 
    (lang === "en") ? 
        <>{data[index].en}</> :
    (lang === "id") ? 
        <>{data[index].id}</> :
    (lang === "cn") ? 
        <>{data[index].ch}</> : <> </>;

  return text
}

export const BODTitleLang = (data, lang) => {
  var text =
    lang === "en" ? (
      <div>{data.position_en}</div>
    ) : lang === "id" ? (
      <div>{data.position_id}</div>
    ) : lang === "cn" ? (
      <div>{data.position_ch}</div>
    ) : (
      <> </>
    );

  return text;
};
