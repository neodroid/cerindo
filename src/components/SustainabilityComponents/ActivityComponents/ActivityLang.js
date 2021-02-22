import React from "react";

export const ActivityLangTitle = (data, lang) => {
  var text =
    lang === "en" ? (
      <div>{data.title_en}</div>
    ) : lang === "id" ? (
      <div>{data.title_id}</div>
    ) : lang === "cn" ? (
      <div>{data.title_ch}</div>
    ) : (
      <> </>
    );

  return text;
};

export const ActivityLangBody = (data, lang) => {
  var text =
    lang === "en" ? (
      <>{`${data.news_en.substring(0, 100)}...`}</>
    ) : lang === "id" ? (
      <>{`${data.news_id.substring(0, 100)}...`}</>
    ) : lang === "cn" ? (
      <>{`${data.news_ch.substring(0, 100)}...`}</>
    ) : (
      <> </>
    );

  return text;
};

export const ActivityLangRead = (data, lang) => {
  var text =
    lang === "en" ? (
      <>{data.en}</>
    ) : lang === "id" ? (
      <>{data.id}</>
    ) : lang === "cn" ? (
      <>{data.ch}</>
    ) : (
      <> </>
    );

  return text;
};
