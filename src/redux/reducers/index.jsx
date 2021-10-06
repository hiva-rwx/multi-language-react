import { combineReducers } from "redux";
import { languageReducer } from "./languageReducer";
import { languagesReducer } from "./languagesReducer";

export const reducers = combineReducers({
    language:languageReducer,
    languages:languagesReducer
})