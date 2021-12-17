export type ProjectType = {
  route: string;
  title: string;
  subtitle: string;
  description: string;
  stack: string[];
  thumbnail: string;
  img: string[];
  deployment: string;
  github: string;
  velog: string;
};

const projectInfo = {
  title: "",
  subtitle: "",
  projects: {
    "my-portfolio": {
      route: "/my-portfolio",
      title: "My Portfolio",
      subtitle: "신입 프론트엔드 개발자로서 처음 선보이는 포트폴리오 웹 사이트",
      description:
        "CRA와 TypeScript를 기반으로 제작된 SPA입니다. flexbox와 grid를 사용하여, 각 페이지의 layout을 설계하였습니다. style에 관한 function 및 class를 만들어서 styled-components에 적용하였습니다.",
      stack: ["React(CRA)", "TypeScript", "styled-components"],
      thumbnail: "",
      img: [],
      deployment: "",
      github: "",
      velog: "",
    },
    "covid19-info": {
      route: "/covid19-info",
      title: "Covid19 info page",
      subtitle: "",
      description: "",
      stack: ["React(CRA)", "styled-components", "TypeScript"],
      thumbnail: "",
      img: [],
      deployment: "",
      github: "",
      velog: "",
    },
    "mountain-landing": {
      route: "/mountain-landing",
      title: "Mountain Landing Page",
      subtitle: "SCSS와 webpack을 학습하며 제작한 반응형 랜딩 페이지",
      description:
        "lighthouse의 평가항목인 접근성, 사용성 및 SEO를 고려하여 마크업하였습니다. performance를 향상시키기 위해, 이미지 파일의 크기를 축소하였고, 기기에 따라 반응형으로 대응할 수 있도록 하였습니다.",
      stack: ["HTML", "SCSS", "JavaScript", "webpack"],
      thumbnail: "",
      img: [],
      deployment: `https://mountain-web-ec9dd.web.app`,
      github: "",
      velog: "",
    },
  },
};

export default projectInfo;
