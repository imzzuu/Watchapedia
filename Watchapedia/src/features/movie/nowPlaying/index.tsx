import React from "react";
import styled from "@emotion/styled";
import useNowPlayingMovie from "./useNowPlayingMovie";
import Slider from "../../../components/slider";
import Card from "../../../components/card";

const Base = styled.div`
  margin-bottom: 42px;
`;

const Title = styled.h4`
  font-size: 22px;
  font-weight: 700;
  line-height: 30px;
  padding: 12px 0 14px;
`;

const NowPlayingSection: React.FC = () => {
  const { data, isLoading } = useNowPlayingMovie();
  const getYear = (date: string) => date.split("-")[0];
  console.log(data);
  return (
    <Base>
      <Title>현재 상영작</Title>
      {isLoading || !data ? (
        <div>Loading...</div>
      ) : (
        <Slider>
          {data.data.results.map((movie) => (
            <Card
              key={movie.id}
              linkUrl={`/movie/${movie.id}`}
              title={movie.title}
              posterPath={`${process.env.REACT_APP_IMAGE_PREFIX}/${movie.poster_path}`}
              voteAverage={movie.vote_average}
              year={getYear(movie.release_date)}
            />
          ))}
        </Slider>
      )}
    </Base>
  );
};

export default NowPlayingSection;
