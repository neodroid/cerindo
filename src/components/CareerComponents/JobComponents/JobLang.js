import React from "react";
export const JobLangName = (data, lang) => {
  var text =
    lang === "en" ? (
      <div>{data.name_en}</div>
    ) : lang === "id" ? (
      <div>{data.name_id}</div>
    ) : lang === "cn" ? (
      <div>{data.name_ch}</div>
    ) : (
      <> </>
    );

  return text;
};
export const JobLangPurpose = (data, lang) => {
  var text =
    lang === "en" ? (
      <div>{data.purpose_of_position_en}</div>
    ) : lang === "id" ? (
      <div>{data.purpose_of_position_id}</div>
    ) : lang === "cn" ? (
      <div>{data.purpose_of_position_ch}</div>
    ) : (
      <> </>
    );

  return text;
};

export const JobLangDuties = (data, lang) => {
  var text =
    lang === "en" ? (
      <div>{data.duties_and_responsibilities_en}</div>
    ) : lang === "id" ? (
      <div>{data.duties_and_responsibilities_id}</div>
    ) : lang === "cn" ? (
      <div>{data.duties_and_responsibilities_ch}</div>
    ) : (
      <> </>
    );

  return text;
};

export const JobLangQual = (data, lang) => {
  var text =
    lang === "en" ? (
      <div>{data.qualifications_en}</div>
    ) : lang === "id" ? (
      <div>{data.qualifications_id}</div>
    ) : lang === "cn" ? (
      <div>{data.qualifications_ch}</div>
    ) : (
      <> </>
    );

  return text;
};
