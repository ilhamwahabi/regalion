import axios from "axios";

const api = axios.create({
  baseURL: 'https://regalion-api.herokuapp.com'
})

export default api