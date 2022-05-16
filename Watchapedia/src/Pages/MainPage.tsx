import React from "react";
import Header from "../components/Header";
import LatestMovieSection from "../features/movie/latest";
import Footer from "../components/Footer";

const MainPage: React.FC = () => {
  return (
    <>
      <Header />
      <LatestMovieSection></LatestMovieSection>
      <Footer />
    </>
  );
};

export default MainPage;
