import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

function Mainpage() {
  const scrollContainerRef = useRef(null);
  const [showText, setShowText] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (scrollPosition >= 500) {
      setShowText(true);
    } else {
      setShowText(!true);
    }
    console.log(scrollPosition);
  }, [scrollPosition]);

  return (
    <>
      <Maindiv ref={scrollContainerRef}>
        {!showText && <OpenCircle opacity={1 - scrollPosition / 1000 / 2} />}
        {showText && <CloseCircle opacity={(scrollPosition - 500) / 500} />}
        <StyledText>
          afsfasfdas dfsafdsad fasfsadfs adfsadfsda fsadfsaddfsadfdsdafasfasdsdf
        </StyledText>
      </Maindiv>
    </>
  );
}
export default Mainpage;

const Maindiv = styled.div`
  width: 100%;
  height: 3000px;
  background-color: black;
  padding: 50px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
  width: 500px;
  font-size: 6rem;
  background: linear-gradient(
    270deg,
    #ff9a9e 0%,
    #fecfef 99%,
    #fecfef 100%
  ) !important;
  -webkit-background-clip: text !important;
  color: transparent;
`;
