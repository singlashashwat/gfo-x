import {  SAVE_USER } from "./types";

export function saveUser(data) {
  return {
    type: SAVE_USER,
    data: {
      data,
    },
  };
}
