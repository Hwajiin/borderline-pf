import imagePath from "../data/image_path";

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

type ProjectInfoType = {
  title: string;
  subtitle: string;
  projects: {
    [key: string]: ProjectType;
  };
};

const projectInfo: ProjectInfoType = {
  title: "",
  subtitle: "",
  projects: {
    "my-portfolio": {
      route: "/my-portfolio",
      title: "My Portfolio",
      subtitle: "CRA와 TypeScript로 제작된 나만의 포트폴리오 사이트",
      description:
        "CRA와 TypeScript를 기반으로 제작된 SPA입니다. flexbox와 grid를 사용하여, 각 페이지의 layout을 설계하였습니다. style에 관한 function 및 class를 만들어서 styled-components에 적용하였습니다.",
      stack: ["React(CRA)", "TypeScript", "styled-components"],
      thumbnail: imagePath.projects.portfolio.sm,
      img: [
        imagePath.projects.portfolio.sm,
        imagePath.projects.portfolio.md,
        imagePath.projects.portfolio.lg,
      ],
      deployment: "",
      github: `https://github.com/Hwajiin/borderline-pf`,
      velog: "",
    },
    "covid19-info": {
      route: "/covid19-info",
      title: "Covid19 info page",
      subtitle: "Open API로 제작한 코로나19 발생 현황 안내 사이트",
      description:
        "CORS 에러를 해결하기 위해, express로 프록시 서버를 구축하였습니다. 또한, 위치 좌표를 주소로 변환하기 위해 Kakao Map API를 활용하였습니다.",
      stack: [
        "React(CRA)",
        "styled-components",
        "TypeScript",
        "chart.js",
        "express",
      ],
      thumbnail: imagePath.projects.covid19.sm,
      img: [
        imagePath.projects.covid19.sm,
        imagePath.projects.covid19.md,
        imagePath.projects.covid19.lg,
      ],
      deployment: `https://borderline0px-covid19-app.herokuapp.com/`,
      github: `https://github.com/Hwajiin/corona-final-proj`,
      velog: "",
    },
    "mountain-landing": {
      route: "/mountain-landing",
      title: "Mountain Landing Page",
      subtitle: "웹 접근성과 성능을 고려하여 만든 랜딩 페이지",
      description:
        "lighthouse의 평가항목인 접근성, 사용성 및 SEO를 고려하여 마크업하였습니다. 이미지를 기기에 따라 반응형으로 대응하여 performance를 향상시켰습니다.",
      stack: ["HTML", "SCSS", "JavaScript", "webpack"],
      thumbnail: imagePath.projects.mntn.sm,
      img: [
        imagePath.projects.mntn.sm,
        imagePath.projects.mntn.md,
        imagePath.projects.mntn.lg,
      ],
      deployment: `https://mountain-web-ec9dd.web.app`,
      github: `https://github.com/Hwajiin/mountain-web`,
      velog: "",
    },
  },
};

export default projectInfo;
