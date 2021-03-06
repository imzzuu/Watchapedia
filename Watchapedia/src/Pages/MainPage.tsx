import React from "react";
import Header from "../components/Header";
import LatestMovieSection from "../features/movie/latest";
import NowPlayingSection from "../features/movie/nowPlaying";
import PopularSection from "../features/movie/popular";
import Footer from "../components/Footer";

const MainPage: React.FC = () => {
  return (
    <>
      <Header />
      <LatestMovieSection />
      <NowPlayingSection />
      <PopularSection />
      <Footer />
    </>
  );
};

export default MainPage;
