import React, { useState, useEffect } from "react";
import styled from "styled-components";
import "animate.css/animate.min.css";

function Education({ scrollPosition }) {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    if (scrollPosition >= 6300 && scrollPosition <= 8400) {
      setShowText(true);
    } else {
      setShowText(false);
    }
    console.log(scrollPosition);
  }, [scrollPosition]);

  return (
    <>
      <Educationdiv id="Education">
        <namediv>코드스테이츠 (Code States)</namediv>
        <img
          src="data:image/png;base64,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"
          alt="코드스테이츠"
        />
        <content>
          <stdiv>코드스테이츠는</stdiv> 산업과 직접적으로 연관된 현장에서 필요한
          실무 역량을 갖출 수 있는 교육을 제공하는 기관입니다. <br></br>
          <stdiv>코드스테이츠는</stdiv> 학생들의 성장을 위해 개인에게 최적화된
          교육을 제공하고, 현직 개발자들과 함께 현장에서 쓰이는 기술 스택 및
          프로세스를 학습할 수 있는 기회를 제공합니다.
        </content>
        <content>코드스테이츠의 교육과정 덕분에,</content>
        <iam>
          {showText && (
            <Exmediv>
              <div1 showText={showText}>
                React와 다양한 라이브러리를 활용하여 컴포넌트 기반 설계, 가상
                돔, 상태 관리 등을 학습하고 프로젝트에 적용할 수 있습니다.
              </div1>
              <div2 showText={showText}>
                팀원들과 함께 기획부터 배포까지 모든 과정을 협업하여 성공적으로
                완료할 수 있는 경험을 쌓았습니다.
              </div2>
              <div3 showText={showText}>
                노션 페이지와 깃허브 등의 협업 툴을 적극 활용하여 팀 내에서 역할
                분담 및 일정 관리를 효과적으로 수행할 수 있습니다.
              </div3>
              <div4 showText={showText}>
                Rest API를 이용한 서버 API 통신에 능숙하여, 프론트엔드와 백엔드
                간의 데이터 흐름을 원활하게 구축할 수 있습니다.
              </div4>
              {console.log(showText)}
            </Exmediv>
          )}
        </iam>

        <a
          href="https://www.codestates.com/course/frontend-engineering#curriculum"
          target="_blank"
          rel="noreferrer"
        >
          커리큘럼 보기
        </a>
      </Educationdiv>
    </>
  );
}

export default Education;

const Exmediv = styled.div`
  height: 700px;
  width: 1000px;
  position: relative;
  display: flex;
  font-size: 1.5rem;
  flex-direction: column;
  div1 {
    position: absolute;
    top: 50px;
    left: 150px;
    width: 600px;
    animation: ${({ showText }) => (!showText ? "fadeInLeft 1s" : "none")};
    visibility: ${({ showText }) => (!showText ? "visible" : "hidden")};
  }
  div2 {
    position: absolute;
    top: 200px;
    left: 220px;
    width: 600px;
    animation: ${({ showText }) => (!showText ? "fadeInLeft 1s" : "none")};
    visibility: ${({ showText }) => (!showText ? "visible" : "hidden")};
    animation-delay: 0.3s; /* 0.5초 대기 후 애니메이션 시작 */
  }

  div3 {
    position: absolute;
    top: 350px;
    left: 290px;
    width: 600px;
    animation: ${({ showText }) => (!showText ? "fadeInLeft 1s" : "none")};
    visibility: ${({ showText }) => (!showText ? "visible" : "hidden")};
    animation-delay: 0.6s; /* 1초 대기 후 애니메이션 시작 */
  }

  div4 {
    position: absolute;
    top: 500px;
    left: 360px;
    width: 600px;
    animation: ${({ showText }) => (!showText ? "fadeInLeft 1s" : "none")};
    visibility: ${({ showText }) => (!showText ? "visible" : "hidden")};
    animation-delay: 0.9s; /* 1.5초 대기 후 애니메이션 시작 */
  }
`;

const Educationdiv = styled.div`
  width: 100%;
  height: auto;
  color: white;
  font-weight: 900;
  padding: 50px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  iam {
    height: 700px;
    width: 1000px;
  }
  namediv {
    font-size: 3rem;
    background-image: linear-gradient(to left, #5ee7df 0%, #b490ca 100%);
    -webkit-background-clip: text !important;
    color: transparent;
  }
  img {
    width: auto;
    height: 200px;
    border-radius: 15px;
    border: 5px solid #5ee7df;
    margin: 50px 0px;
  }
  a {
    font-size: 1.5rem;
    margin: 50px 0px;
    color: #2997ff;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
  content {
    margin: 50px 0px;
    width: 800px;
    text-align: left;
    font-size: 1.5rem;
    line-height: 2.5rem;
    color: #a1a1a6;
    stdiv {
      color: white;
    }
  }
`;
