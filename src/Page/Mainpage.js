import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

function Mainpage() {
  const [saveStates, setsaveStates] = useState("");

  const [positionState, setPositionState] = useState("relative");
  const scrollContainerRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    function handleScroll() {
      setScrollPosition(scrollContainerRef.current.scrollTop);
    }
    if (scrollContainerRef.current) {
      scrollContainerRef.current.addEventListener("scroll", handleScroll);
      console.log("dasfasd");
    }
    return () => {
      if (scrollContainerRef.current) {
        scrollContainerRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, [scrollContainerRef]);

  useEffect(() => {
    if (scrollPosition < 127) {
      setPositionState("fixed");
    } else {
      setPositionState("relative");
    }
  }, [scrollPosition]);

  return (
    <>
      <Maindiv>
        <Circle opacity={0.5} ref={scrollContainerRef} />
        <StyledText position={positionState}>asfasfd</StyledText>
      </Maindiv>
    </>
  );
}
export default Mainpage;

const Maindiv = styled.div`
  width: 100%;
  height: auto;
  background-color: black;
  padding: 50px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Circle = styled.div`
  width: 1000px;
  height: 2000px;
  border-radius: 90%;
  background-color: white;
  opacity: ${({ opacity }) => opacity || 1};
`;

const StyledText = styled.div`
  position: ${(props) => props.position};
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 5rem;
  background: linear-gradient(
    to left,
    #ff9a9e 0%,
    #fecfef 99%,
    #fecfef 100%
  ) !important;
  -webkit-background-clip: text !important;
  color: transparent;
`;
