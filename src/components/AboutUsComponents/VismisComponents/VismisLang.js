import React from "react";

export const VisMisTitleLang = (data, lang) => {
  var text =
    lang === "en" ? (
      <div>{data.en}</div>
    ) : lang === "id" ? (
      <div>{data.id}</div>
    ) : lang === "cn" ? (
      <div>{data.ch}</div>
    ) : (
      <> </>
    );

  return text;
};

export const VisionDescriptionLang = (data, lang) => {
  var text =
    lang === "en" ? (
      <div>{data.vision_description_en}</div>
    ) : lang === "id" ? (
      <div>{data.vision_description_id}</div>
    ) : lang === "cn" ? (
      <div>{data.vision_description_ch}</div>
    ) : (
      <> </>
    );

  return text;
};

export const MissionDescriptionLang = (data, lang) => {
  var text =
    lang === "en" ? (
      <div>{data.mission_description_en}</div>
    ) : lang === "id" ? (
      <div>{data.mission_description_id}</div>
    ) : lang === "cn" ? (
      <div>{data.mission_description_ch}</div>
    ) : (
      <> </>
    );

  return text;
};

export const ValueTitleLang = (data, lang) => {
  var text =
    lang === "en" ? (
      <div>{data.value_en}</div>
    ) : lang === "id" ? (
      <div>{data.value_id}</div>
    ) : lang === "cn" ? (
      <div>{data.value_ch}</div>
    ) : (
      <> </>
    );

  return text;
};

export const ValueDescriptionLang = (data, lang) => {
  var text =
    lang === "en" ? (
      <div>{data.value_description_en}</div>
    ) : lang === "id" ? (
      <div>{data.value_description_id}</div>
    ) : lang === "cn" ? (
      <div>{data.value_description_ch}</div>
    ) : (
      <> </>
    );

  return text;
};
