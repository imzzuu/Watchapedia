import React, { ReactNode } from "react";
import ReactSlider, { Settings } from "react-slick";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

const StyledSlide = styled(ReactSlider)`
  .slick-track {
    display: flex;
  }
`;

const ArrowBtn = styled.button<{ pos?: "left" | "right" }>`
  padding: 16px;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  z-index: 1;
  top: 50%;
  background-color: #fff;
  ${({ pos }) =>
    pos === "left"
      ? css`
          left: 0;
          transform: translate(-50%, -50%);
        `
      : css`
          right: 0;
          transform: translate(50%, -50%);
        `};
  &:before {
    content: initial;
  }
  > svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 10px;
    height: 10px;
    color: #222;
  }
`;

// 슬라이더 옵션에 들어갈 객체
const DEFAULT_SETTINGS: Settings = {
  dots: false, // 하단 인디케이터 노출 여부
  arrows: true, // 화살표 표시 여부
  infinite: true, // 무한 (마지막일 때 다시 처음으로)
  speed: 500, // auto play 속도
  slidesToShow: 5, // 슬라이드 당 표시될 갯수
  slidesToScroll: 5, //스크롤 할 때 마다 표시할 슬라이드 수
  swipe: true,
  draggable: true,
  prevArrow: (
    <ArrowBtn pos="left">
      <MdArrowBackIos />
    </ArrowBtn>
  ),
  nextArrow: (
    <ArrowBtn pos="right">
      <MdArrowForwardIos />
    </ArrowBtn>
  ),
};

interface Props {
  settings?: Settings;
  children?: ReactNode;
}
const Slider: React.FC<Props> = ({ settings = DEFAULT_SETTINGS, children }) => (
  <StyledSlide {...settings}>{children}</StyledSlide>
);

export default Slider;
