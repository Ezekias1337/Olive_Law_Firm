import { combineReducers } from "redux";
import languageReducer from "./individual/languageReducer";

export const rootReducer = combineReducers({
  language: languageReducer,
});

export type RootReducerType = ReturnType<typeof rootReducer>;
