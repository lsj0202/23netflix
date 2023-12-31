import React from "react";
import Row from "../../components/Row/Index";
import requests from "../../api/request";
import Banner from "../../components/Banner/Index";

const Index = () => {
  return (
    <>
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        id="NO"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />

      <Row title="Trending Now" id="TN" fetchUrl={requests.fetchTrending} />

      <Row title="Top Rated" id="TR" fetchUrl={requests.fetchTopRated} />

      <Row
        title="Action Movies"
        id="AM"
        fetchUrl={requests.fetchActionMovies}
      />

      <Row
        title="Comedy Movies"
        id="CM"
        fetchUrl={requests.fetchComedyMovies}
      />
    </>
  );
};

export default Index;
