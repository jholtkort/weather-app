import axios from "axios";

const KEY = "11b5fe4b97c7ea5b11013a5a7f4fbcb3";

export default axios.create({
  baseURL: "http://api.openweathermap.org",
  params: {
    appid: KEY
  }
});
