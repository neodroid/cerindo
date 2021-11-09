import React from "react";

export const PortOperationsLangTitle = (portOperations, lang) => {
  var text =
    lang === "en" ? (
      <div>{portOperations.title_en}</div>
    ) : lang === "id" ? (
      <div>{portOperations.title_id}</div>
    ) : lang === "cn" ? (
      <div>{portOperations.title_ch}</div>
    ) : <></>;

  return text;
};

export const PortOperationsLangBody = (portOperations, lang) => {
  var text =
    lang === "en" ? (
      <div>{portOperations.body_en}</div>
    ) : lang === "id" ? (
      <div>{portOperations.body_id}</div>
    ) : lang === "cn" ? (
      <div>{portOperations.body_ch}</div>
    ) : <> </>;

  return text;
};

export const PortOperationsLangBody2 = (portOperations, lang) => {
  var text =
    lang === "en" ? (
      <div>{portOperations.body2_en}</div>
    ) : lang === "id" ? (
      <div>{portOperations.body2_id}</div>
    ) : lang === "cn" ? (
      <div>{portOperations.body2_ch}</div>
    ) : <> </>;

  return text;
};
