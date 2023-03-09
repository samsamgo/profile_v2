import React, { useState } from "react";
import styled from "styled-components";
import logo1 from "../Asset/1.png";
import logo2 from "../Asset/2.png";
import logo3 from "../Asset/3.png";

function Project() {
  const [Skillactive, setSkillActive] = useState("");
  const [projectname, setprojectname] = useState("");
  const [showimg, setshowimg] = useState(false);

  const handleMouseEnter = (tabName) => (event) => {
    console.log(`Mouse entered ${tabName} tab`);
    setprojectname(`${tabName}`);
    setshowimg(true);
  };
  return (
    <>
      <Projectdiv>
        <namediv>Project</namediv>
        <Logodiv showimg={showimg}>
          <img
            src={logo1}
            alt="logo_img"
            onClick={() => handleMouseEnter("profile")}
            onMouseEnter={() => setSkillActive("profile")}
            onMouseLeave={() => setSkillActive("")}
          />
          <img
            src={logo2}
            alt="logo_img"
            onClick={() => handleMouseEnter("profile")}
            onMouseEnter={() => setSkillActive("Amoona")}
            onMouseLeave={() => setSkillActive("")}
          />
          <img
            src={logo3}
            alt="logo_img"
            onClick={() => handleMouseEnter("profile")}
            onMouseEnter={() => setSkillActive("stackoverflow")}
            onMouseLeave={() => setSkillActive("")}
          />
          {Skillactive === "profile" && (
            <modal>
              Javascript를 활용하여 HTML 요소들을 동적으로 조작하거나, 서버와의
              비동기 통신을 구현할 수 있습니다.
            </modal>
          )}
          {Skillactive === "Amoona" && (
            <modal>
              Javascript를 활용하여 HTML 요소들을 동적으로 조작하거나, 서버와의
              비동기 통신을 구현할 수 있습니다.
            </modal>
          )}
          {Skillactive === "stackoverflow" && (
            <modal>
              Javascript를 활용하여 HTML 요소들을 동적으로 조작하거나, 서버와의
              비동기 통신을 구현할 수 있습니다.
            </modal>
          )}
        </Logodiv>
      </Projectdiv>
    </>
  );
}

export default Project;

const Logodiv = styled.div`  
    display: flex;
    flex-direction: ${({ showText }) => (!showText ? "row" : "column")};
    height:150px;
    width: 800px;
    justify-content: center;
    align-items: center;
    position: relative;
    img {
    margin:0px 50px;
      width: 60px;
      height: 60px;
      opacity: 0.8;
      border-radius: 15px;
      border: 5px solid rgba(255, 255, 255, 0.8);
      &:hover {
        opacity: 1;
        width: 80px;
        height: 80px;
      }
    }
    modal {
    position: absolute;
    display: flex;
    width: 400px;
    height: auto;
    font-weight: 600;
    color: #a1a1aa
    margin-right: auto;
    top: 150px;
    font-size: 1rem;
    line-height: 1.5rem;
    text-align: center;
    }
  `;

const Projectdiv = styled.div`
  width: 100%;
  height: 1000px;
  color: white;
  font-weight: 900;
  padding: 50px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  namediv {
    font-size: 4rem;
    background-image: linear-gradient(
      to right,
      #dbdcd7 0%,
      #dddcd7 24%,
      #e2c9cc 30%,
      #e7627d 46%,
      #b8235a 59%,
      #801357 71%,
      #3d1635 84%,
      #1c1a27 100%
    );
    -webkit-background-clip: text !important;
    color: transparent;
  }
`;
