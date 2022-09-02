import axios from "axios"
export default axios.create({
  baseURL: "https://test-server-klob.herokuapp.com",
  headers: {
    "Content-type": "application/json"
  }
})