import React from "react";

export const NickleCobaltLangTitle = (nickelCobalt, lang) => {
  var text =
    lang === "en" ? (
      <div>{nickelCobalt.title_en}</div>
    ) : lang === "id" ? (
      <div>{nickelCobalt.title_id}</div>
    ) : lang === "cn" ? (
      <div>{nickelCobalt.title_ch}</div>
    ) : <></>;

  return text;
};

export const NickleCobaltLangBody = (nickelCobalt, lang) => {
  var text =
    lang === "en" ? (
      <div>{nickelCobalt.body_en}</div>
    ) : lang === "id" ? (
      <div>{nickelCobalt.body_id}</div>
    ) : lang === "cn" ? (
      <div>{nickelCobalt.body_ch}</div>
    ) : <></>;

  return text;
};

export const NickleCobaltLangBody2 = (nickelCobalt, lang) => {
  var text =
    lang === "en" ? (
      <div>{nickelCobalt.body2_en}</div>
    ) : lang === "id" ? (
      <div>{nickelCobalt.body2_id}</div>
    ) : lang === "cn" ? (
      <div>{nickelCobalt.body2_ch}</div>
    ) : <></>;

  return text;
};
