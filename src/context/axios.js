import axios from "axios";

export default instance = axios.create({
  baseUrl: "https://developers.zomato.com/api/v2.1/",
});
