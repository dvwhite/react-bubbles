import axios from "axios";
import { axiosWithAuth } from "./../utils/axiosWithAuth";

/**
 * @function login: Send a POSt request to /api/login that
 * @param {*} credentials: An object containing a username and a password key 
 * @param {*} history: A history object from the useHistory hook or react-router-dom API
 * @returns: A promise, yet it's purpose is to grab a web token used to 
 *           authenticate with the API for all protected endpoints and to push to '/'
 */
const login = (credentials, history) => {
  return axios
    .post("https://localhost:5000/api/login", credentials)
    .then(res => {
      localStorage.addItem("token", res.data.payload);
      history.push("/");
      return res;
    })
    .catch(err => console.error(err.response));
};

// [GET] to /api/colors: returns the list of colors and their hex codes.


// [POST] to /api/colors: creates a new color object. Pass the color as the body of the request (the second argument passed to axios.post).


// [PUT] to /api/colors/:id: updates the color using the id passed as part of the URL. Send the color object with the updated information as the body of the request (the second argument passed to axios.put).


// [DELETE] to /api/colors/123: removes the color using the id passed as part of the URL (123 in example).
