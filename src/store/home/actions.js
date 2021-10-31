import { GET_ACCOUNTS, SAVE_FILTER } from "./types";

export function getAccounts() {
  return {
    type: GET_ACCOUNTS,
  };
}

export function saveFilter(data) {
  return {
    type: SAVE_FILTER,
    data: {
      data,
    },
  };
}
