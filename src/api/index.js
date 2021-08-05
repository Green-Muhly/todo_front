import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:3000",
  //   baseUrl: 'http://54.180.9.121:8080'
});
