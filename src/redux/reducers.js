import { FETCH_DATA, FETCH_DATA_FAILED } from "./constants.js";

const initialState = {
  isPending: true,
  data: [],
  error: ""
};
export const fetchDataReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_DATA:
      return { ...state, isPending: false, data: action.payload };
    case FETCH_DATA_FAILED:
      return { ...state, isPending: false, error: action.payload };
    default:
      return state;
  }
};
