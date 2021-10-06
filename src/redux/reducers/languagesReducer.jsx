import { GET_LANGUAGES } from "../type";

const initialState = {
  languages: false,
};

export const languagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LANGUAGES:
      return {
        languages: !state.languages,
      };
    default:
      return state;
  }
};
