import projectInfo from "./projects.ts";

const category = {
  base: [
    {
      title: "home",
      path: "/",
    },
    {
      title: "about me",
      path: "/aboutme",
    },
    {
      title: "skills",
      path: "/skills",
    },
    {
      title: "projects",
      path: "/projects",
    },
    {
      title: "contact",
      path: "/contact",
    },
  ],
  projects: [
    {
      title: "my portfolio",
      summary: "CRA와 TypeScript를 사용하여 만든 나만의 웹 사이트",
      path: "/projects/my-portfolio",
      route: "my-portfolio",
    },
    {
      title: "covid19 info page",
      summary: "코로나19 Open API를 활용하여 만든 데이터 조회 사이트",
      path: "/projects/covid19-info",
      route: "covid19-info",
    },
    {
      title: "mountain landing page",
      summary: "웹 접근성과 성능을 고려하여 만든 랜딩 페이지",
      path: "/projects/mountain-landing",
      route: "mountain-landing",
    },
  ],
};

export default category;
