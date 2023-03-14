import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import "animate.css/animate.min.css";

function Header() {
  const [tooltipStates, setTooltipStates] = useState("");
  const [saveStates, setsaveStates] = useState("");
  const dispatch = useDispatch();

  const handleMouseEnter = (tabName) => (event) => {
    // console.log(`Mouse entered ${tabName} tab`);
    setTooltipStates(`${tabName}`);
  };
  const handleMouseLeave = (tabName) => (event) => {
    //console.log(`Mouse Leaved ${tabName} tab`);

    setTooltipStates(`${tabName}`);
  };

  function scrollToTarget(targetId) {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
      });
    }
    dispatch({ type: "SET_tooltipStates", tooltipStates: targetId });
  }

  const ModalContent = ({ show, children }) => {
    if (!show) {
      if (tooltipStates !== "none") {
        return null;
      }
    } else if (tooltipStates !== "none") {
      setsaveStates(children);
    }

    return (
      <>
        <Modalbackdrop
          onMouseLeave={handleMouseLeave("none")}
          className={`animate__animated ${
            show ? "animate__fadeInDown" : "animate__fadeOutUp"
          }`}
        >
          {tooltipStates === "none" ? (
            <Modal>{saveStates}</Modal>
          ) : (
            <Modal onClick={() => scrollToTarget(children)}>{children}</Modal>
          )}
        </Modalbackdrop>
      </>
    );
  };

  return (
    <>
      <Headdiv onMouseEnter={handleMouseEnter("")}>
        <Tab>
          <StyledTab onMouseEnter={handleMouseEnter("Introduction")}>
            Introduction
          </StyledTab>
          <StyledTab onMouseEnter={handleMouseEnter("Study")}>Study</StyledTab>
          <StyledTab onMouseEnter={handleMouseEnter("Education")}>
            Education
          </StyledTab>
          <StyledTab onMouseEnter={handleMouseEnter("Skill")}>Skill</StyledTab>
          <StyledTab onMouseEnter={handleMouseEnter("Project")}>
            Project
          </StyledTab>
        </Tab>
        <ModalContent show={tooltipStates === "Study"}>
          Modal for Tab 1
        </ModalContent>
        <ModalContent show={tooltipStates === "Introduction"}>
          Modal for Tab 2
        </ModalContent>
        <ModalContent show={tooltipStates === "Education"}>
          Modal for Tab 3
        </ModalContent>
        <ModalContent show={tooltipStates === "Skill"}>
          Modal for Tab 4
        </ModalContent>
        <ModalContent show={tooltipStates === "Project"}>
          Modal for Tab 5
        </ModalContent>
      </Headdiv>
    </>
  );
}

export default Header;

const Modalbackdrop = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;

  margin: 20px 0px;
  position: absolute;
  &.animate__animated {
    animation-duration: 2s;
  }
  &.animate__fadeOutUp {
    animation-name: fadeOutUp;
  }
  &.animate__fadeInDown {
    animation-name: fadeInDown;
  }
`;

const Modal = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  font-size: 5rem;
  font-weight: bold;
  color: #a1a1aa;
  &:hover {
    color: rgba(255, 255, 255, 1);
    cursor: grab;
  }
`;

const StyledTab = styled.div`
  margin: 0px 20px;
  &:hover {
    color: rgba(255, 255, 255, 1);
    cursor: grab;
  }
`;

const Tab = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Headdiv = styled.div`
  width: 100%;
  z-index: 3;
  background-color: black;
  position: fixed;
  color: rgba(255, 255, 255, 0.8);
  font-size: 1rem;
  padding: 10px 0px;
  display: flex;
  flex-direction: column;
`;
