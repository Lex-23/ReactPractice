import axios from "axios";

const KEY = "AIzaSyAWHl_b4TVZrEbcjw6U1MqYvThKBqUhKpU";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
