import axios from "axios";
import { axiosWithAuth } from "./../utils/axiosWithAuth";

/**
 * @function login: Send a POSt request to /api/login that
 * @param {*} credentials: An object containing a username and a password key
 * @param {*} history: A history object from the useHistory hook or react-router-dom API
 * @returns {promise}: A promise, yet it's purpose is to grab a web token used to
 *           authenticate with the API for all protected endpoints and to push to '/'
 */
export const login = (credentials, history) => {
  return axios
    .post("http://localhost:5000/api/login", credentials)
    .then(res => {
      localStorage.setItem("token", res.data.payload);
      history.push("/bubbles");
      return res;
    })
    .catch(err => console.log("Error in actions>login:", err.response));
};

/**
 * @function getColors: Send a GET request to the API to obtain a list of colors
 * @param: none
 * @returns {promise}: A promise containing the API req/res data
 */
export const getColors = () => {
  return axiosWithAuth()
    .get("/api/colors")
    .then(res => {
      return res;
    })
    .catch(err => console.log("Error in actions>getColors:", err.response));
};

/**
 * @function addColor: Add the new color to the API list of colors
 * @param {*} color: The color object to add to the API's color list
 * @returns {promise}: The promise containing the req/res data for the API call
 */
export const addColor = color => {
  return axiosWithAuth()
    .post('/api/colors', color)
    .then(res => {
      return res;
    })
    .catch(err => console.log("Error in actions>addColor:", err.response));
};


/**
 * @function editColor: Send a PUT request to the API to edit a color
 * @param {*} color: The color object to replace the corresponding id with
 * @returns {promise}: A promise with the call's req/res data
 */
export const editColor = color => {
  return axiosWithAuth()
    .put(`/api/colors/${color.id}`, color)
    .then(res => {
      return res;
    })
    .catch(err => console.log("Error in actions>editColor:", err.response));
};

/**
 * @function deleteColor: Send a DELETE request to the API to remove the color with id
 * @param {*} id: The id of the object to remove from the API
 * @returns {promise}: A promise containing the API call's req/res data
 */
export const deleteColor = id => {
  return axiosWithAuth()
    .delete(`/api/colors/${id}`)
    .then(res => {
      return res;
    })
    .catch(err => console.log("Error in actions>deleteColor:", err.response));
};
