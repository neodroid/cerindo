import React from "react";

export const CareerLangTitle = (career, lang) => {
  var text =
    lang === "en" ? (
      <div>{career.Title.title_en}</div>
    ) : lang === "id" ? (
      <div>{career.Title.title_id}</div>
    ) : lang === "cn" ? (
      <div>{career.Title.title_ch}</div>
    ) : (
      <> </>
    );

  return text;
};

export const CareerLangBody = (career, lang) => {
  var text =
    lang === "en" ? (
      <div>{career.Title.body_en}</div>
    ) : lang === "id" ? (
      <div>{career.Title.body_id}</div>
    ) : lang === "cn" ? (
      <div>{career.Title.body_ch}</div>
    ) : (
      <> </>
    );

  return text;
};

export const CareerLangEmployeeBody = (career, lang) => {
  var text =
    lang === "en" ? (
      <div>{career.body_en}</div>
    ) : lang === "id" ? (
      <div>{career.body_id}</div>
    ) : lang === "cn" ? (
      <div>{career.body_ch}</div>
    ) : (
      <> </>
    );

  return text;
};

export const CareerTitle = (lang) => {
  var text =
    lang === "en" ? (
      <>Career</>
    ) : lang === "id" ? (
      <>Karir</>
    ) : lang === "cn" ? (
      <>事业</>
    ) : (
      <> </>
    );

  return text;
};

export const CareerVacancies = (data, lang) => {
  var text =
    lang === "en" ? (
      <div>{data.name_en}</div>
    ) : lang === "id" ? (
      <>{data.name_id}</>
    ) : lang === "cn" ? (
      <>{data.name_ch}</>
    ) : (
      <> </>
    );

  return text;
};

export const CareerTitleVacancies = (lang) => {
  var text =
    lang === "en" ? (
      <>Jobs Vacancies</>
    ) : lang === "id" ? (
      <>Lowongan Pekerjaan</>
    ) : lang === "cn" ? (
      <>职位空缺</>
    ) : (
      <> </>
    );

  return text;
};

export const CareerTitleEmployee = (lang) => {
  var text =
    lang === "en" ? (
      <>Employees’ Stories</>
    ) : lang === "id" ? (
      <>Cerita Karyawan</>
    ) : lang === "cn" ? (
      <>员工故事</>
    ) : (
      <> </>
    );

  return text;
};
