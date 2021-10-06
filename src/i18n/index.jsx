import en from "./en.json";
import fa from "./fa.json";

export const translate = (key, language) => {
  let langData = {};

  if (language === "en") {
    langData = en;
  } else if (language === "fa") {
    langData = fa;
  }
  return langData[key];
};
