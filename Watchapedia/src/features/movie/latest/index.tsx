import React from "react";
import styled from "@emotion/styled";
import useLatestMovie from "./useLatestMovie";
import Card from "../../../components/card";
import { title } from "process";

const Base = styled.div``;
const Title = styled.h4``;

const LatestMovieSection: React.FC = () => {
  const { data, isLoading } = useLatestMovie();
  console.log(data);
  return (
    <Base>
      <Title>최근 개봉작</Title>
      {isLoading || !data ? (
        <div>Loading...</div>
      ) : (
        <Card
          linkUrl={`/movie/${data.data.id}`}
          title={data.data.title}
          posterPath={`${process.env.REACT_APP_IMAGE_PREFIX}/${data.data.poster_path}`}
          voteAverage={data.data.vote_average}
          year={data.data.release_date}
        />
      )}
    </Base>
  );
};

export default LatestMovieSection;
