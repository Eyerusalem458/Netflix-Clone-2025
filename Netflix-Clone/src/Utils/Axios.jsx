import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});
export default instance;
/* we create custom axios that contain the baseURL not to write the full URL everytime.*/
