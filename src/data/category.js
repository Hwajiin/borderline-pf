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
      summary: "CRA와 TypeScript로 제작된 나만의 포트폴리오 사이트",
      path: "/projects/my-portfolio",
      route: "my-portfolio",
    },
    {
      title: "covid19 info page",
      summary: "Open API로 제작한 코로나19 발생 현황 안내 사이트",
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
