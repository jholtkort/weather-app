import axios from "axios";

const KEY = "11b5fe4b97c7ea5b11013a5a7f4fbcb3";

// let baseURL = "";

// if (location.protocol === "http:") {
//   baseURL = "http://api.openweathermap.org";
// } else {
//   baseURL = "https://api.openweathermap.org";
// }

export default axios.create({
  baseURL: "https://api.openweathermap.org",
  params: {
    appid: KEY
  }
});
