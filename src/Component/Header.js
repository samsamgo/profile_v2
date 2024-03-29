import React from "react";
import { useEffect } from "react";
import styled from "styled-components";
import "../Asset/styles.css";
import navbarScript from "./navbarScript";
// import { useDispatch } from "react-redux";
import "animate.css/animate.min.css";

// function Header() {

// const [tooltipStates, setTooltipStates] = useState("");
// const [saveStates, setsaveStates] = useState("");
// const dispatch = useDispatch();

// const handleMouseEnter = (tabName) => (event) => {
//   // console.log(`Mouse entered ${tabName} tab`);
//   setTooltipStates(`${tabName}`);
// };
// const handleMouseLeave = (tabName) => (event) => {
//   //console.log(`Mouse Leaved ${tabName} tab`);

//   setTooltipStates(`${tabName}`);
// };

// function scrollToTarget(targetId) {
//   const targetElement = document.getElementById(targetId);
//   if (targetElement) {
//     window.scrollTo({
//       top: targetElement.offsetTop,
//       behavior: "smooth",
//     });
//   }
//   dispatch({ type: "SET_tooltipStates", tooltipStates: targetId });
// }

// const ModalContent = ({ show, children, childrenid }) => {
//   if (!show) {
//     if (tooltipStates !== "none") {
//       return null;
//     }
//   } else if (tooltipStates !== "none") {
//     setsaveStates(children);
//   }

//   return (
//     <>
//       <Modalbackdrop
//         onMouseLeave={handleMouseLeave("none")}
//         className={`animate__animated ${
//           show ? "animate__fadeInDown" : "animate__fadeOutUp"
//         }`}
//       >
//         {tooltipStates === "none" ? (
//           <Modal>{saveStates}</Modal>
//         ) : (
//           <Modal onClick={() => scrollToTarget(childrenid)}>{children}</Modal>
//         )}
//       </Modalbackdrop>
//     </>
//   );
// };
const Nav = styled.nav`
  background-color: #000;
  padding: 0.5rem 1rem;
  font-size: 1.2rem;
  font-weight: bold;
  div {
    div {
      img {
        height: auto;
        width: auto;
        border-radius: 90px;
        border: 3px solid rgba(255, 255, 255, 0.8);
        margin: 5px 0px 0px 0px;
      }
    }
  }
`;

const Navbar = () => {
  useEffect(() => {
    navbarScript();
  }, []);

  return (
    <Nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
      <div className="container">
        <div
          className="navbar-brand"
          onClick={() => (window.location.href = "#page-top")}
        >
          <img
            src="data:image/jpeg;base64,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"
            alt="..."
          />
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          Menu
          <i className="fas fa-bars ms-1"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#Introduction">
                Introduction
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Study">
                Study
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Skill">
                Skill
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Education">
                Education
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Project">
                Project
              </a>
            </li>
          </ul>
        </div>
      </div>
    </Nav>
  );
};
// return (
//   <>
//     <Headdiv onMouseEnter={handleMouseEnter("")}>
//       <Tab>
//         <StyledTab onMouseEnter={handleMouseEnter("Introduction")}>
//           Introduction
//         </StyledTab>
//         <StyledTab onMouseEnter={handleMouseEnter("Study")}>Study</StyledTab>
//         <StyledTab onMouseEnter={handleMouseEnter("Education")}>
//           Education
//         </StyledTab>
//         <StyledTab onMouseEnter={handleMouseEnter("Skill")}>Skill</StyledTab>
//         <StyledTab onMouseEnter={handleMouseEnter("Project")}>
//           Project
//         </StyledTab>
//       </Tab>
//       <ModalContent
//         show={tooltipStates === "Introduction"}
//         childrenid={"Modal for Tab 2"}
//       >
//         Im'a
//       </ModalContent>
//       <ModalContent
//         show={tooltipStates === "Study"}
//         childrenid={"Modal for Tab 1"}
//       >
//         Blog
//       </ModalContent>
//       <ModalContent
//         show={tooltipStates === "Education"}
//         childrenid={"Modal for Tab 4"}
//       >
//         Code States
//       </ModalContent>
//       <ModalContent
//         show={tooltipStates === "Skill"}
//         childrenid={"Modal for Tab 3"}
//       >
//         Skill
//       </ModalContent>
//       <ModalContent
//         show={tooltipStates === "Project"}
//         childrenid={"Modal for Tab 5"}
//       >
//         samsmago's profile
//       </ModalContent>
//     </Headdiv>
//   </>
// );
// }

export default Navbar;

// const Modalbackdrop = styled.div`
//   display: flex;
//   flex-direction: column;
//   width: 100%;
//   height: 200px;
//   margin: 20px 0px;
//   position: absolute;
//   &.animate__animated {
//     animation-duration: 2s;
//   }
//   &.animate__fadeOutUp {
//     animation-name: fadeOutUp;
//   }
//   &.animate__fadeInDown {
//     animation-name: fadeInDown;
//   }
// `;

// const Modal = styled.div`
//   display: flex;
//   flex-direction: column;
//   position: fixed;
//   font-size: 2rem;
//   margin: 10px 30px;
//   font-weight: bold;
//   color: #a1a1aa;
//   &:hover {
//     color: rgba(255, 255, 255, 1);
//     cursor: grab;
//   }
// `;

// const StyledTab = styled.div`
//   margin: 0px 20px;
//   &:hover {
//     color: rgba(255, 255, 255, 1);
//     cursor: grab;
//   }
// `;

// const Tab = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: center;
// `;

// const Headdiv = styled.div`
//   width: 100%;
//   z-index: 3;
//   background-color: black;
//   position: fixed;
//   color: rgba(255, 255, 255, 0.8);
//   font-size: 1rem;
//   padding: 10px 0px;
//   display: flex;
//   flex-direction: column;
// `;
