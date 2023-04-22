interface Constants {
  [key: string]: any;
}

interface InitialState {
  messages: Constants;
  errors: Constants;
  loading: Constants;
  contents: Constants;
}

export const buildInitialState = (constants: string[]): InitialState => ({
  messages: constants.reduce((retObj: Constants, constant: string) => {
    retObj[constant] = [];
    return retObj;
  }, {}),
  errors: constants.reduce((retObj: Constants, constant: string) => {
    retObj[constant] = [];
    return retObj;
  }, {}),
  loading: constants.reduce((retObj: Constants, constant: string) => {
    retObj[constant] = false;
    return retObj;
  }, {}),
  contents: constants.reduce((retObj: Constants, constant: string) => {
    retObj[constant] = [];
    return retObj;
  }, {}),
});
