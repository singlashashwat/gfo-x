import { SAVE_USER } from "./types";

const initialDatasetState = {
  user: "",
  errorMessage: "",
};

export function dataReducer(state = initialDatasetState, action) {
  debugger;
  switch (action.type) {
    case SAVE_USER:
      return Object.assign({}, state, {
        user: action.data.data,
      });
    default:
      return state;
  }
}
