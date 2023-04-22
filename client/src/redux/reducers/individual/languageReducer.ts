// Library Imports
import { Action, Reducer } from "redux";
// Utils
import { buildInitialState } from "../../buildInitialState";
// Action Types
import {
  UPDATE_LANGUAGE,
  UPDATE_LANGUAGE_RESET,
  UpdateLanguageAction,
} from "../../action-creators/languageCreators";

interface LanguageState {
  messages: Record<string, string[]>;
  errors: Record<string, string[]>;
  loading: Record<string, boolean>;
  contents: Record<string, string>;
}

const buildAutomationState = (): LanguageState => {
  const INITIAL_STATE: LanguageState = buildInitialState([
    UPDATE_LANGUAGE,
    UPDATE_LANGUAGE_RESET,
  ]);

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
