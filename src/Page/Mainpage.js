import React, { useState, useEffect } from "react";
import styled from "styled-components";
// import { useSelector } from "react-redux";

import Skill from "../Component/Skill";
import Study from "../Component/Study";
import Education from "../Component/Education";
import Project from "../Component/Project";

function Mainpage() {
  const [showText1, setShowText1] = useState(false);
  const [showText2, setShowText2] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  // const data = useSelector((state) => state);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (scrollPosition <= 1000) {
      setShowText1(true);
    } else if (scrollPosition >= 1000 && scrollPosition <= 2000) {
      setShowText1(false);
      setShowText2(true);
    } else {
      setShowText2(!true);
    }
    console.log(scrollPosition);
  }, [scrollPosition]);

  return (
    <>
      <Maindiv>
        <scrolldiv>
          {showText1 && <OpenCircle opacity={1 - scrollPosition / 1000} />}
          {showText2 && (
            <CloseCircle opacity={(scrollPosition - 1000) / 1000} />
          )}
          {(showText1 || showText2) && (
            <StyledText>
              안녕하세요 <br />
              Front-end 주니어개발자 <br />
              장경욱입니다.
            </StyledText>
          )}
        </scrolldiv>
        <Study />
        <Skill />
        <Education scrollPosition={scrollPosition} />
        <Project scrollPosition={scrollPosition} />
      </Maindiv>
    </>
  );
}
export default Mainpage;

const Maindiv = styled.div`
  width: 100%;
  height: auto;
  background-color: black;
  padding: 150px 0px 0px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  scrolldiv {
    height: 3000px;
  }
  introdiv {
    z-index: 3;
    display: flex;
    flex-direction: row;
  }
`;

const OpenCircle = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 1000px;
  height: 1000px;
  border-radius: 90%;
  z-index: 2;
  background-color: black;
  opacity: ${({ opacity }) => opacity || 0};
`;

const CloseCircle = styled(OpenCircle)`
  opacity: ${({ opacity }) => opacity || 1};
`;

const StyledText = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 900px;
  line-height: 9rem;
  font-size: 5rem;
  text-align: center;
  font-weight: bold;
  background-image: linear-gradient(
    to right,
    #b8cbb8 0%,
    #b8cbb8 0%,
    #b465da 0%,
    #cf6cc9 33%,
    #ee609c 66%,
    #ee609c 100%
  );
  -webkit-background-clip: text !important;
  color: transparent;
`;
