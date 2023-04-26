// Library Imports
import { Action, Reducer } from "redux";
// Action Types
import {
  UPDATE_LANGUAGE,
  UPDATE_LANGUAGE_RESET,
  UpdateLanguageAction,
} from "../../action-creators/languageCreators";

interface LanguageState {
  contents: Record<string, string>;
}

const buildAutomationState = (): LanguageState => {
  const INITIAL_STATE: LanguageState = {
    contents: {},
  };

  return INITIAL_STATE;
};

const INITIAL_STATE: LanguageState = buildAutomationState();

const reducer: Reducer<LanguageState, Action> = (
  state = INITIAL_STATE,
  action
) => {
  let newStateObject: LanguageState;

  switch (action.type) {
    case UPDATE_LANGUAGE:
      newStateObject = {
        ...state,
      };

      newStateObject.contents[UPDATE_LANGUAGE] = (
        action as UpdateLanguageAction
      ).payload;
      return newStateObject;

    case UPDATE_LANGUAGE_RESET:
      newStateObject = buildAutomationState();

      return newStateObject;

    default:
      return state;
  }
};

export default reducer;
