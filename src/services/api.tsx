import axios from "axios";

const api = axios.create({
  baseURL: "https://40wvqszc8k.execute-api.us-east-1.amazonaws.com",
});

export default api;
