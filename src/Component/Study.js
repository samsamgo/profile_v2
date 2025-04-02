import React from "react";
import { ResponsivePie } from "@nivo/pie";
import styled from "styled-components";
import data from "../Asset/data";

function Study() {
  return (
    <>
      <Studydiv id="Study">
        <namediv>
          개인 기술
          <br /> 회고 블로그
        </namediv>
        <study>
          <StyledPieChart
            data={data.pie}
            margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
            innerRadius={0.5}
            padAngle={0.7}
            cornerRadius={3}
            activeOuterRadiusOffset={8}
            borderWidth={1}
            borderColor={{
              from: "color",
              modifiers: [["darker", 0.2]],
            }}
            arcLinkLabelsSkipAngle={10}
            arcLinkLabelsTextColor="#333333"
            arcLinkLabelsThickness={2}
            arcLinkLabelsColor={{ from: "color" }}
            arcLabelsSkipAngle={10}
            arcLabelsTextColor={{
              from: "color",
              modifiers: [["darker", 2]],
            }}
            defs={[
              {
                id: "dots",
                type: "patternDots",
                background: "inherit",
                color: "rgba(255, 255, 255, 0.3)",
                size: 4,
                padding: 1,
                stagger: true,
              },
              {
                id: "lines",
                type: "patternLines",
                background: "inherit",
                color: "rgba(255, 255, 255, 0.3)",
                rotation: -45,
                lineWidth: 6,
                spacing: 10,
              },
            ]}
            fill={[
              {
                match: {
                  id: "프론트엔드",
                },
                id: "dots",
              },
              {
                match: {
                  id: "백엔드",
                },
                id: "dots",
              },
              {
                match: {
                  id: "후기",
                },
                id: "dots",
              },
              {
                match: {
                  id: "CS",
                },
                id: "lines",
              },
              {
                match: {
                  id: "ETC",
                },
                id: "lines",
              },
              {
                match: {
                  id: "lisp",
                },
                id: "lines",
              },
              {
                match: {
                  id: "elixir",
                },
                id: "lines",
              },
              {
                match: {
                  id: "javascript",
                },
                id: "lines",
              },
            ]}
            legends={[
              {
                anchor: "bottom",
                direction: "row",
                justify: false,
                translateX: 0,
                translateY: 56,
                itemsSpacing: 0,
                itemWidth: 100,
                itemHeight: 18,
                itemTextColor: "#999",
                itemDirection: "left-to-right",
                itemOpacity: 1,
                symbolSize: 18,
                symbolShape: "circle",
                effects: [
                  {
                    on: "hover",
                    style: {
                      itemTextColor: "#000",
                    },
                  },
                ],
              },
            ]}
            tooltip={({ datum }) => (
              <CustomTooltip>
                <strong>{datum.id}</strong>
                <br />
                {getTooltipText(datum.id)}
              </CustomTooltip>
            )}
          />
        </study>
        <contentname>시간을 뛰어넘는 가치</contentname>
        <content>
          기록은 우리가 지나온 길을 되돌아보며,
          <br /> 그리고 앞으로 나아갈 길을 찾아가는데 중요한 역할을 합니다.
          <br /> 우리가 기록을 하지 않는다면,
          <br /> 얻은 교훈과 배운 것들이 시간에 따라 희미해져 사라질 수
          있습니다.
        </content>
        <a
          href="https://samsamgoo.tistory.com/"
          target="_blank"
          rel="noreferrer"
        >
          블로그 보기
        </a>
      </Studydiv>
    </>
  );
}

export default Study;

const getTooltipText = (id) => {
  switch (id) {
    case "프론트엔드":
      return "React와 Styled-components를 이용한 UI 구축 경험";
    case "백엔드":
      return "Node.js와 Spring을 활용한 서버 개발 및 API 구축";
    case "후기":
      return "프로젝트 후 회고와 문서화";
    case "CS":
      return "자료구조, 운영체제, 네트워크 등 전산 기초 학습";
    case "ETC":
      return "기타 개발 지식과 실험적 시도들";
    case "lisp":
      return "함수형 프로그래밍에 대한 탐구";
    case "elixir":
      return "동시성 프로그래밍에 대한 실험";
    case "javascript":
      return "JavaScript의 언어적 깊이에 대한 기록";
    default:
      return "기록 없음";
  }
};

const CustomTooltip = styled.div`
  background: rgba(30, 30, 30, 0.95);
  color: white;
  padding: 12px 18px;
  border-radius: 8px;
  font-size: 1rem;
  line-height: 1.4rem;
  max-width: 250px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.4);
`;

const StyledPieChart = styled(ResponsivePie)`
  height: 400px;
  margin: 50px;
`;

const Studydiv = styled.div`
  width: 100%;
  height: auto;
  color: white;
  padding: 50px 0px;
  display: flex;
  flex-direction: column;
  font-size: 5rem;
  font-weight: 900;
  justify-content: center;
  align-items: center;
  study {
    width: 100%;
    height: 800px;
  }
  namediv {
    text-align: center;
    background-image: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
    background-position: 0 0, 10px 10;
    -webkit-background-clip: text !important;
    color: transparent;
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
  contentname {
    font-size: 4rem;
    margin: 50px 0px;
    background-image: linear-gradient(to right, #fa709a 0%, #fee140 100%);
    -webkit-background-clip: text !important;
    color: transparent;
  }
  content {
    width: 1000px;
    text-align: center;
    font-size: 2rem;
  }
`;
