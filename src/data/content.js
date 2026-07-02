import logoProfile from "../assets/1.png";
import logoAmoona from "../assets/2.png";
import logoStack from "../assets/3.png";
import back1 from "../assets/back1.png";
import back2 from "../assets/back2.png";
import back3 from "../assets/back3.png";
import back4 from "../assets/back4.png";
import back5 from "../assets/back5.png";
import back6 from "../assets/back6.png";
import downloadGif from "../assets/download.gif";

export const profile = {
  name: "장경욱",
  role: "Front-end Developer",
  tagline: "사용자의 경험에서 출발해, 완성도로 증명하는 개발자",
  github: "https://github.com/samsamgo",
  blog: "https://samsamgoo.tistory.com/",
};

export const values = [
  {
    icon: "◆",
    title: "사용자 중심",
    body: "개발자로서 사용자의 만족도가 가장 중요하다는 것을 알고 있습니다. 사용자의 요구사항과 피드백을 항상 고려하고, 다양한 관점의 피드백을 받아 세세한 부분까지 다듬으며 만족도를 끌어올립니다.",
  },
  {
    icon: "◇",
    title: "주도적 문제 해결",
    body: "문제를 해결할 때 미래의 확장 가능성까지 고려합니다. 책임감과 주도성을 가지고 스스로 방향을 찾아 개발하는 것을 선호합니다.",
  },
  {
    icon: "◈",
    title: "함께 성장",
    body: "개인의 성장과 팀의 성장을 함께 추구합니다. 팀 안에서 지식을 공유하고 서로의 장점을 살려 보완하며, 더 나은 협력을 이끌어내는 문화를 만들어 갑니다.",
  },
];

export const blogStats = {
  link: "https://samsamgoo.tistory.com/",
  heading: "시간을 뛰어넘는 가치",
  body: "기록은 지나온 길을 되돌아보고 앞으로 나아갈 길을 찾는 데 중요한 역할을 합니다. 기록하지 않으면 얻은 교훈과 배운 것들이 시간과 함께 희미해집니다. 그래서 저는 공부한 것, 부딪힌 문제, 회고를 꾸준히 블로그에 남깁니다.",
  data: [
    {
      id: "후기",
      value: 94,
      color: "#ee609c",
      desc: "프로젝트 회고와 학습 과정의 기록",
    },
    {
      id: "프론트엔드",
      value: 48,
      color: "#b465da",
      desc: "React, Styled-components 등 UI 구축 경험",
    },
    {
      id: "백엔드",
      value: 17,
      color: "#38bdf8",
      desc: "Node.js 기반 서버와 API에 대한 학습",
    },
    {
      id: "ETC",
      value: 4,
      color: "#34d399",
      desc: "기타 개발 지식과 실험적 시도들",
    },
    {
      id: "CS",
      value: 2,
      color: "#fbbf24",
      desc: "자료구조 · 운영체제 · 네트워크 등 전산 기초",
    },
  ],
};

export const skillGroups = [
  {
    key: "Front-end",
    label: "Front-end",
    skills: [
      {
        name: "JavaScript",
        level: 90,
        desc: "HTML 요소를 동적으로 조작하고, 서버와의 비동기 통신을 구현할 수 있습니다.",
      },
      {
        name: "React",
        level: 88,
        desc: "컴포넌트 기반 설계로 재사용성을 높이고, 동적이고 반응적인 웹 애플리케이션을 구현할 수 있습니다.",
      },
      {
        name: "HTML5",
        level: 92,
        desc: "시맨틱 태그를 적극 활용해 가독성과 검색 엔진 최적화(SEO)를 개선할 수 있습니다.",
      },
      {
        name: "CSS3",
        level: 90,
        desc: "Flexbox · Grid 레이아웃으로 반응형 디자인을 구현하고, transition과 animation으로 시각적 완성도를 높입니다.",
      },
      {
        name: "Redux",
        level: 78,
        desc: "store · action · reducer 개념을 이해하고, middleware로 비동기 로직을 처리할 수 있습니다.",
      },
      {
        name: "Axios",
        level: 82,
        desc: "Promise 기반 API 호출을 다루고, Interceptor로 요청과 응답을 일괄 처리할 수 있습니다.",
      },
    ],
  },
  {
    key: "Back-end",
    label: "Back-end",
    skills: [
      {
        name: "Node.js",
        level: 70,
        desc: "모듈 시스템을 이해하고, Express 프레임워크로 웹 애플리케이션을 빠르게 구현할 수 있습니다.",
      },
      {
        name: "GraphQL",
        level: 60,
        desc: "query · mutation · subscription 개념을 이해하고, schema를 작성해 데이터 요청과 응답을 처리할 수 있습니다.",
      },
      {
        name: "MongoDB",
        level: 62,
        desc: "NoSQL 데이터베이스를 구축·관리하고, Mongoose ODM으로 Node.js 애플리케이션과 연결할 수 있습니다.",
      },
      {
        name: "AWS",
        level: 58,
        desc: "EC2, S3 등의 서비스로 웹 애플리케이션을 배포하고 운영할 수 있습니다.",
      },
      {
        name: "JSON Server",
        level: 75,
        desc: "JSON 파일을 데이터베이스처럼 사용해 라우팅과 CRUD를 빠르게 구성할 수 있습니다.",
      },
    ],
  },
  {
    key: "ETC",
    label: "ETC",
    skills: [
      {
        name: "GitHub",
        level: 85,
        desc: "Git 버전 관리와 브랜치 전략, 프로젝트 협업 워크플로를 능숙하게 다룹니다.",
      },
      {
        name: "C++",
        level: 65,
        desc: "ARM 기반 STM32 MCU를 직접 제어하며 마이크로프로세서 개발을 경험했고, 프로그램 경진대회 출전 경험이 있습니다.",
      },
      {
        name: "Python",
        level: 60,
        desc: "시리얼 통신과 디버깅 자동화에 활용하며, 하드웨어와 소프트웨어를 연결하는 도구를 만들어 봤습니다.",
      },
      {
        name: "Figma",
        level: 72,
        desc: "디자인 프로토타입을 제작하고 디자인 요소를 체계적으로 관리할 수 있습니다.",
      },
      {
        name: "Postman",
        level: 80,
        desc: "API 요청을 테스트·디버깅하고, 테스트 자동화와 모니터링으로 개발 생산성을 높입니다.",
      },
      {
        name: "VS Code",
        level: 90,
        desc: "효율적인 코드 작성과 디버깅, Git 통합을 활용한 버전 관리에 익숙합니다.",
      },
    ],
  },
];

export const education = {
  name: "코드스테이츠 (Code States)",
  course: "Frontend Engineering 부트캠프",
  link: "https://www.codestates.com/course/frontend-engineering#curriculum",
  intro:
    "산업 현장에서 필요한 실무 역량을 갖추도록 개인에게 최적화된 교육을 제공하고, 현직 개발자들과 함께 실제 현장에서 쓰이는 기술 스택과 프로세스를 학습하는 교육기관입니다.",
  outcomes: [
    {
      title: "React 생태계",
      body: "React와 다양한 라이브러리로 컴포넌트 기반 설계, 가상 DOM, 상태 관리를 학습하고 프로젝트에 적용했습니다.",
    },
    {
      title: "협업 프로젝트",
      body: "팀원들과 기획부터 배포까지 전 과정을 협업하며 프로젝트를 성공적으로 완수한 경험을 쌓았습니다.",
    },
    {
      title: "협업 도구",
      body: "Notion과 GitHub 등 협업 도구를 적극 활용해 역할 분담과 일정 관리를 효과적으로 수행했습니다.",
    },
    {
      title: "REST API",
      body: "REST API 기반 서버 통신에 능숙해져, 프론트엔드와 백엔드 간 데이터 흐름을 원활하게 구축할 수 있습니다.",
    },
  ],
};

export const projects = [
  {
    name: "Samsamgo's Profile",
    logo: logoProfile,
    period: "2023.02 ~",
    team: "개인 프로젝트",
    summary:
      "이력서를 웹으로 옮긴 개인 포트폴리오입니다. 버전을 거듭하며 스스로 개선해 나가고 있는 프로젝트입니다.",
    highlights: [
      "useState · useEffect와 setInterval을 이용해 배경 이미지가 일정 간격으로 전환되는 갤러리 구현",
      "YouTube API를 활용한 영상 삽입 경험",
      "다양한 화면 크기에 대응하는 반응형 UI 개편",
    ],
    tags: ["React", "Styled-components", "Responsive"],
    links: [{ label: "배포 링크", url: "https://samsamgo.netlify.app/" }],
    gallery: [back1, back2, back3, back4, back5, back6],
  },
  {
    name: "아모나 (AMOONA)",
    logo: logoAmoona,
    period: "2023.01.03 ~ 2023.01.31",
    team: "팀 프로젝트 · 프론트엔드",
    summary:
      "주변 사람들과 함께 운동할 수 있도록, 위치 기반으로 근처 모임 장소를 지도에 나타내는 웹 서비스입니다.",
    highlights: [
      "지도 API에서 반환한 좌표를 Redux Toolkit 스토어에 저장해 위치 선택 · 재참조 기능 구현",
      "Axios로 받아온 Promise 데이터를 map()으로 렌더링해 UI를 동적으로 구성",
    ],
    tags: ["React", "Redux Toolkit", "Map API", "Axios"],
    links: [
      {
        label: "Repository",
        url: "https://github.com/codestates-seb/seb41_main_031",
      },
    ],
    map: true,
  },
  {
    name: "Stack Overflow Clone",
    logo: logoStack,
    period: "2022.12.15 ~ 2023.01.02",
    team: "팀 프로젝트 · 프론트엔드",
    summary:
      "Stack Overflow의 핵심 기능을 클론 코딩하며 협업 프로세스와 상태 관리를 연습한 프로젝트입니다.",
    highlights: [
      "localStorage로 새로고침 후에도 상태가 유지되도록 개선해 사용자 불편을 해소",
      "SCSS 문법(변수 · 중첩 · @extend)을 도입해 스타일 코드를 구조화하고 중복을 감소",
    ],
    tags: ["React", "SCSS", "localStorage"],
    links: [
      {
        label: "Repository",
        url: "https://github.com/codestates-seb/seb41_pre_002",
      },
    ],
    gallery: [downloadGif],
  },
];
