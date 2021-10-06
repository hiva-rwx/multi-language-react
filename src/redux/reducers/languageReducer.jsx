import { SET_LANGUAGE } from "../type";

const localSorageLang  = localStorage.getItem('language')

const initialState = {
  language: localSorageLang ? localSorageLang :"en",
};

export const languageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LANGUAGE:
      return {
        ...state,
        language: action.payload,
      };
    default:
      return state;
  }
};
