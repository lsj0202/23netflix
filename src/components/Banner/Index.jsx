import React, { useEffect, useState } from "react";
import axios from "../../api/axios";
import requests from "../../api/request";

const Index = () => {
  const [movie, setMovie] = useState();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // 현재 상영중인 영화 정보 가져오기
    const request = await axios.get(requests.fetchNowPlaying);

    // 여러 영화중 영화 하나의 Id를 가져오기
    const movieId =
      request.data.results[
        Math.floor(Math.random() * request.data.results.length)
      ].id;

    // 특정 영화의 상세 정보 가져오기(비디오 포함)
    const results = await axios.get(`movie/${movieId}`, {
      params: { append_to_response: "videos" },
    });

    setMovie(results);
  };

  return <div></div>;
};

export default Index;
