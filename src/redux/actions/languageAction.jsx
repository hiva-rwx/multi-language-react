import { SET_LANGUAGE, GET_LANGUAGES } from "../type";

export const getLangs = () => {
  return {
    type: GET_LANGUAGES,
  };
};

export const setLang = (lang) => {
  localStorage.setItem("language", lang);
  return {
    type: SET_LANGUAGE,
    payload: lang,
  };
};
