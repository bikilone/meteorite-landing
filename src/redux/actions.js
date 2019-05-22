import { FETCH_DATA, FETCH_DATA_FAILED, SEARCH_DATA } from "./constants.js";

export const fetchData = () => dispatch => {
  fetch(`https://data.nasa.gov/resource/gh4g-9sfh.json?$limit=${1000}`)
    .then(data => data.json())
    .then(data => dispatch({ type: FETCH_DATA, payload: data }))
    .catch(error => dispatch({ type: FETCH_DATA_FAILED, payload: error }));
};

export const searchData = searchTerm => ({
  type: SEARCH_DATA,
  payload: searchTerm
});
