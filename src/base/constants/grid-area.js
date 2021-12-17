const gridArea = {
  aboutme: {
    areaName: [],
  },
  skills: {
    areaName: ["html/css/js", "react", "sass", "typescript"],
    sm: {
      columns: `1fr`,
      template: `"base" "react" "sass" "typescript"`,
    },
    lg: {
      columns: `repeat(4, 1fr)`,
      template: `
        "base react sass typescript"
        "base react sass typescript"
        "base react sass typescript"
      `,
    },
  },
  contact: {
    areaName: ["email", "github", "velog", "resume"],
    sm: {
      columns: `1fr`,
      template: `"email" "github" "velog" "resume"`,
    },
    lg: {
      columns: `repeat(6, 1fr)`,
      template: `
                "email email github github github github"
                "email email github github github github"
                "email email velog velog resume resume"
                "email email velog velog resume resume"
            `,
    },
  },
};

export default gridArea;
