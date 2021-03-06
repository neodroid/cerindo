import React from "react";

export const ResourceReserveLangTitle = (resourceReserve, lang) => {
  var text =
    lang === "en" ? (
      <div>{resourceReserve.title_en}</div>
    ) : lang === "id" ? (
      <div>{resourceReserve.title_id}</div>
    ) : lang === "cn" ? (
      <div>{resourceReserve.title_ch}</div>
    ) : <> </>;

  return text;
};

export const ResourceReserveLangBody = (resourceReserve, lang) => {
  var text =
    lang === "en" ? (
      <div>{resourceReserve.body_en}</div>
    ) : lang === "id" ? (
      <div>{resourceReserve.body_id}</div>
    ) : lang === "cn" ? (
      <div>{resourceReserve.body_ch}</div>
    ) : <> </>;

  return text;
};

export const ResourceReserveLangBody2 = (resourceReserve, lang) => {
  var text =
    lang === "en" ? (
      <div>{resourceReserve.body2_en}</div>
    ) : lang === "id" ? (
      <div>{resourceReserve.body2_id}</div>
    ) : lang === "cn" ? (
      <div>{resourceReserve.body2_ch}</div>
    ) : <> </>;

  return text;
};
