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
      subtitle: "",
      description: "",
      stack: ["React(CRA)", "TypeScript"],
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
      stack: ["React(CRA)", "Styled-component", "TypeScript"],
      thumbnail: "",
      img: [],
      deployment: "",
      github: "",
      velog: "",
    },
    "mountain-landing": {
      route: "/mountain-landing",
      title: "Mountain Landing Page",
      subtitle: "",
      description: "",
      stack: ["HTML", "SCSS", "JavaScript"],
      thumbnail: "",
      img: [],
      deployment: "",
      github: "",
      velog: "",
    },
  },
};

export default projectInfo;
