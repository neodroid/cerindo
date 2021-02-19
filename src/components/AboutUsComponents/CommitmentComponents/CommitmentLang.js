import React from "react";

export const CommitmentLangBody = (data, lang) => {
  var text =
    lang === "en" ? (
      <div>{data.commitment_content_en}</div>
    ) : lang === "id" ? (
      <div>{data.commitment_content_id}</div>
    ) : lang === "cn" ? (
      <div>{data.commitment_content_ch}</div>
    ) : (
      <> </>
    );

  return text;
};
