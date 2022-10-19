import axios from "axios";

// const api = axios.create({
//   baseURL: "https://40wvqszc8k.execute-api.us-east-1.amazonaws.com",
// });

const api = axios.create({
  baseURL: "http://192.168.18.28:3333",
});

export default api;
