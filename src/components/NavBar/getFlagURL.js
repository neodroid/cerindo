// const getLink = (n) => `https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.1.0/flags/4x3/${n}.svg`;
const ext = {
  svg: (n) =>
    `https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.1.0/flags/4x3/${n}.svg`,
  png: (n) => `https://cdn.ip2location.com/assets/img/flags/${n}.png`,
};

export default function getFlagUrl(language, type = "png") {
  const getter = ext[type] || ext.png;

  switch (language) {
    case "en":
      return getter("us");
    case "pt-BR":
      return getter("br");
    case "zh":
      return getter("tw");
    case "zh-Hans":
      return getter("cn");
    case "ar":
      return getter("sa");
    case "ko":
      return getter("kr");
    case "ja":
      return getter("jp");
    case "vi":
      return getter("vn");
    case "sk":
      return getter("sk");
    case "cs":
      return getter("cz");
    case "ms":
      return getter("my");
    default:
      return getter(language);
  }
}
