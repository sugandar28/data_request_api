import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/",

  headers: {
    Authorization: " Client-ID yMfTiwKcQXB1I4a4pH9XzNQzek4fPcdKQ8wqEjPRuVo"
  }
});
