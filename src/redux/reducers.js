import { FETCH_DATA, FETCH_DATA_FAILED, SEARCH_DATA } from "./constants.js";

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

const initialStateSearch = {
  searchTerm: ""
};

export const searchDataReducer = (state = initialStateSearch, action = {}) => {
  switch (action.type) {
    case SEARCH_DATA:
      return { ...state, searchTerm: action.payload };
    default:
      return state;
  }
};
