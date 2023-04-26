import { ReduxDefaultState } from "./ReduxDefaultState";
import { LanguageState } from "../../redux/reducers/individual/languageReducer";
import { UPDATE_LANGUAGE } from "../../redux/action-creators/languageCreators";

export interface ReduxStoreState {
  language: LanguageState & {
    [key in typeof UPDATE_LANGUAGE]?: Record<string, string>;
  };
}
