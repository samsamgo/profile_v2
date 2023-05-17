import React, { useState, useEffect } from "react";
import styled from "styled-components";
import logo1 from "../Asset/1.png";
import logo2 from "../Asset/2.png";
import logo3 from "../Asset/3.png";
import promise from "../Asset/promise.png";
import down from "../Asset/download.gif";
import Map from "./Map";

function Project({ scrollPosition }) {
  const [Skillactive, setSkillActive] = useState("");
  // const [projectname, setprojectname] = useState("");
  const [background, setBackground] = useState(require("../Asset/back1.png"));
  const [id, setId] = useState("");
  const [position, setposition] = useState(true);
  const [showimg, setshowimg] = useState(true);

  // const handleMouseEnter = (tabName) => (event) => {
  //   console.log(`Mouse entered ${tabName} tab`);
  //   setprojectname(`${tabName}`);
  //   setshowimg(true);
  // };

  // const [showText, setShowText] = useState(false);

  useEffect(() => {
    if (document.getElementById("m1") === id) {
      // 특정 작업을 수행합니다.
      document.getElementById("m2").style.position = "fixed";
    } else {
      document.getElementById("m2").style.position = "relative";
    }
  }, [id]);

  useEffect(() => {
    if (scrollPosition >= 9400 && scrollPosition <= 10300) {
      setshowimg(false);
    } else {
      setshowimg(true);
    }
  }, [scrollPosition]);

  useEffect(() => {
    const images = [
      require("../Asset/back1.png"),
      require("../Asset/back2.png"),
      require("../Asset/back3.png"),
      require("../Asset/back4.png"),
      require("../Asset/back5.png"),
      require("../Asset/back6.png"),
      // ...
    ];
    const intervalId = setInterval(() => {
      setBackground(images[Math.floor(Math.random() * images.length)]);
    }, 3000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <Projectdiv id="Project">
        <namediv>Project</namediv>
        <Logodiv>
          <img
            src={logo1}
            alt="logo_img"
            onMouseEnter={() => setSkillActive("profile")}
            onMouseLeave={() => setSkillActive("")}
          />
          <img
            src={logo2}
            alt="logo_img"
            onMouseEnter={() => setSkillActive("Amoona")}
            onMouseLeave={() => setSkillActive("")}
          />
          <img
            src={logo3}
            alt="logo_img"
            onMouseEnter={() => setSkillActive("stackoverflow")}
            onMouseLeave={() => setSkillActive("")}
          />
          {Skillactive === "profile" && (
            <modal>
              <modalname>Samsamgo's Profile</modalname>
              이력서 내용을 바탕으로 만드는 Profile(제작중....)입니다.
            </modal>
          )}
          {Skillactive === "Amoona" && (
            <modal>
              <modalname>아모나(AMOONA)</modalname>
              주변의 사람들과 함께 운동할 수 있는 웹으로 위치를 기반으로 근처의
              모임 장소를 지도로 나타낼 수 있는 웹입니다.
            </modal>
          )}
          {Skillactive === "stackoverflow" && (
            <modal>
              <modalname>Stack overflow</modalname>
              Stack overflow 클론코딩입니다.
            </modal>
          )}
        </Logodiv>
        <Project1div>
          <proname>Samsamgo's Profile</proname>
          <dayname>기간</dayname>
          <daying>2023.2.13 ~ </daying>
          <dayname>랜덤 함수를 이용한 배경 이미지 변경</dayname>
          <backdiv style={{ backgroundImage: `url(${background})` }} />
          <desciptiondiv>
            <stdiv>React.js와 랜덤 함수</stdiv>를 이용하여, 배경 이미지가 일정한
            시간 간격으로 자동으로 변경되도록 구현하였습니다.
            <br /> 이를 위해, <stdiv>useState와 useEffect</stdiv>를 사용하여
            컴포넌트의 상태를 관리하고, <stdiv>setInterval 함수</stdiv>를
            사용하여 일정한 시간마다 이미지를 변경하도록 설정하였습니다.
          </desciptiondiv>
          <dayname>유튜브 api를 이용한 영상 삽입</dayname>
          <door showimg={showimg}>
            <img
              src="https://media.tenor.com/tYIUpIiF-LIAAAAC/youtube-logo.gif"
              alt="img"
            ></img>
            <doordesciptiondiv>
              React 애플리케이션에서 <doorstdiv>YouTube API</doorstdiv>를
              사용하여 원하는 영상을 삽입해보았습니다.
            </doordesciptiondiv>
          </door>
          <dayname>반응형 UI</dayname>
          <StyledText id="m1">
            <TextDiv
              id="m2"
              fontSize={Math.min(10, 10 - (scrollPosition - 10000) / 100)}
            >
              안녕하세요
            </TextDiv>
          </StyledText>

          <desciptiondiv>
            다양한 화면 크기에서도 웹사이트를 보다 쉽고 효율적으로 사용할 수
            있도록, UI를 <stdiv>반응형으로</stdiv> 개편하였습니다. 이를 통해
            사용자들이 어떤 기기와 환경에서도 웹사이트를 쾌적하게 이용할 수 있게
            되었습니다.
          </desciptiondiv>
          <a
            href="https://samsamgo.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Project보기(배포링크)
          </a>
        </Project1div>
        <Project2div>
          <proname>아모나(AMOONA)</proname>
          <dayname>기간</dayname>
          <daying>2023.1.3 ~ 2023.1.31</daying>
          <dayname>map api를 이용한 지도 삽입</dayname>
          <mapdiv>
            <Map />
          </mapdiv>
          <desciptiondiv>
            Redux Toolkit을 이용하여 카카오 맵 API에서 반환한 좌표 값을 저장하고
            출력하는 기능을 추가했습니다. 이를 통해 지도에서 특정 위치를
            선택하고 해당 위치의 좌표를 저장하여 나중에 다시 참조할 수 있게
            되었습 니다
          </desciptiondiv>
          <dayname>promise객체 데이터 받아오기</dayname>
          <door showimg={showimg}>
            <img src={promise} alt="img"></img>
            <doordesciptiondiv>
              Axios를 이용하여 Promise 객체를 받아온 후, 해당 객체로 map()
              메서드를 사용하여 UI를 구성하였습니 다. 이를 통해 비동기적으로
              데이터를 가져와 화면을 <doorstdiv>동적으로 출력</doorstdiv>할 수
              있게 되었습니다
            </doordesciptiondiv>
          </door>
          <a
            href="https://github.com/codestates-seb/seb41_main_031"
            target="_blank"
            rel="noreferrer"
          >
            Project보기(Repository)
          </a>
        </Project2div>
        <Project3div>
          <proname>Stack overflow(clone coding)</proname>
          <dayname>기간</dayname>
          <daying>2022.12.15 ~ 2023.01.02</daying>
          <dayname>local Stroage를 이용한 데이터 저장</dayname>
          <backdiv style={{ backgroundImage: `url(${down})` }} />

          <desciptiondiv>
            localStorage를 이용하여 새로고침 시에도 상태 값이{" "}
            <stdiv>유지</stdiv>되도록 문제를 해결했습니다. 이를 통해 사용자 가
            새로고침을 해도 이전에 입력한 데이터나 설정 값 등이 유지되어
            불편함이 줄어들었습니다.
          </desciptiondiv>
          <dayname>SCSS 문법 도입</dayname>
          <exdiv>
            {`<button style="background-color: #007bff; color: #fff; padding: 0.5rem 1rem; border: none; border-radius: 0.25rem; cursor: pointer;">`}
            <br />
            <stdiv>{`Click me!`}</stdiv>
            <br />
            {`</button>`}
            <br />
            {`<button style="background-color: #6c757d; color: #fff; padding: 0.5rem 1rem; border: none; border-radius: 0.25rem; cursor: pointer;">`}
            <br />
            <stdiv>{`Click me too!`}</stdiv>
            <br />
            {`</button>`}
          </exdiv>
          <buttondiv>
            <i class="fa-solid fa-arrow-down fa-3x"></i>
          </buttondiv>
          <exdiv>
            {`.btn {`} <br />
            {`  background-color: $button-bg-color;`} <br />
            {`  color: $button-color;`} <br />
            {`  padding: $button-padding;`} <br />
            {`border: none;`} <br />
            {`border-radius: 0.25rem;`} <br />
            {` cursor: pointer;`} <br />
            <br />
            {`  &:hover {`} <br />
            {`background-color: darken($button-bg-color, 10%);`} <br />
            {` }`} <br />
            <br />
            {`&.btn-secondary {`} <br />
            {`background-color: #6c757d;`} <br />
            {`   color: #fff;`} <br />
            <br />
            {`  &:hover {`} <br />
            {`background-color: darken(#6c757d, 10%); } } }`}
            <br />
            <br />
            {`      button.btn-primary {`}
            <br />
            {` @extend .btn;`}
            <br />
            {`}`}
            <br />
            {`button.btn-secondary {`}
            <br />
            {`  @extend .btn;}`}
            <br />
            <br />
            <stdiv>{`  <button class="btn-primary">Click me!</button>`}</stdiv>
            <br />
            <stdiv>{`<button class="btn-secondary">Click me too!</button>`}</stdiv>
          </exdiv>
          <desciptiondiv>
            <stdiv>SCSS 문법</stdiv>을 도입하여 CSS를 개편하였고, 이를 통해
            컴포넌트의 양을 줄일 수 있었습니다
          </desciptiondiv>
          <a
            href="https://github.com/codestates-seb/seb41_pre_002"
            target="_blank"
            rel="noreferrer"
          >
            Project보기(Repository)
          </a>
        </Project3div>
      </Projectdiv>
    </>
  );
}

export default Project;

const Project1div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
  a {
    font-size: 1.5rem;
    margin: 50px 0px;
    color: #2997ff;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
  door {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 50px 0px;
    animation: ${({ showimg }) =>
      showimg ? "fadeInLeft 2s" : "fadeInLeft 2s"};
    img {
      height: 200px;
      width: auto;
      border-radius: 15px;
      border: 5px solid rgba(255, 255, 255, 0.8);
      margin: 10px 0px 0px 0px;
    }
    doordesciptiondiv {
      margin: 0px 30px;
      width: 400px;
      text-align: left;
      font-size: 1.5rem;
      line-height: 2.5rem;
      color: #a1a1a6;
      doorstdiv {
        color: white;
      }
    }
  }
  proname {
    font-size: 4rem;
    background-image: linear-gradient(to left, #d9afd9 0%, #97d9e1 100%);
    -webkit-background-clip: text !important;
    color: transparent;
    margin: 50px 0px;
  }
  dayname {
    font-weight: 900;
    font-size: 2rem;
    background-image: linear-gradient(45deg, #93a5cf 0%, #e4efe9 100%);
    -webkit-background-clip: text !important;
    color: transparent;
  }
  daying {
    margin: 40px 0px;
    font-size: 2.5rem;
  }
  desciptiondiv {
    margin: 60px 0px;
    width: 800px;
    text-align: left;
    font-size: 1.5rem;
    line-height: 2.5rem;
    color: #a1a1a6;
    stdiv {
      color: white;
    }
  }
  backdiv {
    width: 600px;
    height: 500px;
    background-image: ${({ background }) => ` url(${background})` || "white"};
    background-size: cover;
    transition: background-image 2s ease-in-out 1s;
    opacity: 0.8;
    border-radius: 15px;
    border: 5px solid rgba(255, 255, 255, 0.8);
    margin: 10% 0px 0px 0px;
  }
`;

const Project3div = styled(Project1div)`
  backdiv {
    width: 650px;
    height: 500px;
    background-image: ${({ background }) => ` url(${background})` || "white"};
    background-size: cover;
    transition: background-image 2s ease-in-out 1s;
    opacity: 1;
    border-radius: 15px;
    border: 5px solid rgba(255, 255, 255, 0.8);
    margin: 10% 0px 0px 0px;
  }
  exdiv {
    margin: 60px 0px;
    width: 800px;
    text-align: left;
    font-size: 1rem;
    line-height: 2.5rem;
    color: #a1a1a6;
    stdiv {
      color: white;
      font-size: 1.5rem;
    }
  }
  buttondiv {
    margin: 50px 0px 0px 0px;
    cursor: pointer;
    animation: showHide 2s linear infinite;
    @keyframes showHide {
      0% {
        opacity: 1;
      }
      50% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  }
`;

const Project2div = styled(Project1div)`
  mapdiv {
    width: 500px;
    height: 500px;
    border-radius: 15px;
    border: 5px solid rgba(255, 255, 255, 0.8);
    margin: 50px 0px;
  }
`;

const StyledText = styled.div`
  height: 500px;
`;

const TextDiv = styled.div`
  font-size: ${({ fontSize }) => `${fontSize}rem`};
  /* position: ${({ position }) => (position ? "relative" : "fixed")}; */
  text-align: center;
  font-weight: bold;
  background-image: linear-gradient(-20deg, #d558c8 0%, #24d292 100%);
  -webkit-background-clip: text !important;
  color: transparent;
  ${({ position }) =>
    position
      ? ""
      : `
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `};
`;

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
        modalname{
           font-size: 2rem;
              font-weight: 800;
             margin:0px 0px 30px 0px;
             background-image: linear-gradient(to left, lightgrey 0%, lightgrey 1%, #e0e0e0 26%, #efefef 48%, #d9d9d9 75%, #bcbcbc 100%);
             -webkit-background-clip: text !important;
             color: transparent;
    }
    display: flex;
    flex-direction: column;
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
  height: auto;
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
