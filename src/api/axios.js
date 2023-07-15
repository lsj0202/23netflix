import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "d9edce31ccd7a0758a88f4fa29b7fb56",
    language: "ko-KR",
  },
});

export default instance;
