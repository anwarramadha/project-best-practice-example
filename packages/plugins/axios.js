// plugins/axios.js
import axios from "axios";

const API_BASE_URL = "https://apicampusdir.civitas.id"
const API_KEY = "4Qe7h5NcgCu1EPDzCKIO"


const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "api-key": API_KEY,
  },
});

export default api;