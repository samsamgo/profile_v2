import React from "react";
import styled from "styled-components";

function Intro({ scrollPosition }) {
  return (
    <>
      <Introdiv id="Introduction">
        <Contentdiv opacity={(scrollPosition - 2200) / 1000}>
          개발자로서 사용자의 만족도가 가장 중요하다는 것을 인지하고 있으며,
          이를 실현하기 위해 사용자의 요구사항과
          <stdiv1>피드백</stdiv1>을 항상 고려합니다. 또한, 다양한 관점에서의
          피드백을 받아 세세한 부분까지 신경쓰며 사용자의
          <stdiv1>만족도를</stdiv1> 고려합니다.
        </Contentdiv>
        <Contentdiv opacity={(scrollPosition - 2450) / 1000}>
          저는 문제 해결에 있어서 <stdiv1>미래의 가능성을</stdiv1>
          고려하며, 책임감과 주도성을 가지고 <stdiv1>주도적</stdiv1>으로
          개발하는 것을 선호합니다.
        </Contentdiv>
        <Contentdiv opacity={(scrollPosition - 2600) / 1000}>
          저는 개인의 성장과 함께 팀의 성장을 위해 스스로의 역량을 계속해서{" "}
          향상시키고, 팀 내에서 지식을 공유하며
          <stdiv1>함께</stdiv1> 발전할 수 있는 문화를 만들어 나가고자 합니다.
          이러한 노력을 통해, 팀 내에서 각자의 장점을 살리고 서로 보완하며, 더
          나은 <stdiv1>협력</stdiv1>을 이끌어내고자 합니다.
        </Contentdiv>
      </Introdiv>
    </>
  );
}

export default Intro;

const Contentdiv = styled.div`
  width: 1000px;
  font-size: 2rem;
  color: white;
  margin: 70px 0px;
  font-weight: 900;
  opacity: ${({ opacity }) => opacity || 1};
  stdiv1 {
    font-size: 2.5rem;
    color: rgba(1, 143, 244, 0.6);
    font-weight: bolder;
  }
`;

const Introdiv = styled.div`
  width: 100%;
  height: auto;
  color: white;
  padding: 50px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
