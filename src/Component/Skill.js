import React, { useState } from "react";
import styled from "styled-components";

function Skill() {
  const [active, setActive] = useState("Front-end");
  const [Skillactive, setSkillActive] = useState("");

  return (
    <>
      <Skilldiv id="Skill">
        {active === "Front-end" && (
          <Showdiv isReqVisible={active === "Front-end"}>
            <namediv>Front end</namediv>
            <ul onMouseLeave={() => setSkillActive("")}>
              <li>
                <lidiv onMouseEnter={() => setSkillActive("Javascript")}>
                  Javascript
                  {Skillactive === "Javascript" && (
                    <modal>
                      Javascript를 활용하여 HTML 요소들을 동적으로 조작하거나,
                      서버와의 비동기 통신을 구현할 수 있습니다.
                    </modal>
                  )}
                </lidiv>
                ,
                <lidiv onMouseEnter={() => setSkillActive("Html5")}>
                  Html5
                  {Skillactive === "Html5" && (
                    <modal>
                      HTML5에서 추가된 시맨틱 태그들을 적극 활용하여 웹 페이지의
                      가독성과 검색 엔진 최적화를 개선할 수 있습니다.
                    </modal>
                  )}
                </lidiv>
                ,
                <lidiv onMouseEnter={() => setSkillActive("CSS3")}>
                  CSS3
                  {Skillactive === "CSS3" && (
                    <modal>
                      CSS3에서 추가된 flexbox나 grid 등의 레이아웃 기술을
                      활용하여 반응형 웹 디자인을 구현할 수 있으며, transition과
                      animation 등의 효과를 이용하여 웹 페이지의 시각적 효과를
                      높일 수 있습니다.{" "}
                    </modal>
                  )}
                </lidiv>
              </li>
              <li>
                <lidiv onMouseEnter={() => setSkillActive("React")}>
                  React
                  {Skillactive === "React" && (
                    <modal>
                      React의 component 기능을 이용하여 코드의 재사용성을
                      높이고, 동적이고 반응적인 웹 애플리케이션을 구현할 수
                      있습니다.
                    </modal>
                  )}
                </lidiv>
              </li>
              <li>
                <lidiv onMouseEnter={() => setSkillActive("Redux")}>
                  Redux
                  {Skillactive === "Redux" && (
                    <modal>
                      Redux의 store, action, reducer 등의 개념을 이해하고,
                      middleware를 사용하여 비동기 로직을 처리할 수 있습니다.
                    </modal>
                  )}
                </lidiv>
              </li>
              <li>
                <lidiv onMouseEnter={() => setSkillActive("Axios")}>
                  Axios
                  {Skillactive === "Axios" && (
                    <modal>
                      Axios의 promise 기반 API 호출 방식을 이해하고,
                      Interceptor를 사용하여 요청과 응답을 처리할 수 있습니다.
                    </modal>
                  )}
                </lidiv>
              </li>
            </ul>
          </Showdiv>
        )}
        {active === "Back-end" && (
          <Showdiv isReqVisible={active === "Back-end"}>
            <namediv>Back-end</namediv>
            <ul onMouseLeave={() => setSkillActive("")}>
              <li onMouseLeave={() => setSkillActive("")}>
                <lidiv onMouseEnter={() => setSkillActive("GraphQL")}>
                  GraphQL
                  {Skillactive === "GraphQL" && (
                    <modal>
                      GraphQL의 query, mutation, subscription 등의 개념을
                      이해하고, schema를 작성하여 데이터 요청과 응답을 처리할 수
                      있습니다.
                    </modal>
                  )}
                </lidiv>
                ,
                <lidiv onMouseEnter={() => setSkillActive("JSON_Server")}>
                  JSON_Server
                  {Skillactive === "JSON_Server" && (
                    <modal>
                      {" "}
                      JSON 파일을 데이터베이스 대신 사용하고, JSON_Server의
                      라우팅 및 기능을 이용하여 데이터를 CRUD(Create, Read,
                      Update, Delete)할 수 있습니다.
                    </modal>
                  )}
                </lidiv>
                ,
                <lidiv onMouseEnter={() => setSkillActive("Node.js")}>
                  Node.js
                  {Skillactive === "Node.js" && (
                    <modal>
                      Node.js의 모듈 시스템을 이해하고, Express 프레임워크를
                      사용하여 웹 애플리케이션을 빠르게 구현할 수 있습니다.
                    </modal>
                  )}
                </lidiv>
              </li>
              <li>
                <lidiv onMouseEnter={() => setSkillActive("AWS")}>
                  AWS
                  {Skillactive === "AWS" && (
                    <modal>
                      AWS EC2, Amazon S3 등의 서비스를 사용하여 웹
                      애플리케이션을 배포하고 관리할 수 있습니다.
                    </modal>
                  )}
                </lidiv>
              </li>
              <li>
                <lidiv onMouseEnter={() => setSkillActive("MongoDB")}>
                  MongoDB
                  {Skillactive === "MongoDB" && (
                    <modal>
                      MongoDB를 사용하여 NoSQL 데이터베이스를 구현하고 관리할 수
                      있고, Mongoose ODM(Object Data Modeling)을 사용하여
                      MongoDB와 Node.js 애플리케이션을 연결할 수 있습니다.
                    </modal>
                  )}
                </lidiv>
              </li>
            </ul>
          </Showdiv>
        )}
        {active === "ETC" && (
          <Showdiv isReqVisible={active === "ETC"}>
            <namediv>ETC</namediv>
            <ul onMouseLeave={() => setSkillActive("")}>
              <li onMouseLeave={() => setSkillActive("")}>
                <lidiv
                  onMouseEnter={() => setSkillActive("Visual Studio Code")}
                >
                  Visual Studio Code
                  {Skillactive === "Visual Studio Code" && (
                    <modal>
                      Visual Studio Code를 사용하여 효율적으로 코드를 작성하고
                      디버깅하며, Git과의 통합을 통해 버전 관리를 용이하게 할 수
                      있습니다.
                    </modal>
                  )}
                </lidiv>
              </li>
              <li>
                <lidiv onMouseEnter={() => setSkillActive("GitHub")}>
                  GitHub
                  {Skillactive === "GitHub" && (
                    <modal>
                      GitHub를 사용하여 Git 버전 관리와 프로젝트 협업을 수행할
                      수 있습니다.
                    </modal>
                  )}
                </lidiv>
              </li>
              <li>
                <lidiv onMouseEnter={() => setSkillActive("Postman")}>
                  Postman
                  {Skillactive === "Postman" && (
                    <modal>
                      Postman을 사용하여 API 요청을 테스트하고 디버깅할 수
                      있습니다. API 테스트를 자동화하거나 모니터링할 수 있는
                      기능을 활용하여 개발 생산성을 높일 수 있습니다.
                    </modal>
                  )}
                </lidiv>
                ,
                <lidiv onMouseEnter={() => setSkillActive("Figma")}>
                  Figma
                  {Skillactive === "Figma" && (
                    <modal>
                      Figma를 사용하여 디자인 프로토타입을 제작하고, 디자인
                      요소를 관리할 수 있습니다.
                    </modal>
                  )}
                </lidiv>
              </li>
              <li>
                <lidiv onMouseEnter={() => setSkillActive("C++")}>
                  C++
                  {Skillactive === "C++" && (
                    <modal>
                      ARM 기반 STM32 MCU를 C++로 직접 제어하며 마이크로프로세서
                      개발을 경험했고, 해당 프로젝트로 프로그램 경진대회에도
                      출전한 경험이 있습니다.
                    </modal>
                  )}
                </lidiv>
                ,
                <lidiv onMouseEnter={() => setSkillActive("Python")}>
                  Python
                  {Skillactive === "Python" && (
                    <modal>
                      Python은 시리얼 통신 및 디버깅 자동화에 활용하며
                      하드웨어와 소프트웨어 간의 연결을 구현한 적이 있습니다
                    </modal>
                  )}
                </lidiv>
              </li>
            </ul>
          </Showdiv>
        )}

        <Seldiv>
          <boxdiv
            className={"Front-end" === active ? "active" : ""}
            onClick={() => setActive("Front-end")}
          >
            <span>Front-end</span>
          </boxdiv>
          <boxdiv
            className={"Back-end" === active ? "active" : ""}
            onClick={() => setActive("Back-end")}
          >
            <span>Back-end</span>
          </boxdiv>
          <boxdiv
            className={"ETC" === active ? "active" : ""}
            onClick={() => setActive("ETC")}
          >
            <span>ETC</span>
          </boxdiv>
        </Seldiv>
      </Skilldiv>
    </>
  );
}

export default Skill;

const Showdiv = styled.div`
  display: flex;
  width: 700px;
  font-size: 2.5rem;
  font-weight: 600;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  letter-spacing: 0.3rem;
  namediv {
    font-weight: 700;
    font-size: 4rem;
  }
  ul {
    margin: 30px 0px;
    line-height: 9rem;
    li {
      margin: 15px 0px;
      lidiv {
        position: relative;
        &:hover {
          font-weight: 700;
        }
        modal {
          position: absolute;
          display: flex;
          width: 550px;
          height: auto;
          font-weight: 600;
          color: #a1a1aa
          margin-right: auto;
          top: 60px;
          font-size: 1rem;
          line-height: 1.5rem;
        }
      }
    }
  }
  animation: ${({ isReqVisible }) =>
    isReqVisible ? "fadeInLeft 2s" : "fadeOut 2s"};
`;

const Seldiv = styled.div`
  margin-left: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  boxdiv {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    width: 160px;
    border-radius: 15px;
    border: 3px solid rgba(255, 255, 255, 0.8);
    margin: 20px 10px;
    span {
      font-size: 1rem;
      color: white;
    }
    &:hover {
      font-weight: bold;
      background-color: rgba(220, 220, 255, 0.6);
    }
    &.active {
      font-weight: bold;
      background-color: rgba(220, 220, 255, 0.6);
      border: 4px solid rgba(255, 255, 255, 0.8);
      span {
        font-size: 1.2rem;
      }
    }
  }
`;

const Skilldiv = styled.div`
  width: 100%;
  height: 1300px;
  color: white;
  padding: 50px 0px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
