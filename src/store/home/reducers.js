import { SAVE_FILTER } from "./types";

const initialDatasetState = {
  filter: "accounts",
  errorMessage: "",
};

export function dataReducer(state = initialDatasetState, action) {
  switch (action.type) {
    case SAVE_FILTER:
      return Object.assign({}, state, {
        filter: action.data.data,
      });
    default:
      return state;
  }
}
