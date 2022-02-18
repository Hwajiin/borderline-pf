type Data = {
  title: string;
  desc: string;
  keywords: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: string | null;
};

interface HelmetInfoType {
  home: Data;
  aboutMe: Data;
  skills: Data;
  contact: Data;
  projects: {
    contents: Data;
    project: {
      [key: string]: Data;
    };
  };
}

const helmetInfo: HelmetInfoType = {
  home: {
    title: "Home | 화지인의 프론트엔드 포트폴리오",
    desc: "욕심 많은 프론트엔드 개발자 화지인의 포트폴리오 웹사이트입니다. 도전하는 것을 두려워하지 않고, 새로운 것을 배우는 것을 좋아합니다.",
    keywords:
      "프론트엔드, 포트폴리오, 신입개발자, 개발자, react, typescript, frontend",
    ogTitle: "화지인의 프론트엔드 포트폴리오",
    ogDescription:
      "욕심 많은 프론트엔드 개발자 화지인의 포트폴리오 웹사이트입니다.",
    ogImage: "",
  },

  aboutMe: {
    title: "About Me | Personal Information, Education",
    desc: "채팅창 테마를 꾸미다가 프론트엔드 개발을 시작하게 된 화지인입니다. 2020년 2월 부산대학교 경영학과를 졸업하고, 2021년 1월부터 독학을 시작하였습니다.",
    keywords: "personal-information, education, 독학",
    ogTitle: "About Me | Personal Information, Education",
    ogDescription:
      "채팅창 테마를 꾸미다가 프론트엔드 개발을 시작하게 된 화지인입니다.",
    ogImage: "",
  },

  skills: {
    title: "Skills | HTML/CSS/JavaScript, React, Sass, TypeScript",
    desc: "배우고 싶은 것이 넘치는 프론트엔드 신입 개발자입니다. React와 TypeScript를 주로 사용하고 있으며, three.js를 학습하고 있습니다.",
    keywords: "React, TypeScript, Sass, JavaScript, HTML, CSS",
    ogTitle: "Skills | HTML/CSS/JavaScript, React, Sass, TypeScript",
    ogDescription:
      "배우고 싶은 것이 넘치는 프론트엔드 신입 개발자입니다. React와 TypeScript를 주로 사용하고 있으며, three.js를 학습하고 있습니다.",
    ogImage: "",
  },

  projects: {
    contents: {
      title: "Projects | 프로젝트 목차 소개",
      desc: "프로젝트 목차를 소개합니다. CRA와 TypeScript, Open API 등을 활용하여 만든 포트폴리오를 만나보실 수 있습니다.",
      keywords:
        "frontend, project, portfolio, landing-page, 공공데이터포털, openAPI",
      ogTitle: "Projects | 프로젝트 목차 소개",
      ogDescription:
        "프로젝트 목차를 소개합니다. CRA와 TypeScript, Open API 등을 활용하여 만든 포트폴리오를 만나보실 수 있습니다.",
      ogImage: "",
    },

    project: {
      "my-portfolio": {
        title: "My Portfolio | Projects",
        desc: "신입 프론트엔드 개발자로서 처음 선보이는 포트폴리오 웹 사이트입니다. CRA와 TypeScript를 기반으로 제작된 SPA입니다.",
        keywords:
          "CRA, TypeScript, styled-components, React, fronend, portfolio",
        ogTitle: "My Portfolio | Projects",
        ogDescription:
          "신입 프론트엔드 개발자로서 처음 선보이는 포트폴리오 웹 사이트입니다. CRA와 TypeScript를 기반으로 제작된 SPA입니다.",
        ogImage: "",
      },

      "covid19-info": {
        title: "Covid19 info page | Projects",
        desc: "",
        keywords: "openAPI, CRA, TypeScript, React, fronend, portfolio",
        ogTitle: "Covid19 info page | Projects",
        ogDescription: "",
        ogImage: "",
      },

      "mountain-landing": {
        title: "Mountain Landing Page | Projects",
        desc: "SCSS와 webpack을 학습하며 제작한 반응형 랜딩 페이지입니다. lighthouse의 평가항목인 접근성, 사용성 및 SEO를 고려하여 마크업하였습니다.",
        keywords: "SCSS, webpack, SEO, accesibility, fronend, portfolio",
        ogTitle: "Mountain Landing Page | Projects",
        ogDescription:
          "SCSS와 webpack을 학습하며 제작한 반응형 랜딩 페이지입니다.",
        ogImage: "",
      },
    },
  },

  contact: {
    title: "Contact | email, github, velog, resume",
    desc: "borderline0px@gmail.com으로 연락을 기다리고 있습니다. github와 velog를 통해, 프로젝트의 자세한 내용을 확인해보세요. Notion으로 resume를 관리하고 있습니다.",
    keywords: "contact, email, github, velog, notion, resume",
    ogTitle: "Contact | email, github, velog, resume",
    ogDescription: "borderline0px@gmail.com으로 연락을 기다리고 있습니다.",
    ogImage: "",
  },
};

export default helmetInfo;
