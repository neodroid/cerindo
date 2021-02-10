import React from "react";

export const OreExportLangTitle = (oreExport, lang) => {
  var text =
    lang === "en" ? (
      <div>{oreExport.title_en}</div>
    ) : lang === "id" ? (
      <div>{oreExport.title_id}</div>
    ) : lang === "cn" ? (
      <div>{oreExport.title_ch}</div>
    ) : <> </>;

  return text;
};

export const OreExportLangBody = (oreExport, lang) => {
  var text =
    lang === "en" ? (
      <div>{oreExport.body_en}</div>
    ) : lang === "id" ? (
      <div>{oreExport.body_id}</div>
    ) : lang === "cn" ? (
      <div>{oreExport.body_ch}</div>
    ) : <> </>;

  return text;
};

export const OreExportLangBody2 = (oreExport, lang) => {
  var text =
    lang === "en" ? (
      <div>{oreExport.body2_en}</div>
    ) : lang === "id" ? (
      <div>{oreExport.body2_id}</div>
    ) : lang === "cn" ? (
      <div>{oreExport.body2_ch}</div>
    ) : <> </>;

  return text;
};
