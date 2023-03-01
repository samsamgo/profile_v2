import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import "animate.css/animate.min.css";

function Header() {
  const [tooltipStates, setTooltipStates] = useState("");

  const ModalContent = ({ show, children }) => {
    if (!show) {
      return null;
    }

    return <Modal isReqVisible={show}>{children}</Modal>;
  };

  return (
    <>
      <Headdiv
        onMouseEnter={() => setTooltipStates(false)}
        onMouseLeave={() => setTooltipStates(false)}
      >
        <Tab>
          <StyledTab onMouseEnter={() => setTooltipStates("Introduction")}>
            Introduction
          </StyledTab>
          <StyledTab onMouseEnter={() => setTooltipStates("Study")}>
            Study
          </StyledTab>
          <StyledTab onMouseEnter={() => setTooltipStates("Study")}>
            Education
          </StyledTab>
          <StyledTab onMouseEnter={() => setTooltipStates("Study")}>
            Skill
          </StyledTab>
          <StyledTab onMouseEnter={() => setTooltipStates("Study")}>
            Project
          </StyledTab>
        </Tab>
        <ModalContent show={tooltipStates === "Study"}>
          Modal for Tab 1
        </ModalContent>
        <ModalContent show={tooltipStates === "Introduction"}>
          Modal for Tab 2
        </ModalContent>
      </Headdiv>
    </>
  );
}

export default Header;

const Modal = styled.div`
  display: flex;
  flex-direction: column;
  height: 400px;
  margin: 20px 0px;
`;

const StyledTab = styled.div`
  margin: 0px 20px;
  &:hover {
    color: rgba(255, 255, 255, 1);
    ${Modal} {
      opacity: 1;
      pointer-events: all;
    }
  }
`;

const Tab = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Headdiv = styled.div`
  width: 100%;
  background-color: black;
  color: rgba(255, 255, 255, 0.8);
  font-size: 1rem;
  padding: 10px 0px;
  display: flex;
  flex-direction: column;
`;
