import { ActionTypes } from "../types/action-types";

export const setTheme = (payload) => {
  return {
    type: ActionTypes.SET_THEME,
    payload: payload,
  };
};
