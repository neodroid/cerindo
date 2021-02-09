import React from "react";

export const PowerPlantLangTitle = (powerPlant, lang) => {
  var text =
    lang === "en" ? (
      <div>{powerPlant.title_en}</div>
    ) : lang === "id" ? (
      <div>{powerPlant.title_id}</div>
    ) : lang === "cn" ? (
      <div>{powerPlant.title_ch}</div>
    ) : <></>;

  return text;
};

export const PowerPlantLangBody = (powerPlant, lang) => {
  var text =
    lang === "en" ? (
      <div>{powerPlant.body_en}</div>
    ) : lang === "id" ? (
      <div>{powerPlant.body_id}</div>
    ) : lang === "cn" ? (
      <div>{powerPlant.body_ch}</div>
    ) : <></>;

  return text;
};

export const PowerPlantLangBody2 = (powerPlant, lang) => {
  var text =
    lang === "en" ? (
      <div>{powerPlant.body2_en}</div>
    ) : lang === "id" ? (
      <div>{powerPlant.body2_id}</div>
    ) : lang === "cn" ? (
      <div>{powerPlant.body2_ch}</div>
    ) : <></>;

  return text;
};
